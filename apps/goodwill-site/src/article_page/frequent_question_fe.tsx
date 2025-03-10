import React, { useEffect } from "react";
import Header from "../article_component/header";
import ImageBox from "../article_component/imagebox";
import SectionTitle from "../article_component/section_title";
import Content from "../article_component/content";
import Author from "../article_component/author";
import ApplyButton from "../article_component/apply_button";
import authorImage  from "../assets/profile_images/jaemin_profile.webp";

const FrequentQuetionFE: React.FC = () => {
  
  useEffect(() => {
          window.scrollTo(0, 0);
        }, []);
  
    return (
    <div style={containerStyle}>
      <Header
        title="자주 묻는 질문 : 프론트엔드 개발자 편"
      />
      <div style={contentContainerStyle}>

        <Content text="굿윌은 다양한 구성원이 좋은 사용자 경험을 제공하기 위해 노력하고 있는데요.

특히 굿윌의 프론트엔드 엔지니어(Front-end Engineer)는 사용자와 굿윌 서비스의 접점을 긍정적으로 만들어가는 데에 직접적으로 기여하고 있어요.

이번 아티클에서는 굿윌 프론트엔드 엔지니어 포지션에 관하여 자주 받는 질문에 대한 답변을 드리려고 해요." />
        
        <div style={grayLineStyle}></div>

        <SectionTitle title="Q. 굿윌 프론트엔드 챕터는 어떻게 일하나요?" />

        <Content text="대부분의 엔지니어 분들은 각자 담당하는 스쿼드에서 제품을 만드는 일에 집중하고 있어요. 굿윌에서는 엔지니어도 단순히 제품을 개발하는 것 뿐만 아니라 문제 정의 - 가설 수립 단계에도 적극적으로 참여해요.

동시에 챕터 차원에서는 챙겨야 할 여러 기술적인 부분들을 챙기려 노력하고 있는데요. 이전에는 챕터 차원에서 공통으로 챙겨야 하는 업무들은 회고미팅과 코드리뷰를 통해 다시 재정립하고 있어요.

현재의 굿윌은 제품을 더 빠르고, 잘 만들기 위해 디자인 시스템, 공통 시스템, 모노레포, MSA 등을 시도하고 적용하고 있어요.

이외에 스쿼드에 속해 있는 분들은 각 제품의 성격에 맞게 풀어야 할 문제의 우선순위에 따라 적절하게 기술적인 부분들을 업무 사이사이에 조율을 하며 더 좋은 제품을 만들기 위해 노력하고 있어요." />

        <div style={grayLineStyle}></div>

        <SectionTitle title="Q. 프론트엔드 개발에 있어 굿윌 팀이 가진 기술적 강점은 무엇인가요?" />

        <Content text="한 가지만 꼽는다면, 레거시 코드를 잘 정리하기 위해 여러 노력을 하고 있다는 점이요.

최대한 관심사를 잘 분리하고 반복되는 영역을 줄이려 하고 있죠. 그 일환으로 디자인 시스템과 모노레포, 유저 활동 로거, 여러 시스템적인 요소를 놓치지 않고 잘 챙기고 있는데요. 이 모든 기술적인 활동의 목표가 완성도 높은 시스템이 아닌 ‘좋은 Product를 만들기 위해서’라는게 강점인 것 같아요."></Content>
        
        {/* 입사 신청하기 버튼 */}
        <ApplyButton />

        {/* 작성자 정보 */}
        <Author name="김재민민" description="이 사람은 블로그 작성자입니다." image={authorImage} />
      </div>
    </div>
  );
};

const containerStyle: React.CSSProperties = {
  maxWidth: "800px",
  margin: "0 auto",
  marginTop: "50px",
  padding: "20px",
  fontFamily: "Arial, sans-serif",
  display: "flex",
  flexDirection: "column",
};

const contentContainerStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: "10px",
};

const grayLineStyle: React.CSSProperties = {
  borderBottom: "1px solid #ddd",
  marginTop: "20px",
  marginBottom: "20px",
};

export default FrequentQuetionFE;
