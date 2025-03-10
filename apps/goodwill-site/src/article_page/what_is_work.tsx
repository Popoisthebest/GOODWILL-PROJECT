// EverythingClub
//.tsx
import React, { useEffect } from "react";
import Header from "../article_component/header";
import ImageBox from "../article_component/imagebox";
// import SectionTitle from "../article_component/section_title";
import Content from "../article_component/content";
import Author from "../article_component/author";
import ApplyButton from "../article_component/apply_button";
import authorImage  from "../assets/profile_images/hyunbin_profile.webp";
import articleImage from "../assets/article_images/what_is_work.jpg";

const WhatisWork: React.FC = () => {
  
  useEffect(() => {
          window.scrollTo(0, 0);
        }, []);
  
    return (
    <div style={containerStyle}>
      <Header
        title="'일머리'란 무엇일까"
      />
      <div style={contentContainerStyle}>

        <Content text="며칠 전 GOODWILL 회식 때, 팀원들과 '일머리'에 대해 이야기를 나누었다.

'일머리란 무엇인가?'에 대한 갑작스러운 질문에, 겉도는 생각을 미처 정리하지 못한 나는 '가능한 상대방이 예측 가능할 수 있도록, 혹은  좀 더 편하게 일할 수 있도록 배려해 주는 것'이라고 얼버무렸다. 그리곤 다른 팀원에게 어떻게 생각하며 질문을 토스했는데, 팀원는 꽤 명쾌한 답변을 내놓았다.

'눈치와 센스'

그 후로 적지 않은 시간 동안 '센스'에 대해 우리의 대화가 이루어졌다.

팀원들과 이야기를 나누며 혼자 생각을 곱씹어 볼수록 관계 안에서 센스를 발휘한다는 것은 여간 어려운 일이 아니라는 생각이 들었다. '센스'는 결국 '맥락'을 이해해야 가능한 것이 아닌가. 타인의 상황이나 처지를 이해하고 그에 맞는 적당한 필요를 발견할 줄 알아야 제대로 된 센스를 발휘할 수 있다.

그런데 여기서 더 중요한 것은 타인의 상황이나 처지보다 '적당한'이 아닌가 싶다. 타인의 상황이나 처지를 고려하여 제공해 준 나의 센스가 누군가에게는 과도한 배려나 지나친 관심으로 받아들여져 되려 불편함으로 여겨질 수 있기 때문이다. '적당한' 필요를 발견하고 '적당한'수준의 호의를 제공하는 것은 그래서 늘 어렵다. 나의 적당과 타인의 적당은 늘 같지 않으니까.

최근에 읽고 있는 책에서는 '감각'에 대한 다양한 사람들의 경험과 생각을 다루고 있다. 어쩌면 적당한 수준의 센스도 '감각'의 영역이지 않을까? 어떤 맥락에서도 달라지지 않는 능력은 기술이며, 타인의 욕구와 기호, 태도를 살펴 가며 그때마다 다양한 변주를 필요로 하는 능력이 감각이라면 감각을 곧 센스라고 해도 무방할 것이다.

구스노키 켄은 '감각은 상대방이 있는 것'이라고 하였다.

일에도 늘 상대방이 있다.

팀원이 이야기한 '센스'도 내가 이야기한 '배려'도 모두 '상대방을 향한 감각'을 이야기 한 것이 아닐까."></Content>
        
        <ImageBox image={articleImage}></ImageBox>
        
        {/* 입사 신청하기 버튼 */}
        <ApplyButton />

        {/* 작성자 정보 */}
        <Author name="백현빈" description="이 사람은 블로그 작성자입니다." image={authorImage} />
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

export default WhatisWork;
