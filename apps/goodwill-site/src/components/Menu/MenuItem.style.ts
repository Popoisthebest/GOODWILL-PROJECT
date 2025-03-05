import { css } from "@emotion/react";

export const Item = css`
  color: #000000;
  background-color: #e6e9f5;
  border-radius: 30px;
  font-family: Pretendard;
  font-size: 22px;
  font-style: normal;
  font-weight: 300;
  line-height: 140%; /* 30.8px */
  padding: 15px 20px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    width: 200px;
  }
`;

export const ItemText = css`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  height: 30px;
`;

export const IconDiv = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Dot = css`
  position: absolute;
`;