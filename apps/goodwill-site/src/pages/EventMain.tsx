import "../styles/EventMain.css";
import aws from "../icons/aws.svg";
import google from "../icons/google.svg";
import microsoft from "../icons/microsoft.svg";
import ksf from "../icons/ksf.svg";
import goodwillconcert from "../images/goodwillconert.png";
import { useNavigate } from "react-router-dom";

const EventMain = () => {
  const navigate = useNavigate();

  const events = [
    {
      id: 1,
      title: "2025’ 제3회 GOODWILL CONCERT",
      date: "03/17 CIP 2~3차 진행",
      apply: "03/11 ~ 03/16",
      expense: "무료",
      place: "백암관",
      image: goodwillconcert,
      name: "콘서트",
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
    <div className="main_box">
      <div className="first_content">
        <div className="first_content_title">
          GOODWILL
          <br />
          EVENT
        </div>
        <div className="first_content_subtitle">함께하는 특별한 경험 🚀</div>
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
              <div className="hiddendiv">{event.apply}</div>
              <div className="hiddendiv">{event.expense}</div>
              <div className="hiddendiv">{event.place}</div>
              <div className="hiddendiv">{event.name}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="last_content"></div>
    </div>
  );
};

export default EventMain;
