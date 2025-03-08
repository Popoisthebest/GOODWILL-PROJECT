// src/layouts/DefaultLayout.tsx
import React from "react";
import { Header } from "../components";
import { globalStyle } from "../styles/GlobalStyle";

type LayoutProps = {
  children: React.ReactNode;
};

const DefaultLayout: React.FC<LayoutProps> = ({ children }) => (
  <div css={globalStyle}>
    <Header/>
    <main>{children}</main>
  </div>
);

export default DefaultLayout;
