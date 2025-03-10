// EverythingClub
//.tsx
import React, { useEffect } from "react";
import Header from "../article_component/header";
import ImageBox from "../article_component/imagebox";
import SectionTitle from "../article_component/section_title";
import Content from "../article_component/content";
import Author from "../article_component/author";
import ApplyButton from "../article_component/apply_button";
import authorImage  from "../assets/profile_images/jitae_profile.webp";

const Hardware: React.FC = () => {
  
  useEffect(() => {
          window.scrollTo(0, 0);
        }, []);
  
    return (
    <div style={containerStyle}>
      <Header
        title="제품에 대한 전반적인 설계 및 개발을 이끄는 Hardware Engineer"
      />
      <div style={contentContainerStyle}>

        <Content text="오늘은 하드웨어(HW)에 관심이 많은 신입생분들을 위해 굿윌 Hardware Enginner 두 분을 모셔봤습니다. 직접 많은 설명과 조언을 해주신 만큼 참고하여 많은 도움이 됐으면 좋겠습니다." />
        
        <SectionTitle title="인사의 말" />

        <Content text="안녕하십니까, 대신고 53기 여러분.
GOODWILL 하드웨어 부서의 김세현(Exploring Engineer)과 김준모(Mechatronics Engineer)입니다.
GOODWILL은 하드웨어(HW), 소프트웨어(SW), 경영부서의 역량을 바탕으로 사회문제에 접근하는 교내 1위 창업 동아리입니다." />

        <div style={grayLineStyle}></div>

        <SectionTitle title="창업 동아리 GOODWILL에서 HW는 무슨 역할을 할까요?" />

        <Content text="저희 하드웨어 부서는 GOODWILL에서 실제 창업 아이템을 구현하는 역할을 맡고 있습니다. GOODWILL은 이론적인 설계뿐 아니라, 실제 결과물을 만들어내는 경험을 중요하게 생각합니다. 실제로 많은 창업대회가 산출물이 없으면 성과를 인정해 주지 않는 규칙이 있습니다. 그만큼 하드웨어는 GOODWILL에서 필수적인 부서입니다."></Content>
        
        <div style={grayLineStyle}></div>

        <SectionTitle title="각자 맡으신 역할을 자세하게 설명해주세요."></SectionTitle>

        <Content text="하드웨어 부서는 아이디어를 구체화하는 Exploring Engineer(김세현)와 이를 실제로 제작하는 Mechatronics Engineer(김준모)로 나뉩니다. Exploring Engineer는 자연과학과 공학 이론을 바탕으로 창업 아이템을 설계합니다. 제품이 어떤 원리로 작동해야 하는지, 어떤 소재와 기술을 적용해야 하는지 탐구하며, 이를 구체적인 프로토타입으로 발전시키는 과정을 담당합니다. Mechatronics Engineer는 회로 설계와 구조 설계를 바탕으로 제품을 실제로 제작합니다. 전자 부품을 조립하고, 센서와 다양한 출력모듈을 활용하여 작동이 가능한 상태로 만드는 역할을 합니다. 두 역할이 유기적으로 협력하며, 단순한 개념을 실제 제품으로 발전시킵니다."></Content>

        <div style={grayLineStyle}></div>
        
        <SectionTitle title="GOODWILL에서 진행할 활동을 소개해주세요."></SectionTitle>

        <Content text="2025년 GOODWILL은 플랫폼 기반 창업 활동을 중점적으로 추진할 계획입니다. AI 기술을 활용하여 로봇공학, 전자공학, 기계공학 분야에서 창의적인 아이템을 개발하며, 이를 통해 실질적인 창업 모델을 구축하고자 합니다. 하드웨어만으로는 창업 아이디어를 완성하기 어렵습니다. 기술이 발전할수록 공학과 자연과학을 융합하는 사고가 더욱 중요해지고 있습니다. 단순히 설계, 제작이 아니라, 자연과학과 기계공학을 아우르는 설계를 통해 더 경쟁력 있는 창업 아이템을 만들기 위해 노력하고 있습니다.

이를 위해 동아리 전체가 협업하는 창업대회를 진행하고, 대학 연계 연구 활동을 준비하고 있습니다. 또한, 부서 내부에서도 주도적으로 진행할 행사 혹은 프로젝트를 기획하고 있으며, 이를 통해 다양한 탐구와 제작 경험을 여러분들에게 심어줄 계획입니다. 창업 과정에서 하드웨어의 역할은 단순한 기술 개발이 아니라, 아이디어를 실제로 구현하고 시장에서 활용 가능한 형태로 발전시키는 것입니다."></Content>
        
        <div style={grayLineStyle}></div>

        <SectionTitle title="그렇다면 GOOWILL HW(하드웨어)부서는 어떤 인재상을 원할까요?"></SectionTitle>

        <Content text="저희 하드웨어 부서는 프로젝트 도중에는 어떤 상황이라도 그 프로젝트에 집중하고 다양한 아디이어를 끊임없이 제시하여 다양하고 구체적인 해결방안을 모색하려고 노력하는 학생을 원합니다.또한 단순히 뛰어난 기술력을 가진 학생만을 찾지 않습니다. 무엇보다 중요한 것은 탐구하는 자세와 배우려는 태도입니다. 처음부터 모든 것을 알 필요는 없습니다. 부족한 점이 있다면 함께 배우고 성장할 기회가 주어집니다. 이를 위해 하드웨어 부서는 신입생이 쉽게 적응하고 실력을 키울 수 있도록 다양한 교육 프로그램을 운영합니다. 탐구 방법을 교육하고, 아두이노를 활용한 기초 프로그래밍 교육을 진행하며, 3D모델링 등 창업대회에서 요구하는 기술을 익히는 과정도 마련되어 있습니다. 여러분이 배우고, 성장할 준비가 되어 있다면, 활동하는 데 있어서 타 동아리와는 견줄 수 없는 경제적인 지원을 할 예정입니다.
GOODWILL에서는 동아리 활동을 통해 직접 프로젝트를 경험하고, 선후배혹은 다른 부서들과 협력하며 성장할 수 있습니다. 이건 하드웨어 부원 중 한명이 직접 느낀 것이기도 합니다."></Content>
        
        <div style={grayLineStyle}></div>
        
        <SectionTitle title="마지막으로 김세현(Exploring Engineer), 김준모(Mechatronics Engineer)님이 굿윌에 새로 들어울 HW부서 후배들에게 하고 싶은 말은 무엇일까요?"></SectionTitle>

        <Content text="하드웨어를 처음 접하는 학생도, 더 높은 수준의 개발을 원하는 학생도 모두 도전할 수 있습니다. 신입생 여러분이 가진 아이디어와 열정이 더해진다면, GOODWILL 하드웨어 부서는 더욱 성장할 것입니다. 새로운 기술을 배우고, 직접 제품을 개발하며, 창업에 도전하는 기회를 경험해 보시기 바랍니다. 2025년, GOODWILL 하드웨어 부서에서 함께하시길 바랍니다! 저희가 하루 빨리 만날 날을 고대하며 전 이만 물러가보겠습니다. 감사합니다!"></Content>

        {/* 입사 신청하기 버튼 */}
        <ApplyButton />

        {/* 작성자 정보 */}
        <Author name="김지태" description="이 사람은 블로그 작성자입니다." image={authorImage} />
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

export default Hardware;
