import React from "react";
import { motion } from "motion/react";
import {
  menuButtonStyle,
  menuButtonTextDivStyle,
  menuButtonTextStyle,
  menuTwoCircleStyle,
  mobileButtonStyle,
  mobileButtonDotContainer,
  mobileButtonContainerStyle,
} from "./Header.style";

interface MenuButtonProps {
  isOpen: boolean;
  setIsOpen: (state: boolean) => void;
}

const MenuButton: React.FC<MenuButtonProps> = ({ isOpen, setIsOpen }) => {
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* 데스크탑 메뉴 버튼 */}
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
        <motion.div css={menuButtonTextDivStyle}>
          <motion.span
            css={menuButtonTextStyle}
            variants={{
              hover: {
                color: "#05308C",
              },
            }}
            animate={{
              y: isOpen ? -27 : 0,
              color: isOpen ? "#05308C" : "#FFFFFF",
            }}
          >
            MENU
          </motion.span>
          <motion.span
            css={menuButtonTextStyle}
            animate={{
              y: isOpen ? -27 : 0,
              color: isOpen ? "#05308C" : "#FFFFFF",
            }}
          >
            CLOSE
          </motion.span>
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
      {/* 모바일 전용 메뉴 버튼 */}
      <div css={mobileButtonContainerStyle}>
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
      </div>
    </div>
  );
};

export default MenuButton;
