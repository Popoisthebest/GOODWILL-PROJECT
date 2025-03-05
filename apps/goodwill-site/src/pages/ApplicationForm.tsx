import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import DefaultLayout from "../layouts/DefaultLayout.tsx";
import RoundedCheckbox from "../components/ApplicationForm/RoundedCheckbox/RoundedCheckbox.tsx";
import { useForm, SubmitHandler } from "react-hook-form";
import Cookies from "js-cookie";
// import { isEmailVerified } from "../firebase/auth"; // 🔥 인증 여부 확인 함수 가져오기
import {
  ApplicationInformation,
  BasicInformation,
  BasicInformationContainer,
  BasicInformationText,
  emailButtonDiv,
  emailDiv,
  FormContainer,
  formContainerDiv,
  FormTitle,
  greyLine,
  RoleName,
  summitButton,
} from "../components/ApplicationForm/ApplicationForm.style.ts";
import ApplicationFormTextInput from "../components/ApplicationForm/ApplicationFormTextInput.tsx";
import DocAdd from "../components/ApplicationForm/DocAdd/DocAdd.tsx";
import SpecialDocAdd from "../components/ApplicationForm/SpecialFileUpload/SpecialDoc.tsx";
import EmailAuthenticationButton from "../components/ApplicationForm/EmailAuthentication/EmailAuthenticationButton.tsx";
import AgreeButton from "../components/ApplicationForm/AgreeButton/AgreeButton.tsx";
import { submitApplication } from "../hooks/submitApplication.ts"; // Firestore 저장 함수 불러오기
import { uploadFileToStorage } from "../hooks/uploadFileToStorage.ts";
import { getApplicationCount } from "../hooks/getApplicationCount.ts";
import { generateApplicationId } from "../hooks/generateApplicationId.ts";

interface FormValues {
  name: string;
  studentId: string;
  email: string;
  phone: string;
  coverLetter: string;
  questions: string;
}

interface UploadedFile {
  title: string;
  file: File;
}

const getLittleProgramName = (jobGroup: string) => {
  const jobGroupToProgramMap: Record<string, string> = {
    "Business & Marketing": "리틀 정주영 전형",
    Design: "리틀 도널드 노먼 전형",
    Engineering: "리틀 빌게이츠 전형",
    Content: "리틀 도널드 노먼 전형",
  };
  return jobGroupToProgramMap[jobGroup] || "리틀 특별 전형"; // 기본값
};

