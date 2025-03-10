// EverythingClub
//.tsx
import React, { useEffect } from "react";
import Header from "../article_component/header";
// import ImageBox from "../article_component/imagebox";
import SectionTitle from "../article_component/section_title";
import Content from "../article_component/content";
import Author from "../article_component/author";
import ApplyButton from "../article_component/apply_button";
import authorImage  from "../assets/profile_images/jaemin_profile.webp";
const HolidayEconomy: React.FC = () => {
  
  useEffect(() => {
          window.scrollTo(0, 0);
        }, []);
  
    return (
    <div style={containerStyle}>
      <Header
        title="휴일과 경제"
      />
      <div style={contentContainerStyle}>

        <Content text="우리는 최근에 최대 13일이라는 설 연휴가 길어지면서 고등학생이 되기 이전에 푹 쉬는 경험을 할 수 있었다.하지만 공휴일은 쉬기 위해서 만드는 것이기는 하나 경제에도 전반적인 영향을 미친다. 과연 정부가 공휴일을 지정함에 있어서 생기는 이점들과 단점들은 무엇이 있을까." />
        

        <SectionTitle title="1. 공휴일의 긍정적 효과"></SectionTitle>

        <Content text="공휴일이 증가하면 국민들은 여가 활동에 더 많은 시간을 할애하며, 이로 인해 내수 경제가 활성화된다. 현대경제연구원의 분석에 따르면, 특정 임시공휴일 지정 시 소비지출이 약 2조 1,000억 원 증가하며, 이는 생산 유발 효과 4조 2,000억 원, 부가가치 유발 효과 2조 1,000억 원, 고용 유발 3만 3,000명에 해당하는 효과를 나타낸다. 또한, 외식업이나 유통업을 포함한 서비스 산업의 매출이 증가하는 경향을 보인다. 이는 경제 성장에 기여하는 주요 요인으로 작용할 수 있다.

공휴일은 기업들의 단기 매출 상승에 긍정적인 영향을 미친다. 정부가 소비 촉진을 위한 정책을 함께 시행한다면 공휴일은 경제 성장에 도움이 될 수 있다."></Content>

        <SectionTitle title="1-2. 관광 및 서비스업"></SectionTitle>

        <Content text="공휴일이 늘어나면 여행 활동이 증가하여 관광 및 서비스업이 활성화된다. 현대경제연구원의 연구에 따르면, 공휴일 도입 후 국내 관광객 수가 증가하면서 관광 산업 및 숙박업 매출이 최대 20% 이상 증가하는 효과가 나타났다고 밝혔다. 또한, 공휴일이 포함된 연휴 기간에는 교통량이 증가하며, 항공 및 철도 업계의 수익이 향상된다고 한다. 이는 관광 산업과 관련된 다양한 산업에서도 긍정적인 영향을 미칠 수 있다.

공휴일이 증가할 경우, 지역의 방문객 수도 증가하여 지역 경제에 긍정적인 영향을 준다. 대전의 경우, 방문객 수가 증가한 사례들은 0시 축제와 빵빵런 등이 있었다. 공휴일 지정과 연계된 지역 경제 정책이 시행될 때 국민들의 소비 증대를 예상해볼 수 있다."></Content>

        <SectionTitle title="2. 공휴일의 부정적 효과"></SectionTitle>
        
        <Content text="
        공휴일 증가로 인해 기업이 일을 쉬게 되면 기업의 생산 일정은 지연되고, 이에 따라 생산성이 저하될 수 있다. 특히 공장, 제조업과 같은 산업에서는 공장이 가동되지 않으면 1일마다 생기는 손실도 비대할 수 있다. 조사에 따르면, 임시공휴일 지정으로 하루 약 32조 원의 경제적 손실이 발생할 수 있다고 한다. 이는 기업과 국가 경제 성장에 부정적인 영향을 미친다.

제조업뿐만 아니라 서비스업에서도 업무 공백이 발생할 수 있으며, 이는 기업의 연간 운영 계획에도 영향을 미칠 수 있다. 특히 중소기업의 경우에는 인건비 지급과 생산 일정의 차질로 더욱 큰 피해가 발생할 가능성이 높다. 이에 따라 공휴일 증가가 단순한 경제적인 이익뿐만 아니라 산업의 운영 효율성을 감소시킬 수 있다는 점을 고려해야 한다.

공휴일 지정으로 연휴 기간이 길어지면 해외여행에 대한 수요가 증가하면서 소비가 해외로 유출될 가능성이 커진다. 한국관광공사의 통계에 따르면, 연휴가 포함된 기간 동안 해외 출국자 수가 약 30% 증가하며, 이에 따른 해외 소비 증가로 국내 시장의 소비 금액이 감소할 수 있다. 이러한 현상은 국내 경제 활성화 효과를 상쇄할지도 모른다."></Content>

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

export default HolidayEconomy;
