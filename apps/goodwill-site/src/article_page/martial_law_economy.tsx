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

const MartialLawEconomy: React.FC = () => {
  
  useEffect(() => {
          window.scrollTo(0, 0);
        }, []);
  
    return (
    <div style={containerStyle}>
      <Header
        title="김용현이 쓰는 계엄과 경제"
      />
      <div style={contentContainerStyle}>

        <Content text="우리는 기말고사 기간에 계엄 선포라는 이슈로 시험공부에 영향을 받아 어쩔 수 없이 다음날 시험을 망친 경험이 있을 것이다. 최근 전한길이 시청에서 행한 연설?로 계엄에 대한 인식이 바뀌고 있는지 뭔지는 모르겠으나 본인은 경제와의 관련성만 볼 뿐, 정치에는 관심이 1도 없음을 밝히는 바이다.

계엄은 국가 차원에서 나라가 위기 상황에 있음을 선포하는 것이다. 따라서 계엄을 선포하면서 우리나라 경제에는 여러 가지 변화가 있었을 것이다." />

        <SectionTitle title="1. 환율"></SectionTitle>

        <Content text="계엄이 터진 후로 우리나라 환율은 떡락을 경험했다. 계엄 후 환율은 1450/$ 의 수치를 초과했는데, 1450원의 환율을 기록한 것은 1997년의 IMF와 2009년의 글로벌 금융 위기 이후 최초이다. 이는 국가가 위기 사태라고 선포하면서 국제적으로 원화의 가치가 내려가는 현상으로 미국의 관세로 인한 압박의 근본적인 이유가 되었음을 알 수 있다. 우리나라는 본래 무역흑자국 8위를 기록하고 있었으나 이번 환율 변동과 관세전쟁의 시작으로 국가적 피해를 피할 수 없게 됨이 확실해보인다. 그러나 당시의 상황 자체는 그렇게 나쁘지 않았다. 비상계엄 선포 및 해제 사태 이후인 12월 4일에 주식시장이 우려했던 최악의 폭락 사태는 없었다. 이날 코스피지수는 전 거래일보다 36.10포인트(1.44%) 내린 2464.00을 기록했다. 코스닥지수는 전장보다 13.65포인트(1.98%) 내린 677.15였다. 밤사이 사태가 종료됐고 금융당국도 시장 안정화 조치를 시행하면서 지난 12월 3일의 상승분을 반납하는 선에서 충격은 완화됐다. 외국인이 코스피 시장에서 4100억원가량을 순매도하긴 했지만, 규모만 놓고 보면 최근 국내 증시를 팔고 나가던 흐름에서 크게 벗어나지 않는 수준이다."></Content>

        <SectionTitle title="2. 경제성장률"></SectionTitle>

        <Content text="한국은행이 지난해 하반기의 경제성장률을 0.5%로 예측했다. 그러나 계엄쇼크로 인해서 하반기의 경제성장률은 0.4% 낮춰진 0.1%에 그쳤고, 이번 해의 경제성장률도 1.9%에서 1.6% 정도로 낮아질 전망이다. 이러한 수치가 의미없게 보일 수 있지만 저 작은 수치의 변동으로 우리나라 국내총생산(GDP)의 감소량은 자그마치 6조 3000억원에 이를 것으로 예상된다. 이러한 예상 또한 1분기 안에 피해가 회복되는 것을 전제로 한다."></Content>

        <SectionTitle title="3. 소비 위축"></SectionTitle>

        <Content text="우리나라의 정치적 불안이 증가하면서 우리나라 회사의 대부분의 주식들에서 외국인 투자자들은 주가 하락이 예상되기에 투자금 회수를 요구할 것이 분명하다. 이는 경제의 추가 둔감을 유도할 수 있다. 과거 노무현, 박근혜 전대통령 탄핵 당시에도 소비 심리가 위축되는 경향을 보여왔다.

윤석열 대통령이 이번에 탄핵 당하게 된다면 같은 경제는 과거와 같은 행보를 보일 가능성이 있다.

작성자는 이름이 김용현이지만 정치에는 평소 관심이 전혀 없는 편이다. 글 안에는 사상을 주입하지 않기 위해 최대한 노력 했음을 알아주길 바란다."></Content>
        
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

export default MartialLawEconomy;
