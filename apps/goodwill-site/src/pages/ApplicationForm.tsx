import DefaultLayout from "../layouts/DefaultLayout.tsx";
import { useForm, SubmitHandler } from "react-hook-form";
import {
  ApplicationInformation,
  BasicInformation,
  BasicInformationContainer,
  BasicInformationText,
  FormContainer,
  FormTitle,
  RoleName,
  summitDoc,
} from "../components/ApplicationForm/ApplicationForm.style.ts";
import ApplicationFormTextInput from "../components/ApplicationForm/ApplicationFormTextInput.tsx";
import DocAdd from "../components/ApplicationForm/DocAdd.tsx";

interface FormValues {
  name: string;
  studentId: string;
  email: string;
  phone: string;
  coverLetter: string;
  questions: string;
}

const ApplicationFormPage = () => {
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
            <ApplicationFormTextInput
              name="studentId"
              placeholder="학번"
              inputType="text"
              register={register}
              errorMessage={errors.studentId?.message}
            />
            <ApplicationFormTextInput
              name="email"
              placeholder="이메일"
              inputType="text"
              register={register}
              errorMessage={errors.email?.message}
            />
            <ApplicationFormTextInput
              name="phone"
              placeholder="전화번호 (010-0000-0000)"
              inputType="text"
              register={register}
              errorMessage={errors.phone?.message}
            />
          </form>
          <div css={summitDoc}>제출 서류</div>
          <div css={{ height: "32px" }}></div>
          <DocAdd />
          <form onSubmit={handleSubmit(onSubmit)}>
            <ApplicationFormTextInput
              name="coverLetter"
              placeholder="자기소개서"
              inputType="textarea"
              register={register}
              errorMessage={errors.coverLetter?.message}
            />
            <ApplicationFormTextInput
              name="questions"
              placeholder="질문사항"
              inputType="textarea"
              register={register}
              errorMessage={errors.questions?.message}
            />
            <button type="submit">제출</button>
          </form>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default ApplicationFormPage;
