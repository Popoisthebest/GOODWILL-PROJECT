import React, { useState } from "react";
import BlogCard from "../components/article/ArticleCard.tsx";
import DefaultLayout from "../layouts/DefaultLayout.tsx";

const Article: React.FC = () => {
  const BlogIcon = "../assets/blog_icon/light_arrow-left.svg?react";
  const SearchIcon = "../assets/blog_icon/MagnifyingGlass.svg";

  const [selectedCategory, setSelectedCategory] = useState<string | null>(
    "All",
  );
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);

  const blogCards = [
    { title: "제목을 입력해 주세요.", date: "2025-02-18" },
    { title: "제목을 입력해 주세요.", date: "2025-02-18" },
    { title: "제목을 입력해 주세요.", date: "2025-02-18" },
    { title: "제목을 입력해 주세요.", date: "2025-02-18" },
    { title: "제목을 입력해 주세요.", date: "2025-02-18" },
    { title: "제목을 입력해 주세요.", date: "2025-02-18" },
    { title: "제목을 입력해 주세요.", date: "2025-02-18" },
    { title: "제목을 입력해 주세요.", date: "2025-02-18" },
    { title: "제목을 입력해 주세요.", date: "2025-02-18" },
    { title: "제목을 입력해 주세요.", date: "2025-02-18" },
    { title: "제목을 입력해 주세요.", date: "2025-02-18" },
    { title: "제목을 입력해 주세요.", date: "2025-02-18" },
    { title: "제목을 입력해 주세요.", date: "2025-02-18" },
    { title: "제목을 입력해 주세요.", date: "2025-02-18" },
    { title: "제목을 입력해 주세요.", date: "2025-02-18" },
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
      selectedCategory === category
        ? "#000"
        : hoveredCategory === category
          ? "#d3d3d3"
          : "transparent",
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
    <DefaultLayout>
      <div style={containerStyle}>
        {/* 타이틀 */}
        <div style={titleRowStyle}>
          <h1 style={titleStyle}>OUR ARTICLES</h1>
          <div style={countAndIconStyle}>
            <span style={countStyle}>{blogCards.length}</span>
            <span style={iconStyle}>
              <img src={BlogIcon} alt="blog-icon" width={40} height={30} />
            </span>
          </div>
        </div>

        <p
          style={{
            fontSize: "24px",
            fontWeight: "700",
            color: "#000",
            textAlign: "center",
            marginTop: "40px",
            marginBottom: "0",
          }}
        >
          "Goodwill Article | 새로운 시선, 깊이 있는 인사이트"
        </p>

        {/* 설명 */}
        <p style={descriptionStyle}>
          지금, Goodwill이 전하는 다양한 이야기를 만나보세요.
          <br />
          트렌드, 디자인, 비즈니스 인사이트까지—놓치기 아까운 아티클을
          소개합니다. 💡
        </p>

        {/* 검색창 */}
        <div style={searchContainerStyle}>
          <img
            src={SearchIcon}
            alt="search-icon"
            width={25}
            height={25}
            style={{ position: "absolute", left: "10px", zIndex: 1 }}
          />
          <input
            type="text"
            placeholder="GOODWILL 아티클 검색하기"
            style={searchInputStyle}
          />
        </div>

        {/* 카테고리 버튼 리스트 */}
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

        {/* 블로그 카드 */}
        <div style={cardRowStyle}>
          {blogCards.map((blog, index) => (
            <BlogCard key={index} title={blog.title} date={blog.date} />
          ))}
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Article;
