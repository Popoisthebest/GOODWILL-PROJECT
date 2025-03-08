import React from 'react';
import styled from '@emotion/styled';

// Types
interface TeamMember {
  id: number;
  name: string;
  position: string;
  description: string;
  imageUrl: string;
}

// Styled Components
const Container = styled.div`
  max-width: 1500px;
  margin: 0 auto;
  padding: 40px 20px;
  margin-top: 200px;
  font-family: 'Noto Sans KR', sans-serif;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 60px;
`;

const Title = styled.h1`
  font-size: 28px;
  font-weight: 600;
  margin-bottom: 10px;
`;

const Subtitle = styled.h2`
  font-size: 20px;
  font-weight: 400;
  color: #555;
`;

const TeamGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 60px;
`;

const MemberCard = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
  
  &:nth-of-type(even) {
    flex-direction: row-reverse;
  }
  
  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    
    &:nth-of-type(even) {
      flex-direction: column;
      text-align: center;
    }
  }
`;

const ImageContainer = styled.div`
  width: 320px;
  height: 320px;
  background-color: #f0f0f0;
  border-radius: 32px;
  overflow: hidden;
  flex-shrink: 0;
`;

const ProfileImage = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Circle = styled.div`
  width: 120px;
  height: 120px;
  background-color: #ddd;
  border-radius: 50%;
`;

const InfoContainer = styled.div<{ isEven: boolean }>`
  flex: 1;
  text-align: ${props => props.isEven ? 'right' : 'left'};
  
  @media (max-width: 768px) {
    text-align: center;
  }
`;

const PositionTitle = styled.div<{ isEven: boolean }>`
  display: flex;
  align-items: baseline;
  gap: 10px;
  margin-bottom: 20px;
  justify-content: ${props => props.isEven ? 'flex-end' : 'flex-start'};
  
  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const Name = styled.h3`
  font-size: 70px;
  font-weight: 600;
  top: 100px;
  
`;

const Position = styled.span`
  font-size: 50px;
  color: #888;
`;

const Description = styled.p`
  font-size: 17px;
  line-height: 1.6;
  color: #555;
  white-space: pre-line;
  margin-top: -50px;
`;

// Component
const TeamPage: React.FC = () => {
  const teamMembers: TeamMember[] = [
    {
      id: 1,
      name: '고승한',
      position: 'CEO',
      description: `안녕하세요. 저는 대전대신고등학교 부학생회장 고승한입니다.
모자이크 조직이 아름다운 그림으로 재탄생하는 것은 한 조각 한 조각 자신의 일이어 할 자리에 있기 때문입니다.
수백 개의 조각 중에서 하나라도 틀리면 그림이 완성되지 않습니다.
GOODWILL의 팀원들은 모두 자신의 자리를 굳건히 지켜, 하나의 그림으로 인식되었으면 합니다.`,
      imageUrl: '/images/profile1.jpg',
    },
    {
      id: 2,
      name: '이현서',
      position: 'COO',
      description: `안녕하세요. 저는 대전대신고등학교 부학생회장 고승한입니다.
모자이크 조직이 아름다운 그림으로 재탄생하는 것은 한 조각 한 조각 자신의 일이어 할 자리에 있기 때문입니다.
수백 개의 조각 중에서 하나라도 틀리면 그림이 완성되지 않습니다.
GOODWILL의 팀원들은 모두 자신의 자리를 굳건히 지켜, 하나의 그림으로 인식되었으면 합니다.`,
      imageUrl: '/images/profile2.jpg',
    },
    {
      id: 3,
      name: '배진영',
      position: 'Product Designer',
      description: `안녕하세요. 저는 대전대신고등학교 부학생회장 고승한입니다.
모자이크 조직이 아름다운 그림으로 재탄생하는 것은 한 조각 한 조각 자신의 일이어 할 자리에 있기 때문입니다.
수백 개의 조각 중에서 하나라도 틀리면 그림이 완성되지 않습니다.
GOODWILL의 팀원들은 모두 자신의 자리를 굳건히 지켜, 하나의 그림으로 인식되었으면 합니다.`,
      imageUrl: '/images/profile3.jpg',
    },
    {
      id: 4,
      name: '김재민',
      position: 'Tech Lead',
      description: `안녕하세요. 저는 대전대신고등학교 부학생회장 고승한입니다.
모자이크 조직이 아름다운 그림으로 재탄생하는 것은 한 조각 한 조각 자신의 일이어 할 자리에 있기 때문입니다.
수백 개의 조각 중에서 하나라도 틀리면 그림이 완성되지 않습니다.
GOODWILL의 팀원들은 모두 자신의 자리를 굳건히 지켜, 하나의 그림으로 인식되었으면 합니다.`,
      imageUrl: '/images/profile4.jpg',
    },
    {
      id: 5,
      name: '김세현',
      position: 'Exploring Engineer',
      description: `안녕하세요. 저는 대전대신고등학교 부학생회장 고승한입니다.
모자이크 조직이 아름다운 그림으로 재탄생하는 것은 한 조각 한 조각 자신의 일이어 할 자리에 있기 때문입니다.
수백 개의 조각 중에서 하나라도 틀리면 그림이 완성되지 않습니다.
GOODWILL의 팀원들은 모두 자신의 자리를 굳건히 지켜, 하나의 그림으로 인식되었으면 합니다.`,
      imageUrl: '/images/profile5.jpg',
    },
  ];

  return (
    <Container>
      <Header>
        <Title>GOODWILL을 이끌어갈</Title>
        <Subtitle>주요 팀원을 소개합니다.</Subtitle>
      </Header>

      <TeamGrid>
        {teamMembers.map((member, index) => {
          const isEven = index % 2 === 1;
          
          return (
            <MemberCard key={member.id}>
              <ImageContainer>
                <ProfileImage>
                  <Circle />
                </ProfileImage>
              </ImageContainer>
              <InfoContainer isEven={isEven}>
                <PositionTitle isEven={isEven}>
                  <Name>{member.name}</Name>
                  <Position>{member.position}</Position>
                </PositionTitle>
                <Description>{member.description}</Description>
              </InfoContainer>
            </MemberCard>
          );
        })}
      </TeamGrid>
    </Container>
  );
};

export default TeamPage;