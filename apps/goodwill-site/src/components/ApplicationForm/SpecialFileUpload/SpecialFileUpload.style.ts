import { css } from "@emotion/react";

export const fileNameContainer = css`
  display: flex;
`;

export const fileUploadNameInput = css`
  color: #262626;
  font-family: Pretendard;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 184.615% */
  letter-spacing: -0.039px;

  display: flex;
  width: 100%;
  border: none;
  border-bottom: 1px solid #c4c4c4;
  outline: none;
`;

export const fileDeleteButton = css`
  display: flex;
  border: none;
  background: none;
  padding: 0;
  height: 16px;
  width: 16px;
`;

export const uploadContainer = css`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const fileNameDisplay = css`
  color: #000;
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 300% */
  letter-spacing: -0.024px;

  flex: 1;
  height: 30px;
  padding: 0 15px;
  border: 1px solid #ccc;
  border-radius: 20px;
  display: flex;
  align-items: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const fileInput = css`
  display: none;
`;

export const uploadButton = css`
  color: #fff;
  font-family: Pretendard;
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 240% */
  letter-spacing: -0.03px;

  height: 30px;
  padding: 0 20px;
  background-color: #1e40af;
  color: white;
  border-radius: 4px;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #172c8b;
  }
`;
