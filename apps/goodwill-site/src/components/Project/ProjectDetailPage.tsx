import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from '@emotion/styled';
import DefaultLayout from '../../layouts/DefaultLayout';


// Styled components for the project detail page
const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: white;
  color: black;
`;

const ContentWrapper = styled.div`
  max-width: 1550px;
  margin: 0 auto;
  padding: 32px 16px;
  width: 100%;
`;

const StatusBadge = styled.span`
  display: inline-block;
  padding: 12px 28px;
  color: #05308C;
  font-size: 18px;
  margin-bottom: 24px;
  border-radius: var(--Corner-Full, 1000px);
  border: 1px solid var(--brand-primary-primary-800, #05308C);
  background: var(--Brand-Primary-50, #E6E9F5);
`;

const ProjectDate = styled.div`
  color: #666;
  margin-bottom: 8px;
  font-size: 32px;
`;

const ProjectTitleContainer = styled.div`
  
`;

const ProjectTitle = styled.h1`
  font-size: 60px;
  font-weight: 700;
  
`;

const ProjectSubtitle = styled.h2`
  font-size: 60px;
  font-weight: 700;
  transform: translateY(-30px);
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const InfoSection = styled.div`
  @media (min-width: 900px) {
    width: 100%;
  }
`;

const SectionTitle = styled.h3`
  font-size: 35px;
  font-weight: 700;
  
  padding-bottom: 8px;
  margin-bottom: 24px;
`;

const InfoContent = styled.div`
  border-left: 4px solid black;
  padding-left: 16px;
  margin-bottom: 32px;
  font-size: 27px;
`;

const InfoBlock = styled.div`
  margin-bottom: 32px;
`;

const InfoBlockTitle = styled.h4`
  font-weight: 700;
  margin-bottom: 8px;
`;

const InfoText = styled.p`
  font-size: 22px;
  line-height: 1.7;
`;

const NotFound = styled.h2`
  font-size: 24px;
  font-weight: 600;
  margin: 40px 0;
  text-align: center;
`;

const ImageSection = styled.div`
  width: 100%; /* 기존보다 더 크게 */
  max-width: 750px; /* 최대 너비 설정 */
  margin: 0 auto; /* 중앙 정렬 */
  transform: translateY(-370px);
`;

const ProjectImage = styled.div`
  background-color: #e2e8f0;
  border-radius: 20px;
  width: 100%;
  height: 600px; /* 기존보다 크게 조정 */

  @media (min-width: 768px) {
    height: 450px; /* 더 큰 화면에서 키움 */
  }

  background-size: cover;
  background-position: center;
`;
// Sample project data (would come from an API in a real application)
const projectsData = [
  {
    id: "1",
    status: "진행 중",
    title: "2025' GOODWILL(KE) Inc.",
    subtitle: "웹사이트 제작 Project",
    date: "2025. 02. 18 ~ 03. 17",
    imageUrl: "/assets/img/1.png",
    goal: "GOODWILL은 체계적인 스타트업형 조직 문화를 지향하지만, 공식적인 정보 공유 및 지침 프로세스가 부족하여 운영의 효율성이 낮습니다. 이를 해결하기 위해 GOODWILL의 정체성을 명확히 전달하고, 프로젝트 및 연구 기록을 체계적으로 보관할 웹사이트가 필요합니다.",
    background: "GOODWILL 웹사이트는 조직의 활동과 문화를 효과적으로 알리고, 지원자와 외부 협력사가 쉽게 접근할 수 있도록 제작됩니다. 또한, 지원 프로세스를 간소화하고, 프로젝트 및 연구 아카이빙을 통해 정보 관리의 효율성을 높이는 것을 목표로 합니다.",
    team: "김제인(Tech Lead), 박현우(Mobile Engineer)",
    tools: "Visual Studio, React.js, Figma, Illustrator",
    features: "Career, About, Project, Article, Announcement, Agora"
  },
  {
    id: "2",
    status: "완료",
    title: "SMARTFLOW",
    subtitle: "업무 관리 시스템 개발",
    date: "2025. 01. 10 ~ 02. 20",
    imageUrl: "/assets/img/2.png",
    goal: "기업 내 업무 흐름을 효율적으로 관리하고 팀 간 협업을 강화하기 위한 시스템이 필요합니다. 업무 할당, 진행 상황 추적, 문서 관리 등을 통합적으로 처리할 수 있는 솔루션을 개발합니다.",
    background: "기존 업무 관리 시스템은 각 부서별로 분리되어 있어 정보 공유가 어렵고 업무 추적에 많은 시간이 소요됩니다. 통합 플랫폼을 통해 업무 효율성을 높이고 투명한 커뮤니케이션 환경을 구축합니다.",
    team: "이지원(Product Manager), 김민수(Frontend Developer), 박서연(Backend Developer)",
    tools: "React, Node.js, MongoDB, Docker, AWS",
    features: "Task Management, Document Sharing, Calendar Integration, Analytics Dashboard, Mobile App"
  },
  {
    id: "3",
    status: "계획 중",
    title: "ECOTRACK",
    subtitle: "환경 모니터링 IoT 솔루션",
    date: "2025. 04. 01 ~ 06. 30",
    imageUrl: "/assets/img/3.png",
    goal: "도시 환경 데이터를 실시간으로 수집하고 분석하여 환경 변화를 감지하고 예측하는 IoT 시스템을 개발합니다. 대기 질, 소음, 온도 등 다양한 환경 요소를 측정합니다.",
    background: "기후 변화와 도시화로 인한 환경 문제가 심화되면서 정확한 데이터 기반의 환경 모니터링이 중요해지고 있습니다. 저비용 센서 네트워크를 구축하여 접근성 높은 환경 데이터를 제공합니다.",
    team: "정현우(Hardware Engineer), 최유진(Data Scientist), 한태희(Software Engineer)",
    tools: "Arduino, Raspberry Pi, Python, TensorFlow, AWS IoT",
    features: "Real-time Monitoring, Data Visualization, Predictive Analytics, Alert System, Public API"
  },
  {
    id: "4",
    status: "진행 중",
    title: "HEALTHPLUS",
    subtitle: "건강 관리 모바일 앱",
    date: "2025. 03. 05 ~ 05. 10",
    imageUrl: "/assets/img/4.png",
    goal: "사용자의 건강 정보를 효과적으로 관리하고 개인화된 건강 관리 솔루션을 제공하는 모바일 앱을 개발합니다. 식단 기록, 운동 추적, 건강 지표 모니터링 등 종합적인 건강 관리 기능을 제공합니다.",
    background: "생활 습관 개선과 예방 의학에 대한 관심이 높아지면서 일상적인 건강 관리의 중요성이 커지고 있습니다. 사용자 친화적인 인터페이스와 데이터 기반의 건강 인사이트를 제공합니다.",
    team: "장민서(UX Designer), 김동현(iOS Developer), 이수진(Backend Developer), 최지현(Health Specialist)",
    tools: "Swift, Firebase, HealthKit, CoreML, Python",
    features: "Diet Tracker, Exercise Log, Health Metrics, Personalized Recommendations, Social Sharing"
  },
  {
    id: "5",
    status: "완료",
    title: "FINTECH PRO",
    subtitle: "금융 데이터 분석 대시보드",
    date: "2024. 12. 01 ~ 2025. 02. 15",
    imageUrl: "/assets/img/5.png",
    goal: "투자자와 금융 분석가를 위한 종합적인 금융 데이터 시각화 및 분석 대시보드를 개발합니다. 실시간 시장 데이터, 기업 재무 정보, 경제 지표 등을 직관적으로 파악할 수 있는 솔루션을 제공합니다.",
    background: "금융 시장의 빠른 변화와 정보의 홍수 속에서 중요한 데이터를 효과적으로 필터링하고 분석할 수 있는 도구의 필요성이 증가하고 있습니다. 데이터 시각화와 AI 기반 분석을 통해 의사결정을 지원합니다.",
    team: "박준호(Frontend Developer), 김태영(Data Engineer), 이하은(Financial Analyst), 최재영(UI Designer)",
    tools: "D3.js, React, Python, PostgreSQL, AWS, TensorFlow",
    features: "Interactive Charts, Portfolio Analysis, Market Alerts, AI Predictions, PDF Reports"
  },
  {
    id: "6",
    status: "계획 중",
    title: "EDUMETRIX",
    subtitle: "교육 성과 분석 플랫폼",
    date: "2025. 05. 01 ~ 07. 30",
    imageUrl: "/assets/img/6.png",
    goal: "교육 기관을 위한 학생 성과 추적 및 분석 플랫폼을 개발합니다. 학습 데이터를 수집하고 분석하여 개인화된 학습 경로와 개선 방안을 제시합니다.",
    background: "표준화된 교육에서 개인화된 학습으로 패러다임이 변화하면서 데이터 기반의 교육 성과 분석이 중요해지고 있습니다. 학생별 강점과 약점을 파악하여 맞춤형 교육을 지원합니다.",
    team: "정민우(Education Specialist), 김소연(Full-stack Developer), 이준영(Data Scientist), 박지은(UX Researcher)",
    tools: "Django, React, PostgreSQL, scikit-learn, Tableau",
    features: "Student Progress Tracking, Performance Analytics, Personalized Recommendations, Report Generation, Parent Dashboard"
  }
];

const GoodwillProjectDetail = () => {
  const { id } = useParams();
  const [project, setProject] = useState<{ 
    id: string;
    status: string;
    title: string;
    subtitle: string;
    date: string;
    imageUrl: string;
    goal: string;
    background: string;
    team: string;
    tools: string;
    features: string;
} | null>(null);

  useEffect(() => {
    // Find the project with the matching ID
    const foundProject = projectsData.find(p => p.id === id);
    setProject(foundProject || null);
  }, [id]);

  if (!project) {
    return (
      <Container>
        <ContentWrapper>
          <NotFound>프로젝트를 찾을 수 없습니다.</NotFound>
        </ContentWrapper>
      </Container>
    );
  }

  return (
    <DefaultLayout>

    <Container>
      <ContentWrapper>
        {/* Status Badge */}
        <StatusBadge>{project.status}</StatusBadge>

        {/* Project Date */}
        <ProjectDate>{project.date}</ProjectDate>

        {/* Project Title */}
        <ProjectTitleContainer>
          <ProjectTitle>{project.title}</ProjectTitle>
          <ProjectSubtitle>{project.subtitle}</ProjectSubtitle>
        </ProjectTitleContainer>

        <ContentContainer>
          {/* Left Content Section */}
          <InfoSection>
            <SectionTitle>프로젝트 정보</SectionTitle>
            
            <InfoContent>
              <InfoBlock>
                <InfoBlockTitle>프로젝트 목표</InfoBlockTitle>
                <InfoText>{project.goal}</InfoText>
              </InfoBlock>

              <InfoBlock>
                <InfoBlockTitle>프로젝트 배경</InfoBlockTitle>
                <InfoText>{project.background}</InfoText>
              </InfoBlock>

              <InfoBlock>
                <InfoBlockTitle>참여 팀원</InfoBlockTitle>
                <InfoText>{project.team}</InfoText>
              </InfoBlock>

              <InfoBlock>
                <InfoBlockTitle>사용 툴</InfoBlockTitle>
                <InfoText>{project.tools}</InfoText>
              </InfoBlock>

              <InfoBlock>
                <InfoBlockTitle>주요 기능</InfoBlockTitle>
                <InfoText>{project.features}</InfoText>
              </InfoBlock>
            </InfoContent>
          </InfoSection>

          {/* Right Image Section */}
          <ImageSection>
            <ProjectImage style={{ backgroundImage: `url(${project.imageUrl})` }} />
          </ImageSection>
        </ContentContainer>
      </ContentWrapper>
    </Container>
    </DefaultLayout>
  );
};

export default GoodwillProjectDetail;