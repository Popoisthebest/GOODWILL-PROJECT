import React from "react";
import { css } from "@emotion/react";
import { headerStyle, buttonContainerStyle } from "./Header.style";
import goodwillLogo from "../../assets/logo/GOODWILL-logo.svg"
import CareerHeaderButton from "./CareerHeaderButton.tsx"
import MenuHeaderButton from "./MenuHeaderButton.tsx"

const Header = () => {
    return (
        <header css={headerStyle}>
            <img src={goodwillLogo} alt="GOODWILL logo" />
            <div css={buttonContainerStyle}>
                <CareerHeaderButton onClick={() => alert("CAREER 버튼 클릭!")} />
                <MenuHeaderButton onClick={() => alert("MENU 버튼 클릭!")} />
            </div>
        </header>
        
            
    )
}

export default Header;