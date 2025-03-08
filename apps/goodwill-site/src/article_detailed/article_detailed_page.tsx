import React from "react";
import ArrowLeftIcon from "../assets/blog_icon/arrow-left.svg?react";
import BlogCard from "../blog_main/blog_card";

// 스타일 변수 설정
const containerStyle: React.CSSProperties = {
  maxWidth: "800px",
  margin: "0 auto",
  marginTop: "50px",
  padding: "20px",
  fontFamily: "Arial, sans-serif",
  display: "flex",
  flexDirection: "column",
  position: "relative", // 제목과 아이콘을 같은 영역 안에서 배치
};

const titleContainerStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "center", // 아이콘과 제목을 같은 높이에 배치
  marginBottom: "25px", // 제목 아래 요소들과의 간격
  position: "relative", // 제목과 아이콘을 같은 위치에서 조정
};

const iconStyle: React.CSSProperties = {
  position: "absolute",
  top: "35",
  left: "-95px", // 아이콘을 제목 왼쪽으로 50px 떨어지게 배치
  cursor: "pointer",
};

const titleStyle: React.CSSProperties = {
  fontSize: "40px",
  fontWeight: "bold",
  
};

const contentContainerStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: "10px", // 요소 간격
};

const imageBoxStyle: React.CSSProperties = {
  width: "100%", // 전체 너비를 사용
  position: "relative", // padding-bottom을 적용하기 위한 relative 설정
  paddingBottom: "56.25%", // 16:9 비율 (9/16 = 0.5625 -> 56.25%)
  backgroundColor: "#ddd", // 배경색 설정
  borderRadius: "8px",
};

const textStyle: React.CSSProperties = {
  fontSize: "16px",
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

  // 입사 신청하기 버튼

  const buttonContainerStyle: React.CSSProperties = {
    display: "flex",
    justifyContent: "center", // 가로 중앙 정렬
    marginTop: "45px", // 위쪽 여백 추가
  };

  const buttonStyle: React.CSSProperties = {
    backgroundColor: "#05308C",
    color: "#FFFFFF",
    padding: "16px 25px",
    fontSize: "16px",
    border: "none",
    borderRadius: "7px",
    cursor: "pointer",
    textAlign: "center",
    width: "235px",
  };

  // 작성자 소개란

  const authorWrapperStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    maxWidth: "675px",
    margin: "0 auto",
    marginTop: "135px",
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
    padding: "5px", // 세로 길이 늘리기
    minHeight: "150px", // 최소 높이 추가
  };
  
  const authorImageStyle: React.CSSProperties = {
    width: "80px", // 크기 키움
    height: "80px",
    borderRadius: "50%",
    backgroundColor: "#ddd",
    marginLeft: "20px",
    marginRight: "20px",
    flexShrink: 0, // 크기가 줄어들지 않도록 고정
  };
  
  const authorTextContainerStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    marginRight: "5px",
  };
  
  const authorNameStyle: React.CSSProperties = {
    fontWeight: "w700",
    fontSize: "20px",
    marginBottom: "8px",
  };
  
  const authorDescriptionStyle: React.CSSProperties = {
    fontSize: "14px",
    color: "#333",
    lineHeight: "1.5",
  };


// 전체 페이지 컴포넌트
const ArticleDetailPage = () => {
  return (
    <div style={containerStyle}>
      {/* 제목과 아이콘을 같은 위치에서 아이콘을 독립적으로 배치 */}
      <div style={titleContainerStyle}>
        <ArrowLeftIcon width={38} height={38} color="black" style={iconStyle} />
        <h1 style={titleStyle}>제목을 입력해 주세요. 제목을 입력해 주세요.</h1>
      </div>

      {/* 제목 아래로 나머지 요소들 정렬 */}
      <div style={contentContainerStyle}>
        {/* 이미지 박스 */}
        <div style={imageBoxStyle}></div>

        {/* 중간 제목 */}
        <h2 style={{ ...titleStyle, fontSize: "27px" }}>
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

        {/* 중간 제목 */}
        <h2 style={{ ...titleStyle, fontSize: "27px" }}>
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
        <p style={textStyle}>
          본문을 입력해 주세요. 본문을 입력해 주세요. 본문을 입력해 주세요. 본문을 입력해 주세요. 
          본문을 입력해 주세요. 본문을 입력해 주세요. 본문을 입력해 주세요. 본문을 입력해 주세요.
          본문을 입력해 주세요. 본문을 입력해 주세요. 본문을 입력해 주세요. 본문을 입력해 주세요.
          본문을 입력해 주세요. 본문을 입력해 주세요. 본문을 입력해 주세요. 본문을 입력해 주세요.
          본문을 입력해 주세요. 본문을 입력해 주세요. 본문을 입력해 주세요. 본문을 입력해 주세요.
        </p>
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
        <h2 style={{ ...titleStyle, fontSize: "27px" }}>
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

        <div style={buttonContainerStyle}>
        <button style={buttonStyle}>입사 신청하기</button>
        </div>

      <div style={authorWrapperStyle}>
        {/* 제목 */}
        <div style={authorTitleStyle}>작성자</div>
      
        {/* 작성자 정보 박스 */}
        <div style={authorContainerStyle}>

            {/* 프로필 이미지 */}
          <div style={authorImageStyle}></div>
        
          {/* 작성자 정보 */}
          <div style={authorTextContainerStyle}>
            <span style={authorNameStyle}>작성자</span>
            <span style={authorDescriptionStyle}>
            굿윌에서 오퍼레이션 매니저를 맡고 있습니다. 더 좋은 사람들과 즐겁게 일할 수 있는 굿윌을 
            만들기 위해 고민하고 있습니다. Agora에 관심이 많아 퇴근해서도 Agora 관련 활동을 하고 있습니다!
            </span>
          </div>
        </div>
      </div>


      </div>
    </div>
  );
};

export default ArticleDetailPage;
