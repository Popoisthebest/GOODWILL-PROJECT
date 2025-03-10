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
import articleImage from "../assets/article_images/pycoin.jpg";

const Pycoin: React.FC = () => {
  
  useEffect(() => {
          window.scrollTo(0, 0);
        }, []);
  
    return (
    <div style={containerStyle}>
      <Header
        title="파이코인이란?"
      />
      <div style={contentContainerStyle}>

        <Content text="최근 상장한 회사로 유명세를 얻고 있는 파이코인은 어떤 코인일까? 파이코인은 기사들을 볼 때, 다단계형식, 상장 가능성 등의 이슈로 위험한 코인이라는 이미지가 보이고 있다. 글쓴이 본인도 상장 하루 전에 파이코인의 존재를 알게 되어 열심히 채굴하고 있다. 그렇다면 파이코인은 어떻게 만들어졌고 또 다른 코인들과의 차이는 무엇일까?" />
        
        <ImageBox image={articleImage}></ImageBox>

        <SectionTitle title="1. 채굴 방식"></SectionTitle>

        <Content text="파이코인은 기존의 코인들과 채굴 방식이 좀 다르다. 비트코인의 경우 초기에는 컴퓨터에 내장된 CPU를 통해서 채굴하는 방식이 채택되었었다. 또한 비트코인 측에서도 CPU 대신 GPU로 채굴하는 것을 부정적으로 바라보았다. 그러나 비트코인 채굴 알고리즘은 GPU를 사용한 채굴 속도가 압도적으로 빨랐고, 이후에 ASIC에서 채굴기를 개발하여 비트코인은 채굴기를 이용하는 추세로 고정되었다. 이후 이더리움의 등장으로 다시 GPU 채굴 방식이 떠오르고 그래픽카드 대란이 일어나기도 했다. 그러나 파이코인의 경우 휴대폰에서 무료로 다운받은 후 채굴이 가능하기에 초기비용이 들지 않는다는 장점이 있다."></Content>

        <SectionTitle title="2. 주가"></SectionTitle>

        <Content text="상장 직후인 2025.02.20. 기준으로 1.84$로 시작하여 초기 기대로 2달러 이상까지 상승했지만 이후 급격한 매도세로 0.78달러까지 하락했었다. 현재 2025.02.25. 0:42 기준으로 가격은 1.59$로 가격이 점차 복구되는 추세이다. 이러한 수치가 놀라운 이유는 상장 전 진행된 선행 거래에서 예상 가격은 60~70$, 혹은 100$까지도 예상되었는데, 실제 거래가는 2$에서 그쳤기 때문이다. 또한 전문가들은 2025말까지는 최저 0.4달러에서 최고 2.5달러 사이의 주가를 가질 것이라고 예측하고 평균 가격은 1.2달러일 것으로 예측하고 있다."></Content>

        <SectionTitle title="3. 그 외의 것"></SectionTitle>
        
        <Content text="파이코인은 현재 다른 사람을 초대할 때 초대를 한 사람과 받은 사람 모두 1파이씩 지급하는 다단계식 운영을 진행하고 있다. 아무 도움 없이 파이코인을 혼자 채굴할 시 시간당 0.05 파이를 받을 수 있기에 초대하는 것의 효율은 생각보다 크다. 파이코인은 24시간에 한 번 채굴을 누르는 것으로 간편하게 채굴을 할 수 있다. 파이코인의 최초 발행일은 2019.03.14. 이며 스텐퍼드 대학 출신팀이 제작한 블록체인 기반 프로그램이다. 세상에서 가장 비싼 피자 이야기를 아는가? 초기 비용 0원인 코인에 한번 투자해보는 것은 어떨까 싶다."></Content>

        {/* 입사 신청하기 버튼 */}
        <ApplyButton />

        {/* 작성자 정보 */}
        <Author name="김용현" description="이 사람은 블로그 작성자입니다." image={authorImage} />
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

export default Pycoin;
