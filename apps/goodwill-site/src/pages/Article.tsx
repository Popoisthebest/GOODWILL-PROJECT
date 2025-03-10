import React, { useState } from "react";
import BlogCard from "./blog_card";
import BlogIcon from "../assets/blog_icon/light_arrow-left.svg?react";
import SearchIcon from "../assets/blog_icon/MagnifyingGlass.svg?react";

const BlogMainPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>("All"); 
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);

  const blogCards = [
    { id: 1, title: "신입생들을 위한 동아리의 모든 것", date: "2025-02-18" },
    { id: 2, title: "대신고 활동의 모든 것", date: "2025-02-18" },
    { id: 3, title: "고등학교 첫 내신, 어떻게 준비할까요?", date: "2025-02-18" },
    { id: 4, title: "더 이상 기술의 부재가 없는, 굿윌 프론트엔드의 성장 이야기", date: "2025-02-18" },
    { id: 5, title: "제품의 성공을 이끄는 사람들, Product Owner", date: "2025-02-18" },
    { id: 6, title: "좋은 사용자 경험을 만드는 굿윌의 Product Designer", date: "2025-02-18" },
    { id: 7, title: "제품에 대한 전반적인 설계 및 개발을 이끄는 Hardware Engineer", date: "2025-02-18" },
    { id: 8, title: "1년차 개발자의 훈수 두기", date: "2025-02-18" },
    { id: 9, title: "DeepSeek Shock - 제본스의 역설과 AI 투자의 향방 - 1", date: "2025-02-18" },
    { id: 10, title: "DeepSeek Shock - 제본스의 역설과 AI 투자의 향방 - 2", date: "2025-02-18" },
    { id: 11, title: "자주 묻는 질문 : 프론트엔드 개발자 편", date: "2025-02-18" },
    { id: 12, title: "말 한 마디로 천냥 빛 갚는 기획자", date: "2025-02-18" },
    { id: 13, title: "인도의 유니콘 기업이 잘나가는 이유", date: "2025-02-18" },
    { id: 14, title: "'일머리'란 무엇일까", date: "2025-02-18" },
    { id: 15, title: "진지하지만 심각하진 않습니다", date: "2025-02-18" },
    { id: 16, title: "김용현이 쓰는 계엄과 경제", date: "2025-02-18" },
    { id: 17, title: "파이코인이란?", date: "2025-02-18" },
    { id: 18, title: "마케팅과 3", date: "2025-02-18" },
    { id: 19, title: "휴일과 경제", date: "2025-02-18" },

    

  ];

  const categories = [
    "All", 
    "Engineering", 
    "Design", 
    "Business & Sales", 
    "Daily", 
    "Weekly", 
    "Monthly", 
    "Yearly",
    "인기", 
    "추천", 
  ];

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category === selectedCategory ? null : category);
  };

  const containerStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "40px 20px",
    maxWidth: "100%",
  };

  const titleRowStyle: React.CSSProperties = {
    display: "flex",
    justifyContent: "center", // 제목, 숫자, 아이콘 그룹을 가운데 정렬
    alignItems: "center", // 세로로 가운데 정렬
    gap: "10px", // 아이템 간 간격을 추가 (옵션)
  };

  const titleStyle: React.CSSProperties = {
    fontSize: "70px",
    fontWeight: 700,
    color: "#000",
    margin: "0",
    lineHeight: "1",
  };

  const countAndIconStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column", // 숫자와 아이콘을 세로로 배치
    alignItems: "center", // 아이템을 세로로 가운데 정렬
  };

  const countStyle: React.CSSProperties = {
    fontSize: "20px",
    fontWeight: 500,
    color: "#000",
  };
  
  const iconStyle: React.CSSProperties = {
    display: "flex", // 아이콘을 flex로 설정하여 제대로 배치
  };
  

  const descriptionStyle: React.CSSProperties = {
    textAlign: "center",
    fontSize: "16px",
    color: "#7B7B7B",
    marginTop: "15px",
    marginBottom: "60px",
    lineHeight: "1.5",
  };

  const searchContainerStyle: React.CSSProperties = {
    display: "flex",
    alignItems: "center", // 아이콘과 텍스트를 가로로 배치
    justifyContent: "center",
    marginTop: "30px",
    width: "100%",
    maxWidth: "650px",
    position: "relative", // 아이콘을 부모에 상대적으로 배치하기 위해 추가
  };

  const searchInputStyle: React.CSSProperties = {
    width: "100%",
    padding: "11px 11px 11px 45px", // 왼쪽에 여백을 추가하여 아이콘이 안에 들어가게 설정
    fontSize: "14px",
    border: "1px solid #000",
    borderRadius: "20px",
    outline: "none",
  };

  const categoryContainerStyle: React.CSSProperties = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "10px",
    marginTop: "22px",
    marginBottom: "25px",
    width: "100%",
  };

  const categoryButtonStyle = (category: string): React.CSSProperties => ({
    padding: "8px 16px",
    fontSize: "14px",
    fontWeight: "500",
    borderRadius: "20px",
    border: "1px solid #000",
    cursor: "pointer",
    backgroundColor:
      selectedCategory === category ? "#000" : hoveredCategory === category ? "#d3d3d3" : "transparent",
    color: selectedCategory === category ? "#fff" : "#000",
    transition: "background-color 0.3s, color 0.3s",
    flexShrink: 0,
  });

  const cardRowStyle: React.CSSProperties = {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)", // 한 줄에 3개의 카드
    gap: "15px", // 카드 간 간격을 15px로 설정
    width: "100%", // 전체 너비를 100%로 설정
    maxWidth: "1200px", // 최대 너비를 1200px로 제한 (컨테이너의 최대 너비를 넘지 않게 설정)
    boxSizing: "border-box", // 패딩과 마진을 포함한 정확한 크기 계산
    margin: "auto", // 가운데 정렬
  };

  return (
    <div style={containerStyle}>
      {/* 타이틀 */}
      <div style={titleRowStyle}>
    <h1 style={titleStyle}>OUR ARTICLES</h1>
    <div style={countAndIconStyle}>
      <span style={countStyle}>{blogCards.length}</span>
      <span style={iconStyle}>
        <BlogIcon width={40} height={30} />
      </span>
    </div>
  </div>

      <p style={{ fontSize: "24px", fontWeight: "700", color: "#000", textAlign: "center", marginTop: "40px", marginBottom: "0" }}>
  "Goodwill Article | 새로운 시선, 깊이 있는 인사이트"
</p>

      {/* 설명 */}
      <p style={descriptionStyle}>
        지금, Goodwill이 전하는 다양한 이야기를 만나보세요.
        <br />
        트렌드, 디자인, 비즈니스 인사이트까지—놓치기 아까운 아티클을 소개합니다. 💡
      </p>

      {/*  

      <div style={searchContainerStyle}>
        <SearchIcon width={25} height={25} style={{ position: "absolute", left: "10px", zIndex: 1 }} />
        <input type="text" placeholder="GOODWILL 아티클 검색하기" style={searchInputStyle} />
      </div>

      <div style={categoryContainerStyle}>
        {categories.map((category) => (
          <button
            key={category}
            style={categoryButtonStyle(category)}
            onClick={() => handleCategoryClick(category)}
            onMouseEnter={() => setHoveredCategory(category)}
            onMouseLeave={() => setHoveredCategory(null)}
          >
            {category}
          </button>
        ))}
      </div>

      */}

      {/* 블로그 카드 */}
      <div style={cardRowStyle}>
        {blogCards.map((blog) => (
          <BlogCard key={blog.id}  id={blog.id} title={blog.title} date={blog.date} />
        ))}
      </div>

    </div>
  );
};

export default BlogMainPage;
