import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { collection, doc, setDoc, getDocs } from "firebase/firestore";
import {
  eventDiv,
  eventImage,
  eventSubtitle,
  eventTitle,
  eventTitleDiv,
} from "./EventForm.style.ts";
import {
  ApplicationInformation,
  BasicInformation,
  BasicInformationContainer,
  BasicInformationText,
  emailDiv,
  greyLine,
  summitButton,
} from "../ApplicationForm/ApplicationForm.style.ts";
import { SubmitHandler, useForm } from "react-hook-form";
import { db } from "../../firebase/firebaseConfig.ts";
import AgreeButton from "../ApplicationForm/Agree/AgreeButton/AgreeButton.tsx";
import EventApplicationFormTextInput from "./EventApplicationFormTextInput.tsx";
import DefaultLayout from "../../layouts/DefaultLayout.tsx";

const EventForm = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  // const [allChecked, setAllChecked] = useState(false);
  const [requiredChecked, setRequiredChecked] = useState(false);
  // const [optionalChecked, setOptionalChecked] = useState(false);

  const event = location.state as {
    id: number;
    title: string;
    date: string;
    image: string;
    place: string;
  };

  interface FormValues {
    name: string;
    studentId: string;
    email: string;
    phone: string;
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({});

  // 전체 동의 체크 시 필수 및 선택 체크박스도 변경
  // const handleAllCheck = () => {
  //   const newCheckState = !allChecked;
  //   setAllChecked(newCheckState);
  //   setRequiredChecked(newCheckState);
  //   setOptionalChecked(newCheckState);
  // };

  // 필수 동의 체크박스 변경 시 처리
  const handleRequiredCheck = () => {
    const newRequiredState = !requiredChecked;
    setRequiredChecked(newRequiredState);

    // if (!newRequiredState || !optionalChecked) {
    //   setAllChecked(false);
    // } else {
    //   setAllChecked(true);
    // }
  };

  // 선택 동의 체크박스 변경 시 처리
  // const handleOptionalCheck = () => {
  //   const newOptionalState = !optionalChecked;
  //   setOptionalChecked(newOptionalState);
  //
  //   if (!newOptionalState || !requiredChecked) {
  //     setAllChecked(false);
  //   } else {
  //     setAllChecked(true);
  //   }
  // };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    try {
      if (isSubmitting) return; // 중복 제출 방지
      if (!requiredChecked) {
        alert("필수 동의 항목을 체크해야 지원서를 제출할 수 있습니다.");
        return;
      }

      setIsSubmitting(true); // 제출 중 상태 설정

      // Firestore에 저장 로직
      const applicationsRef = collection(db, "event");
      const querySnapshot = await getDocs(applicationsRef);
      const order = querySnapshot.size + 1;

      const formattedData = {
        ...data,
        studentId: Number(data.studentId),
        order,
        createdAt: new Date(),
      };

      await setDoc(doc(db, "event", data.studentId + data.name), formattedData);

      navigate("/event-submission-finished", {
        state: {
          title: event.title,
          date: event.date,
          place: event.place,
          image: event.image,
        },
      });
    } catch (error) {
      console.error("지원서 제출 실패:", error);
      alert("지원서 제출 중 오류가 발생했습니다.");
    } finally {
      setIsSubmitting(false); // 제출 완료 후 상태 초기화
    }
  };

  return (
    <>
      <DefaultLayout>
        <div
          css={{
            display: "flex",
            justifyContent: "center",
            paddingBottom: "50px",
          }}
        >
          <div css={eventDiv}>
            {/* 이벤트 정보 */}
            <div css={eventTitleDiv}>
              <div>
                <div css={eventTitle}>{event.title}</div>
                <div css={{ height: "16px" }}></div>
                <div css={eventSubtitle}>{event.date}</div>
                <div css={eventSubtitle}>{event.place}</div>
              </div>
              <div css={{ width: "100px" }}></div>
              <div>
                <img src={event.image} alt="" css={eventImage} />
              </div>
            </div>

            <div css={{ height: "48px" }}></div>

            {/* 신청서 양식 */}
            <div css={ApplicationInformation}>신청자 정보</div>
            <div css={{ height: "32px" }}></div>
            <div css={BasicInformationContainer}>
              <div css={BasicInformation}>기본 정보</div>
              <div css={{ width: "10px" }}></div>
              <div css={BasicInformationText}>필수</div>
            </div>
            <div css={{ height: "32px" }}></div>
            <form>
              <EventApplicationFormTextInput
                name="name"
                placeholder="이름"
                inputType="text"
                register={register}
                errorMessage={errors.name?.message}
              />
              <div css={{ height: "24px" }}></div>
              <EventApplicationFormTextInput
                name="studentId"
                placeholder="학번"
                inputType="text"
                register={register}
                errorMessage={errors.studentId?.message}
              />{" "}
              <div css={{ height: "24px" }}></div>
              <div css={emailDiv}>
                <EventApplicationFormTextInput
                  name="email"
                  placeholder="이메일"
                  inputType="text"
                  register={register}
                  errorMessage={errors.email?.message}
                />{" "}
                {/*<div css={{ height: "11px" }}></div>*/}
                {/*<div css={emailButtonDiv}>*/}
                {/*  <EmailAuthenticationButton />*/}
                {/*</div>*/}
              </div>
              <div css={{ height: "24px" }}></div>
              {/*<div css={{ height: "60px" }}></div>*/}
              <EventApplicationFormTextInput
                name="phone"
                placeholder="전화번호 (010-0000-0000)"
                inputType="text"
                register={register}
                errorMessage={errors.phone?.message}
              />
            </form>

            <div css={{ height: "100px" }}></div>
            <div css={greyLine}></div>
            <div css={{ height: "40px" }}></div>
            <AgreeButton
              agreeType="필수"
              agreeDescription="개인정보 필수항목 수집 및 이용 동의"
              isChecked={requiredChecked}
              onToggle={handleRequiredCheck}
            />

            <div css={{ height: "106px" }}></div>

            <form onSubmit={handleSubmit(onSubmit)}>
              <button type="submit" css={summitButton} disabled={isSubmitting}>
                {isSubmitting ? "제출 중..." : "제출하기"}
              </button>
            </form>
          </div>
        </div>
      </DefaultLayout>
    </>
  );
};

export default EventForm;
