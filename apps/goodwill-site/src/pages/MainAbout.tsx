import React from 'react';
import About from '../components/About/About';
import Leaders from '../components/About/leaders'
import Members from '../components/About/members'
import LogoSection from '../components/About/LogoSection'
import AwardsSection from '../components/About/AwardSection';
import InfosSection from '../components/About/Infos'
import AboutDefaultLayout from "../layouts/AboutDefaultLayout.tsx";

const App: React.FC = () => {

    return (
        <>
        <AboutDefaultLayout>
            <About />
            <Leaders />
            <Members />
            <LogoSection />
            <AwardsSection />
            <InfosSection />
        </AboutDefaultLayout>
        </>
    )
}

export default App;