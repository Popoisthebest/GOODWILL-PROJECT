import type React from "react";
import styled from "@emotion/styled";

type HeadTextProps = {};

const HeadText: React.FC<HeadTextProps> = () => {
    const HeadingContainer = styled.div`
        position: relative;
        display: flex;
        justify-content: center;
        top: -80px;
        left: -20px;
        width: 100%;
        background-color: transparent;
        z-index: -1;

        @media (max-width: 768px) {
            top: -40px;
            left: -10px;
        }

        @media (max-width: 480px) {
            top: -20px;
            left: 0;
        }
    `;

    const Heading = styled.h1`
        font-size: 58px;
        font-weight: 600;
        line-height: 1.3;
        color: black;
        text-shadow: 1px 1px 2px rgba(255, 255, 255, 0.5);

        @media (max-width: 768px) {
            font-size: 48px;
        }

        @media (max-width: 480px) {
            font-size: 36px;
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