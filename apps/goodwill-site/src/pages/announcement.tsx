import "../styles/announcement.css";
import magnifyIcon from "../icons/MagnifyingGlass.svg";

const announcement = () => {
  return (
    <div className="announcemnet_box">
      <div className="announcement_header">
        <div className="header_text">ANNOUNCEMENT</div>
        <div className="header_inputbox">
          <input type="text" className="header_input" />
          <img src={magnifyIcon} className="announcemnet_magnify_icon" alt="" />
        </div>
      </div>
      <div className="announcement_content">
        <div className="announcement_content_select">
          <div className="select_content">
            <div className="text">전체</div>
            <div className="count">(10)</div>
          </div>
          <div className="select_content">
            <div className="text">이벤트</div>
            <div className="count"></div>
          </div>
          <div className="select_content">
            <div className="text">아티클</div>
            <div className="count"></div>
          </div>
          <div className="select_content">
            <div className="text">채용</div>
            <div className="count"></div>
          </div>
        </div>
      </div>
      <div className="footer"></div>
    </div>
  );
};

export default announcement;
