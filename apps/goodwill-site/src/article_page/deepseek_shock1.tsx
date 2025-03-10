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

const DeepSeekShock1: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  
    return (
    <div style={containerStyle}>
      <Header
        title="DeepSeek Shock - 제본스의 역설과 AI 투자의 향방 - 1"
      />
      <div style={contentContainerStyle}>
        
        <SectionTitle title="I. AI Issue : DeepSeek Inside Out!" />

        <Content text="DeepSeek R1의 등장은 AI 업계를 넘어 지정학적 긴장감을 고조시키는 기폭제가 됨. 단순히 신제품 출시를 넘어, 앱스토어 1위 등극, 미국 기술주 하락, 트럼프의 언급 등 사회적 반향이 컸음. ‘고기능, 저비용’ 전략으로 OpenAI의 프리미엄 정책에 도전장을 내밀었지만, 투자 유치를 위한 전략적 가격 책정 가능성도 제기. 오픈소스 전략과 파격적인 채용 조건으로 젊은 인재를 확보하며 중국 AI 굴기를 알리는 신호탄으로 평가받기도.

하지만 DeepSeek의 훈련 비용 은폐 의혹, 앤트로픽 CEO의 발언 등 논란도 끊이지 않음. 다리오 아모데이는 기존 AI 모델 아키텍처를 효율적으로 개선했을 뿐, 혁신적인 돌파구는 아니라는 지적. GPU 확보 경쟁, 자금 출처 등 불확실성도 존재. 그럼에도 글로벌 AI 연구소들이 DeepSeek의 기술을 빠르게 흡수하여 영향력을 확대하는 추세. Perplexity 등은 DeepSeek의 기술을 활용, 자체 경쟁력 강화에 나서는 모습.

OpenAI는 DeepSeek를 의식, o3-mini 출시, Deep Research 기능 공개 등 발 빠른 대응에 나서는 중. AI 기술 경쟁은 더욱 치열해질 전망. 샘 올트먼은 나폴레옹의 말을 인용, “혁명은 만들 수도, 멈출 수도 없다”며 AI 주도권을 지키겠다는 의지를 표명. DeepSeek의 등장으로 촉발된 AI 경쟁 심화는 불가피할 것으로 보임." />

        <div style={grayLineStyle}></div>

        <SectionTitle title="II. AI Issue: Nvidia Upside Down?" />

        <Content text="DeepSeek V3 및 R1과 같은 추론 모델은 사전 및 사후 훈련뿐만 아니라 “Test-Time 스케일링”을 필요로 하므로, 더욱 많은 GPU와 고성능 네트워킹을 요구. 엔비디아는 CUDA라는 강력한 소프트웨어 생태계를 바탕으로, 단기적으로는 AI 인프라 시장에서 지배적인 위치를 유지할 가능성. 하지만 장기적으로는 중국의 자체 칩 개발 노력과 빅테크 기업들의 자체 칩 개발 노력에 의해 도전받을 가능성도 있기는 함.

DeepSeek와 같은 효율적인 AI 모델의 등장은 AI 서비스 시장의 성장을 가속화하며, 팔란티어와 같은 AI 소프트웨어 기업들에게 큰 기회를 제공함. 한편, 빅테크 기업들은 AI 인프라 구축에 공격적으로 투자하고 있으며, 이는 AI 기술 발전과 새로운 서비스 출시로 이어질 것.

DeepSeek 쇼크는 AI 산업의 패러다임을 전환하는 계기. 단기적 불확실성은 존재하지만, 장기적으로 시장 확대외 새로운 경쟁구도 형성을 통해 더 큰 성장을 이끌어낼 것으로 전망."></Content>
        
        <div style={grayLineStyle}></div>

        <SectionTitle title="III. 중국 기업의 AI Paper: 추론 모델의 얕은(?) 생각 - Tencent AI"></SectionTitle>

        <Content text="Tencent AI Lab의 논문은 OpenAI의 o1과 같은 최신 AI 추론 모델들이 문제를 해결할 때 보이는 ‘얕은 생각(underthinking)’이라는 흥미로운 현상을 파헤침. 마치 사람이 성급하게 결론을 내리듯, AI 모델도 충분히 깊이 생각하지 않고 섣부르게 다른 아이디어로 넘어가는 경우가 있다는 것.

얕은 생각이란 쉽게 말해, AI 모델이 정답에 가까운 좋은 아이디어를 떠올렸음에도 불구하고, 이를 충분히 발전시키지 않고 금방 포기해 버리는 현상. 시험 문제를 풀 때, 조금만 더 고민하면 풀 수 있는 문제를 “어려워 보인다”며 건너뛰는 것과 비슷함. 얕은 생각은 AI 모델의 성능을 저하시키는 주요 원인 중 하나. 모델이 불필요하게 많은 아이디어를 떠돌아다니며 시간과 자원(토큰)을 낭비하고, 결국 정답을 찾지 못하게 하기 때문. Tencent 연구진은 여러 실험을 통해 다음과 같은 사실을 밝혀냄.

- 틀릴 때 더 헤맨다: AI 모델이 정답을 맞히지 못했을 때, 더 많은 단어(토큰)을 사용하고 더 자주 생각을 바꿈.

- 어려울수록 더 얕다: 어려운 문제일수록 얕은 생각 현상이 더 자주 나타남.

- 버려진 아이디어의 가치: 놀랍게도, 모델이 버린 아이디어 중 상당수가 사실 정답으로 이어질 수 있었음. 심지어 첫 번째 생각이 정답일 확률도 25%나 됨.

- 많이 생각한다고 다 좋은 건 아니다: 모델이 오답에 비해 더 많은 생각을 떠올릴수록 정답에 가까워질 확률은 높아지지만, 그만큼 비효율적.

Tencent AI Lab은 ‘생각 전환 패널티(Thought Switching Penalty, TSP)’라는 해결책 제시. 모델이 생각을 바꿀 때마다 벌점을 주는 것. 마치 우리가 게임에서 성급하게 아이템을 바꾸면 페널티를 받는 것처럼, AI 모델도 생각을 함부로 바꾸지 못하도록 제약을 가하는 것.

일부 문제(벤치마크)에서는 페널티를 적용한 모델의 정확도가 높아지고 얕은 생각 점수가 낮아지는 효과가 나타남. 이는 모델이 한 가지 아이디어에 더 집중하고, 불필요하게 다른 아이디어로 넘어가는 것을 방지하는 데 도움이 된다는 것을 보여줌.

결론적으로, Tencent AI Lab의 연구는 AI 추론 모델의 효율성을 높이기 위한 새로운 관점을 제시. 단순히 모델의 크기를 키우거나 더 많은 데이터를 학습시키는 것뿐만 아니라, 모델이 생각하는 ‘생각하는 방식’ 자체를 개선하는 것이 중요하다는 것을 보여주는 것. 앞으로 AI 모델이 더욱 깊이 있고 효율적으로 생각할 수 있는 연구가 활발히 진행될 것으로 기대."></Content>

        {/* 입사 신청하기 버튼 */}
        <ApplyButton />

        {/* 작성자 정보 */}
        <Author name="고승한" description="이 사람은 블로그 작성자입니다." image={authorImage} />
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



export default DeepSeekShock1;
