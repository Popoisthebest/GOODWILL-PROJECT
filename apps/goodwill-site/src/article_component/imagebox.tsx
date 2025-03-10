import React from "react";

interface ImageBoxProps {
  image: string; // 이미지 파일 경로를 prop으로 받음
  alt?: string; // 접근성을 위한 alt 속성
}

const ImageBox: React.FC<ImageBoxProps> = ({ image, alt = "Article Image" }) => {
  return (
    <div style={imageBoxStyle}>
      <img src={image} alt={alt} style={imageStyle} />
    </div>
  );
};

const imageBoxStyle: React.CSSProperties = {
  width: "100%",  // 컨테이너가 가질 수 있는 최대 너비 사용
  maxWidth: "800px", // 너무 커지지 않도록 최대 크기 제한
  borderRadius: "8px",
  backgroundColor: "#ddd",
  overflow: "hidden", // 넘치는 부분 깔끔하게 자르기
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginTop: "25px",
};

const imageStyle: React.CSSProperties = {
  width: "100%", // 부모 컨테이너에 맞춤
  height: "auto", // 원본 비율 유지하면서 조절
  display: "block", // 이미지가 inline 요소가 아니라 block 요소로 동작하도록 설정
};

export default ImageBox;
