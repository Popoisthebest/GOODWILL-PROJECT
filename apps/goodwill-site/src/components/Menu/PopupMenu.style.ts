import { css } from "@emotion/react";

export const MenuContainer = css`
  background-color: #ffffff;
  padding: 10px;
  border: 1px solid;
  border-color: #000000;
  border-radius: 8px;
  width: 265px;
  position: absolute;
  top: 80px;
`;

export const Item = css`
  color: #000000;
  background-color: #e6e9f5;
  border-radius: 30px;
  font-family: Pretendard;
  font-size: 22px;
  font-style: normal;
  font-weight: 300;
  line-height: 140%; /* 30.8px */
  padding: 10px 15px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ItemText = css`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  height: 30px;
`;
