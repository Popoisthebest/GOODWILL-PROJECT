import Form from "./Form";
import { db, storage } from "/src/firebaseConfig.ts";
import { collection, doc, getDocs, setDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { generateApplicationId } from "/src/utils/generateApplicationId";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const recruitmentFields = [
  { name: "name", label: "이름", type: "text" },
  { name: "email", label: "이메일", type: "email" },
];

const jobCollections: { [key: string]: string } = {
  "Business & Sales": "리틀 정주형 전형",
  "Engineering": "리틀 빌게이츠 전형",
  "Design & Media": "리틀 도널드 노먼 전형",
};

const MAX_UPLOAD_SIZE_MB = 30;
const APPLICATION_STATUSES = ["대기", "승인", "반려"];

const RecruitmentForm = () => {
  const [totalFileSize, setTotalFileSize] = useState<number>(0);
  const [adminCode, setAdminCode] = useState("");
  const navigate = useNavigate();
  const ADMIN_ACCESS_CODE = "2402010116e8485";

  const handleAdminAccess = () => {
    if (adminCode === ADMIN_ACCESS_CODE) {
      navigate("/admin");
    } else {
      alert("잘못된 코드입니다. 다시 입력해주세요.");
    }
  };

  const uploadFileToStorage = async (file: File, path: string): Promise<string> => {
    if (!file) return "";
    const fileRef = ref(storage, path);
    await uploadBytes(fileRef, file);
    return await getDownloadURL(fileRef);
  };

  const handleRecruitmentSubmit = async (data: any) => {
    if (totalFileSize > MAX_UPLOAD_SIZE_MB) {
      alert(`파일 용량 초과! 최대 ${MAX_UPLOAD_SIZE_MB}MB까지 업로드 가능합니다.`);
      return;
    }

    try {
      console.log("채용 지원 데이터:", data);
      const applicationsRef = collection(db, "applications");
      const querySnapshot = await getDocs(applicationsRef);
      const order = querySnapshot.size + 1;
      const applicationId = generateApplicationId(data.jobType, order);
      const selectedCollection = jobCollections[data.jobType] || "기타";

      const formattedExtraPortfolio = await Promise.all(
        data.extraPortfolio?.map(async (portfolio: any, index: number) => {
          const file = portfolio.file[0];
          const fileUrl = file
            ? await uploadFileToStorage(file, `applications/${applicationId}/extraPortfolio/extra_${index}_${file.name}`)
            : "";
          return {
            fileUrl,
          };
        }) || []
      );

      const applicationData = {
        id: applicationId,
        jobType: data.jobType,
        role: data.role,
        order,
        name: data.name,
        email: data.email,
        isSpecialApplication: data.isPortfolioEnabled || false,
        extraPortfolio: formattedExtraPortfolio,
        status: "대기", // 기본 상태 "대기"
        createdAt: new Date(),
      };

      await setDoc(doc(db, selectedCollection, applicationId), applicationData);
      console.log("지원서 제출 완료! ID:", applicationId);
      alert("지원서가 성공적으로 제출되었습니다!");
      setTotalFileSize(0);
    } catch (error) {
      console.error("지원서 제출 실패:", error);
    }
  };

  return (
    <div>
      <h1>지원서 제출</h1>

      <Form 
        fields={recruitmentFields} 
        onSubmit={handleRecruitmentSubmit} 
        onFileChange={() => {}} 
        onRemoveFile={() => {}} 
      />

      <p>📂 현재 파일 용량: <strong>{totalFileSize.toFixed(2)} MB</strong> / {MAX_UPLOAD_SIZE_MB} MB</p>

      <div>
        <h2>관리자 페이지</h2>
        <input
          type="password"
          placeholder="관리자 코드 입력"
          value={adminCode}
          onChange={(e) => setAdminCode(e.target.value)}
        />
        <button onClick={handleAdminAccess}>관리자 페이지 이동</button>
      </div>
    </div>
  );
};

export default RecruitmentForm;
