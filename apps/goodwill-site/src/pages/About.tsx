import React from "react";
import About from "../components/About/About";
import Leaders from "../components/About/leaders";
import Members from "../components/About/members";
import LogoSection from "../components/About/LogoSection";
import AwardsSection from "../components/About/AwardSection";
import InfosSection from "../components/About/Infos";
import Footer from "../components/Main/Footer";
import AboutHeader from "../components/Header/AboutHeader.tsx";

const App: React.FC = () => {
  return (
    <>
      <AboutHeader />
      <About />
      <Leaders />
      <Members />
      <LogoSection />
      <AwardsSection />
      <InfosSection />
      <Footer />
    </>
  );
};

export default App;
