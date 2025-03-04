import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/announcement.css";
import magnifyIcon from "../icons/MagnifyingGlass.svg";

const Announcement = () => {
  const navigate = useNavigate();

  const announcements = [
    { category: "이벤트", classific: "이벤트", title: "점검 안내", content: "안녕하세요, 굿윌입니다. 서버 점검으로 인해 아래의 시간 동안 서비스가 일시 중단됩니다. 서버 점검 시간: 2022년 7월 21일(목) 00:00 ~ 06:00 긴급 문의는 [고객 지원 이메일 또는 연락처] 로 부탁드립니다. 이용에 불편을 드려 죄송합니다. 더욱 안정적인 서비스 제공을 위해 최선을 다하겠습니다. 감사합니다." ,date: "2024-03-01", views: "100" },
    { category: "이벤트", classific: "이벤트", title: "이벤트 소식 2", content: "섹스" ,date: "2024-03-02", views: "150" },
    { category: "아티클", classific: "아티클", title: "아티클 1", content: "섹스1" ,date: "2024-03-03", views: "200" },
    { category: "아티클", classific: "아티클", title: "아티클 2",content: "섹스2" , date: "2024-03-04", views: "250" },
    { category: "채용", classific: "채용", title: "채용 공고 1", content: "섹스3" ,date: "2024-03-05", views: "300" },
  ];

  const categoryCounts: Record<string, number> = {};
  announcements.forEach((item) => {
    categoryCounts[item.category] = (categoryCounts[item.category] || 0) + 1;
  });

  const totalCount = announcements.length;

  const categories = [
    { name: "전체", count: totalCount },
    ...Object.keys(categoryCounts).map((name) => ({ name, count: categoryCounts[name] })),
  ];

  const [selectedCategory, setSelectedCategory] = useState<string>("전체");

  const filteredAnnouncements =
    selectedCategory === "전체"
      ? announcements
      : announcements.filter((item) => item.category === selectedCategory);

  const handleRowClick = (category: string, title : string, date : string, views : string, content:string) => {
    navigate(`/notice/${category}/${encodeURIComponent(title)}/${encodeURIComponent(date)}/${encodeURIComponent(views)}/${encodeURIComponent(content)}`);
  };

  return (
    <div className="announcement_box">
      <div className="announcement_header">
        <div className="header_text">ANNOUNCEMENT</div>
        <div className="header_inputbox">
          <input type="text" className="header_input" />
          <img src={magnifyIcon} className="announcement_magnify_icon" alt="" />
        </div>
      </div>

      <div className="announcement_content">
        <div className="announcement_content_select">
          {categories.map((category) => (
            <div
              key={category.name}
              className="select_content"
              onClick={() => setSelectedCategory(category.name)}
              style={{
                color: selectedCategory === category.name ? "#000" : "#C4C4C4",
                fontWeight: selectedCategory === category.name ? "bold" : "normal",
                cursor: "pointer",
              }}
            >
              <div className="text">{category.name}</div>
              <div style={{ display: selectedCategory === category.name ? "" : "none" }} className="count">
                ({category.count})
              </div>
            </div>
          ))}
        </div>

        {/* 테이블 */}
        <table>
          <thead>
            <tr>
              <th scope="col">분류</th>
              <th scope="col">제목</th>
              <th scope="col">작성일</th>
              <th scope="col">조회수</th>
            </tr>
          </thead>
          <tbody>
            {filteredAnnouncements.length > 0 ? (
              filteredAnnouncements.map((item, index) => (
                <tr key={index} onClick={() => handleRowClick(item.category, item.title, item.date, item.views, item.content)} style={{ cursor: "pointer" }}>
                  <td>{item.classific}</td>
                  <td>{item.title}</td>
                  <td>{item.date}</td>
                  <td>{item.views}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={4} style={{ textAlign: "center", color: "#7b7b7b" }}>해당 카테고리에 게시글이 없습니다.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="footer"></div>
    </div>
  );
};

export default Announcement;
