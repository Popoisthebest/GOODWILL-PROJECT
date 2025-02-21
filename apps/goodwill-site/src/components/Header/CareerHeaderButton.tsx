import { css } from "@emotion/react";
import React from 'react';
import { careerButtonStyle } from "./Header.style";

interface CareerButtonProps {
    onClick?: () => void;
}
  
const CareerButton: React.FC<CareerButtonProps> = ({ onClick }) => {
    return (
        <button css={careerButtonStyle} onClick={onClick}>
            CAREER
        </button>
    );
};
  
export default CareerButton;