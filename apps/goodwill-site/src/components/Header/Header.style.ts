// src/components/Header/Header.style.ts
import { css } from "@emotion/react";

export const headerStyle = css`
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between; /* 왼쪽(로고) ↔ 오른쪽(버튼) */
  color: white;
  box-sizing: border-box;
`;

export const buttonContainerStyle = css`
  display: flex;
  gap: 24px;
`;

export const careerButtonStyle = css`
  background-color: #262626;
  border: 2px solid transparent;
  border-radius: 30px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 135px;
  height: 54px;
  overflow: hidden;
`;

export const careerButtonTextContainerStyle = css`
  position: relative;
  display: flex;
  align-items: center;
`;

export const careerButtonTextStyle = css`
  color: #ffffff;
  text-align: center;
  font-family: Pretendard, fangsong;
  font-size: 19px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 18.2px */
`;

export const careerButtonArrowStyle = css`
  position: absolute;
  width: 18px;
  height: 18px;
`;

export const careerButtonDotStyle = css`
  margin-left: 12px;
  width: 4px;
  height: 4px;
`;

export const menuButtonStyle = css`
  background-color: #05308c;
  border: 2px solid #05308c; /* 기본적으로 border를 투명하게 설정 */
  border-radius: 30px; /* 양쪽 둥근 직사각형 */
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box; /* ✅ 요소 크기 유지 */
  height: 54px;
  width: 128px;
`;

export const menuButtonTextContainerStyle = css`
  position: relative;
  display: flex;
  align-items: center;
`;

export const menuButtonTextStyle = css`
  color: #ffffff;
  text-align: center;
  font-family: Pretendard, fangsong;
  font-size: 19px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 18.2px */
`;

export const menuTwoCircleStyle = css`
  margin-left: 11px;
  width: 12px;
  height: 6px;
`;
