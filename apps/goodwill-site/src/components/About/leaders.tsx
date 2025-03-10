import React from "react";
import styled from "@emotion/styled";

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
  font-family: Pretendard;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 60px;
`;

const Title = styled.h1`
  font-size: 28px;
  font-weight: 600;
  margin-bottom: 1px;
  font-family: Pretendard;
`;

const Subtitle = styled.h2`
  font-size: 28px;
  font-weight: 600;

  font-family: Pretendard;
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

const ProfileImage = styled.div<{ imageUrl: string }>`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(${(props) => props.imageUrl});
  background-size: cover;
  background-position: center;
`;

// const Circle = styled.div`
//   width: 120px;
//   height: 120px;
//   background-color: #ddd;
//   border-radius: 50%;
// `;

const InfoContainer = styled.div<{ isEven: boolean }>`
  flex: 1;
  text-align: ${(props) => (props.isEven ? "right" : "left")};

  @media (max-width: 768px) {
    text-align: center;
  }
`;

const PositionTitle = styled.div<{ isEven: boolean }>`
  display: flex;
  align-items: baseline;
  gap: 10px;
  margin-bottom: 20px;
  justify-content: ${(props) => (props.isEven ? "flex-end" : "flex-start")};

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
  color: #7b7b7b;
  font-family: Pretendard;
  font-size: 40px;
  font-style: normal;
  font-weight: 200;
  line-height: 120%; /* 48px */
  transform: translateY(-11px);
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
      name: "고승한",
      position: "CEO",
      description: `안녕하세요. 저는 대전대신고등학교 부학생회장 고승한입니다.
모자이크 조직이 아름다운 그림으로 재탄생하는 것은 한 조각 한 조각 자신의 일이어 할 자리에 있기 때문입니다.
수백 개의 조각 중에서 하나라도 틀리면 그림이 완성되지 않습니다.
GOODWILL의 팀원들은 모두 자신의 자리를 굳건히 지켜, 하나의 그림으로 인식되었으면 합니다.`,
      imageUrl: "../../../imgs/teamImg/justin.png",
    },
    {
      id: 2,
      name: "이현서",
      position: "COO",
      description: `안녕하세요. 저는 대전대신고등학교 부학생회장 이현서입니다.
조직이 원활하게 운영되기 위해서는 각자의 역할이 조화를 이루며 움직여야 합니다.
모든 팀원이 능동적으로 참여하고, 서로 신뢰하며 협력할 때 비로소 단단한 조직이 탄생합니다.
GOODWILL이 하나의 목표를 향해 나아갈 수 있도록, 팀원들의 역량을 극대화하고
유기적인 소통이 이루어지는 환경을 만들어가겠습니다.`,
      imageUrl: "../../../imgs/teamImg/hyeonseo.png",
    },
    {
      id: 3,
      name: "배진영",
      position: "Product Designer",
      description: `안녕하세요. 저는 GOODWILL에서 제품 디자인을 담당하는 배진영입니다.
완성도 높은 디자인은 작은 디테일에서 시작됩니다.
사용자의 경험을 깊이 고민하며, 미적 감각과 실용성을 동시에 고려하는 디자인을 추구합니다.
GOODWILL이 만드는 모든 결과물에 감각적이고 기능적인 아름다움을 담아내겠습니다.`,
      imageUrl: "../../../imgs/teamImg/bae.png",
    },
    {
      id: 4,
      name: "김재민",
      position: "Tech Lead",
      description: `안녕하세요. 저는 GOODWILL에서 기술을 이끄는 김재민입니다.
튼튼한 기반이 없이는 견고한 구조를 세울 수 없듯이,
안정적이면서도 유연한 기술 환경을 구축하는 것이 저의 역할입니다.
빠르게 변화하는 기술 속에서 팀이 효율적으로 협업할 수 있도록 이끌고,
최적의 기술적 방향성을 제시하여 GOODWILL의 성장을 뒷받침하겠습니다.`,
      imageUrl: "../../../imgs/teamImg/jamin.PNG",
    },
    {
      id: 5,
      name: "김세현",
      position: "Exploring Engineer",
      description: `안녕하세요. 저는 GOODWILL에서 새로운 기술과 가능성을 탐색하는 김세현입니다.
기술의 발전은 끊임없는 탐구와 실험에서 시작됩니다.
새로운 가능성을 발견하고, 그것을 실제로 구현하는 과정 속에서 혁신이 탄생한다고 믿습니다.
끊임없는 도전과 창의적인 접근을 통해 GOODWILL이 한 단계 더 성장할 수 있도록 기여하겠습니다.`,
      imageUrl: "../../../imgs/teamImg/saehun.png",
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
                <ProfileImage imageUrl={member.imageUrl} />
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
