// ApplyButton.tsx
import React from "react";

interface ApplyButtonProps {
  onClick?: () => void; // onClick prop을 전달받을 수 있도록 타입 정의
}

const ApplyButton: React.FC<ApplyButtonProps> = ({ onClick }) => {
  // handleApplyClick 함수 내부 정의
  const handleApplyClick = () => {
    if (onClick) {
      onClick(); // 부모 컴포넌트로 전달된 onClick 호출
    }
  };

  return (
    <div style={buttonContainerStyle}>
      <button style={buttonStyle} onClick={handleApplyClick}>
        입사 신청하기
      </button>
    </div>
  );
};

// 스타일 정의 (버튼 스타일)
const buttonContainerStyle: React.CSSProperties = {
  display: "flex",
  justifyContent: "center",
  marginTop: "90px",
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

export default ApplyButton;
