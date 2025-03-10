// EverythingClub
//.tsx
import React, { useEffect } from "react";
import Header from "../article_component/header";
import ImageBox from "../article_component/imagebox";
import SectionTitle from "../article_component/section_title";
import Content from "../article_component/content";
import Author from "../article_component/author";
import ApplyButton from "../article_component/apply_button";
import authorImage  from "../assets/profile_images/jaemin_profile.webp";

const TalkPlanner: React.FC = () => {
  
  useEffect(() => {
          window.scrollTo(0, 0);
        }, []);
  
    return (
    <div style={containerStyle}>
      <Header
        title="말 한 마디로 천냥 빛 갚는 기획자"
      />
      <div style={contentContainerStyle}>

        <Content text="오늘은 제가 일 하면서 쓰는 '말' 들에 대한 이야기를 써 보려 합니다. 클릭을 위해 조금 어그로 성 제목을 붙여 보았습니다.

기획자(혹은 PM, PO)는 직무 특성 상, 다른 직군보다 더 많은 이해 관계자 분들과 더 많은 이야기를 하게 됩니다. 메일이든, 메신저든, 전화든, 대면이든 수단은 그때 그때 다르지만, 기획자의 주요 역량은 이렇게 많은 이해 관계자들과 함께 프로젝트를 무사히 성공시키는 일 자체라고 봐도 무방합니다.

저 역시도 GOODWILL에서 작지 않은 프로젝트 담당하는 기획자로서, 각기 다른 역할별 팀, 개발팀, 디자인팀 등을 포함해 적어도 10개 정도의 다른 팀 분들과 이야기를 하며 일을 하고 있습니다. 아바타처럼 모든 팀의 담당자 분들과 뇌가 연결되어 있어 제가 생각하고 있는, 의도하는 바가 그대로 전달 된다면 더할 나위 없이 좋겠지만, 안타깝게도 저희는 나비족이 아닙니다.

그래서 끊임 없이 정보를 모으고, 처리하고, 결정하고, 설득하고, 공유하는 것이 저의 일이기도 합니다. 이번 글에서는 제가 이 일을 더 잘 하기 위해 하고 있는 작은 노력들에 대해 공유드려 보고자 합니다. 이 노력들은 잘 보이지는 않지만, 없다면 모든 것이 굴러가지 않는 윤활유 같은 것들이라고 생각합니다. 정보를 모으고, 정리하고, 공유하는 과정에서 도움이 되었던 '말' 들에 대한 이야기입니다.

보시는 여러분께도 도움이 될 수 있는 부분이 있으면 좋겠습니다." />
        
        <SectionTitle title="정보를 잘 모으기" />

        <Content text="정보를 모으는 일은 새로운 프로젝트의 시작을 위해 현황을 파악하는 일일 수도, 잘 모르는 부분의 스펙을 파악하는 일일 수도, 진행 중인 프로젝트의 현황을 정리하는 일일 수도 있습니다. 그러다 보면 아래와 같은 말을 많이 하게 됩니다." />

        <div style={grayLineStyle}></div>

        <SectionTitle title="1. 제가 잘 이해를 못했는데요, 다시 한 번만 설명해주실 수 있으실까요?" />

        <Content text="주로 조금 복잡한 스펙을 가진 프로젝트의 초기 논의 과정에서 하는 말입니다. 아래 '정보를 잘 처리하기' 과정의 1번 말과 이어지기도 합니다. 지금 모르고 넘어가면, 언젠가 부메랑처럼 되돌아올 수 있는 가능성이 다분한 부분들이 많기에, 잠깐 용기를 내어 말한다면 도움이 많이 됩니다."></Content>
        
        <div style={grayLineStyle}></div>

        <SectionTitle title="2. 혹시 진행 상황이 어떠실까요?"></SectionTitle>

        <Content text="저는 보통 동시 다발적으로 여러 개의 프로젝트를 진행하는 경우가 많습니다. 각각 프로젝트의 진행 상황이 자동으로 어딘가 업데이트 된다면 참 좋겠지만, 우리가 챙겨야할 것은 일정 외에도 프로젝트 과정에서의 각종 소소한 이슈까지 포함됩니다. 프로젝트의 진행 상황에 대해 모든 팀원들이 같은 페이지에 있도록 하기 위해선, 제가 이에 대한 정보를 가장 잘 모아야 놓아야 합니다. 그러기 위해선 먼저 물어보는 것 만큼 좋은 방법이 없겠죠."></Content>

        <div style={grayLineStyle}></div>
        
        <SectionTitle title="3. 확인 차 여쭙습니다."></SectionTitle>

        <Content text="모든 이야기를 한 번 듣고 까먹지 않을 수 있다면 얼마나 좋을까요. 아무리 메모를 하고, 회의록을 작성해 두어도 모호한, 미심쩍은 부분은 언제든 발생합니다. 그럴 때 쓰기 좋은 말입니다. 문득 잘 진행되(는 것처럼 보이는)고 있는 프로젝트에서 무언가 서늘한 느낌이 드는 부분이 보일 때, 적극적으로 사용하는 말입니다."></Content>
        
        <div style={grayLineStyle}></div>

        <SectionTitle title="4. 추가로 궁금하신 점이나, 의견 있으시면 편하게 말씀 주셔요."></SectionTitle>

        <Content text="주로 메일이나 채팅의 말이, 회의의 끝 부분에 붙이는 말입니다. 논의 중에 미처 물어보지 못 했던 부분이나, 분위기 상 맥락에서 어긋나는 것 같아 물어보기 꺼려졌던 질문 등에 대해 여쭈어보기 위함입니다. 모두가 있는 자리에서는 물어보는 걸 어려워하시는 분들도 있으니, 따로 물어보는 것도 환영한다고 말한다면 금상첨화입니다."></Content>
        
        <div style={grayLineStyle}></div>
        
        <SectionTitle title="정보를 잘 처리하기"></SectionTitle>

        <Content text="정보를 잘 모았다면, 모은 정보에 대한 의견을 교환하고, 소화 시키고, 정리하는 시간입니다. 이 과정 또한 저 혼자 진행하는 것이 아닌, 많은 이해 관계자 분들과 함께 합니다."></Content>

        <SectionTitle title="1. 제가 이해한 바로는, ~ 맞을까요?"></SectionTitle>

        <Content text="제가 이해한 것에 대해 나름의 해석을 해 제 언어로 바꾸어 보고, 이를 검증해줄 수 있는 분들에게 다시 한번 확인을 요청 드리는 내용입니다. 주로 개발자 분들에게 제가 이해한 스펙의 내용을 여쭙는데 쓰는 말입니다. 이렇게 맞추어 보는 것과 아닌 것의 차이는 꽤 크게 느껴집니다."></Content>

        <SectionTitle title="2. 이건 추후 논의가 필요한 건으로 하고,"></SectionTitle>

        <Content text='회의란 무성하게 자라는 덩쿨 같아서, 가만히 내버려 두면 자동적으로 여러 갈래로 뻗어 나가는 습성을 가지고 있다고 생각합니다. 논의가 너무 길어지지 않기 위해, 적절히 내용에 대한 가지치기를 할 필요가 있습니다. "지금 결정하지 못한다"는 것에 대해 결정 하고 정리를 해야, 밑도 끝도 없이 길어지는 대화를 방지할 수 있습니다. 이렇게 나중에 확인이 필요한 건에 대해선 따로 메모를 해 두었다가, 확인 후에 다시 그에 대해 이야기를 한 다면 더 효율적일 수 있겠죠.'></Content>

        <SectionTitle title="3. 제가 실수/착각했네요, 죄송합니다."></SectionTitle>

        <Content text="정보를 모으고, 의견을 교환하는 과정에서 제가 착각을 해 민폐를 끼치거나, 실수를 할 경우들은 수도 없이 많이 있습니다. 다만, 빠르게 이를 인정하고 사과를 해야 다음 단계로 넘어갈 수 있다고 생각합니다. 사과하는 것을 부끄러워하지 않으려 노력합니다."></Content>

        <SectionTitle title="4. 정리 하면,"></SectionTitle>

        <Content text="주로 논의를 마무리 지을 때 쓰는 말입니다. 지금까지 나왔던 이야기들을 제가 해석한 언어로 한 번 정리하고, 앞으로 할 일들에 대해 각 팀 별로 할당된 것에 대해 다시 언급해 보는 내용입니다."></Content>

        <div style={grayLineStyle}></div>

        <SectionTitle title="정보를 잘 공유하기"></SectionTitle>

        <Content text="정보를 잘 모으고, 처리했다면, 이제 공유할 시간입니다. 앞서 모은 프로젝트의 진행 상황이나 논의된 내용 등을 이 내용을 알아야 할 것 같은 사람들에게 '먼저' 공유하는 것이 취지입니다. '나는 정보를 흘려 보내는 물길이다.' 라고 생각하고, 최대한 나만 알고 있는 정보가 없도록 정보를 잘 흘려 보내는 데 집중합니다."></Content>

        <SectionTitle title="1. 혹시 궁금하실까봐 말씀드려요."></SectionTitle>

        <Content text="주로 어떤 프로젝트의 진행 상황이나, 변경 사항들을 선제적으로 공유하는 데 씁니다. 운영팀 분들께서 쓸 기능에 대한 개발 일정이나, 사용 방법 등 조금 TMI 일수도 있는 부분들에 대해서도 '궁금하실까봐 말씀드린다' 는 말과 함께 전달한다면 좋다고 생각합니다. 사실 정보의 전달에 있어서 TMI 란 없다고 생각합니다."></Content>

        <SectionTitle title="2. 미리 공유드립니다!"></SectionTitle>

        <Content text="논의 중, 혹은 방금 논의된 어떤 사항에 대해서 바로 바로 필요한 팀원 분들에게 공유하기 위해 쓰는 말입니다. 영어로 치자면 Heads-up notice 라고 번역하면 될 것 같습니다. 앞으로 오게 될 어떤 변화에 대해서, 관련된 분들이 모두 미리 알고 준비할 수 있도록 공유드리기 위함입니다.

지금까지 제가 일하면서 정보를 수집, 가공, 공유하기 위해 자주 쓰는 말들을 정리해 보았습니다. 사실 위 내용은 비단 기획자 뿐 아니라 다른 직군 분들도 함께 사용하면 훨씬 서로 일하기 편해지는 말들이라고 생각합니다. 결국 같이 하는 일이니까요.

읽어 주셔서 감사합니다."></Content>

        {/* 입사 신청하기 버튼 */}
        <ApplyButton />

        {/* 작성자 정보 */}
        <Author name="김재민" description="이 사람은 블로그 작성자입니다." image={authorImage} />
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

export default TalkPlanner;
