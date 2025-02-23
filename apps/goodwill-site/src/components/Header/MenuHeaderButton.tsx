import React from "react";
import { motion } from "motion/react";
import {
  menuButtonStyle,
  menuButtonTextContainerStyle,
  menuButtonTextStyle,
  menuTwoCircleStyle,
} from "./Header.style";

interface MenuButtonProps {
  onClick?: () => void;
}

const MenuButton: React.FC<MenuButtonProps> = ({ onClick }) => {
  return (
    <motion.button
      css={menuButtonStyle}
      onClick={onClick}
      whileHover="hover"
      variants={{
        hover: {
          backgroundColor: "#FFFFFF",
        },
      }}
    >
      <div css={menuButtonTextContainerStyle}>
        <motion.span
          css={menuButtonTextStyle}
          variants={{
            hover: {
              color: "#05308C",
            },
          }}
          transition={{ duration: 0.3, ease: [0.42, 0, 0.58, 1] }}
        >
          MENU
        </motion.span>
        <motion.svg
          css={menuTwoCircleStyle}
          viewBox="0 0 9 3"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          variants={{
            hover: {
              rotate: 90,
            },
          }}
          transition={{ duration: 0.3, ease: [0.42, 0, 0.58, 1] }}
        >
          <motion.circle
            cx="7.5"
            cy="1.5"
            r="1.5"
            fill="white"
            variants={{
              hover: { fill: "#05308C" },
              initial: { fill: "white" },
            }}
          />
          <motion.circle
            cx="1.5"
            cy="1.5"
            r="1.5"
            fill="white"
            variants={{
              hover: { fill: "#05308C" },
              initial: { fill: "white" },
            }}
          />
        </motion.svg>
      </div>
    </motion.button>
  );
};

export default MenuButton;
