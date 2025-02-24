import { css } from "@emotion/react";

export const ImgContainer = css`
  position: relative;
  width: 100vw;
  height: 250px;
  left: 50%;
  transform: translateX(-50%);
`;

export const MainImg = css`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Overlay = css`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* 반투명 회색 */
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const TextContainer = css`
  color: #ffffff;
  font-family: "Pretendard-Bold", Helvetica;
  font-size: 40px;
  font-weight: 700;
  position: absolute;
`;