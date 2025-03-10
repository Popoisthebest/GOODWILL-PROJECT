import { useEffect, useState } from "react";
import "../styles/TeamCulture.css";
import TeamCultrue from "../icons/Maskgroup.png";
import clevel from "../icons/clevel.svg";
import gm from "../icons/gm.svg";
import rightarrow from "../icons/ArrowRight.svg"
import squad from "../icons/squad.svg"
import tf from "../icons/tf.svg"
import wam from "../icons/wam.svg"
import mam from "../icons/man.svg"
import cal from "../icons/cal.svg"
import warn from "../icons/warn.svg"
import rail from "../icons/rail.svg"
import bamboo from "../icons/bamboo.svg"

import review from "../icons/review.svg"
import uparrow from "../icons/uparrow.svg"
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const roles = [
  {
    title: "C-Level",
    img: clevel,
    roles: [
      {
        title: "CEO(Chief Executive Officer)",
        details: [
          "스타트업의 최고 결정권자로 사업 전략 수립 및 의사 결정 담당",
          "자금 확보 및 관리, 대외 활동에서 기업 대표 역할 수행",
          "조직 문화 형성에 영향, 강한 리더십과 커뮤니케이션 능력 필요",
          "경영자, 전략가, 실무자 역할을 겸하며 기업 성장 책임",
        ],
      },
      {
        title: "COO(Chief Operating Officer)",
        details: [
          "기업 운영 총괄, 내부 시스템 구축 및 관리",
          "CEO가 설정한 방향을 실행으로 전환, 자원 배분 및 업무 과정 최적화",
          "팀 간 협업 조율 및 운영 체계 정비, 강한 실행력 및 문제 해결 능력 필요",
          "조직을 선도하며 생산성 극대화를 위한 전략 수립",
        ],
      },
    ],
  },
  {
    title: "Business Operations",
    img: gm,
    roles: [
      {
        title: "General Manager(총괄 관리자, GM)",
        details: [
          "C-Level과 함께 GOODWILL 운영 총괄, 전략 수립 및 재무 관리 담당",
          "목표 설정 및 스쿼드 구성, 시장 분석을 통한 비즈니스 방향 조정",
          "조직 효율성 증대, 고객 및 파트너 관계 유지, 수익성 극대화 전략 수립",
          "강한 리더십과 분석력을 바탕으로 의사결정 및 문제 해결 수행",
        ],
      },
      {
        title: "Business Operations Manager(OM)",
        details: [
          "조직 효율성 증대 및 운영 보조, 스쿼드의 PO 역할 수행",
          "비즈니스 프로세스 개선, 비용 절감 전략 및 데이터 기반 의사결정 지원",
          "부서 간 협업 조정, 내부 정책 및 절차 최적화",
          "예산 관리, KPI 모니터링, 기술 및 자동화 도입으로 생산성 향상",
        ],
      },
    ],
  },
  {
    title: "Finance & Marketing",
    img: gm,
    roles: [
      {
        title:"Equity Plan Administrator(주식 보상 계획 관리자)",
        details: [
          "Equity Plan Administrator은 단순한 자금 운영을 넘어 재무 전략, 주식 보상, 경제 데이터 분석 및 시장 예측을 통해 조직의 지속적인 성장과 안정성을 지원하는 중요한 역할을 수행.",
          "GOODWILL이 올바른 방향으로 나아갈 수 있도록 재무 리스크를 관리하고, 투자 및 성장 전략을 수립하며, 경제 및 시장 분석을 통해 기업의 의사결정을 지원.",
          "특히, Equity Plan Administrator는 기업의 주식 기반 보상 체계를 설계할 뿐만 아니라, 경제 동향과 금융 데이터 분석을 통해 GOODWILL의 장기적인 성장 전략을 구축하는 핵심적인 역할을 수행.",
        ]
      }
    ]
  }
  // 여기에 추가적으로 role_detail_box 항목들을 더 넣을 수 있음
];

