/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export const searchContainer = css`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 30px;
  max-width: 500px;
  margin: 0px 20px;
  padding: 10px 20px;
  border-radius: 8px;
  border: 1px solid #ccc;
  background-color: #fff;
`;

export const searchInput = css`
  flex: 1;
  padding: 12px;
  border: none;
  outline: none;
  font-size: 16px;
  background: transparent;
`;

export const searchButton = css`
  padding: 10px 20px;
  border: none;
  background: #05308c;
  color: white;
  font-size: 16px;
  font-weight: 600;
  border-radius: 6px;
  cursor: pointer;
  transition: background 0.2s;
  &:hover {
    background: #172b85;
  }
`;
