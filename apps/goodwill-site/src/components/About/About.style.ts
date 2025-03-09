import { css } from "@emotion/react";

export const aboutDiv = css`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const backgroundImg = css`
  height: 100%;
  width: 100%;
  filter: brightness(0.5);
  object-fit: cover;
  position: absolute;
  z-index: -1;
`;

export const mainTextDiv = css`
  color: #fff;
  font-family: "Brown Sugar";
  text-align: center;
  font-size: 64px;
  font-style: normal;
  font-weight: 400;
  line-height: 90%; /* 57.6px */
  letter-spacing: -3.2px;
`;

export const sloganText = css`
  color: #fff;
  text-align: center;
  font-family: "Aeonik TRIAL";
  font-size: 64px;
  font-style: normal;
  font-weight: 300;
  line-height: 90%; /* 57.6px */
  letter-spacing: -3.2px;
`;

export const subText = css`
  color: #fff;
  text-align: center;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 180%; /* 28.8px */

  max-width: 700px;
`;
