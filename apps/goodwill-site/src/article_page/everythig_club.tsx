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

const EverythingClub: React.FC = () => {
  
  useEffect(() => {
          window.scrollTo(0, 0);
        }, []);
  
  return (
    <div style={containerStyle}>
      <Header
        title="신입생들을 위한 동아리의 모든 것"
      />
      <div style={contentContainerStyle}>

        <Content text="2025년 3월 새로운 학교에서 새로운 친구들과 함께 설레는 새학기가 시작되었습니다. 현재 1학년 학생들의 최대 관심사는 다름 아닌 ‘동아리’일 것 같은데요, 오늘은 대전대신고등학교 동아리에 대한 모든 것을 설명해드리도록 하겠습니다." />

        <div style={grayLineStyle}></div>
        
        <SectionTitle title="동아리란 무엇일까?" />

        <Content text="대신고에서 동아리는 동아리 구성원들끼리 함께 같은 프로젝트를 진행하며 학생부종합전형에서 중요한 활동을 하는 곳이라고 할 수 있습니다. 또한, 한 달에 약 2번 정도 금요일 마다 교과 수업시간에 동아리 시간을 갖으며 대신고 생활 중 매우 많은 시간을 쏟는 곳이기도 합니다." />

        <div style={grayLineStyle}></div>
        
        <SectionTitle title="동아리, 왜 중요할까?" />

        <Content text="대신고등학교는 타 학교에 비해 동아리 활동이 비교적 더 많은 편이며 동아리 활동의 수준 또한 높아, 중요하다고 할 수 있습니다. 또한 자신의 생활기록부를 채우는 데 있어 가장 큰 비중을 차지하고 도움이 되는 것 역시 대부분 동아리 활동에서 나오기 때문에 대신고에서는 동아리가 매우 중요하다고 할 수 있습니다."></Content>

        <div style={grayLineStyle}></div>
        
        <SectionTitle title="어떤 동아리가 좋은 동아리일까?"></SectionTitle>

        <Content text="모든 1학년 학생들이 좋은 동아리를 들어가길 원하고 있을 것 같습니다. 그렇다면 어떤 동아리가 좋은 동아리일까요? 정답은 바로 없습니다. 동아리는 동아리의 규모, 실적, 역량도 중요하겠지만 만약 대형 동아리를 들어가지 못 해도 자신의 진로 분야와 맞는 동아리에 들어가 열심히 활동하면 크게 상관이 없습니다. 그래서 여러 동아리를 잘 알아보고 무조건 대형 동아리나 유명한 동아리에 들어가는 것보단 ‘자신에게 맞는’ 동아리를 선택하는 것이 더 중요합니다."></Content>

        <div style={grayLineStyle}></div>
        
        <SectionTitle title="자신이 원하는 동아리에 들어가는 방법"></SectionTitle>

        <Content text="대신고에서는 4월달이 시작되기 전에 대부분의 학생들이 자신의 동아리를 찾고 들어가게 됩니다. 이 과정에서 동아리에 합격을 잘 해서 자신이 원하는 동아리에 갈 수 있는 방법을 알려드리겠습니다. 대부분의 동아리는 1차 서류와 2차 면접을 보고 신규 부원을 뽑고 있습니다. 우선, 서류형에서 자신을 표현할 수 있는 글을 작성할 때는 절대 대충쓰지 말고 최대한 자신이 무엇을 잘하고 어떤 것을 할 수 있는지 끊임없이 고민하며 작성해야 합니다. 대부분의 학생들이 서류를 작성할 때 대충 작성하거나 깊이 고민하지 않고 신청서를 내는 경우가 많기 때문에 자신이 진심으로 동아리에 들어가고 싶다면 신중하고 진지하게 자신에 대해 생각하고 글을 잘 쓰는 것이 매우 중요합니다. 이렇게 서류를 잘 작성했다면 면접에서는 ‘자신감’을 갖고 임하는 것이 가장 중요합니다. 면접에서는 분위기나 느낌도 평가에 영향을 끼치기 때문에 자신이 면접 때문에 두려워도 끝까지 자신감을 잃지 않고 열정을 보여주는 것이 매우 중요합니다."></Content>
        
        <Content text="결론적으로 자신이 원하는 동아리에 들어가기 위해선 서류를 작성할 때 정성을 들여 자신의 역량을 최대한 표현하고, 면접에서는 자신감을 갖고 임하는 열정을 보여주면 매우 긍정적인 평가를 받을 수 있을 것입니다."></Content>

        <div style={grayLineStyle}></div>
        
        <SectionTitle title="동아리 소개"></SectionTitle>

        <Content text="지금부터 1학년 학생들이 궁금해 할만한 2024년 기준 동아리 순위에 랭크된 10개의 동아리를 간단하게 소개해드리겠습니다.

1위. Finder 대신고등학교에서 역사가 깊고 유명한 동아리이며 SW나 HW와 관련된 활동을 하는 이과형 동아리로 각종 대회나 활동에서 우수한 실적을 내고 있습니다. 또한, 담당 선생님이 진로진학실에 속해있는 선생님이며 신입생들에게도 유명한 ‘파액굿’ 중 하나인 동아리입니다.

2위. 스테미너스 역사가 깊진 않지만, 최근 무서운 상승세로 발전하고 있는 이과형 동아리로 SW, HW에 자연과학 활동까지 하는 융합형 이과 동아리입니다.

3위. GOODWILL 대신고 유일 기업형 동아리로 교내 다양한 행사나 활동을 주도적으로 이끌고 우수한 실적을 내고 있으며 역사가 깊고 SW, HW, 상경계열 등 여러 분야를 아우르며 문이과 융합형 동아리 중에서는 가장 순위가 높습니다. 또한, 담당 선생님이 진로진학실에 속해있는 선생님이며 신입생들에게도 유명한 ‘파액굿’ 중 하나인 동아리입니다.

4위. DCN 대신고의 방송부로써 여러 교내 행사와 방송 관련된 활동을 주로 맡고 있습니다. 대부분의 학교 행사에서 DCN이 참여를 하는 모습을 보여주며 높은 순위에 위치하고 있습니다.

5위. 법애정신 대신고에서 주로 법과 관련된 활동을 진행하며 오량모의국회 등 굵직한 행사를 주최하여 문과 동아리에서 높은 순위에 위치하고 있습니다.

6위. Flow Communicators 2024년에 새로 생긴 신생 동아리로 분야는 정해진 것이 없이 다양한 활동을 진행하며 PT톤 이라는 교내 행사를 주최하였습니다. 또한, 담당 선생님이 진로진학실에 속해있는 선생님입니다.

7위. A.C.T. 대신고에서 역사가 깊고 유명한 동아리로 SW나 HW 같은 이과형 활동을 하며 좋은 실적을 내고 있습니다. 또한, 담당 선생님이 진로진학실에 속해있는 선생님이며 신입생들에게도 유명한 ‘파액굿’ 중 하나인 동아리입니다. 특이사항으로 2024년에 순위가 과거에 비해 많이 하락하였습니다.

8위. 날샘 대신고에서 자연과학과 관련된 활동을 주로 진행하며 자연과학 분야에서는 가장 유명한 동아리입니다. 예전부터 꾸준한 실적을 내고 있는 동아리들 중 하나이며 ‘내 동아리는  날샘이다’라는 밈으로 유명합니다.

9위. 원프레스 대신고에서 주로 언론, 인문과 관련되어 활동하는 문과형 동아리로 꾸준히 좋은 실적을 내 2024년에도 순위권에 들었습니다. 또한, 담당 선생님이 진로진학실에 속해있는 선생님입니다.

10위. 공간디자인 대신고에서 건축과 관련된 활동을 주도적으로 진행하며 건축 분야에서는 가장 유명한 동아리입니다. 꾸준히 좋은 실적을 내는 동아리 중에 하나입니다."></Content>

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

export default EverythingClub;
