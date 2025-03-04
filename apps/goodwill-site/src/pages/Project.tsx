import DefaultLayout from "../layouts/DefaultLayout.tsx";
import {
  arrow,
  itemDiv,
  mainDiv,
  mainText,
  subText,
  subTitle,
} from "../components/Project/Project.style.ts";
import LeftArrow from "../assets/project/arrow-left.svg";
import ProjectItem from "../components/Project/ProjectItem/ProjectItem.tsx";

const ProjectPage = () => {
  return (
    <DefaultLayout>
      <div css={mainDiv}>
        <div css={mainText}>OUR PROJECTS</div>
        <img src={LeftArrow} alt="LeftArrow" css={arrow} />
      </div>
      <div css={subTitle}>
        “Goodwill Project | 창의적인 아이디어, 혁신적인 솔루션”
      </div>
      <div css={{ height: "12px" }}></div>
      <div css={subText}>
        <div>
          굿윌 프로젝트는 기술과 창의성을 결합하여 새로운 가능성을 만들어갑니다.
        </div>
        <div>
          우리는 혁신적인 솔루션을 통해 더 나은 세상을 만들어가는 것을 목표로
          합니다.
        </div>
      </div>
      <div css={{ height: "32px" }}></div>
      <div css={itemDiv}>
        <ProjectItem
          itemImgSrc=""
          date="2025-02-18"
          title="제목을 입력해 주세요."
        />
        <ProjectItem
          itemImgSrc=""
          date="2025-02-18"
          title="제목을 입력해 주세요."
        />
        <ProjectItem
          itemImgSrc=""
          date="2025-02-18"
          title="제목을 입력해 주세요."
        />
        <ProjectItem
          itemImgSrc=""
          date="2025-02-18"
          title="제목을 입력해 주세요."
        />
        <ProjectItem
          itemImgSrc=""
          date="2025-02-18"
          title="제목을 입력해 주세요."
        />
        <ProjectItem
          itemImgSrc=""
          date="2025-02-18"
          title="제목을 입력해 주세요."
        />
        <ProjectItem
          itemImgSrc=""
          date="2025-02-18"
          title="제목을 입력해 주세요."
        />
      </div>
    </DefaultLayout>
  );
};

export default ProjectPage;
