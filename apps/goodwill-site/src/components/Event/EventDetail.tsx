import { useLocation, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "../../styles/EventDetail.css";
import share_icon from "../../icons/share.svg";
import DefaultLayout from "../../layouts/DefaultLayout.tsx";

const EventDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>(); // URL에서 id 추출
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

  if (!event) {
    return <div>이벤트 정보를 찾을 수 없습니다.</div>;
  }

  return (
    <DefaultLayout>
      <div className="event_detail">
        <div className="image_and_details">
          <img src={event.image} className="event_detail_image" alt="" />
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

        <div className="apply">
          <div className="apply_title">
            <div className="apply_title1">창업</div>
            <div className="apply_title2"></div>
            <div className="apply_title3">{event.name}</div>
          </div>
          <div className="apply_main_title">{event.title}</div>
          <div className="apply_main_subtitle">{event.date}</div>
          <div className="apply_main_subtitle1">{event.place}</div>
          <div className="apply_main_border"></div>
          <div className="apply_main_title">문의</div>
          <div className="apply_ask_text_box">
            <div className="apply_ask_text">고승한</div>
            <div className="apply_ask_text_gray">CEO</div>
          </div>
          <div className="apply_ask_text">M. 010-4294-1083</div>
          <div className="apply_ask_text">
            E. s.h.putrats@wearegoodwill.kro.kr
          </div>
          <div className="apply_main_border"></div>
          <div className="apply_ask_text_box">
            <div className="apply_ask_text">이현서</div>
            <div className="apply_ask_text_gray">COO</div>
          </div>
          <div className="apply_ask_text">M. 010-2993-2845</div>
          <div className="apply_ask_text">gw.hs@wearegoodwill.kro.kr</div>
          <button
            onClick={() => {
              navigate(`/event/form/${event.id}`, {
                state: {
                  id,
                  title: event.title,
                  date: event.date,
                  place: event.place,
                  image: event.image,
                },
              });
            }}
            className="apply_btn"
          >
            지원하기
          </button>
          <button className="apply_btn1_boxes">
            <div className="apply_btn1">공유하기</div>
            <img src={share_icon} alt="share-icon" className="share_icon" />
          </button>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default EventDetail;
