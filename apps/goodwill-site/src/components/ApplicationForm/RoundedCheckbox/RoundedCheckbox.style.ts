/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export const CheckboxContainer = css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 2px solid #9D9D9D;
    cursor: pointer;
`;

export const HiddenCheckbox = css`
    display: none;
`;

export const StyledCheckbox = (checked: boolean) => css`
    width: 20px;
    height: 20px;
    display: ${checked ? "none" : "flex"};
`;
