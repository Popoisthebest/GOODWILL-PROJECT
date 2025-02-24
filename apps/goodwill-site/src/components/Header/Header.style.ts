// src/components/Header/Header.style.ts
import { css } from "@emotion/react";

export const headerStyle = css`
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 0 0px;
    height: 30px;
  }
`;

export const headerLogoStyle = css`
  width: 186px;

  @media (max-width: 768px) {
    width: 100px;
  }
`;

/* ✅ 데스크탑 버튼 컨테이너 */
export const desktopButtonContainerStyle = css`
  display: flex;
  gap: 24px;
`;

/* ✅ 모바일 버튼 컨테이너 */
export const mobileButtonContainerStyle = css`
  display: none; /* 기본적으로 숨김 */

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
  }
`;

/* ✅ 모바일 전용 버튼 스타일 */
export const mobileButtonStyle = css`
  width: 10px;
  height: 10px;
  border-radius: 50%; /* 원형 버튼 */
  background-color: #e4e6ef; /* 버튼 색상 */
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: relative;

  @media (max-width: 768px) {
    width: 45px;
    height: 45px;
  }
`;

export const mobileButtonDotContainer = css`
  display: flex;
  gap: 6px; /* 점 사이 간격 */
`;

export const buttonContainerStyle = css`
  display: flex;
  align-items: center;
  gap: 24px;
`;

export const careerButtonStyle = css`
  background-color: #262626;
  border-radius: 100px;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 10px 20px;
  overflow: hidden;

  @media (max-width: 768px) {
    display: none; /* 모바일에서는 숨김 */
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
  font-size: 19px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 18.2px */

  @media (max-width: 768px) {
    font-size: 8px;
  }
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
    width: 3px;
    height: 3px;
  }
`;

export const menuButtonStyle = css`
  background-color: #05308c;
  border: 2px solid #05308c;
  border-radius: 30px; /* 양쪽 둥근 직사각형 */
  padding: 10px 20px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box; /* ✅ 요소 크기 유지 */

  @media (max-width: 768px) {
    padding: 5px 10px;
    border: 1px solid #05308c;
    display: none; /* 모바일에서는 숨김 */
  }
`;

export const menuButtonTextDivStyle = css`
  display: flex;
  flex-direction: column;
  height: 26px;
  overflow: hidden;

  @media (max-width: 768px) {
    height: 11px;
  }
`;

export const menuButtonTextStyle = css`
  color: #ffffff;
  text-align: left;
  font-family: Pretendard, fangsong;
  font-size: 19px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
  padding-right: 10px;

  @media (max-width: 768px) {
    font-size: 8px;
  }
`;

export const menuTwoCircleStyle = css`
  width: 12px;
  height: 6px;

  @media (max-width: 768px) {
    width: 15px;
    height: 5px;
  }
`;

export const menuDivStyle = css`
  display: flex;
  justify-content: right;
`;
