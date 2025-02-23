import { headerStyle, buttonContainerStyle } from "./Header.style";
import goodwillLogo from "../../assets/logo/GOODWILL-logo.svg";
import CareerButton from "./CareerButton.tsx";
import MenuButton from "./MenuButton.tsx";

const Header = () => {
  return (
    <header css={headerStyle}>
      <img src={goodwillLogo} alt="GOODWILL logo" />
      <div css={buttonContainerStyle}>
        <CareerButton />
        <MenuButton />
      </div>
    </header>
  );
};

export default Header;
