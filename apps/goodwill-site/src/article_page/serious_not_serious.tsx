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

const SeriousNotSerious: React.FC = () => {
  
  useEffect(() => {
          window.scrollTo(0, 0);
        }, []);
  
    return (
    <div style={containerStyle}>
      <Header
        title="진지하지만 심각하진 않습니다"
      />
      <div style={contentContainerStyle}>

        <SectionTitle title="GOODWILL 팀원분들과 워크숍을 통해 이야기를 나누었다."></SectionTitle>

        <Content text="사람이 환경과 어떻게 상호작용하는지, 그로 인해 어떤 습관이 만들어지고, 스트레스 상황에서 그 습관이 타인에게 어떻게 향하는지, 일하는 장면에서 가질 수 있는 욕망과 두려움은 어떤 것들이 있으며, 이를 어떻게 다루어야 하는지 등 짧은 시간 안에 꽤나 진중한 주제들을 다루었다.

이런 워크숍이 끝나면 담당자를 통해 종종 이런 이야기를 듣는다.

'우리가 너무 심각한 이야기를 나눈 게 아닐까요? 동아리에서 너무 심각한 내용을 다루는 게 아닐까요?'" />
        
        <div style={grayLineStyle}></div>

        <SectionTitle title="심각한 것과 진지한 것은 다르다."></SectionTitle>

        <Content text="나는 함께 이해관계를 맺고 있는 사람들, 특히 일을 통해 가치를 교환하고 있는 사람들 사이에서는

반드시 심각한 대화가 아닌, '진지한 대화'가 필요하다고 생각한다.

**진지한 대화는 이를테면 이런 내용들이다. 우리는 어떻게 조직과 사회에 기여하고 있는지, 우리 각자의 역할을 서로에게 어떤 의미를 가지는지, 우리는 어떤 기준을 충족시키며 서로 기대어 일을 하고 있는지 등-

각자가 일이라는 활동을 통해 주고받는 영향력의 의미를 되새김질하며 나누는 대화는 진지하지만 서로에게 풍성한 고양감을 안겨준다. 진지한 대화에서 나오는 질문은 명확히 답이 있는 것은 아니며 각자가 생각하는 해석을 수용한다. 서로의 생각을 공유하고 연결하는 과정 속에서 씨줄과 날줄로 의미감이 묶여진다. 그렇게 만들어진 집단 안에서의 '스토리'는 소속감과 유대감을 더 강하게 형성한다.

진지한 대화를 위해서는 특정한 주제나 현상을 허투루 보지 않아야 한다. 몇 번이나 곱씹은 해석, 반복적으로 의심하고 검증한 나의 생각을 제련하듯 밖으로 끄집어내는 그 인식과 사유, 발화의 과정은 타인이 나의 생각과 의견을 존중하고 있다는 믿음에서 나온다.

반면, 심각한 대화는 불안과 염려를 동반한다.  허공 속에 던져진 질문과 문제 인식이 어디로 갈지 몰라 헤메일 때 불안은 시작된다. 그것은 명확한 목적이나 방향이 없거나, 서로가 중요하게 생각하는 가치가 교차점을 찾지 못하고 있거나, 각자가 해석하는 의미감이 타인의 의미감에 더해지는 것이 아니라 분리되어 존재할 때 발생한다.

심각한 대화도 진지한 대화와 마찬가지로 깊고 중대한 문제를 다루지만 집단을 엮는 '스토리'가 되진 못한다. 스토리는 과거와 현재, 그리고 미래의 흐름에서 등장하는 인물이 사건이나 배경에 어떻게 대응하고 위기를 극복하며 성취를 해나가는지에 대한 하나의 맥락적 서사다. 불안과 염려, 혹은 불만과 두려움이 가득한 심각한 대화는 과거와 현재, 미래를 엮지 못한다. 그 안에서 발견되는 인물들의 서사는 늘 개운치 못하고 실망스러울 뿐이다."></Content>

        <div style={grayLineStyle}></div>

        <SectionTitle title="그래서, 우리는 집단 안에서 진지한 대화를 나누어야 한다."></SectionTitle>

        <Content text="삶의 여정에서 함께하는 사람들이 주고받는 영향력을 충분히 나누어야 한다. 심각하지 않지만 진지하게 우리 내면에 자리 잡은 사유를 나눌 수 있어야 한다. 서로가 서로에게 경험하고 느낀 의미감을 진솔하게 주고받을 줄 알아야 한다.

그래야, 각자가 지금의 삶을 바라보는 시선을 존중하며 서로의 마음을 끌어안아 앞으로 함께 나아가야 할 스토리를 그려나갈 수 있을 테니 말이다.

+ 워크숍에 참여한 팀원분들은 너무나 즐겁게 진지한 대화에 참여하셨다. 그러고 보니 진지함과 즐거움은 함께 갈 수 있는 정서인 것 같다. 하지만 심각함과 즐거움은 어울리지 않아 보인다."></Content>

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

export default SeriousNotSerious;
