// src/layouts/DefaultLayout.tsx
import React from "react";
import Footer from "../components/Main/Footer.tsx";
import AboutHeader from "../components/Header/AboutHeader.tsx";

type LayoutProps = {
  children: React.ReactNode;
};

const AboutDefaultLayout: React.FC<LayoutProps> = ({ children }) => (
  <>
    <div>
      <AboutHeader />
      <main>{children}</main>
    </div>
    <Footer />
  </>
);

export default AboutDefaultLayout;
