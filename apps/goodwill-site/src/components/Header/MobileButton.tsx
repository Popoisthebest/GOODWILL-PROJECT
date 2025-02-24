// src/components/Header/MobileButton.tsx
import React, { useState } from "react";
import { motion } from "motion/react";
import PopupMenu from "../Menu/PopupMenu.tsx";
import {
  mobileButtonStyle,
  mobileButtonDotContainer,
  mobileButtonDot,
  menuTwoCircleStyle,
  menuDivStyle,
} from "./Header.style";

const MobileButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <motion.button
        onClick={toggleMenu}
        css={mobileButtonStyle}
        whileHover="hover"
        variants={{
          hover: {
            backgroundColor: "#EBECF2",
          },
        }}
      >
        <div css={mobileButtonDotContainer}>
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
            <motion.circle cx="7.5" cy="1.5" r="1.5" fill="black" />
            <motion.circle cx="1.5" cy="1.5" r="1.5" fill="black" />
          </motion.svg>
        </div>
      </motion.button>
      <motion.div
        css={menuDivStyle}
        animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? -65 : -50 }}
      >
        {isOpen && <PopupMenu />}
      </motion.div>
    </div>
  );
};

export default MobileButton;
