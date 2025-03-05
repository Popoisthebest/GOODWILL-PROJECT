// src/components/Header/Header.tsx
import {
  headerStyle,
  desktopButtonContainerStyle,
  headerLogoStyle,
} from "./Header.style";
import goodwillLogo from "../../assets/logo/goodwill-logo.svg";
import CareerButton from "./Button/CareerButton.tsx";
import MenuButton from "./Button/MenuButton.tsx";
import PopupMenu from "../Menu/PopupMenu/PopupMenu.tsx";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
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

export default Header;
