import React, { useState } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';


// Types
interface Award {
  id: number;
  type: 'External' | 'Internal';
  name: string;
  year: number;
}

// Sample data
const awardsData: Award[] = [
  { id: 1, type: 'External', name: '대전 공공데이터 활용 창업경진대회 대상', year: 2024 },
  { id: 2, type: 'External', name: '대회 및 수상명을 입력해 주세요.', year: 2023 },
  { id: 3, type: 'External', name: '대회 및 수상명을 입력해 주세요.', year: 2023 },
  { id: 4, type: 'External', name: '대회 및 수상명을 입력해 주세요.', year: 2022 },
  { id: 5, type: 'Internal', name: '대회 및 수상명을 입력해 주세요.', year: 2024 },
  { id: 6, type: 'Internal', name: '대회 및 수상명을 입력해 주세요.', year: 2023 },
  { id: 7, type: 'External', name: '대회 및 수상명을 입력해 주세요.', year: 2024 },
  { id: 8, type: 'External', name: '대회 및 수상명을 입력해 주세요.', year: 2024 },
];

// Styled components
const Container = styled.div`
  background-color: black;
  color: white;
  font-family: 'Helvetica Neue', Arial, sans-serif;
  padding: 40px 20px;
  min-height: 100vh;
  position: relative;
  overflow: hidden;
  position: relative;
`;

const BackgroundImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  background-image: url('imgs/img/backgroundtext.png'); /* Replace with your actual image path */
  background-size: cover;
  background-position: center;
  opacity: 1;
  pointer-events: none;
`;

const TopWrapper = styled.div`
  position: relative;
  width: 100%;
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 1;
  max-width: 1200px;
  margin: 0 auto;
  padding-bottom: 100px;
`;

const Title = styled.h1`
  font-size: 4rem;
  font-weight: bold;
  margin-bottom: 60px;
`;

const AwardsGrid = styled.div`
  display: grid;
  grid-template-columns: 150px 1fr;
  gap: 40px 0;
  border-bottom: 3px solid rgba(255, 255, 255, 0.1);
  border-top: 3px solid rgba(255, 255, 255, 0.1);
  `;

const CategoryTitle = styled.div`
  font-size: 2rem;
  font-weight: 300;
  padding-top: 20px;
`;

const AwardsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  text-align: center;
  font-size: 25px;
`;

const AwardItem = styled.div`
  padding: 20px 0;
`;

const NavigationBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 150px;
  padding-top: 20px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  transform: translateY(140px);
  
`;

const LeftSection = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const NavDot = styled.div<{ active?: boolean }>`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 1px solid white;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  
  ${props => props.active && css`
    background-color: white;
    color: black;
  `}
`;

const NavText = styled.div`
  font-size: 1rem;
  margin: 0 20px;
`;

const BrandLogo = styled.img`
  position: absolute;
  top: 15px;
  right: 25px;
  height: 25px; /* 로고 크기 조정 */
`;
const AwardsSection: React.FC = () => {
  const [currentYear, setCurrentYear] = useState<number>(2024);
  
  // Filter awards by the selected year
  const filteredAwards = awardsData.filter(award => award.year === currentYear);
  
  // Group by type
  const externalAwards = filteredAwards.filter(award => award.type === 'External');
  const internalAwards = filteredAwards.filter(award => award.type === 'Internal');
  
  // Get unique years from the data
  const uniqueYears = [...new Set(awardsData.map(award => award.year))].sort((a, b) => b - a);
  
  return (
    <Container>
      <BackgroundImage />
      
      <ContentWrapper>
        <TopWrapper>
          <Title>AWARDS</Title>
          <BrandLogo src="imgs/WEAREGOODWILL.svg" alt="WEAREGOODWILL Logo" />
        </TopWrapper>
        
        <AwardsGrid>
          {externalAwards.length > 0 && (
            <>
              <CategoryTitle>External</CategoryTitle>
              <AwardsList>
                {externalAwards.map(award => (
                  <AwardItem key={award.id}>{award.name}</AwardItem>
                ))}
              </AwardsList>
            </>
          )}
          
          {internalAwards.length > 0 && (
            <>
              <CategoryTitle>Internal</CategoryTitle>
              <AwardsList>
                {internalAwards.map(award => (
                  <AwardItem key={award.id}>{award.name}</AwardItem>
                ))}
              </AwardsList>
            </>
          )}
        </AwardsGrid>
        
        <NavigationBar>
          <LeftSection>
            <NavText>TYPE</NavText>
          </LeftSection>
          
          <NavText>NAME</NavText>
          
          <RightSection>
            <NavDot onClick={() => {
              const currentIndex = uniqueYears.indexOf(currentYear);
              if (currentIndex < uniqueYears.length - 1) {
                setCurrentYear(uniqueYears[currentIndex + 1]);
              }
            }}>
              &lt;
            </NavDot>
            
            <NavText>{currentYear}</NavText>
            
            <NavDot onClick={() => {
              const currentIndex = uniqueYears.indexOf(currentYear);
              if (currentIndex > 0) {
                setCurrentYear(uniqueYears[currentIndex - 1]);
              }
            }}>
              &gt;
            </NavDot>
          </RightSection>
        </NavigationBar>
      </ContentWrapper>
    </Container>
  );
};

export default AwardsSection;