import "../styles/EventMain.css";
import aws from "../icons/aws.svg";
import google from "../icons/google.svg";
import microsoft from "../icons/microsoft.svg";
import ksf from "../icons/ksf.svg";
import goodwillconcert from "../assets/event/GOODWILL CONCERT_Event.png";
import { useNavigate } from "react-router-dom";
import DefaultLayout from "../layouts/DefaultLayout.tsx";

const Event = () => {
  const navigate = useNavigate();

  const events = [
    {
      id: 1,
      title: "2025’ 제3회 GOODWILL CONCERT",
      date: "03월 19일(수), 16:50 ~ 18:00 (CIP 1차 ~ 석식시간 일부)",
      apply: "03월 11일(화) ~ 03월 19일(수) 16:00",
      expense: "무료",
      place: "대전대신고등학교 백암관",
      image: goodwillconcert,
      name: "토크 콘서트",
    },
  ];

  const handleEventClick = (event: {
    id: number;
    title: string;
    date: string;
    image: string;
    apply: string;
    expense: string;
    place: string;
    name: string;
  }) => {
    navigate(`/event/${event.id}`, { state: event });
  };

  return (
    <>
      <DefaultLayout>
        {" "}
        <div className="main_box">
          <div className="first_content">
            <div className="first_content_title">
              GOODWILL
              <br />
              EVENT
            </div>
            <div className="first_content_subtitle">
              함께하는 특별한 경험 🚀
            </div>
            <div className="first_content_subtitlemini">
              Goodwill에서는 학생 참여형 행사를 통해 다양한 경험과 기회를
              제공합니다.
              <br />
              실전 창업 프로젝트, 디자인 챌린지, 네트워킹 등 흥미로운 프로그램을
              만나보세요.
            </div>
            <div className="first_content_subtitle1">GOODWILL 파트너스 👬</div>
            <div className="partners_images">
              <img className="google" src={google} alt="" />
              <img className="microsoft" src={microsoft} alt="" />
              <img className="aws" src={aws} alt="" />
              <img className="ksf" src={ksf} alt="" />
            </div>
          </div>

          <div className="main_content">
            <div className="main_content_title">적극 홍보 중인 행사</div>
            <div className="main_content_subtitle">
              다양한 이벤트에 참여하고 새로운 경험을 만나보세요!☺️
            </div>

            <div className="event_boxes">
              {events.map((event) => (
                <div
                  key={event.id}
                  className="event_box"
                  onClick={() => handleEventClick(event)}
                >
                  <img
                    className="event_box_img"
                    src={event.image}
                    alt={event.title}
                  />
                  <div className="event_box_date">{event.date}</div>
                  <div className="event_box_title">{event.title}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="last_content"></div>
        </div>
      </DefaultLayout>
    </>
  );
};

export default Event;
