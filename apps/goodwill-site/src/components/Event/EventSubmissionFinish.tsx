import MainButton from "../SubmissionFinished/to_main_button.tsx";
import { useLocation } from "react-router-dom";
import {
  eventInfoDiv,
  eventSubTitle,
  eventTitle,
  finishDiv,
  finishMessageDiv,
  padletBorder,
  padletDiv,
  padletIcon,
  padletIconDiv,
} from "./EventSubmissionFinish.style.ts";
import { eventImage } from "./EventForm.style.ts";
import PadletIcon from "../../assets/event-submit-finish/padlet-e1603943836884.png";
import LickIcon from "../../assets/event-submit-finish/ArrowSquareOut.svg";

const EventSubmissionFinish = () => {
  const location = useLocation();

  const event = location.state as {
    title: string;
    date: string;
    image: string;
    place: string;
  };

  const titleStyle: React.CSSProperties = {
    color: "#000",
    fontFamily: "Pretendard",
    fontSize: "43px",
    fontWeight: 600,
    marginTop: "100px",
  };

  const textStyle: React.CSSProperties = {
    color: "#000",
    fontFamily: "Pretendard",
    fontSize: "16px",
    fontWeight: 600,
    lineHeight: "1.6",
  };

  return (
    <>
      <div css={finishDiv}>
        <div css={finishMessageDiv}>
          <h1 style={titleStyle}>신청서 접수완료</h1>

          <div css={eventInfoDiv}>
            <div>
              <img src={event.image} alt="" css={eventImage} />
            </div>

            <div css={{ width: "38px" }}></div>

            <div>
              <div css={eventTitle}>{event.title}</div>
              <div css={eventSubTitle}>{event.date}</div>
              <div css={{height:"5px"}}></div>
              <div>{event.place}</div>
            </div>
          </div>

          <p style={textStyle}>
            신청이 완료되었습니다.
            <br />
            이벤트 신청이 정상적으로 접수되었습니다.
            <br />
            <br />
            원활한 행사 진행을 위해 행사 시작 5분 전까지 도착하시어 착석
            부탁드립니다.
            <br />
            <br />
            이벤트 일정: {event.date}
            <br />
            장소: {event.place}
            <br />
            <br />
            감사합니다.
          </p>

          <div css={padletBorder}>
            <div style={textStyle}>
              <div>
                행사 당일 GOODWILL CONCERT의 원활한 진행을 위해 '패들렛'을
                활용하여 질문을 받을 예정입니다.
              </div>
              <br />
              <div css={padletDiv}>
                <div>
                  당일 질의응답 시간에 활용될 예정이니, 사전에 숙지해주시기
                  바랍니다.
                </div>
                <div
                  css={padletIconDiv}
                  onClick={() =>
                    window.open(
                      "https://padlet.com/24_10601_4/2025-3-goodwill-concert-btmgiwxfpf02tq09",
                    )
                  }
                >
                  <img src={PadletIcon} alt="PadletIcon" css={padletIcon} />
                  <img src={LickIcon} alt="LickIcon" />
                </div>
              </div>
            </div>
          </div>

          <br />
          <br />
          {/* 하단 버튼 */}
          <MainButton />
        </div>
      </div>
    </>
  );
};

export default EventSubmissionFinish;
