// Header.tsx
import React from "react";
import { useNavigate } from "react-router-dom";
import ArrowLeftIcon from "@/assets/blog_icon/arrow-left.svg?react";

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1); // 이전 페이지로 이동
  };
  
  return (
    <div style={titleContainerStyle}>
      <ArrowLeftIcon
        width={40}
        height={40}
        color="black"
        style={iconStyle}
        onClick={handleBackClick}
      />
      <h1 style={titleStyle}>{title}</h1>
    </div>
  );
};

const titleContainerStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  marginBottom: "25px",
  position: "relative",
};

const iconStyle: React.CSSProperties = {
  position: "absolute",
  top: "45px",
  left: "-100px",
  cursor: "pointer",
};

const titleStyle: React.CSSProperties = {
  fontSize: "47px",
  fontWeight: "bold",
};

export default Header;
