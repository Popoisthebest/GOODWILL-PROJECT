import { css } from "@emotion/react";

export const FormContainer = css`
  flex-direction: column;
  align-items: center;
`;

export const FormTitle = css`
  color: #000000;
  font-family: Pretendard;
  font-size: 48px;
  font-style: normal;
  font-weight: 600;
  line-height: 140%; /* 67.2px */
`;

export const RoleName = css`
  color: #7b7b7b;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%; /* 28px */
`;

export const ApplicationInformation = css`
  color: #000000;
  font-family: Pretendard;
  font-size: 36px;
  font-style: normal;
  font-weight: 600;
  line-height: 140%; /* 50.4px */
`;

export const BasicInformationContainer = css`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const BasicInformation = css`
  color: #000000;
  font-family: Pretendard;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 140%; /* 33.6px */
`;

export const BasicInformationText = css`
  color: #f02f30;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 300;
  line-height: 140%; /* 22.4px */
`;

export const containerStyle = css`
  display: flex;
  position: relative;
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;
`;

export const labelStyle = css`
  color: #555;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 150% */
  letter-spacing: -0.048px;
`;

export const inputStyle = css`
  display: flex;
  border-radius: 8px;
  border: 2px solid #d9d9d9;
  outline: none;
  height: 20px;
  padding: 10px 16px;
  font-size: 14px;
`;

export const textareaStyle = css`
  ${inputStyle};
  resize: vertical;
`;

export const errorMessageStyle = css`
  color: red;
  font-size: 14px;
  margin-top: 4px;
`;
