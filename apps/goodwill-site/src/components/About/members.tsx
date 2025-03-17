import React from "react";
import styled from "@emotion/styled";
import Jetae from "../../../imgs/teamImg/jetae.jpeg";
import Jihoon from "../../../imgs/teamImg/jihoon.png";
// import Profile3 from "../../../imgs/teamImg/profile3.jpg";
import Suen from "../../../imgs/teamImg/suen.jpeg";
import Hyeonwoo from "../../../imgs/teamImg/hyeonwoo.jpeg";
import Suho from "../../../imgs/teamImg/suho.jpeg";
import Junmo from "../../../imgs/teamImg/junmo.jpg";

// Types
interface TeamMember {
  id: number;
  name: string;
  position: string;
  imageUrl: string;
}

// Styled Components
const Container = styled.div`
  max-width: 1500px;
  margin: 0 auto;
  padding: 40px 20px;
  font-family: "Noto Sans KR", sans-serif;

  @media (max-width: 1024px) {
    padding: 30px 15px;
  }

  @media (max-width: 768px) {
    padding: 25px;
  }

  @media (max-width: 480px) {
    padding: 20px 15px;
  }
`;

const Title = styled.h2`
  font-size: 28px;
  font-weight: 600;
  text-align: center;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    font-size: 24px;
    margin-bottom: 30px;
  }

  @media (max-width: 480px) {
    font-size: 22px;
    margin-bottom: 25px;
  }
`;

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 25px;
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(1, 1fr);
    gap: 25px;
  }
`;

const MemberCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }

  @media (max-width: 768px) {
    align-items: center;
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  max-width: 270px;
  height: auto;
  aspect-ratio: 1 / 1;
  background-color: #e9e9e9;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: relative;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);

  @media (max-width: 1200px) {
    max-width: 250px;
    border-radius: 14px;
  }

  @media (max-width: 768px) {
    max-width: 230px;
    border-radius: 12px;
  }

  @media (max-width: 480px) {
    max-width: 80%;
  }
`;

const ProfileImage = styled.div<{ imageUrl: string }>`
  width: 92%;
  height: 92%;
  background-image: url(${(props) => props.imageUrl});
  background-size: cover;
  background-position: center;
  border-radius: 12px;

  @media (max-width: 768px) {
    border-radius: 10px;
  }

  @media (max-width: 480px) {
    border-radius: 8px;
  }
`;

const InfoContainer = styled.div`
  margin-top: 12px;
  text-align: center;
  width: 100%;
`;

const Name = styled.h3`
  font-size: 18px;
  font-weight: 600;
  margin: 6px 0 4px 0;

  @media (max-width: 768px) {
    font-size: 17px;
  }

  @media (max-width: 480px) {
    font-size: 16px;
  }
`;

const Position = styled.p`
  font-size: 16px;
  color: #777;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 15px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

// Component
const TeamGridPage: React.FC = () => {
  const teamMembers: TeamMember[] = [
    {
      id: 1,
      name: "김지태",
      position: "Operation Manager",
      imageUrl: Jetae,
    },
    {
      id: 2,
      name: "김지훈",
      position: "Operation Manager",
      imageUrl: Jihoon,
    },
    {
      id: 3,
      name: "김용현",
      position: "ML Assistant",
      imageUrl: "",
    },
    {
      id: 4,
      name: "김수은",
      position: "Visual Manager",
      imageUrl: Suen,
    },
    {
      id: 5,
      name: "박현우",
      position: "Mobile Engineer",
      imageUrl: Hyeonwoo,
    },
    {
      id: 6,
      name: "이수호",
      position: "Mobile Engineer",
      imageUrl: Suho,
    },
    {
      id: 7,
      name: "",
      position: "",
      imageUrl: "",
    },
    {
      id: 8,
      name: "김준모",
      position: "Mechatronics Engineer",
      imageUrl: Junmo,
    },
  ];

  return (
    <Container>
      <Title>팀원 소개</Title>
      <TeamGrid>
        {teamMembers.map((member) => (
          <MemberCard key={member.id}>
            <ImageContainer>
              <ProfileImage imageUrl={member.imageUrl} />
            </ImageContainer>
            <InfoContainer>
              <Name>{member.name}</Name>
              <Position>{member.position}</Position>
            </InfoContainer>
          </MemberCard>
        ))}
      </TeamGrid>
    </Container>
  );
};

export default TeamGridPage;
