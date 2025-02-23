import React, { useState } from "react";
import { motion } from "motion/react";
import {
  menuButtonStyle,
  menuButtonTextStyle,
  menuTwoCircleStyle,
  menuDivStyle,
} from "./Header.style";
import PopupMenu from "../Menu/PopupMenu.tsx";

interface MenuButtonProps {
  onClick?: () => void;
}

const MenuButton: React.FC<MenuButtonProps> = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <motion.button
        css={menuButtonStyle}
        onClick={toggleMenu}
        whileHover="hover"
        variants={{
          hover: {
            backgroundColor: "#FFFFFF",
          },
        }}
        animate={{ backgroundColor: isOpen ? "#FFFFFF" : "#05308C" }}
      >
        <motion.div
          css={menuButtonTextStyle}
          variants={{
            hover: {
              color: "#05308C",
            },
          }}
          animate={{ color: isOpen ? "#05308C" : "#FFFFFF" }}
        >
          <motion.span animate={{ y: isOpen ? -27 : 0 }}>MENU</motion.span>
          <motion.span animate={{ y: isOpen ? -27 : 0 }}>CLOSE</motion.span>
        </motion.div>
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
          animate={{ rotate: isOpen ? 90 : 0 }}
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
            animate={{ fill: isOpen ? "#05308C" : "#FFFFFF" }}
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
            animate={{ fill: isOpen ? "#05308C" : "#FFFFFF" }}
          />
        </motion.svg>
      </motion.button>
      <motion.div css={menuDivStyle} animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? -65 : -50 }}>
        {isOpen && <PopupMenu />}
      </motion.div>
    </div>
  );
};

export default MenuButton;
