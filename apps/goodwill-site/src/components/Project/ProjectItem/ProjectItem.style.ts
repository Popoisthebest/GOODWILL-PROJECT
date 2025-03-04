import { css } from "@emotion/react";

export const itemContainer = css`
  display: flex;
  flex-direction: column;
  justify-self: stretch;
`;

export const itemImgDiv = css`
  width: 100%;
  height: 400px;
  border-radius: 20px;
  background: #d9d9d9;
`;

export const itemImg = css`
  object-fit: cover;
`;

export const dateText = css`
  color: #000;
  font-family: Pretendard;
  font-size: 24px;
  font-style: normal;
  font-weight: 200;
  line-height: 140%; /* 33.6px */
`;

export const titleText = css`
  color: #000;
  font-family: Pretendard;
  font-size: 48px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%; /* 67.2px */
`;
