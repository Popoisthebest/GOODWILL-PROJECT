import React from "react";
import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";
import {
  careerButtonStyle,
  careerButtonTextContainerStyle,
  careerButtonTextStyle,
  careerButtonArrowStyle,
  careerButtonDotStyle,
} from "./Header.style";
import ArrowRightIcon from "../../assets/headerButtonIcon/ArrowRight.svg";
import Dot from "../../assets/headerButtonIcon/Dot.svg";

const CareerButton: React.FC = () => {
  const navigate = useNavigate();  // useNavigate를 컴포넌트 최상단에 배치

  const handleClick = () => {
    navigate("/career");  // 이벤트 핸들러에서 navigate 사용
  };

  return (
    <motion.button
      css={careerButtonStyle}
      onClick={handleClick}
      whileHover="hover"
    >
      <div>
        <div css={careerButtonTextContainerStyle}>
          <motion.img
            src={ArrowRightIcon}
            alt="Arrow Right"
            css={careerButtonArrowStyle}
            variants={{
              hover: { opacity: 1 },
            }}
            initial={{ opacity: 0 }}
            transition={{ duration: 0.1 }}
          />
          <motion.span
            css={careerButtonTextStyle}
            variants={{
              hover: { x: 25 }, // 부모가 hover 상태일 때 자식들이 같이 이동
            }}
          >
            CAREER
          </motion.span>
          <motion.img
            src={Dot}
            alt="Dot"
            css={careerButtonDotStyle}
            variants={{
              hover: { opacity: 0 },
            }}
            initial={{ opacity: 1 }}
          />
        </div>
      </div>
    </motion.button>
  );
};

export default CareerButton;
