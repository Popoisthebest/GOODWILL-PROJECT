import "../styles/TeamCulture.css";
import TeamCultrue from "../icons/Maskgroup.png"
import clevel from  "../icons/clevel.svg"
import gm from "../icons/gm.svg"

const TeamCulture = () => {

  return (
    <div>
      <div className="start_box">
        <img className="start_img" src={TeamCultrue} alt="" />
        <div className="start_box_text">GOODWILL을 만들어가는<br />주요 역할을 소개합니다.</div>
      </div>
      <div className="content_box">
        <div className="role_detail_box">
          <div className="title">C-Level</div>
          <img src={clevel} alt="asdf" className="images" />
          <div className="content">
            <div className="title_content_txt">
              CEO(Chief Executive Officer)
            </div>
            <div className="content_content_txt">
              &middot; 스타트업의 최고 결정권자로 사업 전략 수립 및 의사 결정 담당<br/>
              &middot; 자금 확보 및 관리, 대외 활동에서 기업 대표 역할 수행 <br/>
              &middot; 조직 문화 형성에 영향, 강한 리더십과 커뮤니케이션 능력 필요 <br/>
              &middot; 경영자, 전략가, 실무자 역할을 겸하며 기업 성장 책임<br/>
            </div>
            <div className="title_content_txt1">
              COO(Chief Operating Officer)
            </div>
            <div className="content_content_txt">
              &middot; 기업 운영 총괄, 내부 시스템 구축 및 관리<br/>
              &middot; CEO가 설정한 방향을 실행으로 전환, 자원 배분 및 업무 과정 최적화 <br/>
              &middot; 팀 간 협업 조율 및 운영 체계 정비, 강한 실행력 및 문제 해결 능력 필요 <br/>
              &middot; 조직을 선도하며 생산성 극대화를 위한 전략 수립<br/>
            </div>
            
          <div className="morebtn">더보기</div>
          </div>
        </div>
        <div className="role_detail_box">
          <div className="title">Business Operations</div>
          <img src={gm} alt="asdf" className="images" />
          <div className="content">
            <div className="title_content_txt">
              General Manager(총괄 관리자, GM)
            </div>
            <div className="content_content_txt">
              &middot; C-Level과 함께 GOODWILL 운영 총괄, 전략 수립 및 재무 관리 담당<br/>
              &middot; 목표 설정 및 스쿼드 구성, 시장 분석을 통한 비즈니스 방향 조정 <br/>
              &middot; 조직 효율성 증대, 고객 및 파트너 관계 유지, 수익성 극대화 전략 수립 <br/>
              &middot; 강한 리더십과 분석력을 바탕으로 의사결정 및 문제 해결 수행<br/>
            </div>
            <div className="title_content_txt1">
            Business Operations Manager(OM)
            </div>
            <div className="content_content_txt">
              &middot; 조직 효율성 증대 및 운영 보조, 스쿼드의 PO 역할 수행<br/>
              &middot; 비즈니스 프로세스 개선, 비용 절감 전략 및 데이터 기반 의사결정 지원 <br/>
              &middot; 부서 간 협업 조정, 내부 정책 및 절차 최적화 <br/>
              &middot; 예산 관리, KPI 모니터링, 기술 및 자동화 도입으로 생산성 향상<br/>
            </div>
          <div className="morebtn">더보기</div>
          </div>

          
        </div>
      </div>
    </div>
  );
};

export default TeamCulture;
