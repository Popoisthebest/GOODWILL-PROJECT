import { css } from "@emotion/react";

export const searchContainer = css`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30px;
  padding: 10px 20px;
  border-radius: 8px;
  border: 1px solid #ccc;
  background-color: #fff;

  @media (max-width: 768px) {
    width: 200px;
    padding: 5px 20px;
  }
`;

export const searchInput = css`
  flex: 1;
  padding: 12px;
  border: none;
  outline: none;
  font-size: 16px;
  background: transparent;
  @media (max-width: 768px) {
    padding: 20px 5px;
  }
`;
