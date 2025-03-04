import { useParams } from "react-router-dom";
import "../styles/NoticeDetail.css"

const NoticeDetail = () => {
  const {  title, views, date, category, content
   } = useParams();

  return (
    <div>
      <div className="header_text">ANNOUNCEMENT</div>
      <div className="notice_header">
        <div className="title">{title}</div>
        <div className="notice_graytext">
          <div className="notice_date">{date}</div>
          <div className="dotdotdot">·</div>
          <div className="notice_veiws">{views}</div>
        </div>
        <div className="views">{content}</div>

      </div>
    </div>
  );
};

export default NoticeDetail;
