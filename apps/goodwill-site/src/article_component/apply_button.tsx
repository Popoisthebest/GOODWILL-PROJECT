// ApplyButton.tsx
import React from "react";
import { useNavigate } from "react-router-dom";

interface ApplyButtonProps {
  onClick?: () => void; // onClick prop을 전달받을 수 있도록 타입 정의
}

const ApplyButton: React.FC<ApplyButtonProps> = () => {
  const navigate = useNavigate();

  return (
    <div style={buttonContainerStyle}>
      <button style={buttonStyle} onClick={()=>{navigate("/career")}}>
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
