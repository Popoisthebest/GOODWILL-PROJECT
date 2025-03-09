// src/layouts/DefaultLayout.tsx
import React from "react";
import { Header } from "../components";
import { globalStyle } from "../styles/GlobalStyle";
import Footer from "../components/Main/Footer.tsx";

type LayoutProps = {
  children: React.ReactNode;
};

const DefaultLayout: React.FC<LayoutProps> = ({ children }) => (
  <>
    <div css={globalStyle}>
      <Header />
      <main>{children}</main>
    </div>
    <Footer />
  </>
);

export default DefaultLayout;
