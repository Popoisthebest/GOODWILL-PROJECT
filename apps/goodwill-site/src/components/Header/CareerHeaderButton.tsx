import React from "react";
import { careerButtonStyle } from "./Header.style";
import ArrowRightIcon from "../../assets/headerButtonIcon/ArrowRight.svg";

interface CareerButtonProps {
  onClick?: () => void;
}

const CareerButton: React.FC<CareerButtonProps> = ({ onClick }) => {
  return (
    <button css={careerButtonStyle} onClick={onClick}>
      <div className="text-container">
        <span className="text">CAREER <span className="dot">·</span></span>
        <img src={ArrowRightIcon} alt="Arrow Right" className="arrow-icon" />
      </div>
    </button>
  );
};

export default CareerButton;
