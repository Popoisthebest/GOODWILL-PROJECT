import React from "react";
import ArrowLeftIcon from "../assets/blog_icon/arrow-left.svg?react";

// 스타일 변수 설정
const containerStyle: React.CSSProperties = {
  maxWidth: "700px",
  margin: "0 auto",
  padding: "20px",
  fontFamily: "Arial, sans-serif",
  display: "flex",
  flexDirection: "column",
  position: "relative", // 제목과 아이콘을 같은 영역 안에서 배치
};

const titleContainerStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "center", // 아이콘과 제목을 같은 높이에 배치
  marginBottom: "20px", // 제목 아래 요소들과의 간격
  position: "relative", // 제목과 아이콘을 같은 위치에서 조정
};

const iconStyle: React.CSSProperties = {
  position: "absolute",
  top: "30",
  left: "-80px", // 아이콘을 제목 왼쪽으로 50px 떨어지게 배치
};

const titleStyle: React.CSSProperties = {
  fontSize: "37px",
  fontWeight: "bold",
  
};

const contentContainerStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: "10px", // 요소 간격
};

const imageBoxStyle: React.CSSProperties = {
  width: "100%",
  height: "400px",
  backgroundColor: "#ddd",
  borderRadius: "8px",
};

const textStyle: React.CSSProperties = {
  fontSize: "15px",
  lineHeight: "1.6",
  color: "#000",
  textAlign: "left",
  marginTop: "0",
};

const grayLineStyle: React.CSSProperties = {
    borderBottom: "1px solid #ddd", // 회색 선 추가
    marginTop: "20px", // 선과 본문 사이의 여백
    marginBottom: "20px",
  };

// 전체 페이지 컴포넌트
const ArticleDetailPage = () => {
  return (
    <div style={containerStyle}>
      {/* 제목과 아이콘을 같은 위치에서 아이콘을 독립적으로 배치 */}
      <div style={titleContainerStyle}>
        <ArrowLeftIcon width={35} height={35} color="black" style={iconStyle} />
        <h1 style={titleStyle}>제목을 입력해 주세요. 제목을 입력해 주세요.</h1>
      </div>

      {/* 제목 아래로 나머지 요소들 정렬 */}
      <div style={contentContainerStyle}>
        {/* 이미지 박스 */}
        <div style={imageBoxStyle}></div>

        {/* 중간 제목 */}
        <h2 style={{ ...titleStyle, fontSize: "25px" }}>
          제목을 입력해 주세요. 제목을 입력해 주세요. 제목을 입력해 주세요.
        </h2>

        {/* 본문 텍스트 */}
        <p style={textStyle}>
          본문을 입력해 주세요. 본문을 입력해 주세요. 본문을 입력해 주세요. 본문을 입력해 주세요. 
          본문을 입력해 주세요. 본문을 입력해 주세요. 본문을 입력해 주세요. 본문을 입력해 주세요.
          본문을 입력해 주세요. 본문을 입력해 주세요. 본문을 입력해 주세요. 본문을 입력해 주세요.
          본문을 입력해 주세요. 본문을 입력해 주세요. 본문을 입력해 주세요. 본문을 입력해 주세요.
          본문을 입력해 주세요. 본문을 입력해 주세요. 본문을 입력해 주세요. 본문을 입력해 주세요.
        </p>
        {/* 회색 선 추가 */}
        <div style={grayLineStyle}></div>

        {/* 이미지 박스 */}
        <div style={imageBoxStyle}></div>

        {/* 중간 제목 */}
        <h2 style={{ ...titleStyle, fontSize: "25px" }}>
          제목을 입력해 주세요. 제목을 입력해 주세요. 제목을 입력해 주세요.
        </h2>

        {/* 본문 텍스트 */}
        <p style={textStyle}>
          본문을 입력해 주세요. 본문을 입력해 주세요. 본문을 입력해 주세요. 본문을 입력해 주세요. 
          본문을 입력해 주세요. 본문을 입력해 주세요. 본문을 입력해 주세요. 본문을 입력해 주세요.
          본문을 입력해 주세요. 본문을 입력해 주세요. 본문을 입력해 주세요. 본문을 입력해 주세요.
          본문을 입력해 주세요. 본문을 입력해 주세요. 본문을 입력해 주세요. 본문을 입력해 주세요.
          본문을 입력해 주세요. 본문을 입력해 주세요. 본문을 입력해 주세요. 본문을 입력해 주세요.
        </p>
        {/* 회색 선 추가 */}
        <div style={grayLineStyle}></div>
      </div>
    </div>
  );
};

export default ArticleDetailPage;
