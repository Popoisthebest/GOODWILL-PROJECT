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

const FirstTest: React.FC = () => {
  
  useEffect(() => {
          window.scrollTo(0, 0);
        }, []);
  
  return (
    <div style={containerStyle}>
      <Header
        title="고등학교 첫 내신, 어떻게 준비할까요?"
      />
      <div style={contentContainerStyle}>

        <Content text="새로 대전대신고등학교에 입학하게 되는 학생들을 위해 인생에서 처음으로 보게 되는 시험, 오늘은 대전대신고등학교의 시험을 어떻게 준비해야 하는지에 대해서 알아보겠습니다." />
        
        <SectionTitle title="대신고는 일반고와 이렇게 다르다." />

        <Content text="우선 저희 대전대신고등학교는 타 일반 고등학교와 다르게 자율형사립고등학교 입니다. 이러한 특수한 부분 때문에 많은 학생들이 대신고의 시험과 내신에 관해서 많이 궁금해 하고 두려워 하고 있는 것 같습니다. 대신고와 타 일반고의 가장 큰 시험에서의 차이점은 바로 ‘대신고의 시험 문제 스타일이 매우 특이한 것’입니다. 여러 학원을 다니고 대전 지역의 다른 고등학교의 학생들을 접했을 때 대신고의 시험 문제와 그 스타일이 매우 특이하여 확실히 대신고 시험이 처음이라면 준비하기가 까다롭다고 할 수 있습니다." />

        <div style={grayLineStyle}></div>

        <SectionTitle title="대신고의 시험 스타일" />

        <Content text="대신고에서 시험을 볼 때 대부분의 과목에서 비슷한 문제 양상이 나타나고 있는데요, 그것은 바로 ‘집약형 암기 방식’입니다. 예를 들어, 교과서에서 중요하지 않고 스쳐 지나가는 매우 작은 글씨의 내용도 아주 자세하게 집약적으로 내신 시험문제에서 출제가 되어 그런 문제들로 등급이 갈린다는 것입니다. 대체적으로 어려운 문제를 내어 상위권을 가르고 등급을 형성하는 타 고등학교들과 달리, 대신고등학교는 어려운 문제라기 보단 ‘누가 더 특이한 글씨를 더 많이 외우는가’ 같이 일반적인 상식에서는 납득을 하기 어려운 문제가 많이 출제되어 왔습니다."></Content>
        
        <div style={grayLineStyle}></div>

        <SectionTitle title="대신고 시험의 예시ds"></SectionTitle>

        <Content text="대표적으로 암기 집약적으로 나왔던 과목은 통합과학 입니다. 실제로 2024년 2학기 중간고사에서 통합과학의 시험 범위에 물리 단원이 포함되어 있어 일반적인 타 학교들이었다면 어려운 물리 계산 문제를 풀어야 했습니다. 하지만, 대신고에서는 물리 계산 문제가 단 1문제도 나오지 않고 물리 부분이 서술형 문제인 암기식으로만 출제가 되었었습니다.

또한 2024년 2학기 중간고사에서 국어의 시험 범위였던 관동별곡 부분에서 선생님들이 서답형을 출제하셨을 때 관동별곡의 원문을 외워 서답형으로 서술하는 문제가 여럿 나와 배점이 꽤 높았었습니다.

이렇게 대신고에서는 어려운 문제가 출제되기 보다는 암기를 꼼꼼히해야 풀 수 있는 문제가 많이 출제되어 암기를 잘 하고 시험을 보는 학생들이 상대적으로 좋은 점수를 받았었습니다."></Content>

        <div style={grayLineStyle}></div>
        
        <SectionTitle title="대신고 시험 스타일의 장단점"></SectionTitle>

        <Content text="앞서 대신고 시험 스타일과 시험의 예시에 대해서 알아보았는데요, 대신고 시험 스타일의 가장 큰 장점으로는 ‘쉬운 시험 문제’라고 할 수 있습니다. 실제로 대부분의 과목에서 최상위 수준의 문제가 출제되지 않고 암기를 요구하는 문제가 출제되어 상대적으로 쉬운 체감 난이도를 경험할 수 있습니다.

이와 반대되어 단점으로는 너무 암기만 하며 어려운 문제를 많이 풀어보지 않고 쉬운 문제를 접하다보니 본인의 공부 실력이 상승하지 않을 수 있습니다. 또한, 각 과목에서 높은 점수를 받은 학생들이 많이 생겨 등급을 가르고 역전하는 데 힘든 부분도 있었습니다."></Content>
        
        <div style={grayLineStyle}></div>

        <SectionTitle title="대신고 시험을 어떻게 준비할까요?"></SectionTitle>

        <Content text="이제 가장 중요한 대신고의 시험을 어떻게 준비해야 하는지에 대해서 알아보겠습니다. 우선 대신고등학교에서는 선생님들이 수업에서 설명하신 내용이 시험에 매우 많이 출제되기 때문에 수업 시간에 항상 집중해서 수업을 듣는 것이 가장 기본이며 필수라고 할 수 있습니다. 이후에는 교과서와 각 과목 선생님들이 나눠주신 프린트를 바탕으로 지속적인 암기를 통해 시험 범위로 명시된 모든 부분을 암기하는게 매우 좋습니다. 이후 학교 도서관에서 기출 문제를 열람하고 어떤식으로 문제가 나오는지 파악을 한다면 시험을 잘 준비할 수 있을 것입니다.

결론적으로, 대신고등학교의 시험은 ‘출제 경향과 스타일’만 파악하면 유용하게 준비할 수 있습니다. 오늘 제가 작성한 글을 읽어보시고 조금이나마 대신고등학교의 첫 시험을 준비하는 데 도움이 되었으면 좋겠습니다. 오늘도 좋은 하루 보내시길 바라며 이만 글을 마치겠습니다."></Content>

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

export default FirstTest;
