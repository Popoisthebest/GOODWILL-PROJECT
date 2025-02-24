// src/styles/GlobalStyle.ts
import { css } from "@emotion/react";

export const globalStyle = css`
  box-sizing: border-box;
  padding: 30px 72px;

  @media (max-width: 768px) {
    padding: 20px;
  }
`;
