import {
  aboutDiv,
  backgroundImg,
  mainTextDiv,
  sloganText,
  subText,
} from "./About.style.ts";

const imageUrl = "../../imgs/img/unsplash_3fPXt37X6UQ.png";

const About = () => {
  return (
    <div>
      <img src={imageUrl} alt="about-background-img" css={backgroundImg} />

      <div css={aboutDiv}>
        <div css={{ height: "100px" }}></div>
        <div css={mainTextDiv}>
          <div>WE ARE</div>
          <div>GOODWILL</div>
        </div>
        <div css={{ height: "72px" }}></div>
        <div css={sloganText}>“BETTER WORLD, BRIGHTER TOMORROW”</div>
        <div css={{ height: "56px" }}></div>
        <div css={subText}>
          GoodWill은 대전대신고등학교의 유일 문이과 융합 기업형 동아리로서,
          2015년 첫 출범 이후 '더 나은 세상, 더 나은 내일(Better World, Brighter
          Tomorrow)'라는 슬로건 아래 꾸준한 발전을 추구하며, 사람과 사회를
          생각하는 국내 고등학생 기업체로서 자리매김 하고 있습니다.
        </div>

        <div css={{ height: "33px" }}></div>
        <div css={subText}>
          ‘경영이념, 핵심가치, 경영원칙’의 가치체계를 경영의 나침반으로 삼고,
          인재와 기술을 바탕으로 최고의 제품과 서비스를 창출하여 인류사회에
          공헌하는 것을 궁극적인 목표로 삼고있는 GoodWill은 플랫폼, 인공지능,
          로보틱스, 메타버스 등 미래 기술에 대한 지속적인 연구개발과 협력을 통해
          기술 플랫폼의 변화와 혁신을 추구하며 모두가 성장할 수 있도록 노력하고
          있습니다.
        </div>
      </div>
    </div>
  );
};

export default About;
