import React from "react";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import Google from '../../../imgs/logos/image 16.png';
import Microsoft from '../../../imgs/logos/image 17.png'
import AWS from '../../../imgs/logos/image 18.png';
import NC from '../../../imgs/logos/image 19.png'
import KSF from '../../../imgs/logos/image 20.png'
import STP from '../../../imgs/logos/image 22.png'
import Hunet from '../../../imgs/logos/image 23.png'
import Yeep from '../../../imgs/logos/image 23.png'
import JAKorea from '../../../imgs/logos/image 16.png'

// 로고 데이터
const logos = {
  firstRow: [

    { id: 1, name: 'Google', imageUrl: Google },
    { id: 2, name: 'Microsoft', imageUrl: Microsoft },
    { id: 3, name: 'AWS', imageUrl: AWS },
    { id: 4, name: 'NC', imageUrl: NC },
    { id: 5, name: 'KSF', imageUrl: KSF },

  ],
  secondRow: [
    { id: 6, name: 'NC', imageUrl: NC },
    { id: 7, name: 'STP', imageUrl: STP },
    { id: 8, name: 'Hunet', imageUrl: Hunet },
    { id: 9, name: 'YEEP', imageUrl: Yeep },
    { id: 10, name: 'JA Korea', imageUrl: JAKorea },
  ],
  thirdRow: [
    { id: 11, name: 'Hunet', imageUrl: Hunet },
    { id: 12, name: 'AWS', imageUrl: AWS },
    { id: 13, name: 'JA Korea', imageUrl: JAKorea },
    { id: 14, name: 'KSF', imageUrl: KSF },
    { id: 15, name: 'Microsoft', imageUrl: Microsoft },

  ]

};

// 애니메이션 키프레임
const scrollLeft = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-100%); }
`;

const scrollRight = keyframes`
  0% { transform: translateX(-100%); }
  100% { transform: translateX(0); }
`;

// 스타일 컴포넌트
const Container = styled.section`
  background-color: #000;
  color: #fff;
  padding: 60px 0;
  overflow: hidden;
  width: 100%;
  height: 1000px;
  position: relative;
`;

const Title = styled.h2`
  font-size: 72px;
  font-weight: 700;
  text-align: left;
  margin-bottom: 80px;
  margin-left: 80px;
  letter-spacing: 1px;
`;

const LogoMarquee = styled.div<{ direction: "left" | "right" }>`
  display: flex;
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  margin-bottom: 60px;
  position: relative;

  &::before,
  &::after {
    content: "";
    position: absolute;
    top: 0;
    width: 120px;
    height: 100%;
    z-index: 2;
    pointer-events: none;
  }

  &::before {
    left: 0;
    background: linear-gradient(to right, #000, rgba(0, 0, 0, 0));
  }

  &::after {
    right: 0;
    background: linear-gradient(to left, #000, rgba(0, 0, 0, 0));
  }
`;

const LogoTrack = styled.div<{ direction: "left" | "right" }>`
  display: flex;
  animation: ${({ direction }) =>
      direction === "left" ? scrollLeft : scrollRight}
    50s linear infinite;
  animation-play-state: running;
`;

const LogoContainer = styled.div`
  display: inline-flex;
  align-items: center;
  height: 200px;
  gap: 180px;
  padding: 0 40px;
`;

const LogoItem = styled.div`
  flex: 0 0 auto;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.8;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 1;
  }
`;

const Logo = styled.img`
  max-height: 150px;
  max-width: 330px;
  object-fit: contain;
  filter: brightness(1);
  transition: filter 0.3s;
  &:hover {
    filter: brightness(1.2);
  }
`;

const BackgroundImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  background-image: url("../../../imgs/img/Group 624.png"); /* Replace with your actual image path */
  background-size: cover;
  background-position: center;
  opacity: 1;
  pointer-events: none;
`;

// 로고 슬라이더 컴포넌트
const InfiniteLogoScroll: React.FC = () => {
  // 반복 횟수에 따라 각 행의 로고 복제
  const duplicateLogos = (
    logoArray: typeof logos.firstRow,
    count: number = 5,
  ) => {
    let duplicated = [...logoArray];

    for (let i = 0; i < count - 1; i++) {
      duplicated = [
        ...duplicated,
        ...logoArray.map((logo) => ({ ...logo, id: logo.id + (i + 1) * 100 })),
      ];
    }

    return duplicated;
  };

  return (
    <Container>
      <BackgroundImage />
      <Title>CLIENTS WE WORK WITH</Title>

      <LogoMarquee direction="left">
        <LogoTrack direction="left">
          <LogoContainer>
            {duplicateLogos(logos.firstRow).map((logo) => (
              <LogoItem key={logo.id}>
                <Logo src={logo.imageUrl} alt={logo.name} />
              </LogoItem>
            ))}
          </LogoContainer>
        </LogoTrack>
      </LogoMarquee>

      <LogoMarquee direction="right">
        <LogoTrack direction="right">
          <LogoContainer>
            {duplicateLogos(logos.secondRow).map((logo) => (
              <LogoItem key={logo.id}>
                <Logo src={logo.imageUrl} alt={logo.name} />
              </LogoItem>
            ))}
          </LogoContainer>
        </LogoTrack>
      </LogoMarquee>

      <LogoMarquee direction="left">
        <LogoTrack direction="left">
          <LogoContainer>
            {duplicateLogos(logos.thirdRow).map((logo) => (
              <LogoItem key={logo.id}>
                <Logo src={logo.imageUrl} alt={logo.name} />
              </LogoItem>
            ))}
          </LogoContainer>
        </LogoTrack>
      </LogoMarquee>
    </Container>
  );
};

export default InfiniteLogoScroll;
