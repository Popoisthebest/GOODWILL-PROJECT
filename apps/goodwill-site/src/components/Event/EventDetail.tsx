import { useEffect } from "react";
import { useLocation, useParams, useNavigate } from "react-router-dom";
import "../../styles/EventDetail.css";
import share_icon from "../../icons/share.svg";
import DefaultLayout from "../../layouts/DefaultLayout.tsx";

const EventDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const location = useLocation();
  const navigate = useNavigate();
  const event = location.state as
      | {
    id: number;
    title: string;
    date: string;
    image: string;
    apply: string;
    expense: string;
    place: string;
    name: string;
  }
      | undefined;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!event) {
    return <div>이벤트 정보를 찾을 수 없습니다.</div>;
  }

  const handleShare = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      alert("URL이 복사되었습니다!");
    } catch (err) {
      console.error("URL 복사 실패:", err);
      alert("URL 복사에 실패했습니다.");
    }
  };

  const parseApplyEndDate = (applyStr: string) => {
    if (applyStr.includes("이미 종료된 행사입니다.")) return new Date(0); // 이미 종료로 표시된 경우

    try {
      const parts = applyStr.split("~");
      if (parts.length < 2) return null;

      const endStr = parts[1].trim(); // 종료일 부분 추출
      const dateTimeMatch = endStr.match(/(\d{2})월 (\d{2})일.*?(\d{2}:\d{2})?/);

      if (!dateTimeMatch) return null;

      const month = dateTimeMatch[1];
      const day = dateTimeMatch[2];
      const time = dateTimeMatch[3] ?? "23:59"; // 시간 없으면 23:59로 처리

      const nowYear = new Date().getFullYear();
      const endDateStr = `${nowYear}-${month}-${day}T${time}:00`;
      return new Date(endDateStr);
    } catch (err) {
      return null;
    }
  };

  const handleApplyClick = () => {
    const endDate = parseApplyEndDate(event.apply);
    const now = new Date();

    if (!endDate || now > endDate) {
      alert("이미 종료된 행사입니다.");
      return;
    }

    navigate(`/event/form/${event.id}`, {
      state: {
        id,
        title: event.title,
        date: event.date,
        place: event.place,
        image: event.image,
      },
    });
  };

  return (
      <DefaultLayout>
        <div className="event_detail">
          <div className="image_and_details">
            <div className="event_detail_image_container">
              <img src={event.image} className="event_detail_image" alt="" />
            </div>
            <div className="event_detail_txts">
              <div className="event_detail_title">행사 상세 정보</div>
              <div className="event_detail_contents">
                <div className="gray_title">일시</div>
                <div className="black_title">{event.date}</div>
              </div>
              <div className="event_detail_contents">
                <div className="gray_title">신청</div>
                <div className="black_title">{event.apply}</div>
              </div>
              <div className="event_detail_contents">
                <div className="gray_title">비용</div>
                <div className="black_title">{event.expense}</div>
              </div>
              <div className="event_detail_contents">
                <div className="gray_title">장소</div>
                <div className="black_title">{event.place}</div>
              </div>
            </div>
            <div className="bottom_border"></div>
          </div>

          <div css={{ width: "300px" }}></div>

          <div className="apply">
            <div className="apply_title">
              <div className="apply_title1">창업</div>
              <div className="apply_title2"></div>
              <div className="apply_title3">{event.name}</div>
            </div>
            <div className="apply_subtitle_div">
              <div className="apply_main_title">{event.title}</div>
              <div className="apply_main_subtitle">{event.date}</div>
              <div className="apply_main_subtitle1">{event.place}</div>
            </div>
            <div className="apply_main_border"></div>
            <div className="apply_ask_div">
              <div className="apply_main_title">문의</div>
              <div className="apply_ask_text_box">
                <div className="apply_ask_text">고승한</div>
                <div className="apply_ask_text_gray">CEO</div>
              </div>
              <div className="apply_ask_text">M. 010-4294-1083</div>
              <div className="apply_ask_text">
                E. s.h.putrats@wearegoodwill.kro.kr
              </div>
            </div>

            <div className="apply_main_border"></div>
            <button onClick={handleApplyClick} className="apply_btn">
              신청하기
            </button>
            <button className="apply_btn1_boxes" onClick={handleShare}>
              <div className="apply_btn1">공유하기</div>
              <img src={share_icon} alt="share-icon" className="share_icon" />
            </button>
          </div>
        </div>
      </DefaultLayout>
  );
};

export default EventDetail;
