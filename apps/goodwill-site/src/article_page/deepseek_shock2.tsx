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
import articleImage1 from "../assets/article_images/deepseek shock 2-1.png";
import articleImage2 from "../assets/article_images/deepseek shock 2-2.png";

const DeepSeekShock2: React.FC = () => {
  
    useEffect(() => {
            window.scrollTo(0, 0);
          }, []);
  
    return (
    <div style={containerStyle}>
      <Header
        title="DeepSeek Shock - 제본스의 역설과 AI 투자의 향방 - 2"/>
      <div style={contentContainerStyle}>
        
        <SectionTitle title="I. DeepSeek R1 등장" />

        <Content text="1) DeepSeek Shock

DeepSeek R1에 관한 이야기가 글로벌 헤드라인을 장악했다. 바로 지난 AI Weekly에서 이 모델에 대해 자세히 다룬 바 있지만 이정도로 파급력이 클지는 예상하지 못했다. 사실 나름의 이유가 있었다. **DeepSeek R1이 아닌 V3가 기술적으로 그 의미가 더 출중했다**고 보였기 때문이었다. 그럼에도 V3가 아닌 **R1에 세상이 들썩인 것은 기술적인 의미보다는 더욱 더 사회적 맥락에서 파악해야 했음**을 조금 간과하였다.

“중국” 기업 DeepSeek의 R1이 만들어 낸 영향력은 대단했다. DeepSeek 앱은 R1의 등장에 힘입어 앱스토어 1위로 치솟았고, 일일 트래픽도 Claude, Perplexity, 심지어 구글의 Gemini보다 훨씬 많기도 했다. 참고로 앤트로픽의 Claude는 단 한 번도 앱스토어 1위를 기록한 적이 없다는 점을 감안하면 꽤 놀라운 성과라고 할 수 있다." />

        <ImageBox image={articleImage1} />

        <Content text="그림 1. DeepSeek의 놀라운 파급력, ‘애플 앱스토어에서 ChatGPT마저 누르고 다운로드 1위’"></Content>
        
        <Content text='반대로 미국 기술주는 폭락했다. **엔비디아는 미국 주식 시장 역사상 최대 규모의 일간 손실 금액**으로, 약 5천억 달러를 기록했다. (OpenAI 프로젝트인) Stargate 하나가 하룻밤 사이에 날아간 셈이다. 트럼프 대통령은 DeepSeek를 긍정적이고 “경종을 울리는 일”이라고 평가했다.

트럼프를 포함한 미 정치권에서도 깜짝 놀랐으니, DeepSeek의 출현으로 얼마나 많은 미국의 AI 연구원들이 큰 충격을 받았을지는 어렵지 않게 실감할 수 있을 것이다. 특히 DeepSeek과 같은 오픈소스 진영인 메타의 현황은 가장 두드러진 사례였다. 메타의 생성 AI 팀 내부 상황에 대한 폭로성 글이 나왔는데, DeepSeek V3가 이미 벤치마크에서 "Llama 4(심지어 아직 미공개)"를 앞서고 있다는 점을 들면서 비용 효율성 측면에서 굴욕적
인 패배라고 자조하는 분위기가 역력하다.'></Content>

        <ImageBox image={articleImage2}></ImageBox>

        <Content text="그림 2. 미국 블라인드에 올라온 메타 직원의 내부 성토, ‘R1과 관련해 그들이 겪는 어려움을 짐작’"></Content>

        <div style={grayLineStyle}></div>

        <SectionTitle title="2) DeepSeek R1의 등장으로 ‘고기능 저비용’AI 시대 개막" />

        <Content text="DeepSeek R1의 등장은 단순한 신제품 출시가 아닌 그 이상으로 꼽힌다. 물론 시장을 뒤흔든 지정학적, 패권경쟁적인 측면이 중요하지만, 기술적으로도 그 의미가 남다르다. 작지만 강한 효율적인 모델의 시대를 열었다고 평가되기 때문이다. ‘고기능, 저비용’의 효율적 모델이라고 하는 것은 결국 가격이 싸다는 말과 동일하다. 벤치마크 성능 기준, R1의 경쟁 모델로 꼽히는 것은 OpenAI의 o1 모델이다. 그런데, o1 모델과 성능은 비슷한데도 R1의 비용은 고작 10분의 1 수준에 불과하다. 이러한 충격적인 가격 차이는 'OpenAI는 왜 그렇게 비싼가?'라는 의문을 제기하게 만드는 데 충분했다. 그 의문에 대답은, 사실, OpenAI가 최고의 성능을 내는 Market Maker로서 프리미엄을 누리기 때문이다.

 *Dylan Patel에 따르면, OpenAI는 추론(Inference) 서비스에서의 총마진율(Gross Margin)은 75% 이상*

이는 바꿔 말하면, “새로운 기능이나 첨단 성능”을 계속 밀어붙이면 현재의 ‘가격 프리미엄’을 유지할 수 있지만, 그렇지 못하면 금세 ‘구형 모델’로 전락하여 commodity(보급형) 시장에 들어갈 수 밖에 없다는 말이다. 다시 말해, DeepSeek는 Fast Follower 입장에서 마진을 거의 남기지 않는 수준으로 시장에 우선 들어온 셈이다. 참고로, 1등 기업인 OpenAI조차 2024년에 훈련 및 추론에 70억 달러를 지출했었다. 그러니 DeepSeek는 R1 모델로 당장 돈 벌 생각은 없어 보인다. “애초에 그들은 수익 기대치도, KPI도 없다”고 Kevin Xu(오바마 정부 공보실 출신)은 밝히기도 했다.

물론 돈이 필요하지 않은 것은 아니다. DeepSeek는 새로운 라운드를 위해 자금을 조달하고 있기 때문이다. 따라서, 그들이 파격적인 가격을 제시한 것은 그들이 현재 새로운 투자 유치를 위해 자금을 모아야 하는 상황을 기반으로 읽어야 할 것 같다. 일시적으로 손해를 감수하지만, 일단 R1 모델을 시장에 널리 알리고 주목을 받는 것이 더 중요하다고 판단한 것으로 풀이된다.

영향력 및 입지 확대와 관련해 DeepSeek는 R1을 “오픈 가중치(open-weight)”로 공개했다. 그리고 AI 개발자들에 따르면, DeepSeek R1의 경우 아마도 메타의 Llama를 뛰어넘는, 현재 시장에 나와 있는 가장 개방된 오픈소스 모델로 분류된다. 누구나 (ChatGPT, Claude, Gemini와 달리) R1을 다운로드, 실행, 튜닝할 수 있기 때문이다. 앤트로픽의 공동 창립자인 잭 클락에 따르면, R1의 등장으로 “전 세계 소규모 AI 모델에 대한 즉각적인 추론 업데이터가 ”"></Content>
        
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

export default DeepSeekShock2;
