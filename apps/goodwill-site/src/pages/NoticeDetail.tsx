import { useParams } from "react-router-dom";
import "../styles/NoticeDetail.css";
import ReactMarkdown from "react-markdown"; // 마크다운 적용을 위해 추가
import remarkGfm from "remark-gfm"; // GitHub Flavored Markdown 지원
import facebookIcon from "../icons/facebook.svg";
import instaIcon from "../icons/insta.svg";
import copyIcon from "../icons/copy.svg";
import DefaultLayout from "../layouts/DefaultLayout.tsx";

const NoticeDetail = () => {
  const { title, views, date, content } = useParams();

  // 각 소셜 미디어 링크를 클릭했을 때 호출할 함수
  const handleShare = (platform: string) => {
    const currentUrl = window.location.href; // 현재 URL을 가져옴
    let shareUrl = "";

    if (platform === "facebook") {
      shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${currentUrl}`;
    } else if (platform === "instagram") {
      navigator.clipboard.writeText(currentUrl).then(() => {
        alert("링크 복사됨!");
      });
      return;
    } else if (platform === "copy") {
      navigator.clipboard.writeText(currentUrl).then(() => {
        alert("링크 복사됨!");
      });
      return;
    }

    window.open(shareUrl, "_blank", "width=600,height=400");
  };

  return (
    <DefaultLayout>
      <div className="notice">
        <div className="header_text">ANNOUNCEMENT</div>
        <div className="notice_header">
          <div className="title">{title}</div>
          <div className="notice_graytext">
            <div className="notice_date">{date}</div>
            <div className="dotdotdot">·</div>
            <div className="notice_views">{views}</div>
          </div>
          <div className="notice_border"></div>
        </div>
        <div className="notice_real_content">
          <div className="content_text">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {content || ""}
            </ReactMarkdown>
          </div>
        </div>
        <div className="notice_border1"></div>
        <div className="sharingsns">
          <div className="sns_text">SNS에 공유하기</div>
          <div className="icons">
            <div className="icons_circle">
              <img
                src={facebookIcon}
                alt="Facebook"
                className="icon_detail"
                onClick={() => handleShare("facebook")}
                style={{ cursor: "pointer", width: "36px", height: "36px" }}
              />
            </div>

            <div className="icons_circle">
              <img
                src={instaIcon}
                alt="Insta"
                className="icon_detail"
                onClick={() => handleShare("instagram")}
                style={{ cursor: "pointer", width: "36px", height: "36px" }}
              />
            </div>

            <div className="icons_circle1">
              <img
                src={copyIcon}
                alt="Copy Link"
                className="icon_detail"
                onClick={() => handleShare("copy")}
                style={{ cursor: "pointer", width: "36px", height: "36px" }}
              />
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default NoticeDetail;
