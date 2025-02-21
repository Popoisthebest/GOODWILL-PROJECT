import { css } from "@emotion/react";
import React from 'react';
import { menuButtonStyle } from "./Header.style";

interface MenuButtonProps {
    onClick?: () => void;
}

const MenuButton: React.FC<MenuButtonProps> = ({ onClick }) => {
    return (
        <button css={menuButtonStyle} onClick={onClick}>
            MENU
        </button>
    );
};
  
export default MenuButton;
