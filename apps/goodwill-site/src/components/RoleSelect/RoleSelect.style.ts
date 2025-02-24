import { css } from "@emotion/react";

export const ImgContainer = css`
  position: relative;
  width: 100vw;
  height: 250px;
  left: 50%;
  transform: translateX(-50%);
`;

export const MainImg = css`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Overlay = css`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* 반투명 회색 */
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const TextContainer = css`
  color: #ffffff;
  font-family: "Pretendard-Bold", Helvetica;
  font-size: 40px;
  font-weight: 700;
  position: absolute;
`;

export const RoleSelectContainer = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-top: 67px;
`;

export const RoleSelectTitle = css`
    display: flex;
    flex-direction: column;
`;

export const KategorieTitleText = css`
  color: #000000;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px; /* 150% */
  letter-spacing: -0.048px;
`;

export const KategorieRoleText = css`
    color: #555555;
    font-family: Pretendard;
    font-size: 20px;
    font-style: normal;
    font-weight: 200;
    line-height: 24px; /* 120% */
    letter-spacing: -0.06px;
`;

export const CheckBox = css`
    border: 1px solid #000000;
    border-radius: 5px;
`;