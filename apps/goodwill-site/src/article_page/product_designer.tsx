// EverythingClub
//.tsx
import React, { useEffect } from "react";
import Header from "../article_component/header";
// import ImageBox from "../article_component/imagebox";
import SectionTitle from "../article_component/section_title";
import Content from "../article_component/content";
import Author from "../article_component/author";
import ApplyButton from "../article_component/apply_button";
import authorImage  from "../assets/profile_images/jinyoung_profile.webp";

const ProductDesigner: React.FC = () => {
  
  useEffect(() => {
          window.scrollTo(0, 0);
        }, []);
  
    return (
    <div style={containerStyle}>
      <Header
        title="좋은 사용자 경험을 만드는 굿윌의 Product Designer"
      />
      <div style={contentContainerStyle}>

        <Content text="굿윌의 Product Designer는 청소년 스타트업 시장과 각종 프로젝트를 진행하는데에 있어 그 사용자 경험을 개선하고, 고객이 직면한 문제를 해결하기 위해 노력해요. 이를 위해 고객 인터뷰, 사용성 테스트, 데이터 분석 등을 통해 문제를 정의하고, 가설 검증을 통해 최적의 솔루션을 찾아내요.

배진영 님을 모시고 굿윌 Product Designer가 일하는 방식에 관하여 더 자세한 이야기를 들어봤어요." />
        
        <div style={grayLineStyle}></div>

        <SectionTitle title="Q. 간단한 자기소개와 함께 지금 담당하고 있는 업무 설명 부탁드려요."></SectionTitle>

        <Content text="안녕하세요. 굿윌에서 Product Designer(이하 PD)로 일하고 있는 배진영입니다.

저는 현재 UI/UX를 주로 디자인하고 있습니다.  사용자 분석을 통해 UI를 개선하며 사용자들이 서비스를 이용하면서 불편함을 최소화하기 위해 노력하고 있습니다. 비록 제가 하고있는 디자인이 정말 힘들지만, 그 힘든 과정 끝에 사용자들로 하여금 인정을 받는 순간이 오면 힘들었던 순간들에 대한 보상을 받는 기분이 들어 이 일을 계속 하고 있습니다."></Content>

        <div style={grayLineStyle}></div>

        <SectionTitle title="Q. 굿윌에 합류를 결심한 이유가 있을까요?"></SectionTitle>

        <Content text="굿윌은 대신고등학교 최고의 문이과 통합 기업형 창업 동아리로, 다양한 프로젝트를 통해 실무 경험을 쌓을 수 있는 곳입니다. 저는 이곳에서 디자인을 담당하며, 제 작업을 뽐내고 사람들과 공유하는 과정에서 큰 만족감을 느낄 수 있을 것이라 생각했습니다. 또한, 단순히 개인적인 성장을 넘어, 팀원들과 협력하며 실질적인 창업 프로세스를 경험하고, 디자인을 통해 비즈니스에 기여하는 기회를 얻고 싶어 굿윌에 합류하게 되었습니다."></Content>

        <div style={grayLineStyle}></div>
        
        <SectionTitle title="Q. 굿윌의 Product Designer는 어떤 방식으로 일하나요?"></SectionTitle>
        
        <Content text="진영 : 굿윌의 디자이너는 한 시즌 동안 여러 개의 스쿼드에 속해서 주어진 문제를 해결하기 위한 모든 일을 하게 되는데요. 그 중에서도 사용자 경험의 DRI로서 좋은 사용자 경험을 만들기 위해 최종 의사 결정을 해요.

담당하는 문제와 제품의 성숙도 마다 차이는 있지만, 시즌 초반에는 주로 고객 문제 정의에 주로 집중해요. 고객 인터뷰나 사용성 테스트, VOC 등을 통해 고객을 이해하고 고객이 어떤 문제를 겪고 있는지 파악해요. 이를 통해 스쿼드의 OKR을 설정하고, 발견한 고객 문제를 해결하기 위한 다양한 가설들을 팀원들과 같이 뽑아냅니다.

시즌 중반에는 PO가 결정한 우선순위에 맞게 도출한 다양한 가설을 검증해요. 이 과정에서 각 가설을 어떻게 빠르고 확실하게 검증할지 디자이너가 주도적으로 고민하고 액선 아이템을 제안해요. 예를 들어, A/B테스트를 한다고 결정하면 테스트의 설계부터 결과 데이터 분석까지 PO와 디자이너가 같이 해요. 그렇게 얻은 레슨을 다음 실험에 적용하죠."></Content>

        <div style={grayLineStyle}></div>
        
        <SectionTitle title="Q. 주로 스쿼드에 속해 업무를 하시는 것 같은데, 디자인 챕터 내의 교류는 잘 이루어지나요?"></SectionTitle>

        <Content text="아무래도 시즌에는 스쿼드 단위로 업무를 하고 있다 보니, 지금은 챕터 내의 교류에 크게 신경쓰고 있지 않아요. 다만 2주에 한 번씩 디자이너가 모두 모여서 각자 얻은 레슨을 공유하거나 겪고 있는 어려움에 대해 도움을 구하고 있어요. 서로의 디자인을 피드백하는 목적보다는 레슨 공유에 초점이 맞춰져 있어요.

최근에는 공통으로 사용하는 디자인 시스템에 대한 아젠다를 이야기하기도 했어요."></Content>

        <div style={grayLineStyle}></div>
        
        <SectionTitle title="Q. 그러면 굿윌에서 일하면서 가장 좋은 점은 무엇일까요?"></SectionTitle>

        <Content text="첫 번째로는, 자극을 받을 수 있는 뛰어난 동료가 많다는 점이요.

특히 저의 동료 디자이너인 김수은 Visual Designer님은 Figma, Photoshop, Illustrator, Blender 등의 디자인 툴 뿐만 아니라 Java, Python 등 프로그래밍 언어까지 숙달 하신 능력자라 많은 자극을 받고 배우고 있어요. 저는 UX/UI를 전문으로 했던 디자이너라 3D 모델링과 같은 디자인 작업은 많이 미숙한데, 이를 효과적으로 다루시는 수은님을 보고 배울 동료들이 있다는 점이 정말 좋아요.

두 번째로는, 모두가 핵심 가치에 진심이고, 핵심 가치 기반으로 일을 한다는 점이 좋아요.

굿윌에서는 일을 하다 보면 정말 자연스럽게 핵심 가치를 언급하게 돼요. ‘이거 근데 고객 집착이지 않아요?’, ‘Focus on Impact 하는 차원에서 이 부분은 데이터를 봐야 할 것 같아요’와 같이, 팀원들 모두 핵심 가치를 잘 이해하고 있어요. 그러다 보니 자연스럽게 실제로 업무를 할 때 기준점이 돼요. 지금까지 본 대한민국의 고등학교, 대학교 동아리들 중에서 이 정도까지 전문성을 가지고 실무에 더 다가간 적이 없었어요. 덕분에 이런 것들이 생활기록부에 그대로 녹아들어 다른 동아리들과는 차원이 다른 수준의 생기부를 만들 수 있게 되었어요."></Content>

        <div style={grayLineStyle}></div>
        
        <SectionTitle title="Q. 진영님께서 개인적으로 가장 중요시하는 굿윌 핵심 가치가 있다면 무엇일까요? 그 이유 궁금해요."></SectionTitle>

        <Content text="‘임팩트를 향한 집중’이 가장 중요하다고 생각해요. 모두가 자기가 할 수 있는 가장 임팩트 있는 일을 해야 팀이 빠르게 성장하고 성공을 만들 수 있다고 생각하기 때문이에요. ‘임팩트를 향한 집중’이라는 핵심 가치 덕분에 우리가 지금 어떤 액션을 해야 할지 고민할 때 서로 건강하게 챌린지하며, 더 임팩트 있는 일을 고민하게 되는 것 같아요.

그렇기에 스쿼드원으로서는 고객의 어떤 문제에 집중하는 게 임팩트가 있는 선택인지 고민하고 PO에게 챌린지해야 하며, 개인적으로는 어떤 방식으로 문제를 해결하는 게 가장 임팩트 있는지 판단할 줄 알아야 해요."></Content>

        <div style={grayLineStyle}></div>
        
        <SectionTitle title="Q. 굿윌에서 이루고 싶은 목표는 무엇일까요?"></SectionTitle>

        <Content text="성공 방정식을 알고 싶어요. 지금은 고객의 문제에 집중하면서 굿윌을 통해 접해볼 기회가 없었던 실무 수준의 업무 방식과 협업 경험을 쌓으면서 저의 이야기가 들어가는 생기부와 졸업하고 나서 하게 될 대학교 팀 프로젝트, 취업하고 진행될 실무 프로젝트 들에서 큰 성공을 이루기 위해 굿윌 멤버들과 성공하는 경험을 쭉 함께 해보고 싶어요!"></Content>

        <div style={grayLineStyle}></div>
        
        <SectionTitle title="Q. 마지막으로 미래의 동료를 위해 한 마디 해주세요!"></SectionTitle>

        <Content text="제 주변 지인이나 후배들을 보면 아직도 어떤 동아리를 들어가야 할지, 대형 동아리라고 소외되지는 않을지에 대한 막연한 불신이 있어요. 처음 새로운 학교에서 처음하는 동아리, 처음 하는 동아리 이적 으로 인해 불신이 생길 수밖에 없는 구조라는 생각도 들어요. 이런 불신을 깨부수는 경험을 설계한다는 것은 디자이너로서 도전적이지만 설레는 일이기도 해요.

하지만 혼자서는 해낼 수 없어요. 굿윌이 생각하는 성공 방정식에 또 다른 가치를 더해줄 수 있는 분이 필요합니다.

자극 받을 수 있는 동료, 실제로 실천하는 핵심 가치, 임팩트를 만들 수 있는 디자이너로 성장할 수 있는 환경, 꾸준히 잘 성장하고 있는 지표. 굿윌에 합류하지 않을 이유가 있을까요?"></Content>

        {/* 입사 신청하기 버튼 */}
        <ApplyButton />

        {/* 작성자 정보 */}
        <Author name="배진영" description="이 사람은 블로그 작성자입니다." image={authorImage} />
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

export default ProductDesigner;
