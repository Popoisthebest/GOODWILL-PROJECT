import React from "react";

const ToMainButton: React.FC = () => {
  const buttonStyle: React.CSSProperties = {
    width: "100%",
    backgroundColor: "#002F6C",
    color: "#fff",
    fontSize: "16px",
    fontWeight: 500,
    textAlign: "center",
    borderRadius: "8px",
    cursor: "pointer",
    border: "none",
    marginBottom: "70px",
    padding: "15px 0",
  };

  return <button style={buttonStyle}>메인으로 돌아가기</button>;
};

export default ToMainButton;
