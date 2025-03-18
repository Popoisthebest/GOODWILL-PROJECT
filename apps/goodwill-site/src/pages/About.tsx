import React, { useEffect } from "react";
import AboutImage from "../components/About/AboutImage.tsx";
import Leaders from "../components/About/leaders";
import Members from "../components/About/members";
import LogoSection from "../components/About/LogoSection";
import AwardsSection from "../components/About/AwardSection";
import InfosSection from "../components/About/Infos";
import Footer from "../components/Main/Footer";
import AboutHeader from "../components/Header/AboutHeader.tsx";

const App: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);
  return (
    <>
      <AboutHeader />
      <AboutImage />
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
