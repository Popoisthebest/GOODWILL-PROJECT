import { css } from "@emotion/react";

export const buttonDiv = css`
    display: flex;
    justify-content: space-between;
`;

export const passButton = css`
    color: #FFF;
    background-color: green;
    font-family: Pretendard;
    font-size: 24px;
    font-style: normal;
    font-weight: 300;
    line-height: 140%; /* 25.2px */
    border: none;
    border-radius: 5px;
    
    width: 330px;
    height: 64px;
    
    cursor: pointer;
`;

export const rejectButton = css`
    color: #FFF;
    background-color: red;
    font-family: Pretendard;
    font-size: 24px;
    font-style: normal;
    font-weight: 300;
    line-height: 140%; /* 25.2px */
    border: none;
    border-radius: 5px;
    
    width: 330px;
    height: 64px;

    cursor: pointer;
`;