const ApplicationFormPage = () => {
  const location = useLocation();
  const roleName = location.state?.roleName || "직군 선택 없음";
  const jobGroup = location.state?.jobGroup; // 기본 jobGroup 설정
  const littleProgramName = getLittleProgramName(jobGroup);

  const [isChecked, setIsChecked] = useState(false);
  const [allChecked, setAllChecked] = useState(false);
  const [requiredChecked, setRequiredChecked] = useState(false);
  const [optionalChecked, setOptionalChecked] = useState(false);

  useEffect(() => {
    const savedContestFiles = Cookies.get("contestFiles");
    const savedPortfolioFiles = Cookies.get("portfolioFiles");
    const savedSpecialFiles = Cookies.get("specialFiles");

    const parseFiles = (savedFiles: string | undefined) => {
      if (!savedFiles) return [];

      const parsedFiles = JSON.parse(savedFiles);
      return parsedFiles.map((file: any) => ({
        ...file,
        file: file.fileName
          ? new File([], file.fileName, { type: "application/octet-stream" }) // ✅ File 객체 변환
          : undefined,
      }));
    };

    // console.log("불러온 contestFiles:", parseFiles(savedContestFiles));
    // console.log("불러온 portfolioFiles:", parseFiles(savedPortfolioFiles));
    // console.log("불러온 specialFiles:", parseFiles(savedSpecialFiles));
  }, []);

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<FormValues>();

  const emailValue = watch("email");

  useEffect(() => {
    const savedData = Cookies.get("applicationForm");
    if (savedData) {
      try {
        const parsedData = JSON.parse(savedData);
        Object.keys(parsedData).forEach((key) => {
          setValue(key as keyof FormValues, parsedData[key]);
        });
      } catch (error) {
        console.error("쿠키 데이터 파싱 오류:", error);
      }
    }
  }, [setValue]);

  useEffect(() => {
    const subscription = watch((value) => {
      Cookies.set("applicationForm", JSON.stringify(value), { expires: 1 });
    });
    return () => subscription.unsubscribe();
  }, [watch]);

  // ✅ 전체 동의 체크 시 모든 체크박스 변경
  const handleAllCheck = () => {
    const newCheckState = !allChecked;
    setAllChecked(newCheckState);
    setRequiredChecked(newCheckState);
    setOptionalChecked(newCheckState);
  };

  // ✅ 필수 동의 체크박스 변경 시 처리
  const handleRequiredCheck = () => {
    setRequiredChecked((prev) => {
      const newRequiredState = !prev;
      if (!newRequiredState || !optionalChecked) {
        setAllChecked(false);
      } else {
        setAllChecked(true);
      }
      return newRequiredState;
    });
  };

  // ✅ 선택 동의 체크박스 변경 시 처리
  const handleOptionalCheck = () => {
    setOptionalChecked((prev) => {
      const newOptionalState = !prev;
      if (!newOptionalState || !requiredChecked) {
        setAllChecked(false);
      } else {
        setAllChecked(true);
      }
      return newOptionalState;
    });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    try {
      if (!requiredChecked) {
        alert("필수 동의 항목을 체크해야 지원서를 제출할 수 있습니다.");
        return;
      }

      if (!data.email) {
        alert("이메일을 입력해주세요.");
        return;
      }

      console.log(`잡것들: ${jobGroup}`);
      const applicationCount = await getApplicationCount(jobGroup);
      const userId = generateApplicationId(jobGroup, applicationCount);
      console.log("생성된 사용자 ID:", userId);

      // ✅ 파일 업로드 진행 (파일이 없으면 업로드 스킵)
      const uploadFiles = async (files: UploadedFile[], fileType: string) => {
        return await Promise.all(
          files.map(async (file) => {
            console.log(`📤 업로드할 파일 확인:`, file);
            console.log(`📌 file.file의 타입:`, typeof file.file);
            console.log(
              `📌 file.file의 데이터 구조:`,
              JSON.stringify(file.file),
            );
            console.log(
              `📌 file.file instanceof File:`,
              file.file instanceof File,
            );

            if (
              !file.file ||
              Object.keys(file.file).length === 0 ||
              !(file.file instanceof File)
            ) {
              console.warn(`⚠️ 파일 업로드 스킵됨 (잘못된 파일 데이터):`, file);
              return null;
            }
            return {
              title: file.title,
              fileUrl: await uploadFileToStorage(
                userId,
                file.file,
                fileType,
                file.file.name, // ✅ 올바른 파일명 전달
              ),
            };
          }),
        ).then((results) => results.filter((file) => file !== null));
      };

      const contestFiles = JSON.parse(Cookies.get("contestFiles") || "[]");
      const portfolioFiles = JSON.parse(Cookies.get("portfolioFiles") || "[]");
      const specialApplicationFile = JSON.parse(
        Cookies.get("specialFiles") || "null",
      );

      const uploadedContestFiles = await uploadFiles(contestFiles, "contest");
      const uploadedPortfolioFiles = await uploadFiles(
        portfolioFiles,
        "portfolio",
      );
      const uploadedSpecialFile = specialApplicationFile
        ? await uploadFileToStorage(
            userId,
            specialApplicationFile.file,
            "specialApplication",
            File.name,
          )
        : null;

      // ✅ 3️⃣ Firestore에 저장할 데이터
      const formattedData = {
        student_id: Number(data.studentId),
        name: data.name,
        email: data.email,
        user_id: userId,
        contact: data.phone,
        self_introduction: data.coverLetter,
        questions: data.questions || null,
        application_status: "Pending",
        timestamp: new Date().toISOString(),
        special_application: uploadedSpecialFile
          ? { type: jobGroup, proof_file: uploadedSpecialFile }
          : null,
        additional_documents: uploadedContestFiles.concat(
          uploadedPortfolioFiles,
        ),
      };

      await submitApplication(formattedData, jobGroup);

      // ✅ 4️⃣ 제출 완료 후 쿠키 삭제
      Cookies.remove("applicationForm");
      Cookies.remove("contestFiles");
      Cookies.remove("portfolioFiles");
      Cookies.remove("specialFiles");

      alert("지원서 제출이 완료되었습니다!");
    } catch (error) {
      console.error("지원서 제출 실패:", error);
      alert("지원서 제출 중 오류가 발생했습니다.");
    }
  };

  return (
    <DefaultLayout>
      <div css={formContainerDiv}>
        <div css={FormContainer}>
          <div>
            <div css={FormTitle}>지원서 작성하기</div>
            <div css={RoleName}>{roleName}</div>
            <div css={{ height: "48px" }}></div>
            <div css={ApplicationInformation}>지원자 정보</div>
            <div css={{ height: "32px" }}></div>
            <div css={BasicInformationContainer}>
              <div css={BasicInformation}>기본 정보</div>
              <div css={{ width: "10px" }}></div>
              <div css={BasicInformationText}>필수</div>
            </div>
            <div css={{ height: "32px" }}></div>
            <form>
              <ApplicationFormTextInput
                name="name"
                placeholder="이름"
                register={register}
                watch={watch}
                errorMessage={errors.name?.message}
              />
              <div css={{ height: "24px" }}></div>
              <ApplicationFormTextInput
                name="studentId"
                placeholder="학번"
                inputType="text"
                register={register}
                watch={watch}
                errorMessage={errors.studentId?.message}
              />{" "}
              <div css={{ height: "24px" }}></div>
              <div css={emailDiv}>
                <ApplicationFormTextInput
                  name="email"
                  placeholder="이메일"
                  inputType="text"
                  register={register}
                  watch={watch}
                  errorMessage={errors.email?.message}
                />{" "}
                <div css={{ height: "11px" }}></div>
                <div css={emailButtonDiv}>
                  <EmailAuthenticationButton email={emailValue} />
                </div>
              </div>
              <div css={{ height: "60px" }}></div>
              <ApplicationFormTextInput
                name="phone"
                placeholder="전화번호 (010-0000-0000)"
                inputType="text"
                register={register}
                watch={watch}
                errorMessage={errors.phone?.message}
              />
            </form>
            <div css={{ height: "48px" }}></div>
            <form>
              <ApplicationFormTextInput
                name="coverLetter"
                placeholder="자기소개서"
                inputType="textarea"
                register={register}
                watch={watch}
                errorMessage={errors.coverLetter?.message}
              />
            </form>
            <div css={{ height: "48px" }}></div>
            <div css={ApplicationInformation}>제출 서류</div>
            <div css={{ height: "32px" }}></div>
            <DocAdd />

            <div css={{ height: "36px" }}></div>
            <div css={ApplicationInformation}>리틀 전형</div>
            <div css={{ height: "32px" }}></div>
            <div
              css={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div css={BasicInformation}>{littleProgramName}</div>
              <RoundedCheckbox
                checked={true}
                onChange={(checked) => {
                  setIsChecked(!checked);
                }}
              />
            </div>
            {isChecked ? (
              <div css={{ paddingTop: "32px" }}>
                <SpecialDocAdd />
              </div>
            ) : null}
            <div css={{ height: "48px" }}></div>
            <div css={ApplicationInformation}>기타 사항</div>
            <div css={{ height: "32px" }}></div>
            <form>
              <ApplicationFormTextInput
                name="questions"
                placeholder="질문사항"
                inputType="textarea"
                register={register}
                watch={watch}
                errorMessage={errors.questions?.message}
              />
            </form>
            <div css={{ height: "100px" }}></div>
            <AgreeButton
              agreeType="전체 동의"
              agreeDescription="개인정보 필수항목 수집 및 이용 동의"
              isChecked={allChecked}
              onToggle={handleAllCheck}
            />
            <div css={{ height: "27px" }}></div>
            <div css={greyLine}></div>
            <div css={{ height: "40px" }}></div>
            <AgreeButton
              agreeType="필수"
              agreeDescription="개인정보 필수항목 수집 및 이용 동의"
              isChecked={requiredChecked}
              onToggle={handleRequiredCheck}
            />
            <div css={{ height: "10px" }}></div>
            <AgreeButton
              agreeType="선택"
              agreeDescription="개인정보 필수항목 수집 및 이용 동의"
              isChecked={optionalChecked}
              onToggle={handleOptionalCheck}
            />

            <div css={{ height: "106px" }}></div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <button type="submit" css={summitButton}>
                제출하기
              </button>
            </form>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default ApplicationFormPage;
