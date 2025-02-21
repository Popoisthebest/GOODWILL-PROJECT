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
  border: 2px solid transparent;
  border-radius: 30px;
  cursor: pointer;
  transition: background 0.3s ease, border-color 0.3s ease, color 0.3s ease;
  box-sizing: border-box;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center; /* ✅ 버튼 내에서 중앙 정렬 */
  width: 160px; /* 버튼 크기 지정 */
  overflow: hidden;

  .text-container {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }

  .text {
    display: inline-block;
    transition: transform 0.3s ease, opacity 0.2s ease; /* ✅ 텍스트 이동 & 점 사라지는 효과 */
    position: absolute;
    left: 0;
  }

  .dot {
    transition: opacity 0.2s ease;
  }

  .arrow-icon {
    width: 20px; /* ✅ SVG 크기 */
    height: 20px;
    position: absolute;
    left: -10px; /* ✅ 글자와 겹치도록 위치 조정 */
    opacity: 0; /* ✅ 기본적으로 보이지 않음 */
    transition: opacity 0.3s ease, transform 0.3s ease;
  }

  &:hover {
    background-color: #05308C;
  }

  &:hover .text {
    transform: translateX(12px); /* ✅ 텍스트 오른쪽 이동 */
  }

  &:hover .dot {
    opacity: 0; /* ✅ 점 사라지기 */
  }

  &:hover .arrow-icon {
    opacity: 1; /* ✅ 화살표 나타남 */
    transform: translateX(0); /* ✅ 제자리 유지 */
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
