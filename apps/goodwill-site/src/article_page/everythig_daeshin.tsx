// EverythingClub
//.tsx
import React, { useEffect } from "react";
import Header from "../article_component/header";
// import ImageBox from "../article_component/imagebox";
import SectionTitle from "../article_component/section_title";
import Content from "../article_component/content";
import Author from "../article_component/author";
import ApplyButton from "../article_component/apply_button";
import authorImage  from "../assets/profile_images/jitae_profile.webp";

const EverythingDaeshin: React.FC = () => {
  
  useEffect(() => {
          window.scrollTo(0, 0);
        }, []);
  
  return (
    <div style={containerStyle}>
      <Header
        title="대신고 활동의 모든 것"
      />
      <div style={contentContainerStyle}>

        <Content text="신입생들이 대신고에 관해 알아볼 때 빠지지 않고 등장하는 것이 있는데요, 그 중 가장 많이 들어본 말이 ‘대신고는 공부보단 활동을 더 많이 하는 학교’일 것입니다. 오늘은 대신고에 있어 빠질 수 없는 필수적인 ‘활동’에 관해 전반적으로 알아보도록 하겠습니다." />

        <SectionTitle title="활동이란 무엇일까?" />

        <Content text="대신고에서 활동이란 창체 동아리 활동, 자율 동아리 활동, 개인 대회, 학급특색사업, TMD, 교내 행사, 교내 대회 등 엄청나게 많은 종류가 있습니다. 우선 전교생이 모두 참여하는 활동으론 창체 동아리 활동, 학급특색사업, TMD 활동 정도가 있습니다. 이렇게 기본적으로 수행하는 활동들에 개인적으로 활동들을 더욱 진행하여 대신고에서는 활동을 많이 하는 학생들이 대부분인 학교가 되었습니다." />

        <SectionTitle title="활동, 어떻게 해야할까?" />

        <Content text="활동은 기본적으로 해야하는 것들은 잘 수행하고 추가적으로 진행하는 것이 좋습니다. 예를 들어 반 내에서 학급 친구들과 함께 학급특색사업 활동을 진행하면서 교내 홍보되고 있는 다른 활동을 신청해 참여할 수도 있습니다. 대신고에서는 1년 내내 교내에서 활동이나 행사가 꾸준하게 진행되고 있습니다. 입학 후 반에 행사 홍보를 하러 오는 선배들의 말을 잘 듣고 포스터를 통해 행사를 파악하고 신청해 활동을 진행하는 것이 일반적인 방법입니다."></Content>

        <SectionTitle title="대신고에서는 어떤 활동이 있나?"></SectionTitle>

        <Content text="2024년 기준으로 진행되었던 교내 행사 및 활동을 소개해드리도록 하겠습니다."></Content>

        <Content text="1. 굿윌콘서트 : ‘GOOWILL’이 주관한 행사로 2024년 기준 대신고에서 가장 먼저 진행된 활동입니다. 신입생들을 상대로 학교 생활에 관해 궁금한 점이나 꼭 알아야할 것들을 쉽고 친근하게 설명해주는 토크 형식으로 진행해 신입생들의 학교 적응을 돕습니다. 이 행사에선 굿윌과 다른 대형 동아리들이 함께 참여하여 모든 진로 분야를 설명 받을 수 있습니다. 여러 동아리가 참여하고 첫 행사이니 만큼 100명 이상의 지원자를 도출해내는 큰 규모를 보여주었습니다.
                        
                        2. 독서의 밤 : 독서의 밤 행사는 역사가 아주 깊은 활동입니다. 이 행사에서는 자신이 흥미 있는 분야의 책을 읽은 후 함께 토론하고 생각을 나누는 등 여러 활동을 하면서 사고력을 기르고 자신이 추후에 심화 탐구 할 내용의 기본이자 동기가 되는 활동을 진행합니다. 본 행사를 참여해 생기부에 녹아내는 선배들이 많으며 ‘오량독서토론부’에서 행사를 꾸준히 맡아 주관하고 있습니다.
                        
                        3. 리빙랩 프로젝트 : 대신고와 타 대전 고등학교 학생들이 함께 참여하는 행사로, 분야와 상관 없이 지역 사회 문제를 해결하고 산출물을 제작하여 공유하는 행사입니다. 큰 예산이 들어가 퀄리티 좋은 프로젝트로 진행된 만큼 많은 학생들이 참여하여 생기부의 질을 향상시켰습니다.
                        
                        4. GBL 프로젝트 : Game Based Learning이란 이름으로 게임을 통해 학습하는 부스를 구성하고 운영해 서로 다양한 체험을 하는 행사입니다. 이 과정에서 약 60개 이상의 부스가 참여하여 큰 규모의 행사로 진행되었습니다.
                        
                        5. 모의 유엔 : ‘도일’이 주관하는 활동으로 외교, 정치, 법, 사회 분야와 관련하여 모의 유엔을 구성하여 여러 활동을 하는 행사입니다. 타 학교와 연합하여 진행한 만큼 사회 분야 관련된 학생들에겐 좋은 활동이었습니다."></Content>

        <SectionTitle title="활동에 대한 조언"></SectionTitle>

        <Content text="대신고에서 활동은 필수적입니다. 간혹 자신의 내신을 챙긴다는 이유로 활동을 하지 않는 친구들이 종종 있습니다. 이러한 경우엔 내신의 등급은 높지만, 생기부의 퀄리티가 그 내신에 따라가지 못하는 부적절한 상황이 발생할 수 있습니다. 이러한 상황을 방지하기 위해 최소 1년에 1개의 교내 행사엔 참여하여 자신의 생기부를 채우고 활동할 수 있도록 해야합니다. 하지만, 그렇다고 너무 활동을 많이 진행하며 내신을 포기한다면 그것 또한 좋지 않을 수 있습니다. 결론적으로 신입생들에게 당부하고 싶은 말은 활동을 열심히 많이 하되, 내신을 절대 잊지 않고 열심히 챙기라고 조언을 하고 싶습니다.

                        
                        오늘도 신입생 여러분들에게 조금이나마 도움이 됐기를 바라며 굿윌 뉴스레터를 마치겠습니다."></Content>
        
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

// const grayLineStyle: React.CSSProperties = {
//   borderBottom: "1px solid #ddd",
//   marginTop: "20px",
//   marginBottom: "20px",
// };

export default EverythingDaeshin;
