import { useState } from "react";
import "../styles/announcement.css";
import magnifyIcon from "../icons/MagnifyingGlass.svg";

const Announcement = () => {
  // 카테고리별 데이터
  const announcements = [
    { category: "이벤트", classific: "분류", title: "이벤트 소식 1", date: "작성일", views: "100" },
    { category: "이벤트", classific: "분류", title: "이벤트 소식 2", date: "작성일", views: "150" },
    { category: "아티클", classific: "분류", title: "아티클 1", date: "작성일", views: "200" },
    { category: "아티클", classific: "분류", title: "아티클 2", date: "작성일", views: "250" },
    { category: "채용", classific: "분류", title: "채용 공고 1", date: "작성일", views: "300" },
  ];

  // 카테고리별 항목 개수 계산
  const categoryCounts: Record<string, number> = {};
  announcements.forEach((item) => {
    categoryCounts[item.category] = (categoryCounts[item.category] || 0) + 1;
  });

  // 전체 개수
  const totalCount = announcements.length;

  // 카테고리 리스트
  const categories = [
    { name: "전체", count: totalCount },
    ...Object.keys(categoryCounts).map((name) => ({ name, count: categoryCounts[name] })),
  ];

  const [selectedCategory, setSelectedCategory] = useState<string>("전체");

  // 선택한 카테고리에 맞는 데이터 필터링
  const filteredAnnouncements =
    selectedCategory === "전체"
      ? announcements
      : announcements.filter((item) => item.category === selectedCategory);

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
              <div style={{
                display: selectedCategory === category.name ? "" : "none",
              }} className="count">({category.count})</div>
            </div>
          ))}
        </div>

        {/* 테이블 */}
        <table>
          <thead>
            <tr>
              <th scope="col">분류</th>
              <th scope="col">제목</th>
              <th scope="col">작성자</th>
              <th scope="col">조회수</th>
            </tr>
          </thead>
          <tbody>
            {filteredAnnouncements.length > 0 ? (
              filteredAnnouncements.map((item, index) => (
                <tr key={index}>
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
