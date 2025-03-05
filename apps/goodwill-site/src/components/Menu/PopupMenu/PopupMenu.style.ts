import { css } from "@emotion/react";

export const MenuContainer = css`
  position: absolute;
  width: 255px;
  top: 70px;
  right: 0;
  background: white;
  padding: 10px 10px;
  border-radius: 8px;
  border: 2px solid #000000;
  z-index: 1000;

  @media (max-width: 768px) {
    background: blue;
    position: fixed;
    top: 0;
    left: 0;
    gap: 10px;
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 1000;
    box-shadow: none;
    border-radius: 0;
    border: none;
  }
`;

export const CloseButton = css`
  position: absolute;
  top: 20px;
  left: 20px;
  font-size: 24px;
  cursor: pointer;
  background: none;
  border: none;
  color: white;

  @media (min-width: 769px) {
    display: none;
  }
`;

export const Overlay = css`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 999;

  @media (max-width: 768px) {
    display: none;
  }
`;






