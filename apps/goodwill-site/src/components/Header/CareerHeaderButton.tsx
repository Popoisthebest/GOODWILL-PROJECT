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
    <motion.button css={careerButtonStyle} onClick={onClick} whileHover="hover">
      <div css={careerButtonTextContainerStyle}>
        <motion.img
          src={ArrowRightIcon}
          alt="Arrow Right"
          css={careerButtonArrowStyle}
          variants={{
            hover: { opacity: 1 },
          }}
          initial={{ opacity: 0 }}
        />
        <motion.span
          css={careerButtonTextStyle}
          variants={{
            hover: { x: 20 }, // 부모가 hover 상태일 때 자식들이 같이 이동
          }}
          transition={{ duration: 0.3, ease: [0.42, 0, 0.58, 1] }}
        >
          CAREER
        </motion.span>
      </div>
      <motion.img
        src={Dot}
        alt="Dot"
        css={careerButtonDotStyle}
        variants={{
          hover: { opacity: 0 },
        }}
        initial={{ opacity: 1 }}
      />
    </motion.button>
  );
};

export default CareerButton;
