// src/components/Header/Header.tsx
import {
  headerStyle,
  desktopButtonContainerStyle,
  headerLogoStyle,
} from "./Header.style";
import goodwillLogo from "../../assets/logo/GOODWILL-logo.svg";
import CareerButton from "./CareerButton.tsx";
import MenuButton from "./MenuButton.tsx";
import MobileButton from "./MobileButton.tsx";

const Header = () => {
  return (
    <header css={headerStyle}>
      <img src={goodwillLogo} alt="GOODWILL logo" css={headerLogoStyle} />
      <div css={desktopButtonContainerStyle}>
        <CareerButton />
        <MenuButton />
      </div>
    </header>
  );
};

export default Header;
