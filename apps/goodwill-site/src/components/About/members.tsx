import React from 'react';
import styled from '@emotion/styled';

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
  font-family: 'Noto Sans KR', sans-serif;
`;

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
  
  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const MemberCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const ImageContainer = styled.div`
  width: 270px;
  height: 270px;
  aspect-ratio: 1 / 1;
  background-color: #e9e9e9;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: relative;
`;

const ProfileImage = styled.div<{ imageUrl: string }>`
  width: 250px;
  height: 250px;
  background-image: url(${props => props.imageUrl});
  background-size: cover;
  background-position: center;
  border-radius: 12px;
`;

const Name = styled.h3`
  font-size: 18px;
  font-weight: 600;
  margin: 6px 0 4px 0;
`;

const Position = styled.p`
  font-size: 16px;
  color: #777;
  margin: 0;
`;

// Component
const TeamGridPage: React.FC = () => {
  const teamMembers: TeamMember[] = [
    {
      id: 1,
      name: '김지태',
      position: 'Operation Manager',
      imageUrl: 'imgs/teamImg/jetae.jpeg',
    },
    {
      id: 2,
      name: '김지훈',
      position: 'Operation Manager',
      imageUrl: 'imgs/teamImg/jihoon.png',
    },
    {
      id: 3,
      name: '김용현',
      position: 'ML Assistant',
      imageUrl: '/imgs/teamImg/profile3.jpg',
    },
    {
      id: 4,
      name: '김수은',
      position: 'Visual Manager',
      imageUrl: 'imgs/teamImg/suen.jpeg',
    },
    {
      id: 5,
      name: '박현우',
      position: 'Mobile Engineer',
      imageUrl: 'imgs/teamImg/hyeonwoo.jpeg',
    },
    {
      id: 6,
      name: '이수호',
      position: 'Mobile Engineer',
      imageUrl: 'imgs/teamImg/suho.jpeg',
    },
    {
      id: 7,
      name: '백현빈',
      position: 'Full-Stack Engineer',
      imageUrl: 'imgs/teamImg/pack.png',
    },
    {
      id: 8,
      name: '김준모',
      position: 'Mechatronics Engineer',
      imageUrl: 'imgs/teamImg/junmo.jpg',
    },
  ];
console.log("Rendering Members component", teamMembers);

  return (
    <Container>
      <TeamGrid>
        {teamMembers.map((member) => (
          <MemberCard key={member.id}>
            <ImageContainer>
              <ProfileImage imageUrl={member.imageUrl} />
            </ImageContainer>
            <Name>{member.name}</Name>
            <Position>{member.position}</Position>
          </MemberCard>
        ))}
      </TeamGrid>
    </Container>
  );
};

export default TeamGridPage;
