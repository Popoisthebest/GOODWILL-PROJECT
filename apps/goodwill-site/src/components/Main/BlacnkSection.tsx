import React from 'react';
import styled from '@emotion/styled';

interface BlankSectionProps {}

const SectionContainer = styled.section`
  min-height: 100vh;
  width: 100%;
  background-color: #f8f8f8;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContentPlaceholder = styled.div`
  width: calc(100% - 80px);
  height: calc(100vh - 160px);
  background-color: #e9e9e9;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #aaa;
  font-size: 18px;
  position: relative;
`;

const GridLines = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 1fr);
`;

const GridPoint = styled.div`
  position: relative;
  
  &::before {
    content: '+';
    position: absolute;
    top: 0;
    left: 0;
    color: #ccc;
    font-size: 16px;
  }
`;

const BlankSection: React.FC<BlankSectionProps> = () => {
  return (
    <SectionContainer>
      <ContentPlaceholder>
        <GridLines>
          {Array.from({ length: 25 }).map((_, index) => (
            <GridPoint key={index} />
          ))}
        </GridLines>
      </ContentPlaceholder>
    </SectionContainer>
  );
};

export default BlankSection;