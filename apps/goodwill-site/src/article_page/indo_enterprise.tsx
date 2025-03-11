import React, { useEffect } from "react";
import Header from "../article_component/header";
import ImageBox from "../article_component/imagebox";
import SectionTitle from "../article_component/section_title";
import Content from "../article_component/content";
import Author from "../article_component/author";
import ApplyButton from "../article_component/apply_button";
import authorImage  from "../assets/profile_images/jinyoung_profile.webp";
import articleImage1 from "../assets/article_images/indo_enterprise1.jpg"
import articleImage2 from "../assets/article_images/indo_enterprise2.jpg"
import articleImage3 from "../assets/article_images/indo_enterprise3.jpg"
import articleImage4 from "../assets/article_images/indo_enterprise4.jpg"
import articleImage5 from "../assets/article_images/indo_enterprise5.jpg"
import articleImage6 from "../assets/article_images/indo_enterprise6.jpg"
import articleImage7 from "../assets/article_images/indo_enterprise7.jpg"


const IndoEnterprise: React.FC = () => {
  
  useEffect(() => {
          window.scrollTo(0, 0);
        }, []);
  
    return (
    <div style={containerStyle}>
      <Header
        title="인도의 유니콘 기업이 잘나가는 이유"
      />
      <div style={contentContainerStyle}>

        <ImageBox image={articleImage1} />

        <SectionTitle title="유니콘의 천국으로 떠오른 인도"></SectionTitle>

        <Content text="전 세계에서 유니콘 기업에 가장 호의적인 상장 시장은 어디가 있을까요? 우선은 테크 기업 상장의 중심지인 미국 증시를 떠올릴 수 있습니다. 당장 적자를 기록하더라도 매출 규모가 크고 꾸준한 성장성이 입증된다면 시장의 관심을 한몸에 받을 수 있는 시장이 미국입니다. 또한 전 세계 유니콘이 상장을 위해 문을 두드리는 시장 또한 NYSE와 나스닥입니다. 한때 중국의 유니콘 기업들도 미국 증시 상장에 적극 나서기도 했으며 한국의 쿠팡, 그리고 남미의 누 홀딩스와 메르카도리브레 모두 미국 증시에 상장된 기업입니다.

다음으로 최근 유니콘 기업의 상장이 가장 활발한 시장으로 인도를 꼽을 수 있습니다. 2024년 8월 기준 총 116개의 유니콘 기업을 보유한 인도는 최근 모빌리티 분야의 올라 일렉트릭 (Ola Electric), 물류 유니콘 딜히버리 (Delhivery), 보험 플랫폼 디짓 (GoDigit)이 성공적으로 시장에 안착, 미국 다음으로 유동성이 풍부한 유니콘 IPO 시장으로 떠오르고 있습니다." />
        
        <div style={grayLineStyle}></div>
        
        <ImageBox image={articleImage2}></ImageBox>

        <SectionTitle title="인도의 유니콘 IPO 성공 사례 및 후보군"></SectionTitle>

        <Content text="인도는 자국 유니콘 기업들이 해외가 아닌 국내 거래소에 상장하여 성공을 거두고 있는 독특한 사례를 보여주고 있습니다. 유니콘 기업의 상장 후 주가 흐름이 실망스러운 영국, 유니콘 상장에 대한 기대만 높았던 한국, 그리고 현지 테크 기업들을 제대로 유치하지 못하는 싱가포르 증시와 비교할 때, 인도 증시의 성과는 더욱 두드러집니다.

그리고 인도 증시가 자국 유니콘 기업 상장의 중심지로 부상한 주요 요인 중 하나는 첫 유니콘 상장 기업인 음식 배달 플랫폼 조마토(Zomato)의 눈부신 성장이 자리하고 있습니다."></Content>

        <div style={grayLineStyle}></div>
        
        <SectionTitle title="유니콘 1호 상장 조마토"></SectionTitle>

        <Content text="2021년 조마토의 상장 이전까지 인도 증시는 한국과 마찬가지로 일정 수준의 수익성 등 재무 요건을 갖춘 기업만이 상장할 수 있는 시장이었습니다. 하지만 한국만큼이나 자국 기업 육성에 적극적인 인도 증권거래소와 규제 당국인 SEBI는 조마토 상장을 계기로 몇 가지 예외 사항을 적용, 적자 유니콘 기업 상장의 물꼬를 트게 됩니다.

- 적자 기업의 상장 허용: 일정 수준의 매출을 기록하고 고성장 기업으로 분류된다면 적자 기업도 상장 가능

- 적격투자자(Qualified Institutional Buyers, QIBs)만이 수요 예측 참여: SEBI는 적자 기업의 상장에 대한 리스크를 고려하여, 주로 적격 기관 투자자만이 이러한 IPO 수요 예측 과정에 참여하도록 제한

- 앵커 투자자 도입: SEBI는 적자 유니콘 기업의 상장에서 앵커 투자자에 대한 규정을 명확히 하였습니다. 앵커 투자자는 IPO 공모 전에 공모가를 기준으로 일정 비율의 주식을 대규모로 확보하는 투자자들로, 상장 후 거래를 안정화하고 가격 형성에 중요한 역할을 합니다."></Content>

        <ImageBox image={articleImage3}></ImageBox>

        <SectionTitle title="조마토의 매출 및 영업이익 추이"></SectionTitle>

        <Content text="조마토가 꾸준히 우상향의 성장 곡선을 그리며 투자자들의 기대에 부응한 점 또한 인도 증시가 유니콘 기업의 메카로 등극할 수 있었던 중요한 계기가 됩니다. 2021년 상장 당시만 해도 매출보다 영업손실 규모가 커 비판의 대상이 되었지만 이후 꾸준히 매출 규모를 늘리고 적자 폭을 줄이며 실적 개선을 이뤄낸 점 또한 인도 시장 참여자들이 적자 기업의 상장에 대해 긍정적인 관점을 가지게 된 계기가 됩니다.

조마토는 올해만 연초 대비 주가가 2배 가까이 상승하며 투자자들의 기대에 한껏 부응하고 있습니다. 또한 2022년 퀵커머스 기업 블링킷(Blinkit)에 이어 최근에는 페이티엠의 티케팅 및 엔터테인먼트 사업 인수에 성공, 이제는 로컬 슈퍼앱으로의 도약에 나선 모습입니다."></Content>

        <div style={grayLineStyle}></div>
        
        <SectionTitle title="2024년 상장 대열에 합류한 유니콘들"></SectionTitle>
        
        <Content text="홍콩을 제치고 세계 4위 시가총액으로 등극한 인도 증시의 유동성에 힘입어 2024년에도 현지 유니콘 기업의 상장 성공 소식들이 속속 들려오고 있습니다. 팬데믹 이후 스타트업들의 사기 및 횡령 등 스캔들이 이어지며 벤처 투자가 급감하기도 하였지만 유니콘 기업의 상장을 통해 인도의 상장 및 비상장 투자 시장에도 다시 온기가 돌기 시작하는 모습입니다."></Content>
        
        <SectionTitle title="1. 올라 일렉트릭 (Ola Electric)"></SectionTitle>

        <Content text="올라 일렉트릭은 인도의 전기 이륜차 제조업체이며 차량 공유 기업으로 유명한 올라(Ola)의 자회사입니다. 2024년 연간 매출은 약 5천억 원을 기록했으며, 전년 대비 80% 이상의 성장률을 보였습니다. 주요 사업은 전기 스쿠터 제조 및 판매이며, 최근에는 전기 자동차 시장 진출을 준비 중입니다. 인도 정부의 전기차 보급 정책과 맞물려 빠른 성장세를 유지하고 있으며, 향후 5년간 연평균 60% 이상의 매출 성장을 목표로 하고 있습니다.

상장 당시 약 5조 원에 달했던 올라 일렉트릭은 상장 이후에도 수직 상승, 현재 8조원을 넘어선 수준입니다."></Content>

        <ImageBox image={articleImage4}></ImageBox>

        <Content text="올라 일렉트릭"></Content>
        
        <SectionTitle title="2. 딜히버리 (Delhivery)"></SectionTitle>

        <Content text="딜히버리는 인도의 대표적인 물류 테크 기업입니다. 2024년 기준 연간 매출은 약 1조 원을 달성했으며, 전년 대비 35% 성장했습니다. 주요 사업은 B2B 및 B2C 물류 서비스로, 특히 전자상거래 배송 시장에서 강세를 보이고 있습니다. 2024년 5월 약 6.5조 원의 기업가치로 상장에 성공하였으며 8월 말 현재 기업가치는 4.8조 원을 기록하고 있습니다."></Content>

        <ImageBox image={articleImage5}></ImageBox>

        <Content text="딜히버리 (Delhivery)"></Content>

        <SectionTitle title="3. 디짓 (Digit)"></SectionTitle>

        <Content text="디짓은 인도 인슈어테크 분야의 유니콘 기업입니다. 주요 사업은 디지털 보험 상품 개발 및 판매로, 특히 자동차 보험과 건강 보험 분야에서 강점을 보이고 있습니다. AI 기반의 리스크 평가 모델과 사용자 친화적인 앱을 통해 전통적인 보험사들과 차별화에 성공했으며, 인도의 낮은 보험 가입률을 고려할 때 향후 5년간 연평균 70% 이상의 고성장이 예상되는 기업입니다. 상장 당시 기업가치는 4조 원, 8월 기준 시가총액은 5.2조 원을 기록하고 있습니다."></Content>
        
        <ImageBox image={articleImage6}></ImageBox>

        <Content text="디짓 (Digit)"></Content>

        <Content text="전 세계 유니콘 기업 투자에서 큰 성과를 거두지 못했던 소프트뱅크도 인도에서만큼은 다른 모습입니다. 비전펀드 1호와 2호를 통해 총 18조 원에 가까운 인도 기업 포지션을 보유한 소프트뱅크는 올해 조마토, PB핀테크, 딜히버리, 페이티엠 지분 매각을 통해 1.5조 원 가량 자금을 회수하였으며 최근 상장에 성공한 올라일렉트릭과 퍼스트크라이 지분까지 더할 경우 연간 회수액만 2.5조 원을 넘어설 것으로 보입니다. 고무적인 성과를 바탕으로 소프트뱅크는 올해 1월 18개월 만에 인도 기업 신규 투자를 재개하며 인도 시장에 배팅을 늘리는 모습입니다."></Content>

        <div style={grayLineStyle}></div>
        
        <SectionTitle title="인도 증시의 교훈"></SectionTitle>

        <Content text="인도 증시가 떠오르는 반면 미국 상장 등은 여의치 않은 상황이 전개되자 해외 상장을 염두에 두고 미국 또는 싱가폴에 모회사를 설립했던 인도 기업들이 다시 인도 기업으로 전환하는 ‘리버스 플립’이 뜨고 있다는 뉴스는 이미 1년 전에 다룬 바가 있습니다.

최근에도 인도의 구글, 인도 1호 유니콘 기업으로 불리던 애드테크 기업 인모비(InMobi)가 싱가폴 법인에서 인도로 리버스 플립을 선언하며 인도 유니콘 기업의 본국 회귀 트렌드는 더욱 강화되는 모습입니다."></Content>
        
        <ImageBox image={articleImage7}></ImageBox>
        
        <Content text="인도 증시로 방향을 튼 인도의 1호 유니콘 인모비"></Content>

        <Content text="모든 국가가 자국 유니콘 기업을 현지 거래소에 유치할 정도로 자본 시장이 발달한 것은 아닙니다. 인도의 시장 규모가 방대하기 때문에 수천억 원 대의 매출을 기록한 유니콘 기업의 상장이 이어질 수 있다고 반문할 수도 있습니다. 그럼에도 인도가 자국 유니콘 기업의 해외 유출을 막고, 이미 해외로 나간 기업들까지 다시 불러들일 수 있었던 것은 정책 당국의 노력 덕분입니다. 당국은 시장 참여자들의 신뢰를 얻는 동시에 일반 투자자들을 보호하기 위한 다각도의 정책을 펼쳤고, 이러한 노력이 결실을 맺은 것입니다.

특히 조마토 상장을 계기로 적자 유니콘 기업의 상장을 매출 규모가 일정 수준에 이르면서도 성장성이 높은 기업으로 한정하고 상장 과정에서 기관투자자들 중심의 수요 예측, 앵커 투자자의 참여를 강제한 점은 상장 이후 주가 급락과 같은 이벤트를 방지하고 개인투자자들을 보호하는 효과로 작용한 것입니다. 유니콘의 수를 국가에서 관리하다가 막상 상장은 매출도 검증되지 않은 사기성 기업들을 기술특례상장이란 이름으로 유통 시장에 올리며 스스로 시장 참여자들에 대한 신뢰를 저버린 국내 당국이 곱씹어 봐야 할 대목입니다."></Content>

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

export default IndoEnterprise;
