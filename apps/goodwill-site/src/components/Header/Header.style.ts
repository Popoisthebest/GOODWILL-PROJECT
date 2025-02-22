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
  align-items: center;
  height: 54px;
  width: 135px;
  overflow: hidden;
`;

export const careerButtonTextContainerStyle = css`
  position: relative;
  display: flex;
  align-items: center;
  margin-left: 10px;
`;

export const careerButtonTextStyle = css`
  color: #ffffff;
  font-family: "Pretendard-Regular", Helvetica;
  font-size: 19.5px;
  font-weight: 400;
`;

export const careerButtonArrowStyle = css`
  position: absolute;
  width: 18px;
  height: 18px;
`;

export const careerButtonDotStyle = css`
  margin-left: 12px;
  width: 4.5px;
  height: 4.5px;
`;

export const menuButtonStyle = css`
  background-color: #05308c;
  color: #ffffff;
  font-size: 16px;
  font-weight: bold;
  padding: 10px 24px;
  border: 2px solid transparent; /* 기본적으로 border를 투명하게 설정 */
  border-radius: 30px; /* 양쪽 둥근 직사각형 */
  cursor: pointer;
  transition:
    background 0.3s ease,
    border-color 0.3s ease,
    color 0.3s ease;
  box-sizing: border-box; /* ✅ 요소 크기 유지 */

  &:hover {
    background-color: #ffffff;
    color: #05308c;
    border-color: #05308c; /* ✅ 투명한 border에서 색상만 변경 */
  }
`;
