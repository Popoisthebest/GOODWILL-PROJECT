import React from "react";
import BlogCard from "../components/Article/ArticleCard.tsx";
import BlogIcon from "../assets/article_icon/light_arrow-left.svg";

const ArticleMainPage: React.FC = () => {
  const containerStyle: React.CSSProperties = {
    display: "flex",
    maxWidth: "100%",
    flexDirection: "column",
    alignItems: "baseline",
    justifyContent: "center",
    height: "100%",
    margin: "0 80px",
  };

  const rowStyle: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
  };

  const titleStyle: React.CSSProperties = {
    color: "#000",
    fontFamily: "Aeonik TRIAL",
    fontSize: "105px",
    fontWeight: 600,
    margin: "0",
  };

  const paragraphStyle: React.CSSProperties = {
    fontSize: "17px",
    color: "#7B7B7B",
    width: "100%",
    margin: "0",
  };

  const cardRowStyle: React.CSSProperties = {
    display: "flex",
    flexWrap: "wrap",
    gap: "18px",
    justifyContent: "space-between",
  };

  // 빈 공간을 위한 스타일
  const emptySpaceStyle: React.CSSProperties = {
    minHeight: "65px",
  };

  return (
    <div style={containerStyle}>
      <div style={emptySpaceStyle} />

      <div style={rowStyle}>
        <h1 style={titleStyle}>OUR ARTICLES</h1>
        <img src={BlogIcon} alt="" />
      </div>
      <p style={paragraphStyle}>
        GoodWill 블로그는 기술, 경영, 디자인 등 다양한 분야에서 우리가 연구하고
        경험한 인사이트를 공유하는 공간입니다. 플랫폼, AI, 로봇틱스, 메타버스 등
        혁신적인 기술과 실무 프로젝트 소식을 전하며, 창의적인 아이디어와 새로운
        시도를 기획합니다.
      </p>
      <br />
      <p style={paragraphStyle}>
        또한, GoodWill의 뉴스레터를 통해 동아리 활동과 최신 트렌드를 한눈에
        확인할 수 있습니다. 미래를 만들어가는 여정에 함께하고 싶다면, GoodWill
        블로그에서 우리의 이야기를 만나보세요!
      </p>
      <br />
      <br />
      <div style={cardRowStyle}>
        <BlogCard title="제목을 입력해 주세요." date="2025-02-18" />
        <BlogCard title="제목을 입력해 주세요." date="2025-02-18" />
        <BlogCard title="제목을 입력해 주세요." date="2025-02-18" />
        <BlogCard title="제목을 입력해 주세요." date="2025-02-18" />
        <BlogCard title="제목을 입력해 주세요." date="2025-02-18" />
        <BlogCard title="제목을 입력해 주세요." date="2025-02-18" />
        <BlogCard title="제목을 입력해 주세요." date="2025-02-18" />
        <BlogCard title="제목을 입력해 주세요." date="2025-02-18" />
        <BlogCard title="제목을 입력해 주세요." date="2025-02-18" />
        <BlogCard title="제목을 입력해 주세요." date="2025-02-18" />
        <BlogCard title="제목을 입력해 주세요." date="2025-02-18" />
        <BlogCard title="제목을 입력해 주세요." date="2025-02-18" />
      </div>
    </div>
  );
};

export default ArticleMainPage;
