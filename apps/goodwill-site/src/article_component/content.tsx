// Content.tsx
import React from "react";

interface ContentProps {
  text: string;
}

const Content: React.FC<ContentProps> = ({ text }) => {
  // 텍스트에서 줄바꿈을 <br />로 변환
  const formattedText = text.split("\n").map((line, index) => (
    <React.Fragment key={index}>
      {line}
      <br />
    </React.Fragment>
  ));

  return <p style={textStyle}>{formattedText}</p>;
};

const textStyle: React.CSSProperties = {
  fontSize: "16px",
  lineHeight: "1.6",
  color: "#000",
  textAlign: "left",
  marginTop: "0",
};

export default Content;
