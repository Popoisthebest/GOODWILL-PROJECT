import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { collection, doc, setDoc, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig.ts";
import DefaultLayout from "../layouts/DefaultLayout.tsx";
import RoundedCheckbox from "../components/ApplicationForm/RoundedCheckbox/RoundedCheckbox.tsx";
import { useForm, SubmitHandler } from "react-hook-form";
import {
  ApplicationInformation,
  BasicInformation,
  BasicInformationContainer,
  BasicInformationText,
  // emailButtonDiv,
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
// import EmailAuthenticationButton from "../components/ApplicationForm/EmailAuthentication/EmailAuthenticationButton.tsx";
import AgreeButton from "../components/ApplicationForm/Agree/AgreeButton/AgreeButton.tsx";
import { generateApplicationId } from "../hooks/generateApplicationId.ts";

interface FormValues {
  name: string;
  studentId: string;
  email: string;
  phone: string;
  coverLetter: string;
  questions: string;
}

// Collection names for Firestore without spaces
const getLittleProgramName = (jobGroup: string) => {
  const jobGroupToProgramMap: Record<string, string> = {
    "Business Operations": "리틀_정주영_전형",
    "Finance & Marketing": "리틀_정주영_전형",
    Design: "리틀_도널드_노먼_전형",
    Engineering: "리틀_빌게이츠_전형",
    "Economics & Data Science": "리틀_도널드_노먼_전형",
    Legal: "리틀_정주영_전형",
    Content: "리틀_정주영_전형",
  };
  return jobGroupToProgramMap[jobGroup];
};

// Display names for UI (keeping original format with spaces)
const getLittleProgramDisplayName = (jobGroup: string) => {
  const jobGroupToProgramMap: Record<string, string> = {
    "Business Operations": "리틀 정주영 전형",
    "Finance & Marketing": "리틀 정주영 전형",
    Design: "리틀 도널드 노먼 전형",
    Engineering: "리틀 빌게이츠 전형",
    "Economics & Data Science": "리틀 도널드 노먼 전형",
    Legal: "리틀 정주영 전형",
    Content: "리틀 정주영 전형",
  };
  return jobGroupToProgramMap[jobGroup];
};

const ApplicationFormPage = () => {
  const location = useLocation();
  const roleName = location.state?.roleName;
  const jobGroup = location.state?.jobGroup;
  const littleProgramName = getLittleProgramName(jobGroup); // For Firestore (no spaces)
  const littleProgramDisplayName = getLittleProgramDisplayName(jobGroup); // For display
  const [isChecked, setIsChecked] = useState(false);
  const [allChecked, setAllChecked] = useState(false);
  const [requiredChecked, setRequiredChecked] = useState(false);
  const [optionalChecked, setOptionalChecked] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [applicationId, setApplicationId] = useState<string>("");
  const navigate = useNavigate();

  // 전체 동의 체크 시 필수 및 선택 체크박스도 변경
  const handleAllCheck = () => {
    const newCheckState = !allChecked;
    setAllChecked(newCheckState);
    setRequiredChecked(newCheckState);
    setOptionalChecked(newCheckState);
  };

  // 필수 동의 체크박스 변경 시 처리
  const handleRequiredCheck = () => {
    const newRequiredState = !requiredChecked;
    setRequiredChecked(newRequiredState);

    if (!newRequiredState || !optionalChecked) {
      setAllChecked(false);
    } else {
      setAllChecked(true);
    }
  };

  // 선택 동의 체크박스 변경 시 처리
  const handleOptionalCheck = () => {
    const newOptionalState = !optionalChecked;
    setOptionalChecked(newOptionalState);

    if (!newOptionalState || !requiredChecked) {
      setAllChecked(false);
    } else {
      setAllChecked(true);
    }
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<FormValues>({});

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    try {
      if (isSubmitting) return; // 중복 제출 방지
      if (!requiredChecked) {
        alert("필수 동의 항목을 체크해야 지원서를 제출할 수 있습니다.");
        return;
      }

      setIsSubmitting(true); // 제출 중 상태 설정

      // Firestore에 저장 로직
      const applicationsRef = collection(db, littleProgramName);
      const querySnapshot = await getDocs(applicationsRef);
      const order = querySnapshot.size + 1;
      const newApplicationId = generateApplicationId(jobGroup, order);
      setApplicationId(newApplicationId);

      const formattedData = {
        ...data,
        roleName: roleName,
        studentId: Number(data.studentId),
        applicationId: newApplicationId,
        order,
        createdAt: new Date(),
        application_status: "대기",
        programType: littleProgramDisplayName,
      };

      await setDoc(doc(db, littleProgramName, newApplicationId), formattedData);

      navigate("/submission-finished", {
        state: { roleName, newApplicationId },
      });
    } catch (error) {
      console.error("지원서 제출 실패:", error);
      alert("지원서 제출 중 오류가 발생했습니다.");
    } finally {
      setIsSubmitting(false); // 제출 완료 후 상태 초기화
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
                inputType="text"
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
                {/*<div css={{ height: "11px" }}></div>*/}
                {/*<div css={emailButtonDiv}>*/}
                {/*  <EmailAuthenticationButton />*/}
                {/*</div>*/}
              </div>
              <div css={{ height: "24px" }}></div>
              {/*<div css={{ height: "60px" }}></div>*/}
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
            <DocAdd isSubmitting={isSubmitting} applicationId={applicationId} />

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
              <div css={BasicInformation}>{littleProgramDisplayName}</div>
              <RoundedCheckbox
                checked={true}
                onChange={(checked) => {
                  setIsChecked(!checked);
                }}
              />
            </div>
            {isChecked ? (
              <div css={{ paddingTop: "32px" }}>
                <SpecialDocAdd
                  isSubmitting={isSubmitting}
                  applicationId={applicationId}
                />
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
              <button type="submit" css={summitButton} disabled={isSubmitting}>
                {isSubmitting ? "제출 중..." : "제출하기"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default ApplicationFormPage;
