import Form from "./Form";
import { db, storage } from "@/firebaseConfig.ts";
import { collection, doc, getDocs, setDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { generateApplicationId } from "@/utils/generateApplicationId";
import { useState } from "react";

const recruitmentFields = [
  { name: "name", label: "이름", type: "text" },
  { name: "email", label: "이메일", type: "email" },
];

const jobOptions = ["개발", "디자인", "기획", "마케팅"]; // 지원 가능한 직군 리스트
const MAX_UPLOAD_SIZE_MB = 30; // 💡 최대 업로드 가능 용량 (MB)

const RecruitmentForm = () => {
  const [selectedJob, setSelectedJob] = useState<string>("개발"); // 기본값: 개발
  const [totalFileSize, setTotalFileSize] = useState<number>(0); // 💾 현재 총 업로드된 파일 크기 (MB)

  // **파일 크기 계산 함수**
  const calculateTotalFileSize = (files: FileList | undefined) => {
    if (!files) return 0;
    let totalSize = 0;
    for (let i = 0; i < files.length; i++) {
      totalSize += files[i].size; // Byte 단위
    }
    return totalSize / (1024 * 1024); // MB로 변환
  };

  const updateTotalFileSize = () => {
    let updatedSize = 0;
    document.querySelectorAll("input[type='file']").forEach((input) => {
        const fileInput = input as HTMLInputElement;
        if (fileInput.files) {
            updatedSize += calculateTotalFileSize(fileInput.files);
        }
    });

    setTotalFileSize(updatedSize); // 💡 현재 남아있는 파일 크기로 업데이트
  };

  // **파일 크기 업데이트 핸들러**
  const handleFileChange = (_event: React.ChangeEvent<HTMLInputElement>) => {
      updateTotalFileSize(); // 💡 파일 추가 시에도 전체 파일 크기를 다시 계산
  };

  // **파일 입력 폼 삭제 시 파일 크기 업데이트**
  const handleRemoveFile = (removeFunc: (index: number) => void, index: number) => {
      removeFunc(index); // 기존 파일 입력 필드 삭제
      setTimeout(updateTotalFileSize, 0); // 💡 삭제 후 파일 크기 즉시 업데이트
  };


  // **파일 업로드 함수**
  const uploadFileToStorage = async (file: File, path: string): Promise<string> => {
    if (!file) return "";
    const fileRef = ref(storage, path); // Storage 경로 지정
    await uploadBytes(fileRef, file); // Storage에 업로드
    return await getDownloadURL(fileRef); // 다운로드 URL 가져오기
  };

  const handleRecruitmentSubmit = async (data: any) => {
    if (totalFileSize > MAX_UPLOAD_SIZE_MB) {
      alert(`파일 용량 초과! 최대 ${MAX_UPLOAD_SIZE_MB}MB까지 업로드 가능합니다.`);
      return;
    }

    try {
      console.log("채용 지원 데이터:", data);

      // Firestore에서 전체 지원자 수 조회
      const applicationsRef = collection(db, "applications");
      const querySnapshot = await getDocs(applicationsRef);
      const order = querySnapshot.size + 1; // 전체 지원자 수 + 1 (새로운 순번)

      // 지원서 ID 생성
      const applicationId = generateApplicationId(selectedJob, order);

      // **Storage에 파일 업로드 후 URL 가져오기**
      const formattedAwards = await Promise.all(
        data.awards?.map(async (award: any, index: number) => {
          const proofFile = award.proof[0]; // 파일 객체
          const proofUrl = proofFile
            ? await uploadFileToStorage(proofFile, `applications/${applicationId}/awards/award_${index}_${proofFile.name}`)
            : "";
          return {
            title: award.title,
            proofUrl,
          };
        }) || []
      );

      const formattedProjects = await Promise.all(
        data.projects?.map(async (project: any, index: number) => {
          const projectFile = project.file[0]; // 파일 객체
          const fileUrl = projectFile
            ? await uploadFileToStorage(projectFile, `applications/${applicationId}/projects/project_${index}_${projectFile.name}`)
            : "";
          return {
            title: project.title,
            fileUrl,
          };
        }) || []
      );

      // Firestore에 저장할 데이터
      const applicationData = {
        id: applicationId,
        jobType: selectedJob,
        order,
        name: data.name,
        email: data.email,
        awards: formattedAwards,
        projects: formattedProjects,
        createdAt: new Date(),
      };

      // Firestore에 저장
      await setDoc(doc(db, "applications", applicationId), applicationData);

      console.log("지원서 제출 완료! ID:", applicationId);
      alert("지원서가 성공적으로 제출되었습니다!");

      // 제출 후 파일 크기 초기화
      setTotalFileSize(0);
    } catch (error) {
      console.error("지원서 제출 실패:", error);
    }
  };

  return (
    <div>
      <h1>지원서 제출</h1>

      {/* 직군 선택 */}
      <label>지원 직군 선택: </label>
      <select value={selectedJob} onChange={(e) => setSelectedJob(e.target.value)}>
        {jobOptions.map((job) => (
          <option key={job} value={job}>
            {job}
          </option>
        ))}
      </select>

      {/* 총 업로드된 파일 용량 표시 */}
      <p>📂 현재 파일 용량: <strong>{totalFileSize.toFixed(2)} MB</strong> / {MAX_UPLOAD_SIZE_MB} MB</p>

      {/* 지원서 폼 */}
      <Form fields={recruitmentFields} onSubmit={handleRecruitmentSubmit} onFileChange={handleFileChange} onRemoveFile={handleRemoveFile} />
    </div>
  );
};

export default RecruitmentForm;
