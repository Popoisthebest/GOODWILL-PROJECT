import { css } from "@emotion/react";

export const finishDiv = css`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

export const finishMessageDiv = css`
  width: 690px;
`;

export const padletBorder = css`
  display: flex;
  justify-content: center;
  padding: 20px;
  border: 1px solid #000;
  border-radius: 15px;
`;

export const padletDiv = css`
  display: flex;
  align-items: end;
  justify-content: space-between;
`;

export const padletIconDiv = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 40px;
  width: 100px;
  padding: 0 15px;
  border-radius: 5px;
  overflow: hidden;
  background-color: #2e3440;
`;

export const padletIcon = css`
  display: flex;
  height: 100%;
  margin-left: -10px;
  object-fit: cover;
`;

export const eventInfoDiv = css`
  display: flex;
`;

export const eventTitle = css`
  color: #000;
  font-family: Pretendard;
  font-size: 32px;
  font-style: normal;
  font-weight: 600;
  line-height: 140%; /* 44.8px */
`;

export const eventSubTitle = css`
  color: #7b7b7b;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%; /* 22.4px */
`;
