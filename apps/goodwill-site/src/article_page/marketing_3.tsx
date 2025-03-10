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
import articleImage from "../assets/article_images/marketing_3.png";

const Marketing3: React.FC = () => {
  
  useEffect(() => {
          window.scrollTo(0, 0);
        }, []);
  
    return (
    <div style={containerStyle}>
      <Header
        title="마케팅과 3"
      />
      <div style={contentContainerStyle}>

        <Content text="우리 주변에 3이라는 숫자는 꽤 많이 분포하는 것 같다. 초중고, 학년, 가위바위보, 아침 점심 저녁, 브실골 등등 3이라는 숫자는 균형 잡힌 숫자라는 인식을 주기도 한다. 별생각 없이 인스타그램을 넘기던 나는 3이라는 숫자의 다른 용도를 발견하여 공유해보려 한다." />
        

        <SectionTitle title="1. 문구"></SectionTitle>

        <Content text="3은 심리적으로 기억에 유리한 숫자이다. 3의 법칙과 청킹 이론이라고 불리는 이론에 기반하여 우리의 뇌는 3개 단위로 기억할 때 더 오래 기억하는 경향이 있다. 일반적인 예시로 전화번호가 있다. 010 – XXXX – XXXX 와 같은 형태로 전화번호를 만들었기 때문에 우리는 조금 더 편하게 전화번호를 외울 수 있는 것 같다. 이러한 3의 법칙은 마케팅에서 다양하게 사용될 수 있다. 특히 기업의 광고나 문구를 제작할 때 자주 사용되는데 유명한 예로 나이키의 ‘just do it’ 이나 toss의 ‘금융을 쉽고 간편하게’ 등이 있다."></Content>

        <SectionTitle title="2. 선택지"></SectionTitle>

        <Content text="기업이 물건을 판매할 때, 소비자에게는 어떤 상품을 구매할지 선택할 권리가 부여된다. 예를 들어서 우리가 아이폰을 구매할 때 미니, 일반, 프로 중에서 선택을 하는 상황이 있을 것이다. 각각이 기능이 추가되면서 가격이 상승하는 패턴을 보이는데 가격의 차이는 크게 나타난다. 이러한 방식으로 소비자는 기업이 원하는 선택지(보통 중간에 위치하는 선택지)를 고르게 되는데 소비자는 본인의 선택이라고 생각하게 된다. 하지만 만약 선택지가 2개 뿐이라면 오히려 기업이 판매하고 싶은 상품이 선택되지 않을 확률이 높아진다. 3개의 선택지는 기업에서 채택하는 판매 방식 중 하나라고 볼 수 있다. 이를 중간가격의 법칙이라고 한다."></Content>

        <SectionTitle title="3. 기업의 로고 / 디자인"></SectionTitle>
        
        <Content text="
        기업의 로고를 제작할 때는 배경/보조/강조색을 각각 다른 색상을 사용하는 경우가 잦다. 또한 로고를 제작할 때는 3글자로 요약해서 로고를 제작한다.

예시 :"></Content>

        <ImageBox image={articleImage}></ImageBox>

        <Content text="디자인 이론에서 6:3:1 로 배경,보조,강조색을 설정한다고 한다. 펩시의 로고를 보면 파랑, 빨강, 하양 순으로 비율이 맞는 것을 확인할 수 있다.

또한 BMW의 로고를 보면 색은 3개를 사용했으며 로고의 글자는 3글자로만 이루어진 것을 볼 수 있다.

Good to Great 이라는 고전에서는 ‘중요한 것이 세 개보다 많다면 중요한 것이 없다는 뜻이다.’ 라고 말한다. 기업은 중요한 것 3가지에 집중하는 모습도 좋지 않을까?"></Content>

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

const grayLineStyle: React.CSSProperties = {
  borderBottom: "1px solid #ddd",
  marginTop: "20px",
  marginBottom: "20px",
};

export default Marketing3;
