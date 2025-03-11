import type React from "react";
import styled from "@emotion/styled";

type HeadTextProps = {};

const HeadText: React.FC<HeadTextProps> = () => {
  const HeadingContainer = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    top: -80px;
    left: 0;
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
    background-color: transparent;
    z-index: 1;
    text-align: left;

    @media (max-width: 768px) {
      top: -40px;
      padding: 0 15px;
    }

    @media (max-width: 480px) {
      top: -20px;
      padding: 0 10px;
    }
  `;

  const Heading = styled.h1`
    font-size: 58px;
    font-weight: 600;
    line-height: 1.3;
    color: black;
    text-shadow: 1px 1px 2px rgba(255, 255, 255, 0.5);
    text-align: center;

    @media (max-width: 1024px) {
      font-size: 52px;
    }

    @media (max-width: 768px) {
      font-size: 42px;
    }

    @media (max-width: 480px) {
      font-size: 32px;
    }
  `;

  return (
    <HeadingContainer>
      <Heading>
        Establishing a student-led <br /> company that cares <br /> for people and society.
      </Heading>
    </HeadingContainer>
  );
};

export default HeadText;
