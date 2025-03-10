import React from "react";
import { Header } from "../components";
import Footer from "../components/Main/Footer.tsx";

type LayoutProps = {
  children: React.ReactNode;
};

const DefaultLayout: React.FC<LayoutProps> = ({ children }) => (
  <>
    <div>
      <Header />
      <main>{children}</main>
    </div>
    <Footer />
  </>
);

export default DefaultLayout;