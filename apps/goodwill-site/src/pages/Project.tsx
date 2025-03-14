import React from "react";
import DefaultLayout from "../layouts/DefaultLayout.tsx";
import FeaturedWork from "../components/Main/FeaturedWorkSection";
import { mainDiv, mainText, subText, subTitle } from "../components/Project/Project.style.ts";
import { css } from "@emotion/react";

// FeaturedWork 컴포넌트에 대한 스타일 오버라이드 - 필요한 것만 숨기고 버튼은 유지
const featuredWorkOverride = css`
  & .featured-work h2, /* FeaturedWorkTitle */
  & .featured-work p /* Subtitle */ {
    display: none !important;
  }
  /* 버튼 컨테이너는 유지 */
`;

// Mock data (in a real app, this would likely come from an API)
const projects = [
  {
    id: "1",
    title: "프로젝트 A",
    category: "웹 개발",
    imageUrl: "/assets/img/1.png",
    description: "React 기반 웹 프로젝트",
    link: "/project/1" // 상세 페이지 링크 추가
  },
  {
    id: "2",
    title: "프로젝트 B",
    category: "UI/UX 디자인",
    imageUrl: "/images/project2.jpg",
    description: "사용자 경험을 향상시키기 위한 UI/UX 디자인 프로젝트",
    link: "/project/2"
  },
  {
    id: "3",
    title: "프로젝트 C",
    category: "모바일 앱",
    imageUrl: "/images/project3.jpg",
    description: "iOS 및 Android 플랫폼을 위한 모바일 애플리케이션",
    link: "/project/3"
  },
  {
    id: "4",
    title: "프로젝트 D",
    category: "데이터 분석",
    imageUrl: "/images/project4.jpg",
    description: "대규모 데이터셋을 분석하여 비즈니스 인사이트 추출",
    link: "/project/4"
  },
  {
    id: "5",
    title: "프로젝트 E",
    category: "블록체인",
    imageUrl: "/images/project5.jpg",
    description: "분산 원장 기술을 활용한 혁신적인 블록체인 솔루션",
    link: "/project/5"
  },
  {
    id: "6",
    title: "프로젝트 F",
    category: "AI 솔루션",
    imageUrl: "/images/project6.jpg",
    description: "인공지능을 활용한 비즈니스 프로세스 자동화",
    link: "/project/6"
  }
];

const ProjectPage: React.FC = () => {
  return (
    <DefaultLayout>
      <div css={mainDiv}>
        <div css={mainText}>OUR PROJECTS</div>
      </div>
      <div css={subTitle}>
        "Goodwill Project | 창의적인 아이디어, 혁신적인 솔루션"
      </div>
      <div css={{ height: "12px" }}></div>
      <div css={subText}>
        <div>굿윌 프로젝트는 기술과 창의성을 결합하여 새로운 가능성을 만들어갑니다.</div>
        <div>우리는 혁신적인 솔루션을 통해 더 나은 세상을 만들어가는 것을 목표로 합니다.</div>
      </div>
      <div css={{ height: "32px" }}></div>
      
      {/* FeaturedWork 컴포넌트에 projects 배열 전달, 스타일 오버라이드 적용 */}
      <div css={featuredWorkOverride}>
        <FeaturedWork projects={projects} className="featured-work" showButton={false} />
      </div>
    </DefaultLayout>
  );
};

export default ProjectPage;