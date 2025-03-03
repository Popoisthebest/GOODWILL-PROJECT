// src/components/Header/Header.tsx
import {
  headerStyle,
  desktopButtonContainerStyle,

} from "./Header.style";
import CareerButton from "./CareerButton.tsx";
import MenuButton from "./MenuButton.tsx";
import PopupMenu from "../Menu/PopupMenu.tsx";
import { useState } from "react";
import Logo from "../Logo/Logo.tsx";

const Header = () => {
  // 🔥 메뉴의 Open 상태를 여기에서 관리
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header css={headerStyle}>
      <Logo/>
      <div css={desktopButtonContainerStyle}>
        <CareerButton />
        {/* MenuButton에 상태 전달 */}
        <MenuButton isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />
      </div>
      {/* 팝업 메뉴를 헤더에서 렌더링 */}
      {isMenuOpen && <PopupMenu isOpen={isMenuOpen} setIsOpen={setIsMenuOpen}/>}
    </header>
  );
};

export default Header;
