import React from "react";
import { useLocation } from "react-router-dom";
import { Item, ItemText, IconDiv, Dot } from "./PopupMenu.style.ts";
import { motion } from "motion/react";

interface MenuItemProps {
  onClick?: () => void; // 클릭 이벤트 핸들러
  children: React.ReactNode; // 표시할 텍스트 또는 요소
  path: string; // 이 메뉴 아이템이 연결된 경로
}

const MenuItem: React.FC<MenuItemProps> = ({ onClick, children, path }) => {
  const location = useLocation();
  const isActive = location.pathname === path; // 현재 경로와 메뉴 아이템의 경로 비교

  console.log(location.pathname);

  return (
    <motion.div
      css={Item}
      onClick={onClick}
      whileHover="hover"
      variants={{
        hover: {
          backgroundColor: isActive ? "#FFFFFF" : "#E6E9F5",
        },
      }}
      initial={{ backgroundColor: "#FFFFFF" }}
    >
      <div css={ItemText}>
        <motion.span
          variants={{
            hover: { y: isActive ? 0 : -30 },
          }}
        >
          {children}
        </motion.span>
        <motion.span
          variants={{
            hover: { y: isActive ? 0 : -30 },
          }}
        >
          {children}
        </motion.span>
      </div>
      <div css={IconDiv}>
        {isActive && (
          <svg
            width="6"
            height="6"
            viewBox="0 0 3 3"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            css={Dot}
          >
            <circle id="Ellipse 8" cx="1.5" cy="1.5" r="1.5" fill="black" />
          </svg>
        )}
        <motion.svg
          width="24"
          height="24"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          variants={{
            hover: {
              opacity: isActive ? 0 : 1,
              scale: isActive ? 0 : 1,
            },
          }}
          initial={{ opacity: 0, scale: 0 }}
          transition={{ duration: 0.3, ease: [0.42, 0, 0.58, 1] }}
        >
          <g id="Phosphor Icons Regular / ArrowRight">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M1.5 6C1.5 5.79289 1.66789 5.625 1.875 5.625H10.125C10.3321 5.625 10.5 5.79289 10.5 6C10.5 6.20711 10.3321 6.375 10.125 6.375H1.875C1.66789 6.375 1.5 6.20711 1.5 6Z"
              fill="black"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M6.48483 2.35983C6.63128 2.21339 6.86872 2.21339 7.01517 2.35983L10.3902 5.73484C10.5366 5.88128 10.5366 6.11872 10.3902 6.26516L7.01517 9.64017C6.86872 9.78661 6.63128 9.78661 6.48483 9.64017C6.33839 9.49372 6.33839 9.25628 6.48483 9.10983L9.59467 6L6.48483 2.89017C6.33839 2.74372 6.33839 2.50628 6.48483 2.35983Z"
              fill="black"
            />
          </g>
        </motion.svg>
      </div>
    </motion.div>
  );
};

export default MenuItem;
