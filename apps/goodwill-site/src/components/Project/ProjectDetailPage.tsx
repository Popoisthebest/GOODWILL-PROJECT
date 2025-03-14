import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DefaultLayout from "../../layouts/DefaultLayout.tsx";
import styled from "@emotion/styled";
// import { css } from "@emotion/react";

// Styled components for the project detail page
const ProjectContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
`;

const ProjectHeader = styled.div`
  margin-bottom: 40px;
`;

const ProjectTitle = styled.h1`
  font-size: 36px;
  font-weight: 700;
  margin-bottom: 16px;
`;

const ProjectCategory = styled.div`
  font-size: 18px;
  color: #666;
  margin-bottom: 24px;
`;

const ProjectDate = styled.div`
  font-size: 16px;
  color: #888;
`;

const ProjectImage = styled.img`
  width: 100%;
  max-height: 600px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 40px;
`;

const ProjectContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

const ProjectSection = styled.div`
  margin-bottom: 30px;
`;

const SectionTitle = styled.h2`
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 16px;
  padding-bottom: 8px;
  border-bottom: 2px solid #f0f0f0;
`;

const SectionContent = styled.div`
  font-size: 16px;
  line-height: 1.6;
  color: #333;
`;

const TagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 20px;
`;

const Tag = styled.span`
  padding: 6px 12px;
  background-color: #f5f5f5;
  border-radius: 20px;
  font-size: 14px;
  color: #555;
`;

const TeamSection = styled.div`
  margin-top: 40px;
`;

const TeamMember = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;

const MemberName = styled.div`
  font-weight: 600;
  margin-right: 8px;
`;

const MemberRole = styled.div`
  font-size: 14px;
  color: #666;
`;

// Mock data (would come from an API in a real application)
const projectsData = [
  {
    id: "1",
    title: "프로젝트 A",
    category: "웹 개발",
    date: "2025.02.18 - 2025.03.17",
    imageUrl: "/assets/img/1.png",
    description: "GOODWILL은 체계적인 스타트업의 조직 문화를 지향하지만, 공식적인 정보 공유 및 지침 프로세스가 부족하여 운영의 혼란성이 낮습니다. 이를 해결하기 위해 GOODWILL의 정체성을 명확히 전달하고, 프로젝트 및 연구 기록을 체계적으로 보관할 웹사이트가 필요합니다.",
    overview: "GOODWILL 웹사이트는 조직의 활동과 문화를 효과적으로 알리고, 지원자와 외부 협력사가 쉽게 접근할 수 있도록 제작됩니다. 또한, 지원 프로세스를 간소화하고, 프로젝트 및 연구 아카이빙을 통해 장면 관리의 효율성을 높이는 것을 목표로 합니다.",
    technologies: ["Visual Studio", "React.js", "Figma", "Illustrator"],
    features: ["Career", "About", "Project", "Article", "Announcement", "Agora"],
    team: [
      { name: "김제인", role: "Tech Lead" },
      { name: "박현우", role: "Mobile Engineer" }
    ]
  },
  {
    id: "2",
    title: "프로젝트 B",
    category: "UI/UX 디자인",
    date: "2025.01.15 - 2025.02.28",
    imageUrl: "/images/project2.jpg",
    description: "사용자 경험을 향상시키기 위한 UI/UX 디자인 프로젝트입니다.",
    overview: "직관적이고 사용하기 쉬운 인터페이스를 설계하여 사용자들이 더 효과적으로 서비스를 이용할 수 있도록 합니다.",
    technologies: ["Figma", "Adobe XD", "Sketch", "Illustrator"],
    features: ["Responsive Design", "User Testing", "Prototyping", "Wireframing"],
    team: [
      { name: "이민지", role: "UX Designer" },
      { name: "정수현", role: "UI Designer" }
    ]
  },
  {
    id: "3",
    title: "프로젝트 C",
    category: "모바일 앱",
    date: "2025.02.10 - 2025.04.15",
    imageUrl: "/images/project3.jpg",
    description: "iOS 및 Android 플랫폼을 위한 모바일 애플리케이션 개발 프로젝트입니다.",
    overview: "크로스 플랫폼 기술을 활용하여 효율적으로 두 플랫폼 모두에서 작동하는 앱을 개발합니다.",
    technologies: ["React Native", "TypeScript", "Firebase", "Redux"],
    features: ["Push Notifications", "Offline Mode", "Social Login", "Real-time Updates"],
    team: [
      { name: "한지원", role: "Mobile Developer" },
      { name: "최영준", role: "Backend Developer" }
    ]
  },
  {
    id: "4",
    title: "프로젝트 D",
    category: "데이터 분석",
    date: "2025.03.01 - 2025.05.30",
    imageUrl: "/images/project4.jpg",
    description: "대규모 데이터셋을 분석하여 비즈니스 인사이트를 추출하는 프로젝트입니다.",
    overview: "머신 러닝 알고리즘을 활용하여 예측 모델을 구축하고 데이터 시각화를 통해 복잡한 정보를 이해하기 쉽게 표현합니다.",
    technologies: ["Python", "TensorFlow", "Pandas", "Tableau"],
    features: ["Predictive Analytics", "Data Visualization", "Automated Reporting", "Real-time Dashboard"],
    team: [
      { name: "김데이터", role: "Data Scientist" },
      { name: "이분석", role: "ML Engineer" }
    ]
  },
  {
    id: "5",
    title: "프로젝트 E",
    category: "블록체인",
    date: "2025.02.20 - 2025.06.10",
    imageUrl: "/images/project5.jpg",
    description: "분산 원장 기술을 활용한 혁신적인 블록체인 솔루션 개발 프로젝트입니다.",
    overview: "스마트 계약과, 분산 애플리케이션을 통해 안전하고 투명한 디지털 거래 플랫폼을 구축합니다.",
    technologies: ["Solidity", "Ethereum", "Web3.js", "Truffle"],
    features: ["Smart Contracts", "Decentralized Apps", "Token Economy", "Consensus Mechanism"],
    team: [
      { name: "박블록", role: "Blockchain Developer" },
      { name: "최체인", role: "Security Specialist" }
    ]
  },
  {
    id: "6",
    title: "프로젝트 F",
    category: "AI 솔루션",
    date: "2025.01.05 - 2025.04.20",
    imageUrl: "/images/project6.jpg",
    description: "인공지능을 활용한 비즈니스 프로세스 자동화 솔루션입니다.",
    overview: "딥러닝 모델을 활용하여 자연어 처리와 이미지 인식 기능을 구현하고, 업무 효율성을 극대화합니다.",
    technologies: ["PyTorch", "OpenCV", "NLTK", "FastAPI"],
    features: ["Image Recognition", "Natural Language Processing", "Recommendation Engine", "Chatbot"],
    team: [
      { name: "송인공", role: "AI Researcher" },
      { name: "정지능", role: "Backend Developer" }
    ]
  }
];

const ProjectDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [project, setProject] = useState<any | null>(null);

  useEffect(() => {
    // In a real app, you'd fetch from an API
    const foundProject = projectsData.find(p => p.id === id);
    setProject(foundProject || null);
  }, [id]);

  if (!project) {
    return (
      <DefaultLayout>
        <ProjectContainer>
          <h2>프로젝트를 찾을 수 없습니다.</h2>
        </ProjectContainer>
      </DefaultLayout>
    );
  }

  return (
    <DefaultLayout>
      <ProjectContainer>
        <ProjectHeader>
          <ProjectTitle>{project.title}</ProjectTitle>
          <ProjectCategory>{project.category}</ProjectCategory>
          <ProjectDate>{project.date}</ProjectDate>
        </ProjectHeader>

        <ProjectImage src={project.imageUrl} alt={project.title} />

        <ProjectContent>
          <ProjectSection>
            <SectionTitle>프로젝트 목표</SectionTitle>
            <SectionContent>{project.description}</SectionContent>
          </ProjectSection>

          <ProjectSection>
            <SectionTitle>프로젝트 배경</SectionTitle>
            <SectionContent>{project.overview}</SectionContent>
          </ProjectSection>

          <ProjectSection>
            <SectionTitle>사용 툴</SectionTitle>
            <TagContainer>
              {project.technologies.map((tech: string, index: number) => (
                <Tag key={index}>{tech}</Tag>
              ))}
            </TagContainer>
          </ProjectSection>

          <ProjectSection>
            <SectionTitle>주요 기능</SectionTitle>
            <TagContainer>
              {project.features.map((feature: string, index: number) => (
                <Tag key={index}>{feature}</Tag>
              ))}
            </TagContainer>
          </ProjectSection>

          <TeamSection>
            <SectionTitle>참여 팀원</SectionTitle>
            {project.team.map((member: { name: string; role: string }, index: number) => (
              <TeamMember key={index}>
                <MemberName>{member.name}</MemberName>
                <MemberRole>({member.role})</MemberRole>
              </TeamMember>
            ))}
          </TeamSection>
        </ProjectContent>
      </ProjectContainer>
    </DefaultLayout>
  );
};

export default ProjectDetailPage;