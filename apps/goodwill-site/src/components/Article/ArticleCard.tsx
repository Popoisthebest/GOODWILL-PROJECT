import React from "react";

const BlogCard: React.FC<{ title: string; date: string }> = ({
  title,
  date,
}) => {
  const cardStyle: React.CSSProperties = {
    backgroundColor: "#f0f0f0", // 카드 배경색
    borderRadius: "10px", // 카드 모서리 둥글게
    width: "435px", // 카드 너비
    height: "286px", // 카드 높이
    display: "flex",
  };

  const textContainerStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column", // 텍스트를 세로로 배치
    alignItems: "flex-start", // 텍스트 왼쪽 정렬
    width: "100%",
  };

  const titleStyle: React.CSSProperties = {
    fontWeight: 600,
    fontSize: "22px",
    margin: "0",
  };

  const dateStyle: React.CSSProperties = {
    fontSize: "14px",
    color: "#777",
    marginBottom: "5px",
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginBottom: "37`px",
      }}
    >
      <div style={cardStyle}>{/* 카드 내용은 비워두기 */}</div>
      <div style={textContainerStyle}>
        <p style={dateStyle}>{date}</p>
        <h2 style={titleStyle}>{title}</h2>
      </div>
    </div>
  );
};

export default BlogCard;
