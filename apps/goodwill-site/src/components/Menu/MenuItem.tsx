import React from "react";
import { Item, ItemText } from "./PopupMenu.style.ts";
import { motion } from "motion/react";

interface MenuItemProps {
  onClick?: () => void; // 클릭 이벤트 핸들러
  children: React.ReactNode; // 표시할 텍스트 또는 요소
}

const MenuItem: React.FC<MenuItemProps> = ({ onClick, children }) => {
  return (
    <motion.div
      css={Item}
      onClick={onClick}
      whileHover="hover"
      variants={{
        hover: {
          backgroundColor: "#E6E9F5",
        },
      }}
      initial={{ backgroundColor: "#FFFFFF" }}
    >
      <div css={ItemText}>
        <motion.span
          variants={{
            hover: { y: -30 },
          }}
        >
          {children}
        </motion.span>
        <motion.span
          variants={{
            hover: { y: -30 },
          }}
        >
          {children}
        </motion.span>
      </div>
      <motion.svg
        width="24"
        height="24"
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        variants={{
          hover: {
            opacity: 1,
            scale: 1,
          },
        }}
        initial={{ opacity: 0, scale: 0 }}
        transition={{ duration: 0.3, ease: [0.42, 0, 0.58, 1] }}
      >
        <g id="Phosphor Icons Regular / ArrowRight">
          <path
            id="Vector (Stroke)"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M1.5 6C1.5 5.79289 1.66789 5.625 1.875 5.625H10.125C10.3321 5.625 10.5 5.79289 10.5 6C10.5 6.20711 10.3321 6.375 10.125 6.375H1.875C1.66789 6.375 1.5 6.20711 1.5 6Z"
            fill="black"
          />
          <path
            id="Vector (Stroke)_2"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M6.48483 2.35983C6.63128 2.21339 6.86872 2.21339 7.01517 2.35983L10.3902 5.73484C10.5366 5.88128 10.5366 6.11872 10.3902 6.26516L7.01517 9.64017C6.86872 9.78661 6.63128 9.78661 6.48483 9.64017C6.33839 9.49372 6.33839 9.25628 6.48483 9.10983L9.59467 6L6.48483 2.89017C6.33839 2.74372 6.33839 2.50628 6.48483 2.35983Z"
            fill="black"
          />
        </g>
      </motion.svg>
    </motion.div>
  );
};

export default MenuItem;
