// src/components/Header/Header.style.ts
import { css } from "@emotion/react";

export const headerStyle = css`
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between; /* 왼쪽(로고) ↔ 오른쪽(버튼) */
    color: white;
    box-sizing: border-box;

    @media (max-width: 768px) {
        padding: 0 16px;
        height: 50px;
    }
`;

export const buttonContainerStyle = css`
    display: flex;
    gap: 24px;

    @media (max-width: 768px) {
        gap: 16px;
    }
`;

export const careerButtonStyle = css`
    background-color: #262626;
    border: 2px solid transparent;
    border-radius: 30px;
    cursor: pointer;
    display: flex;
    align-items: center;
    padding-left: 18px;
    width: 135px;
    height: 54px;
    overflow: hidden;

    @media (max-width: 768px) {
        width: 120px;
        height: 48px;
        padding-left: 14px;
    }
`;

export const careerButtonTextContainerStyle = css`
    display: flex;
    align-items: center;
`;

export const careerButtonTextStyle = css`
    color: #ffffff;
    text-align: center;
    font-family: Pretendard, fangsong;
    /* clamp(min, preferred, max)로 글자 크기를 유동적으로 조절 */
    font-size: clamp(16px, 2vw, 19px);
    font-style: normal;
    font-weight: 400;
    line-height: 140%; /* 18.2px */
`;

export const careerButtonArrowStyle = css`
    position: absolute;
    width: 18px;
    height: 18px;

    @media (max-width: 768px) {
        width: 16px;
        height: 16px;
    }
`;

export const careerButtonDotStyle = css`
    margin-left: 16px;
    width: 4px;
    height: 4px;

    @media (max-width: 768px) {
        margin-left: 12px;
    }
`;

export const menuButtonStyle = css`
    background-color: #05308c;
    border: 2px solid #05308c; /* 기본적으로 border를 투명하게 설정 */
    border-radius: 30px; /* 양쪽 둥근 직사각형 */
    padding: 20px;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box; /* ✅ 요소 크기 유지 */
    height: 54px;
    width: 128px;

    @media (max-width: 768px) {
        height: 48px;
        width: 110px;
        padding: 16px;
    }
`;

export const menuButtonTextStyle = css`
    color: #ffffff;
    text-align: left;
    font-family: Pretendard, fangsong;
    font-size: clamp(16px, 2vw, 19px);
    font-style: normal;
    font-weight: 400;
    line-height: 140%;
    display: flex;
    flex-direction: column;
    height: 26px;
    overflow: hidden;
`;

export const menuTwoCircleStyle = css`
    width: 12px;
    height: 6px;

    @media (max-width: 768px) {
        width: 10px;
        height: 5px;
    }
`;

export const menuDivStyle = css`
    display: flex;
    justify-content: right;
`;
