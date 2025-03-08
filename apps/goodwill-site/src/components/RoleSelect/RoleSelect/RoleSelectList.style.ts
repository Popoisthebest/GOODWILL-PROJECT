/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export const roleListContainer = css`
  padding-top: 20px;
  width: 450px;

  @media (max-width: 768px) {
    width: 200px;
  }
`;

export const roleItemButton = css`
    border: none;
    background: none;
    text-align: left;
    width: 100%;
`;

export const roleTitle = css`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 4px;
`;

export const roleSubtitle = css`
  font-size: 14px;
  color: #999;
`;

export const divider = css`
  height: 1px;
  background-color: #ddd;
`;
