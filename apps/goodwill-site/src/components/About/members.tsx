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
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Circle = styled.div`
  width: 40%;
  height: 40%;
  background-color: #ccc;
  border-radius: 50%;
`;

const Name = styled.h3`
  font-size: 18px;
  font-weight: 600;
  margin: 0 0 4px 0;
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
      imageUrl: '/images/profile1.jpg',
    },
    {
      id: 2,
      name: '김지훈',
      position: 'Operation Manager',
      imageUrl: '/images/profile2.jpg',
    },
    {
      id: 3,
      name: '김용현',
      position: 'ML Assistant',
      imageUrl: '/images/profile3.jpg',
    },
    {
      id: 4,
      name: '김수은',
      position: 'Visual Manager',
      imageUrl: '/images/profile4.jpg',
    },
    {
      id: 5,
      name: '박현우',
      position: 'Mobile Engineer',
      imageUrl: '/images/profile5.jpg',
    },
    {
      id: 6,
      name: '이수호',
      position: 'Mobile Engineer',
      imageUrl: '/images/profile6.jpg',
    },
    {
      id: 7,
      name: '백현빈',
      position: 'Full-Stack Engineer',
      imageUrl: '/images/profile7.jpg',
    },
    {
      id: 8,
      name: '김준모',
      position: 'Mechatronics Engineer',
      imageUrl: '/images/profile8.jpg',
    },
  ];

  return (
    <Container>
      <TeamGrid>
        {teamMembers.map((member) => (
          <MemberCard key={member.id}>
            <ImageContainer>
              <Circle />
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