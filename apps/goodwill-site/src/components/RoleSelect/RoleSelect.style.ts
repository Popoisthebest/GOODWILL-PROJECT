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
  justify-content: center;
  padding-top: 67px;
  position: relative;
`;

export const KategorieSelectContainer = css`
  flex-direction: column;
  padding-top: 20px;
`;

export const RoleSelectTitleContainer = css`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const KategorieContainer = css`
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const KategorieTitleText = css`
  color: #000000;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px; /* 150% */
  letter-spacing: -0.048px;
  margin-bottom: 10px;
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
  width: 15px;
  height: 15px;
`;

export const SearchContainer = css`
  display: flex;
  align-items: center;
  border: 1px solid #000000;
  border-radius: 5px;
  width: 100%;
  height: 40px;
  margin: 0px 20px;
  padding: 0px 7px;
`;

export const SearchImgStyle = css`
  display: flex;
`;

export const SearchBar = css`
  display: flex;
  width: 100%;
  height: 87%;
  border: none;
`;
