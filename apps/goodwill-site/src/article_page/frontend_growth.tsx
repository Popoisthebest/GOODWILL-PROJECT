// EverythingClub
//.tsx
import React, { useEffect } from "react";
import Header from "../article_component/header";
import ImageBox from "../article_component/imagebox";
import SectionTitle from "../article_component/section_title";
import Content from "../article_component/content";
import Author from "../article_component/author";
import ApplyButton from "../article_component/apply_button";
import authorImage  from "../assets/profile_images/hyunbin_profile.webp";

const FrontEndGrowth: React.FC = () => {
  
  useEffect(() => {
          window.scrollTo(0, 0);
        }, []);
  
    return (
    <div style={containerStyle}>
      <Header
        title="더 이상 기술의 부재가 없는, 굿윌 프론트엔드의 성장 이야기"
      />
      <div style={contentContainerStyle}>
        
        <SectionTitle title="소개말"></SectionTitle>

        <Content text="굿윌의 프론트엔드 개발자는 사용자가 최고의 경험을 할 수 있도록 끊임없이 고민하고 노력하고 있어요. 이번 아티클에서는 최근 프론트엔드 챕터에서는 어떤 기술적 문제들을 해결하고 있는지에 대한 이야기를 하고자 해요.

굿윌 팀은 처음에는 프론트엔드 개발자 없이 팀이 결성되었어요. 시간이 흐르며, 팀과 팀원들이 점차 각자의 자리를 잡아가고, 성장함에 따라 현재에는 여러 프론트엔드 개발자로써 성장하기 시작했죠."></Content>
        
        <div style={grayLineStyle}></div>
        
        <SectionTitle title="굿윌의 성장"></SectionTitle>

        <Content text="덕분에 초기 Vanilla.js와 Firebase 기반 스택을 React와 TypeScript + Next.js 기반으로 기술 스택을 바꾸기도 하고, 프론트엔드 챕터 차원에서 더 나은 사용자 경험을 제공하기 위해 끊임없이 고민하고 노력하고 있어요.

2015년부터 문과 분야 압도적 1위를 유지하며 성장한 굿윌인데요. 하지만, 프로그래밍, 엔지니어링 분야에서 부족하다는 평가를 받으며 좋은 인력이 오지 않아 다양한 문제와 어려움이 생겼어요. 실무 창업 경험이 있는 저와 고승한 CEO를 주축으로 하여 다양한 가설을 빠르게 실험하고 검증하며 제품을 만들다 보니, 많은 기술 경험들이 쌓여 지금은 대전대신고등학교의 최고 프로그래밍 동아리로써 인정받고 있어요.

기존의 굿윌은 경영, 경제, 하드웨어, 소프트웨어 부서로만 나누어져 있어 팀원 개인에게 맞춰진 업무 진행이 불가했었고, 대형 팀의 특성상 메인 프로젝트는 규모가 점점 커져 무거워지기 시작했어요. 때문에 컴포넌트들이 무작위로 만들어지면서 정리되지 않아 점점 더 관리하기가 어려워졌어요.

오늘날의 굿윌 팀은 목적 조직인 스쿼드로 일하는데요. 아무래도 스쿼드 단위로 개발 업무를 진행하다 보니, 챕터 차원에서 기술도 활용하기 쉬워지고, 빠른 의사소통과 의사결정이 이루어져 꾸준히 문제를 개선해 왔어요.

또한, 크게 4가지의 부서로만 구성되어 있는 굿윌 팀을 조금 더 애자일(Agile)하게 만들고, 개개인의 역할에 집중할 수 있도록 구성하고자, 부서제를 폐지하고 개인에 맞는 역할을 부여하기 시작했어요."></Content>

        <div style={grayLineStyle}></div>
        
        <SectionTitle title="마치며"></SectionTitle>

        <Content text='이렇게 굿윌 팀은 다함께 새로운 스타트업 문화를 지향하고 성장하기 위해 노력하고 있어요. 더 나은 MSA와 모노레포 환경을 위한 작업, 디자인 시스템 개선, 서비스 장애와 그 원인을 파악할 수 있는 모니터링 시스템 등 더 빠르고 유연하게 사용자에게 좋은 서비스를 제공하기 위해 노력할 예정이에요. 최종적으로는 계획적으로 더 탄탄하고 체계적인 구조를 만들어 갈 거에요.'></Content>

        {/* 입사 신청하기 버튼 */}
        <ApplyButton />

        {/* 작성자 정보 */}
        <Author name="백현빈" description="이 사람은 블로그 작성자입니다." image={authorImage} />
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

export default FrontEndGrowth;