const TeamCulture = () => {
  const [page, setPage] = useState(0);
  const itemsPerPage = 2;  // 한 페이지에 보일 항목 수
  const totalPages = Math.ceil(roles.length / itemsPerPage);

  const nextPage = () => {
    if (page < totalPages - 1) setPage(page + 1);
  };

  const prevPage = () => {
    if (page > 0) setPage(page - 1);
  };

  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', 
    });
  };

  return (
    <div>
      <div className="start_box">
        <img className="start_img" src={TeamCultrue} alt="" />
        <div className="start_box_text">
          GOODWILL을 만들어가는<br />주요 역할을 소개합니다.
        </div>
      </div>
      {/* <div className="content_wrapper">



        <div className="content_box">
          {roles.slice(page * itemsPerPage, (page + 1) * itemsPerPage).map((role, index) => (
            <div key={index} className="role_detail_box">
              <div className="title">{role.title}</div>
              <img src={role.img} alt={role.title} className="images" />
              <div className="content">
                {role.roles.map((r, i) => (
                  <div key={i}>
                    <div className="title_content_txt">{r.title}</div>
                    {r.details.map((detail, j) => (
                      <div key={j} className="content_content_txt">
                        &middot; {detail}
                      </div>
                    ))}
                  </div>
                ))}
                <div className="morebtn">더보기</div>
              </div>
            </div>
          ))}

        </div>

      </div>


      <div className="pagination-container">

        <button className="arrow left" onClick={prevPage} disabled={page === 0}>
          <FaChevronLeft />
        </button>
        <div className="pagination">
          {page + 1} / {totalPages}
        </div>
        <button className="arrow right" onClick={nextPage} disabled={page === totalPages - 1}>
          <FaChevronRight />
        </button>
      </div> */}

      <div className="contetnt_wrapper">

        <div className="dri_culture">
          <div className="dri_title">DRI 문화로 일합니다</div>
          <div className="dri_sub">GOODWILL은 '직급'의 개념이 없어요. Direct Responsible Individual.<br />일명 'DRI'라고 하는 업무의 담당자들이 자율적으로 프로젝트를 진행하고 책임지는 시스템을 운영해요.</div>
        </div>

        <div className="main_val">
          <div className="main_val_text">
            GOODWILL의 핵심 가치
          </div>
          <div className="main_val_boxes">
            <div className="main_val_box">
              <div className="val_box_num">01</div>
              <div className="val_text">Mission over Individual</div>
              <div className="val_content">개인의 목표보다 GOODWILL팀의 미션을 우선하라</div>
            </div>
            <div className="main_val_box">
              <div className="val_box_num">02</div>
              <div className="val_text">Aim Higher</div>
              <div className="val_content">더 높은 수준을 추구하라</div>
            </div>
            <div className="main_val_box">
              <div className="val_box_num">03</div>
              <div className="val_text">Focus on Impact</div>
              <div className="val_content">하면 좋을 10가지보다, 임팩트를 만드는데 집중하라</div>
            </div>
          </div>
          <div className="main_val_boxes">
            <div className="main_val_box">
              <div className="val_box_num">04</div>
              <div className="val_text">Question Every Assumption</div>
              <div className="val_content">모든 기본 가정에 근원적 물음을 제기하라</div>
            </div>
            <div className="main_val_box">
              <div className="val_box_num">05</div>
              <div className="val_text">Execution over Perfection</div>
              <div className="val_content">완벽해지려 하기보다 실행에 집중하라</div>
            </div>
            <div className="main_val_box">
              <div className="val_box_num">06</div>
              <div className="val_text">Learn Proactively</div>
              <div className="val_content">주도적으로 학습하라라</div>
            </div>
          </div>
          <div className="main_val_boxes">
            <div className="main_val_box">
              <div className="val_box_num">07</div>
              <div className="val_text">Move with Urgency</div>
              <div className="val_content">신속한 속도로 움직이라라</div>
            </div>
            <div className="main_val_box">
              <div className="val_box_num">08</div>
              <div className="val_text">Ask for Feedback</div>
              <div className="val_content">피드백을 자주 구하라</div>
            </div>
            <div className="main_val_box1">
              <div className="detail_value">GOODWILL 핵심 가치에 대한<br />자세한 내용은 여기서 볼 수 있어요</div>
              <div className="article_btn">
                아티클 보기
                <img src={rightarrow} className="article_pic" alt="" />
              </div>
            </div>
          </div>
        </div>

        <div className="work_struc">
          <div className="work_struc_text">GOODWILL의 업무 구조</div>
          <div className="struc_two_boxes">
            <div className="struc_detail_box">
              <div className="struc_title">스쿼드(Squad)</div>
              <img src={squad} alt="squad" className="struc_pic" />
              <div className="struc_main_content">
                &middot; 특정 문제 해결을 위한 자율 조직으로, 목표와 핵심 결과(OKR)를 설정해 운영됨.<br />
                &middot; PO, DA, 디자이너, 개발자로 구성되며, 문제에 따라 팀 구성이 유동적으로 변화할 수 있음. <br />
                &middot; 주기적인 회고(Retrospective)를 통해 협업 방식과 업무 프로세스를 지속적으로 개선.<br />
                &middot; 효과적인 문제 해결과 성과 창출을 목표로 하며, 자율적이고 집중적인 방식으로 운영됨.
              </div>
            </div>
            <div className="struc_detail_box">
              <div className="struc_title">TF(Task Force)</div>
              <img src={tf} alt="squad" className="struc_pic" />
              <div className="struc_main_content">
                &middot; 특정 문제 해결을 위한 자율 조직으로, 목표와 핵심 결과(OKR)를 설정해 운영됨.<br />
                &middot; PO, DA, 디자이너, 개발자로 구성되며, 문제에 따라 팀 구성이 유동적으로 변화할 수 있음. <br />
                &middot; 주기적인 회고(Retrospective)를 통해 협업 방식과 업무 프로세스를 지속적으로 개선.<br />
                &middot; 효과적인 문제 해결과 성과 창출을 목표로 하며, 자율적이고 집중적인 방식으로 운영됨.
              </div>
            </div>
          </div>
        </div>

        <div className="scrum">
          <div className="scrum_text">GOODWILL SCRUM</div>
          <div className="scrum_detail_boxes">
            <div className="scrum_detail_box">
                <div className="scrum_detail_title">
                  <div className="scrum_detail_title_text">WAM</div>
                  <img src={wam} alt="wam" className="scrum_img" />
                </div>
                <div className="scrum_detail_subtitle">Weekly Alignment Meeting</div>
                <div className="scrum_detail_content">주간 목표와 진행 상황을 공유하며, 우선순위를 조정하고 팀 간 정렬을 맞추는 회의.</div>
            </div>
            <div className="scrum_detail_box">
                <div className="scrum_detail_title">
                  <div className="scrum_detail_title_text">MAM</div>
                  <img src={mam} alt="wam" className="scrum_img" />
                </div>
                <div className="scrum_detail_subtitle">Monthly Alignment Meeting</div>
                <div className="scrum_detail_content">월간 성과를 리뷰하고 다음 달 목표를 설정하며, 장기적인 방향성과 전략을 점검하는 회의.</div>
            </div>
            <div className="scrum_detail_box">
                <div className="scrum_detail_title">
                  <div className="scrum_detail_title_text">회고 미팅</div>
                  <img src={cal} alt="wam" className="scrum_img" />
                </div>
                <div className="scrum_detail_subtitle">Retrospective</div>
                <div className="scrum_detail_content">프로젝트나 업무 과정을 되돌아보며 성과와 개선점을 논의하고, 협업 방식과 프로세스를 개선하는 회의.</div>
            </div>
            <div className="scrum_detail_box">
                <div className="scrum_detail_title">
                  <div className="scrum_detail_title_text">코드 리뷰</div>
                  <img src={review} alt="wam" className="scrum_img" />
                </div>
                <div className="scrum_detail_subtitle">Code Review</div>
                <div className="scrum_detail_content">개발자가 작성한 코드를 동료가 검토하여 버그, 성능, 가독성을 점검하고 코드 품질을 유지하는 과정.</div>
            </div>
          </div>
        </div>

        <div className="benefit">
          <div className="benefit_title">GOODWILL BENEFIT</div>
          <div className="benefit_boxes">
            <div className="benefit_box">
              <div className="benefit_box_numbering">1</div>
              <div className="benefit_box_title">KENTECH 입학 시 고교 학년별 1학점 인정제</div>
              <div className="benefit_box_content">GOODWILL Corp.은 KENTECH과의 고교-대학 연계 에너지공학 탐구 연계 동아리로써 KENTECH 학생들과 긴밀한 협업을 통해 프로젝트를 진행하고, 학년 별로 1학점을 부여하여 KENTECH 입학 시 특전 제공</div>
            </div>
            <div className="benefit_box">
              <div className="benefit_box_numbering">2</div>
              <div className="benefit_box_title">멘토링</div>
              <div className="benefit_box_content">GOODWILL CEO가 대학 석사 수준의 MBA, 컨설팅 등 ‘대학 석사 이상 ~ 현업 실무’ 수준의 경영학 교육 멘토링 제공</div>
            </div>
          </div>
          <div className="benefit_boxes">
            <div className="benefit_box">
              <div className="benefit_box_numbering">3</div>
              <div className="benefit_box_title">프로젝트 활동비</div>
              <div className="benefit_box_content">GOODWILL에서 진행하는 스쿼드, TF 결성 시 프로젝트 활동비 지급(한도 무제한)</div>
            </div>
            <div className="benefit_box">
              <div className="benefit_box_numbering">4</div>
              <div className="benefit_box_title">자기주도형 학습비</div>
              <div className="benefit_box_content">프로젝트 수행 관련 강의 수강 등의 자기주도형 학습비 지원</div>
            </div>
          </div>
          <div className="benefit_boxes">
            <div className="benefit_box">
              <div className="benefit_box_numbering">5</div>
              <div className="benefit_box_title">지속성장지원</div>
              <div className="benefit_box_content">인적 네트워킹, 기술교류 등 연계</div>
            </div>
            <div className="benefit_box">
              <div className="benefit_box_numbering">6</div>
              <div className="benefit_box_title">회의 및 개발공간</div>
              <div className="benefit_box_content">창업 중심 대학 창업 보육 센터 이용 지원</div>
            </div>
          </div>
          <div className="benefit_boxes">
            <div className="benefit_box">
              <div className="benefit_box_numbering">7</div>
              <div className="benefit_box_title">신규 입사자 웰컴키트 지급</div>
            </div>
            <div className="benefit_box1">
              <div className="benefit_box_numbering">6</div>
              <div className="benefit_box_title">회의 및 개발공간</div>
              <div className="benefit_box_content">창업 중심 대학 창업 보육 센터 이용 지원</div>
            </div>
          </div>
        </div>

        <div className="with">
          <div className="with_title">GOODWILL 함께하기</div>
          <div className="with_boxes">
            <div className="with_box">
              <img src={warn} className="with_pic" alt="" />
              <div className="with_box_title">삐용삐용</div>
              <div className="with_box_content">
                &middot; 자세한 내용을 입력해 주세요.자세한 내용을 입력해 주세요.자세한 내용을 입력해 주세요.자세한 내용을 입력해 주세요.
              </div>
              <div className="with_box_content1">
                &middot; 자세한 내용을 입력해 주세요.자세한 내용을 입력해 주세요.자세한 내용을 입력해 주세요.자세한 내용을 입력해 주세요.
              </div>
            </div>
            <div className="with_box">
              <img src={bamboo} alt="" className="with_pic" />
              <div className="with_box_title">삐용삐용</div>
              <div className="with_box_content">
                &middot; 자세한 내용을 입력해 주세요.자세한 내용을 입력해 주세요.자세한 내용을 입력해 주세요.자세한 내용을 입력해 주세요.
              </div>
              <div className="with_box_content1">
                &middot; 자세한 내용을 입력해 주세요.자세한 내용을 입력해 주세요.자세한 내용을 입력해 주세요.자세한 내용을 입력해 주세요.
              </div>
            </div>
            <div className="with_box">
              <img src={rail} alt="" className="with_pic" />
              <div className="with_box_title">삐용삐용</div>
              <div className="with_box_content">
                &middot; 자세한 내용을 입력해 주세요.자세한 내용을 입력해 주세요.자세한 내용을 입력해 주세요.자세한 내용을 입력해 주세요.
              </div>
              <div className="with_box_content1">
                &middot; 자세한 내용을 입력해 주세요.자세한 내용을 입력해 주세요.자세한 내용을 입력해 주세요.자세한 내용을 입력해 주세요.
              </div>
            </div>
          </div>
        </div>

      </div>

      {showButton && (
        <img src={uparrow} className="scroll-to-top" onClick={scrollToTop} />
      )}
    </div>

  );
};

export default TeamCulture;
