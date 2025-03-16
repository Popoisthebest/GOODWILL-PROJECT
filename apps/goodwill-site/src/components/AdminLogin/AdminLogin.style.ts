import { css } from "@emotion/react";

export const login = css`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100vh;
`;

export const loginDiv = css`
  display: flex;

  width: 650px;
  height: 414px;

  border: 1px solid #000;
  border-radius: 8px;
  overflow: hidden;
`;

export const loginImgDiv = css`
  display: flex;
  width: 50%;
  overflow: hidden;
`;

export const loginImg = css`
  display: flex;
  object-fit: cover;
`;

export const loginFormDiv = css`
  display: flex;
  flex-direction: column;
  justify-content: center;

  padding: 24px;
  width: 50%;
`;

export const loginFormTitleDiv = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const loginFormTitle1 = css`
  color: #000;
  text-align: center;
  font-family: "Brown Sugar";
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const loginFormTitle2 = css`
  color: #000;
  text-align: center;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 200;
  line-height: normal;
`;

export const loginFormInputDiv = css`
  display: flex;
  justify-content: center;
`;

export const loginForms = css`
  display: flex;
  flex-direction: column;

  width: 100%;
`;

export const loginInputWrapper = css`
  display: flex;
  align-items: center;
  background: #f0f0f0;
  padding: 16px;
  border-radius: 10px;
`;

export const loginInput = css`
  display: flex;

  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  margin-left: 10px;

  background: transparent;

  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 140%; /* 16.8px */
  letter-spacing: -0.3px;
`;

export const loginButton = css`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #05308c;
  padding: 18px;
  border: none;
  border-radius: 1000px;
  cursor: pointer;

  color: #fff;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 19.6px */
`;

export const errorMessageStyle = css`
  color: #f02f30;
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 300;

  margin-top: 4px;
`;
