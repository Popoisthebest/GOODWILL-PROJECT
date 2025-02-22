import React from "react";
import { motion } from "motion/react";
import {
  careerButtonStyle,
  careerButtonTextContainerStyle,
  careerButtonTextStyle,
  careerButtonArrowStyle,
  careerButtonDotStyle,
} from "./Header.style";
import ArrowRightIcon from "../../assets/headerButtonIcon/ArrowRight.svg";
import Dot from "../../assets/headerButtonIcon/Dot.svg";

interface CareerButtonProps {
  onClick?: () => void;
}

const CareerButton: React.FC<CareerButtonProps> = ({ onClick }) => {
  return (
    <button css={careerButtonStyle} onClick={onClick}>
      <div css={careerButtonTextContainerStyle}>
        <img
          src={ArrowRightIcon}
          alt="Arrow Right"
          css={careerButtonArrowStyle}
        />
        <span css={careerButtonTextStyle}>CAREER</span>
        <img src={Dot} alt="Dot" css={careerButtonDotStyle} />
      </div>
    </button>
  );
};

export default CareerButton;
