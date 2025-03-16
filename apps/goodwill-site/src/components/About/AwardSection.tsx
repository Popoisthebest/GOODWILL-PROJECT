import React, { useState } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import GoodwillLogo from "../../../imgs/WEAREGOODWILL.svg";

// Types
interface Award {
  id: number;
  type: 'External' | 'Internal';
  name: string;
  year: number;
}

// Sample data
const awardsData: Award[] = [
  { id: 1, type: 'External', name: 'HSU(한남대) 창업경진대회 수상', year: 2022 },
  { id: 2, type: 'External', name: '청소년 비즈쿨 페스티벌 모의창업부스 운영, 최고의 부스 수상', year: 2022 },
  { id: 3, type: 'External', name: '청소년 비즈쿨 새싹캠프 파이널 진출', year: 2022 },
  { id: 4, type: 'External', name: 'YEEP 청소년 창업경진대회 우수상', year: 2023 },
  { id: 5, type: 'External', name: 'DSM Hackathon 한국소프트웨어산업협회장상 수상', year: 2023 },
  { id: 6, type: 'External', name: 'JA Company Of The Year 2024 ', year: 2024 },
  { id: 7, type: 'External', name: '한경 청소년 경제 체험 대회', year: 2024 },
  { id: 8, type: 'External', name: '2024 대전광역시 공공데이터 활용 창업경진대회 제품 및 서비스 개발 부문 대상 (대전광역시장상).', year: 2024 },
  { id: 9, type: 'External', name: '부산국제마케팅광고제 MAD STAR 2024 크리에이티브 캠프 크리에이티브상 (부산국제마케팅광고제 집행위원장상)', year: 2024 },
  { id: 10, type: 'External', name: '2024 SW동행 스테이지 데모데이 장려상 수상', year: 2024 },
  { id: 11, type: 'External', name: '2024 대전대학교 초중고대 연합 창업경진대회 장려상 수상', year: 2024 },
];

// Media query breakpoints
const breakpoints = {
  mobile: '480px',
  tablet: '768px',
  laptop: '1024px',
};

// Styled components with responsive design
const Container = styled.div`
  background-color: black;
  color: white;
  font-family: 'Helvetica Neue', Arial, sans-serif;
  padding: 40px 20px;
  min-height: 100vh;
  position: relative;
  overflow: hidden;

  @media (max-width: ${breakpoints.tablet}) {
    padding: 30px 15px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    padding: 20px 10px;
  }
`;

const BackgroundImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  background-image: url('imgs/img/backgroundtext.png');
  background-size: cover;
  background-position: center;
  opacity: 1;
  pointer-events: none;
`;

const TopWrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  @media (max-width: ${breakpoints.mobile}) {
    flex-direction: column;
  }
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 1;
  max-width: 1200px;
  margin: 0 auto;
  padding-bottom: 100px;

  @media (max-width: ${breakpoints.tablet}) {
    padding-bottom: 70px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    padding-bottom: 50px;
  }
`;

const Title = styled.h1`
  font-size: 4rem;
  font-weight: bold;
  margin-bottom: 60px;

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 3rem;
    margin-bottom: 40px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 2.5rem;
    margin-bottom: 30px;
  }
`;

const AwardsGrid = styled.div`
  display: grid;
  grid-template-columns: 150px 1fr;
  gap: 40px 0;
  border-bottom: 3px solid rgba(255, 255, 255, 0.1);
  border-top: 3px solid rgba(255, 255, 255, 0.1);

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 120px 1fr;
    gap: 30px 0;
  }

  @media (max-width: ${breakpoints.mobile}) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

const CategoryTitle = styled.div`
  font-size: 2rem;
  font-weight: 300;
  padding-top: 20px;

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 1.75rem;
  }

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 1.5rem;
    padding-top: 15px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    padding-bottom: 10px;
  }
`;

const AwardsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  text-align: left;
  font-size: 25px;
  
  @media (max-width: ${breakpoints.tablet}) {
    font-size: 20px;
    gap: 15px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 16px;
    gap: 10px;
  }
`;

const AwardItem = styled.div`
  padding: 20px 0;
  word-break: keep-all;
  line-height: 1.4;

  @media (max-width: ${breakpoints.tablet}) {
    padding: 15px 0;
  }

  @media (max-width: ${breakpoints.mobile}) {
    padding: 12px 0;
  }
`;

const NavigationBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 150px;
  padding-top: 20px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  transform: translateY(60px);
  
  @media (max-width: ${breakpoints.tablet}) {
    margin-top: 100px;
    transform: translateY(40px);
  }

  @media (max-width: ${breakpoints.mobile}) {
    margin-top: 70px;
    padding-top: 15px;
    transform: translateY(30px);
    flex-direction: column;
    gap: 20px;
    align-items: center;
  }
`;

const LeftSection = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  @media (max-width: ${breakpoints.mobile}) {
    gap: 15px;
    order: 1;
  }
`;

const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  @media (max-width: ${breakpoints.mobile}) {
    order: 0;
    margin-bottom: 10px;
  }
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

  @media (max-width: ${breakpoints.mobile}) {
    width: 25px;
    height: 25px;
  }
`;

const NavText = styled.div`
  font-size: 1rem;
  margin: 0 20px;

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 0.9rem;
    margin: 0 15px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 0.8rem;
    margin: 0 10px;
  }
`;

const BrandLogo = styled.img`
  position: absolute;
  top: 15px;
  right: 25px;
  height: 25px;

  @media (max-width: ${breakpoints.tablet}) {
    height: 22px;
    right: 20px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    position: relative;
    height: 20px;
    margin-top: 15px;
    top: 0;
    right: 0;
  }
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
          <BrandLogo src={GoodwillLogo} alt="WEAREGOODWILL Logo" />
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