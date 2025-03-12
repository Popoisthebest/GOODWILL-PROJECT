import DefaultLayout from "../layouts/DefaultLayout.tsx";
import FeaturedWork from "../components/Main/FeaturedWorkSection";
import { mainDiv, mainText, subText, subTitle, itemDiv } from "../components/Project/Project.style.ts";

const projects = [
  {
    id: "1",
    title: "프로젝트 A",
    category: "웹 개발",
    imageUrl: "assets/img/1.png",
    description: "React 기반 웹 프로젝트",
  },
  {
    id: "2",
    title: "프로젝트 B",
    category: "UI/UX 디자인",
    imageUrl: "/images/project2.jpg",
  },
  {
    id: "3",
    title: "프로젝트 C",
    category: "모바일 앱",
    imageUrl: "/images/project3.jpg",
  },
  {
    id: "4",
    title: "프로젝트 D",
    category: "모바일 앱",
    imageUrl: "/images/project3.jpg",
  },
  {
    id: "5",
    title: "프로젝트 E",
    category: "모바일 앱",
    imageUrl: "/images/project3.jpg",
  },
  {
    id: "6",
    title: "프로젝트 F",
    category: "모바일 앱",
    imageUrl: "/images/project3.jpg",
  },
];

const ProjectPage = () => {
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
        <div>
          굿윌 프로젝트는 기술과 창의성을 결합하여 새로운 가능성을 만들어갑니다.
        </div>
        <div>
          우리는 혁신적인 솔루션을 통해 더 나은 세상을 만들어가는 것을 목표로 합니다.
        </div>
      </div>
      <div css={{ height: "32px" }}></div>
      
      {/* itemDiv 스타일을 사용하여 그리드 레이아웃 적용 */}
      <div css={itemDiv}>
        <FeaturedWork projects={projects} />
      </div>
    </DefaultLayout>
  );
};

export default ProjectPage;