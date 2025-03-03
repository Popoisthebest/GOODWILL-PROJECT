/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import '../../styles/RoleDetail.css';

const RoleDetail_FullStack = () => {
  return (
    <div className='wrapper'>
      <div className="role-detail">
        <div className="left-content">
          <div className="role-name">Full-Stack Engineer(FS)</div>
          <div className="main-title">Engineering & Data 직군</div>
          <div className="requirement">
            <div className="subtitle">합류하게 될 팀에 대해 알려드립니다</div>
            <div className="description">
              <div className="middot">&middot;</div>
              <div className="description_text">프론트엔드와 백엔드를 아우르는 기술 스택을 활용해 서비스 개발을 주도하는 팀입니다.</div>
            </div>
            <div className="description">
              <div className="middot">&middot;</div>
              <div className="description_text">Node.js 기반의 마이크로 프론트엔드 백오피스 플랫폼을 구축하고, 반복적인 업무를 자동화하여 서비스 운영의 효율성을 극대화합니다.</div>
            </div>
            <div className="description">
              <div className="middot">&middot;</div>
              <div className="description_text">MSA(Microservices Architecture) 환경에서 확장성 높은 시스템을 설계하고, 직관적인 UI를 구현하여 최적의 사용자 경험을 제공합니다.</div>
            </div>
            <div className="description">
              <div className="middot">&middot;</div>
              <div className="description_text">API 연동 최적화, DevOps 및 클라우드 인프라(AWS, GCP 등)까지 고려한 개발을 수행하며, 운영과 개발의 경계를 허물고 보다 유연한 개발 환경을 만들어갑니다.</div>
            </div>
          </div>

          <div className="uxui-designer">
            <div className="subtitle">합류하면 함께할 업무입니다.</div>
            <div className="description">
              <div className="middot">&middot;</div>
              <div className="description_text">백오피스 플랫폼 및 서비스 운영을 위한 웹 애플리케이션을 개발하고 최적화합니다.</div>
            </div>
            <div className="description">
              <div className="middot">&middot;</div>
              <div className="description_text">프론트엔드와 백엔드를 아우르는 개발을 통해, 일관된 사용자 경험을 제공하는 UI·UX를 구현합니다.</div>
            </div>

            <div className="description" >
              <div className="middot">&middot;</div>
              <div className="description_text">MSA 기반의 백엔드 시스템을 설계하고, API 연동을 최적화하여 성능을 개선합니다.</div>
            </div>
            <div className="description" >
              <div className="middot">&middot;</div>
              <div className="description_text">DevOps 및 클라우드 인프라(AWS, GCP 등)를 활용하여 안정적인 운영 환경을 구축합니다.</div>
            </div>
            <div className="description" >
              <div className="middot">&middot;</div>
              <div className="description_text">자동화된 배포, 모니터링 시스템을 도입해 운영의 효율성을 높이고, 반복적인 작업을 최소화합니다.</div>
            </div>
          </div>

          <div className="sub-title-section">
            <div className="subtitle">이런 분과 함께하길 희망합니다.</div>
            <div className="description">
              <div className="middot">&middot;</div>
              <div className="description_text">프론트엔드와 백엔드 개발을 모두 경험해본 분</div>
            </div>
            <div className="description">
              <div className="middot">&middot;</div>
              <div className="description_text">Node.js 및 최신 웹 프레임워크(React, Vue, Angular 등)에 익숙한 분</div>
            </div>
            <div className="description">
              <div className="middot">&middot;</div>
              <div className="description_text">클라우드 환경(AWS, GCP 등) 및 DevOps에 대한 이해도가 있는 분</div>
            </div>
            <div className="description">
              <div className="middot">&middot;</div>
              <div className="description_text">MSA 환경에서 확장성 높은 백엔드 시스템을 설계하고 운영한 경험이 있는 분</div>
            </div>
            <div className="description">
              <div className="middot">&middot;</div>
              <div className="description_text">자동화 및 효율적인 개발 환경 구축에 관심이 많고, 생산성을 높이는 솔루션을 고민하는 분</div>
            </div>
          </div>

          <div className="sub-title-section">
            <div className="subtitle">이력서는 이렇게 작성하시는 걸 추천합니다.</div>
            <div className="description">
              <div className="middot">&middot;</div>
              <div className="description_text">프론트엔드와 백엔드를 모두 경험한 프로젝트를 중심으로, 어떤 문제를 해결했고 어떤 기술을 활용했는지 구체적으로 작성하시걸 추천드립니다.</div>
            </div>
            <div className="description">
              <div className="middot">&middot;</div>
              <div className="description_text">MSA 기반의 시스템 설계 경험이 있다면, 어떤 구조를 설계했으며 어떤 결과를 얻었는지 강조해 주시는게 좋습니다.</div>
            </div>
            <div className="description">
              <div className="middot">&middot;</div>
              <div className="description_text">CI/CD, DevOps, 클라우드 인프라 운영 경험이 있다면 어떤 방식으로 최적화했는지 작성해 주시길 바랍니다.</div>
            </div>
            <div className="description">
              <div className="middot">&middot;</div>
              <div className="description_text">서비스 운영 자동화, 성능 최적화 등 생산성을 높이기 위해 수행한 작업이 있다면 구체적인 사례와 함께 설명해 주시길 바랍니다.</div>
            </div>
          </div>

          <div className="sub-title-section">
            <div className="subtitle">함께할 동료를 위한 한마디</div>
            <div className="description">
              <div className="middot">&middot;</div>
              <div className="description_text">“더 나은 서비스를 위해 백엔드와 프론트엔드를 넘나들며 고민하는 우리는 기술적인 완성도뿐만 아니라, 사용자 경험과 비즈니스 가치를 함께 고민해야 합니다. 이 과정을 통해 끊임없이 배우고 성장하며, 함께 최고의 팀을 만들어갈 동료들이 될 수 있을 것입니다!”</div>
            </div>
          </div>

        </div>


        <div className="right-card">
          <div className="card">
            <div className="card-content">
              <div className="card-item">
                <div className="card-label">직군</div>
                <div className="card-value">Full-Stack Engineer(FS)</div>
              </div>
              <div className="card-item">
                <div className="card-label" css={css`margin: 0 36px 0px 5px;`}>경력사항</div>
                <div className="card-value" >경력 1년 이상</div>
              </div>
              <div className="card-item">
                <div className="card-label" css={css`margin: 0 36px 0px 5px;`}>고용형태</div>
                <div className="card-value">정규직</div>
              </div>
              <div className="card-item-last">
                <div className="card-label" css={css`margin: 0 50px 0px 5px;`}>사무실</div>
                <div className="card-value">대전대신고등학교 <br /> 대전광역시 서구 오량1길 98</div>
              </div>
              <div className="card-image"></div>
            </div>
          </div>

          <div className="apply-button">지원하기</div>
        </div>

      </div>
      <div className="process_toworkwith">
        <div className="process-title">
          GOODWILL 합류 과정
          <img src="./icons/CaretRight.svg" alt="My Icon" className="caret-icon" />
        </div>
        <div className="process-steps">
          <div className="step">서류 접수</div>
          <img src="./icons/CaretRight.svg" alt="My Icon" className="caret-icon" />
          <div className="step">1차 코딩 테스트</div>
          <img src="./icons/CaretRight.svg" alt="My Icon" className="caret-icon" />
          <div className="step">2차 직무 인터뷰</div>
          <img src="./icons/CaretRight.svg" alt="My Icon" className="caret-icon" />
          <div className="step">3차 문화적합성 인터뷰</div>
        </div>
      </div>
    </div>
  );
};

export default RoleDetail_FullStack;
