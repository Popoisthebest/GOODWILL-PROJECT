// src/components/Header/Header.style.ts
import { css } from "@emotion/react";

export const headerStyle = css`
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
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
  align-items: center;
  padding-left: 18px;
  width: 135px;
  height: 54px;
  overflow: hidden;
`;

export const careerButtonTextContainerStyle = css`
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
  margin-left: 16px;
  width: 4px;
  height: 4px;
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
`;

export const menuButtonTextStyle = css`
  color: #ffffff;
  text-align: left;
  font-family: Pretendard, fangsong;
  font-size: 19px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 18.2px */
  display: flex;
  flex-direction: column;
  height: 26px;
  overflow: hidden;
`;

export const menuTwoCircleStyle = css`
  width: 12px;
  height: 6px;
`;

export const menuDivStyle = css`
  display: flex;
  justify-content: right;
`;
