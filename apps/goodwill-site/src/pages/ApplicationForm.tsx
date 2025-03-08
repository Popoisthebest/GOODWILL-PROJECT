import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import DefaultLayout from "../layouts/DefaultLayout.tsx";
import RoundedCheckbox from "../components/ApplicationForm/RoundedCheckbox/RoundedCheckbox.tsx";
import { useForm, SubmitHandler } from "react-hook-form";
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

interface FormValues {
  name: string;
  studentId: string;
  email: string;
  phone: string;
  coverLetter: string;
  questions: string;
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
  const [isSubmitting, setIsSubmitting] = useState(false);

  console.log(`역할 이름: ${roleName}`);
  console.log(`직군 이름: ${jobGroup}`);

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
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    setIsSubmitting(true);
    // 학번을 숫자로 변환하여 처리
    const formattedData = {
      ...data,
      studentId: Number(data.studentId), // 문자열을 숫자로 변환
    };
    alert(JSON.stringify(formattedData, null, 2));
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
                <div css={{ height: "11px" }}></div>
                <div css={emailButtonDiv}>
                  <EmailAuthenticationButton />
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
            <DocAdd isSubmitting={isSubmitting} />

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
