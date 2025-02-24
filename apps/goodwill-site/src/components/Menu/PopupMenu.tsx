import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import MenuItem from "./MenuItem";
import { MenuContainer, CloseButton, Overlay } from "./PopupMenu.style.ts";
import { motion } from "framer-motion";

interface PopupMenuProps {
  isOpen: boolean;
  setIsOpen: (state: boolean) => void;
}

const PopupMenu: React.FC<PopupMenuProps> = ({ isOpen, setIsOpen }) => {
  const navigate = useNavigate();
  const menuRef = useRef<HTMLDivElement>(null);

  // 데스크탑 모드에서 메뉴 밖을 클릭하면 닫히도록 설정
  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen, setIsOpen]);

  return (
    <>
      {isOpen && <div css={Overlay} />} {/* 데스크탑 모드에서 외부 클릭 감지 */}
      <motion.div
        ref={menuRef}
        css={MenuContainer}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : 10 }}
        transition={{ duration: 0.3 }}
      >
        {/* 모바일 모드에서 X 버튼 */}
        <button css={CloseButton} onClick={() => setIsOpen(false)}>
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="-0.5 -0.5 16 16"
            fill="none"
            stroke="#FFFFFF"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="feather feather-x"
            id="X--Streamline-Feather"
            whileHover={{ scale: 1.1, rotate: 180 }}
          >
            <desc>X Streamline Icon: https://streamlinehq.com</desc>
            <path d="M11.25 3.75 3.75 11.25" stroke-width="1"></path>
            <path d="m3.75 3.75 7.5 7.5" stroke-width="1"></path>
          </motion.svg>
        </button>
        <MenuItem onClick={() => navigate("/")} path="/">
          HOME
        </MenuItem>
        <MenuItem onClick={() => navigate("/about")} path="/about">
          ABOUT US
        </MenuItem>
        <MenuItem onClick={() => navigate("/projects")} path="/projects">
          PROJECTS
        </MenuItem>
        <MenuItem onClick={() => navigate("/contact")} path="/contact">
          CONTACT
        </MenuItem>
      </motion.div>
    </>
  );
};

export default PopupMenu;
