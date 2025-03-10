import MainButton from "../SubmissionFinished/to_main_button.tsx";
import { useLocation } from "react-router-dom";
import {
  eventInfoDiv,
  eventSubTitle,
  eventTitle,
  finishDiv,
  finishMessageDiv,
} from "./EventSubmissionFinish.style.ts";
import { eventImage } from "./EventForm.style.ts";

const EventSubmissionFinish = () => {
  const location = useLocation();

  const event = location.state as {
    title: string;
    date: string;
    image: string;
    place: string;
  };

  return (
    <>
      <div css={finishDiv}>
        <div css={finishMessageDiv}>
          <h1>신청서 접수완료</h1>
          <p>
            신청이 완료되었습니다.
            <br />
            이벤트 신청이 정상적으로 접수되었습니다.
            <br />
            <br />
            이벤트 일정: {event.date}
            <br />
            장소: {event.place}
            <br />
            <br />
            감사합니다.
          </p>

          <div css={eventInfoDiv}>
            <div>
              <img src={event.image} alt="" css={eventImage} />
            </div>

            <div css={{ width: "38px" }}></div>

            <div>
              <div css={eventTitle}>{event.title}</div>
              <div css={eventSubTitle}>{event.date}</div>
              <div>{event.place}</div>
            </div>
          </div>

            <div css={{ height: "48px" }}></div>


          {/* 하단 버튼 */}
          <MainButton />
        </div>
      </div>
    </>
  );
};

export default EventSubmissionFinish;
