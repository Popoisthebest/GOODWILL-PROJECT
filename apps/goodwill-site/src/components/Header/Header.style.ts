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
  color: white;
  font-size: 16px;
  font-weight: bold;
  padding: 10px 24px;
  border: 2px solid transparent; /* 기본적으로 border를 투명하게 설정 */
  border-radius: 30px; /* 양쪽 둥근 직사각형 */
  cursor: pointer;
  transition: background 0.3s ease, border-color 0.3s ease, color 0.3s ease;
  box-sizing: border-box; /* ✅ 요소 크기 유지 */

  &:hover {
    background-color: #05308C;
  }
`;

export const menuButtonStyle = css`
  background-color: #05308C;
  color: #FFFFFF;
  font-size: 16px;
  font-weight: bold;
  padding: 10px 24px;
  border: 2px solid transparent; /* 기본적으로 border를 투명하게 설정 */
  border-radius: 30px; /* 양쪽 둥근 직사각형 */
  cursor: pointer;
  transition: background 0.3s ease, border-color 0.3s ease, color 0.3s ease;
  box-sizing: border-box; /* ✅ 요소 크기 유지 */

  &:hover {
    background-color: #FFFFFF;
    color: #05308C;
    border-color: #05308C; /* ✅ 투명한 border에서 색상만 변경 */
  }
`;
