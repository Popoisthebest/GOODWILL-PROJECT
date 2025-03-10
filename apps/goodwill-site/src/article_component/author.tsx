import React from "react";

interface AuthorProps {
  name: string;
  description: string;
  image: string;
}

const Author: React.FC<AuthorProps> = ({ name, description, image }) => {
  return (
    <div style={authorWrapperStyle}>
      <h2 style={authorTitleStyle}>작성자</h2>
      <div style={authorContainerStyle}>
        <img src={image} alt="author" style={authorImageStyle} />
        <div style={authorTextContainerStyle}>
          <div style={authorNameStyle}>{name}</div>
          <div style={authorDescriptionStyle}>{description}</div>
        </div>
      </div>
    </div>
  );
};

// 스타일 정의
const authorWrapperStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  maxWidth: "675px",
  width: "100%", // 부모 컨테이너를 꽉 채움
  margin: "0 auto",
  marginTop: "105px",
  marginBottom: "100px",
};

const authorTitleStyle: React.CSSProperties = {
  fontSize: "30px",
  fontWeight: "bold",
  marginBottom: "15px",
  textAlign: "left",
};

const authorContainerStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  backgroundColor: "#F5F5F5",
  borderRadius: "12px",
  padding: "5px",
  minHeight: "150px",
  width: "100%", // 부모(authorWrapperStyle)를 가득 채움
};

const authorImageStyle: React.CSSProperties = {
  width: "100px",
  height: "100px",
  borderRadius: "50%",
  backgroundColor: "#ddd",
  marginLeft: "20px",
  marginRight: "20px",
  flexShrink: 0,
};

const authorTextContainerStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  marginRight: "20px",
};

const authorNameStyle: React.CSSProperties = {
  fontWeight: "700",
  fontSize: "20px",
  marginBottom: "8px",
};

const authorDescriptionStyle: React.CSSProperties = {
  fontSize: "14px",
  color: "#333",
  lineHeight: "1.5",
};

export default Author;
