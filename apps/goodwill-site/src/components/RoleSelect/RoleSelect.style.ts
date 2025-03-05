import { css } from "@emotion/react";

export const RoleSelectDiv = css`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ImgContainer = css`
  display: flex;
  position: relative;
  width: 100vw;
  height: 250px;
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
  justify-content: space-between;
  padding: 67px 50px 0px 50px;
  width: 100%;
  max-width: 700px;

    @media (max-width: 768px) {
        padding: 67px 0px 0px 0px;
    }
`;

export const RoleSearchSelectDiv = css`
  display: flex;
  flex-direction: column;
`;
