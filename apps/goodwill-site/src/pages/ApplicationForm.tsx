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
import DocAdd from "../components/ApplicationForm/DocAdd.tsx";
import SpecialDocAdd from "../components/ApplicationForm/SpecialFileUpload/SpecialDoc.tsx";
import EmailAuthenticationButton from "../components/ApplicationForm/EmailAuthentication/EmailAuthenticationButton.tsx";
import AgreeButton from "../components/ApplicationForm/Agree/AgreeButton/AgreeButton.tsx";
import { submitApplication, uploadFileToStorage } from "../firebase/firestore"; // Firestore 저장 함수 불러오기

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
  const jobGroup = location.state?.jobGroup || "기본 그룹"; // 기본 jobGroup 설정
  const littleProgramName = getLittleProgramName(jobGroup);

  const [isChecked, setIsChecked] = useState(false);
  const [allChecked, setAllChecked] = useState(false);
  const [requiredChecked, setRequiredChecked] = useState(false);
  const [optionalChecked, setOptionalChecked] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormValues>();

  const emailValue = watch("email");

  // 🔥 쿠키에서 파일 데이터 가져오기
  const [awardFiles, setAwardFiles] = useState<UploadedFile[]>([]);
  const [portfolioFiles, setPortfolioFiles] = useState<UploadedFile[]>([]);
  const [specialFiles, setSpecialFiles] = useState<UploadedFile[]>([]);

  useEffect(() => {
    const savedAwardFiles = Cookies.get("contestFiles");
    const savedPortfolioFiles = Cookies.get("portfolioFiles");
    const savedSpecialFiles = Cookies.get("specialFiles");

    if (savedAwardFiles) setAwardFiles(JSON.parse(savedAwardFiles));
    if (savedPortfolioFiles) setPortfolioFiles(JSON.parse(savedPortfolioFiles));
    if (savedSpecialFiles) setSpecialFiles(JSON.parse(savedSpecialFiles));
  }, []);

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
    if (!requiredChecked) {
      alert("필수 동의 항목을 체크해야 지원서를 제출할 수 있습니다.");
      return;
    }

    if (!data.email) {
      alert("이메일을 입력해주세요.");
      return;
    }

    try {
      // 🔥 특별전형 파일 업로드
      const specialApplicationFiles = await Promise.all(
          specialFiles.map(async (file: UploadedFile) => {
            if (!file || !file.file) return null;
            return {
              title: file.title,
              fileUrl: await uploadFileToStorage(file.file, `applications/${data.email}/specialApplication/${file.title}`)
            };
          })
      ).then(results => results.filter(file => file !== null)); // 🔥 `null` 제거

      // 🔥 수상 내역 파일 업로드
      const formattedAwards = await Promise.all(
          awardFiles.map(async (file: UploadedFile) => {
            if (!file || !file.file) return null;
            return {
              title: file.title,
              fileUrl: await uploadFileToStorage(file.file, `applications/${data.email}/awards/${file.title}`)
            };
          })
      ).then(results => results.filter(file => file !== null));

      // 🔥 포트폴리오 파일 업로드
      const formattedProjects = await Promise.all(
          portfolioFiles.map(async (file: UploadedFile) => {
            if (!file || !file.file) return null;
            return {
              title: file.title,
              fileUrl: await uploadFileToStorage(file.file, `applications/${data.email}/projects/${file.title}`)
            };
          })
      ).then(results => results.filter(file => file !== null));

      const formattedData = {
        ...data,
        studentId: Number(data.studentId),
        jobType: jobGroup,
        specialApplication: isChecked && specialApplicationFiles.length > 0 ? { files: specialApplicationFiles } : null,
        awards: formattedAwards.length > 0 ? formattedAwards : [],
        projects: formattedProjects.length > 0 ? formattedProjects : [],
        application_status: "대기",
        timestamp: new Date().toISOString(),
      };

      await submitApplication(formattedData);
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
