import React from "react";
import About from "../components/About/About";
import Leaders from "../components/About/leaders";
import Members from "../components/About/members";
import LogoSection from "../components/About/LogoSection";
import AwardsSection from "../components/About/AwardSection";
import InfosSection from "../components/About/Infos";
import DefaultLayout from "../layouts/DefaultLayout.tsx";

const App: React.FC = () => {
  return (
    <>
      <DefaultLayout>
        <About />
        <Leaders />
        <Members />
        <LogoSection />
        <AwardsSection />
        <InfosSection />
      </DefaultLayout>
    </>
  );
};

export default App;
