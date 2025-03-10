// src/components/Header/Header.tsx
import {
  headerStyle,
  desktopButtonContainerStyle,
  headerLogoStyle,
} from "./AboutHeader.style.ts";
import goodwillLogo from "../../assets/logo/GOODWILL-white-logo.svg";
import CareerButton from "./CareerButton.tsx";
import MenuButton from "./MenuButton.tsx";
import PopupMenu from "../Menu/PopupMenu.tsx";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AboutHeader = () => {
  const navigate = useNavigate();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header css={headerStyle}>
      <img
        src={goodwillLogo}
        alt="GOODWILL logo"
        onClick={() => navigate("/")}
        css={headerLogoStyle}
      />
      <div css={desktopButtonContainerStyle}>
        <CareerButton />
        {/* MenuButton에 상태 전달 */}
        <MenuButton isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />
      </div>
      {/* 팝업 메뉴를 헤더에서 렌더링 */}
      {isMenuOpen && (
        <PopupMenu isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />
      )}
    </header>
  );
};

export default AboutHeader;
