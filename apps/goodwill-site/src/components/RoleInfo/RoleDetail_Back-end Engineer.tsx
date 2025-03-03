/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import '../../styles/RoleDetail.css';

const RoleDetail_BackEnd = () => {
  return (
    <div className='wrapper'>
      <div className="role-detail">
        <div className="left-content">
          <div className="role-name">Back-End Engineer(BE)</div>
          <div className="main-title">Engineering & Data 직군</div>
          <div className="requirement">
            <div className="subtitle">합류하게 될 팀에 대해 알려드립니다</div>
            <div className="description">
              <div className="middot">&middot;</div>
              <div className="description_text">대규모 트래픽을 안정적으로 처리할 수 있는 플랫폼 서비스를 개발하고 운영하는 팀입니다.</div>
            </div>
            <div className="description">
              <div className="middot">&middot;</div>
              <div className="description_text">API Gateway, 대용량 메시지 발송 시스템, FDS(Fraud Detection System), APM(Application Performance Management), 모니터링 및 알림 시스템 등 서비스의 핵심 인프라를 설계하고 관리합니다.</div>
            </div>
            <div className="description">
              <div className="middot">&middot;</div>
              <div className="description_text">서비스 전반의 안정성과 확장성을 고려하여 플랫폼 라이브러리를 제공하고, 개발 생산성을 높이는 환경을 구축합니다.</div>
            </div>
            <div className="description">
              <div className="middot">&middot;</div>
              <div className="description_text">장애 대응 및 성능 최적화에 대한 지속적인 개선을 통해 신뢰성 높은 서비스 운영을 목표로 합니다.</div>
            </div>
          </div>

          <div className="uxui-designer">
            <div className="subtitle">합류하면 함께할 업무입니다.</div>
            <div className="description">
              <div className="middot">&middot;</div>
              <div className="description_text">대규모 트래픽을 처리할 수 있는 안정적인 백엔드 시스템을 설계하고 운영합니다.</div>
            </div>
            <div className="description">
              <div className="middot">&middot;</div>
              <div className="description_text">서비스 공통 기능(Metric, Logging, Message Queue, Distributed Lock, Memory Cache 등)을 플랫폼 라이브러리 형태로 제공하여 개발 효율성을 극대화합니다.</div>
            </div>

            <div className="description" >
              <div className="middot">&middot;</div>
              <div className="description_text">ELK 스택, Haproxy 등의 기술을 활용해 실시간 모니터링 및 성능 최적화를 수행합니다.</div>
            </div>
            <div className="description" >
              <div className="middot">&middot;</div>
              <div className="description_text">이중화 및 분산 시스템 설계를 통해 장애에 강한 아키텍처를 구축하고, 신속한 장애 대응 및 예방을 위한 프로세스를 마련합니다.</div>
            </div>
            <div className="description" >
              <div className="middot">&middot;</div>
              <div className="description_text">서비스 및 인프라 운영을 자동화하여 지속 가능한 개발 및 운영 환경을 만듭니다.</div>
            </div>
          </div>

          <div className="sub-title-section">
            <div className="subtitle">이런 분과 함께하길 희망합니다.</div>
            <div className="description">
              <div className="middot">&middot;</div>
              <div className="description_text">분산 시스템, 마이크로서비스 아키텍처(MSA)에 대한 이해와 경험이 있는 분</div>
            </div>
            <div className="description">
              <div className="middot">&middot;</div>
              <div className="description_text">ELK, Haproxy, Kafka, Redis, RabbitMQ 등 다양한 백엔드 기술을 활용해 본 경험이 있는 분</div>
            </div>
            <div className="description">
              <div className="middot">&middot;</div>
              <div className="description_text">SSR(Server-Side Rendering) 환경 최적화 및 운영 경험이 있는 분</div>
            </div>
            <div className="description">
              <div className="middot">&middot;</div>
              <div className="description_text">효율적인 데이터 처리와 성능 최적화를 고민하고 적용해본 경험이 있는 분</div>
            </div>
            <div className="description">
              <div className="middot">&middot;</div>
              <div className="description_text">장애 대응 및 시스템 안정성 확보에 대한 경험과 문제 해결 능력을 갖춘 분</div>
            </div>
          </div>

          <div className="sub-title-section">
            <div className="subtitle">이력서는 이렇게 작성하시는 걸 추천합니다.</div>
            <div className="description">
              <div className="middot">&middot;</div>
              <div className="description_text">단순한 기술 나열이 아닌, 실제 개발 및 운영 과정에서 해결한 문제와 그 과정에서 얻은 인사이트를 중심으로 작성하는 것이 좋습니다.</div>
            </div>
            <div className="description">
              <div className="middot">&middot;</div>
              <div className="description_text">대용량 트래픽 처리, 분산 시스템 설계, 성능 최적화 등의 경험이 있다면 구체적으로 설명해 주시길 바랍니다.</div>
            </div>
            <div className="description">
              <div className="middot">&middot;</div>
              <div className="description_text">서비스의 안정성을 높이기 위해 수행한 이중화, 장애 대응, 자동화 등의 경험을 강조해 주시길 바랍니다.</div>
            </div>
            <div className="description">
              <div className="middot">&middot;</div>
              <div className="description_text">사용한 기술 스택과 이를 선택한 이유, 그리고 그로 인해 어떤 성과를 냈는지 구체적으로 기술하시길 바랍니다.</div>
            </div>
          </div>

          <div className="sub-title-section">
            <div className="subtitle">함께할 동료를 위한 한마디</div>
            <div className="description">
              <div className="middot">&middot;</div>
              <div className="description_text">“보이지 않는 곳에서부터 서비스의 안정과 확장이 시작됩니다. 효율적인 설계와 탄탄한 코드를 통해, 사용자에게 끊임없이 믿음을 주는 ‘든든한 토대’를 함께 만들어 가길 바랍니다. 문제 해결을 위한 적극적인 소통과 협업이 곧 더 나은 서비스가 될 것이라 믿습니다!”</div>
            </div>
          </div>

        </div>


        <div className="right-card">
          <div className="card">
            <div className="card-content">
              <div className="card-item">
                <div className="card-label">직군</div>
                <div className="card-value">Back-End Engineer(BE)</div>
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

export default RoleDetail_BackEnd;
