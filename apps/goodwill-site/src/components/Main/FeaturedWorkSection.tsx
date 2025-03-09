import React, { useState } from "react";
import styled from "@emotion/styled";
import { motion } from "framer-motion"; // framer-motion 추가

// Define the project type
interface Project {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  description?: string;
}

// Props for the FeaturedWork component
interface FeaturedWorkProps {
  projects: Project[];
}

// Define isMobile
const isMobile = window.innerWidth <= 768;

// Styled components using emotion
const FeaturedWorkContainer = styled.section`
  max-width: 2000px;
  margin: 0 auto;
  padding: 20px;
`;

const FeaturedWorkTitle = styled.h2`
  font-size: 100px;
  font-weight: 700;
  margin-bottom: 40px;
  font-family: sans-serif;
  transform: translateY(120px);
`;

const Subtitle = styled.h1`
  color: #000;
  text-align: right;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 300;
  line-height: 150%; /* 30px */
  letter-spacing: -0.5px;
  transform: translateY(-20px);
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ProjectCard = styled(motion.div)`
  // motion.div로 변경
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;
  cursor: pointer;
  transition: 0.3s ease;

  &:hover {
    scale: 1.03;
    transition: 0.3s ease;
    opacity: 0.6;
  }
`;

const ProjectImage = styled.div<{ imageUrl: string }>`
  height: 240px;
  border-radius: 20px;
  background-color: #e0e0e0; /* Default gray background */
  background-image: ${(props) =>
    props.imageUrl ? `url(${props.imageUrl})` : "none"};
  background-size: cover;
  background-position: center;
  height: 500px;
  margin-bottom: 16px;
`;

const ProjectCategory = styled.span`
  font-size: 20px;
  color: #555555;
  margin-bottom: 8px;
`;

const ProjectTitle = styled.h3`
  font-size: 50px;
  font-weight: 700;
  margin: 0;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 40px;
`;

const AboutButton = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    if (!isMobile) {
      setIsHovered(true);
    }
  };

  const handleMouseLeave = () => {
    if (!isMobile) {
      setIsHovered(false);
    }
  };

  const handleTouchStart = () => {
    if (isMobile) {
      setIsHovered(true);
      setTimeout(() => setIsHovered(false), 500);
    }
  };

  return (
    <motion.button
      style={{
        display: "flex",
        alignItems: "center",
        padding: isMobile ? "8px 16px" : "12px 24px",
        backgroundColor: "white",
        borderRadius: "9999px",
        border: "none",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        position: "relative",
        overflow: "hidden",
        cursor: "pointer",
        fontWeight: "bold",
        fontSize: isMobile ? "16px" : "18px",
      }}
      whileTap={{ scale: 0.95 }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
    >
      <div
        style={{
          position: "relative",
          width: isMobile ? "20px" : "24px",
          height: isMobile ? "20px" : "24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <motion.div
          initial={{ width: 8, height: 8, backgroundColor: "#000" }}
          animate={{
            width: isHovered ? (isMobile ? 600 : 650) : 8,
            height: isHovered ? (isMobile ? 2000 : 650) : 8,
            x: isHovered ? (isMobile ? -80 : -70) : 0,
            y: isHovered ? (isMobile ? -50 : -70) : 0,
            backgroundColor: isHovered ? "rgba(5, 48, 140, 1)" : "#000",
          }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 20,
          }}
          style={{
            position: "absolute",
            borderRadius: "50%",
          }}
        />
        <span
          style={{
            position: "relative",
            opacity: isHovered ? 0 : 1,
            transition: "opacity 0.2s ease",
          }}
        >
          •
        </span>
      </div>

      <motion.span
        animate={{
          color: isHovered ? "#ffffff" : "#000000",
        }}
        transition={{ duration: 0.2 }}
        style={{
          position: "relative",
          marginLeft: "8px",
        }}
      >
        SEE ALL PROJECTS
      </motion.span>
    </motion.button>
  );
};

const FeaturedWork: React.FC<FeaturedWorkProps> = ({ projects }) => {
  return (
    <FeaturedWorkContainer>
      <FeaturedWorkTitle>Featured Work</FeaturedWorkTitle>
      <Subtitle>
        내용을 입력해 주세요.내용을 입력해 주세요. <br />
        내용을 입력해 주세요.내용을 입력해 주세요. <br />
        내용을 입력해 주세요.내용을 입력해 주세요.
      </Subtitle>

      <ProjectsGrid>
        {projects.map((project, index) => (
          <ProjectCard
            key={project.id}
            initial={{ scale: 0.9, y: 50 }} // 초기 상태: 투명하고 아래로 이동
            whileInView={{ scale: 1, y: 0 }} // 화면에 보일 때: 투명도 1, 원래 위치로
            viewport={{ once: false }} // 한 번만 애니메이션 실행
            transition={{ duration: 0.1, delay: index * 0.1 }} // 지연 시간 추가
          >
            <ProjectImage imageUrl={project.imageUrl} />
            <ProjectCategory>{project.category}</ProjectCategory>
            <ProjectTitle>{project.title}</ProjectTitle>
          </ProjectCard>
        ))}
      </ProjectsGrid>

      <ButtonContainer>
        <AboutButton />
      </ButtonContainer>
    </FeaturedWorkContainer>
  );
};

export default FeaturedWork;
