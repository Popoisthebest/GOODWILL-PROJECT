import { useState } from "react";
import DefaultLayout from "../layouts/DefaultLayout.tsx";
import RoundedCheckbox from "../components/ApplicationForm/RoundedCheckbox/RoundedCheckbox.tsx";
import { useForm, SubmitHandler } from "react-hook-form";
import {
  ApplicationInformation,
  BasicInformation,
  BasicInformationContainer,
  BasicInformationText,
  FormContainer,
  FormTitle,
  greyLine,
  RoleName,
  summitButton,
} from "../components/ApplicationForm/ApplicationForm.style.ts";
import ApplicationFormTextInput from "../components/ApplicationForm/ApplicationFormTextInput.tsx";
import DocAdd from "../components/ApplicationForm/DocAdd.tsx";
import SpecialDocAdd from "../components/ApplicationForm/SpecialFileUpload/SpecialDoc.tsx";

interface FormValues {
  name: string;
  studentId: string;
  email: string;
  phone: string;
  coverLetter: string;
  questions: string;
}

const ApplicationFormPage = () => {
  const [isChecked, setIsChecked] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    // 학번을 숫자로 변환하여 처리
    const formattedData = {
      ...data,
      studentId: Number(data.studentId), // 문자열을 숫자로 변환
    };
    alert(JSON.stringify(formattedData, null, 2));
  };

  return (
    <DefaultLayout>
      <div css={FormContainer}>
        <div>
          <div css={FormTitle}>지원서 작성하기</div>
          <div css={RoleName}>UI/UX Designer</div>
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
              errorMessage={errors.name?.message}
            />
            <div css={{ height: "24px" }}></div>
            <ApplicationFormTextInput
              name="studentId"
              placeholder="학번"
              inputType="text"
              register={register}
              errorMessage={errors.studentId?.message}
            />{" "}
            <div css={{ height: "24px" }}></div>
            <ApplicationFormTextInput
              name="email"
              placeholder="이메일"
              inputType="text"
              register={register}
              errorMessage={errors.email?.message}
            />{" "}
            <div css={{ height: "24px" }}></div>
            <ApplicationFormTextInput
              name="phone"
              placeholder="전화번호 (010-0000-0000)"
              inputType="text"
              register={register}
              errorMessage={errors.phone?.message}
            />
          </form>
          <div css={{height:"48px"}}></div>
          <div css={ApplicationInformation}>제출 서류</div>
          <div css={{ height: "32px" }}></div>
          <DocAdd />
          <form>
            <ApplicationFormTextInput
              name="coverLetter"
              placeholder="자기소개서"
              inputType="textarea"
              register={register}
              errorMessage={errors.coverLetter?.message}
            />
          </form>
          <div css={{height:"36px"}}></div>
          <div css={ApplicationInformation}>리틀 전형</div>
          <div css={{ height: "32px" }}></div>
          <div
            css={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div css={BasicInformation}>리틀 정주영 전형</div>
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
          <form onSubmit={handleSubmit(onSubmit)}>
            <ApplicationFormTextInput
              name="questions"
              placeholder="질문사항"
              inputType="textarea"
              register={register}
              errorMessage={errors.questions?.message}
            />
          </form>
          <div css={{height:"108px"}}></div>
          <div css={greyLine}></div>
          <div css={{ height: "67px" }}></div>
          <button type="submit" css={summitButton}>
            제출하기
          </button>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default ApplicationFormPage;
