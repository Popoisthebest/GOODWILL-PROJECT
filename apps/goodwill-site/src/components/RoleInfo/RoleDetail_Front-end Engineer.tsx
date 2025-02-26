/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import '../../styles/RoleDetail.css';

const RoleDetail = () => {
  return (
    <div className='wrapper'>
    <div className="role-detail">
      <div className="left-content">
        <div className="role-name">Front-end Engineer</div>
        <div className="main-title">Engineering & Data 직군</div>
        <div className="requirement">
          <div className="subtitle">굿윌은 이런 인재가 필요합니다.</div>
          <div className="description">
            &middot; React, Vue, Angular 등 SPA 프레임워크 사용에 능숙하신 분이면 좋아요.
          </div>
          <div className="description">
            &middot; 단순히 주어진 개발을 해내는 것보다, 주도적으로 문제를 발견하고 분석해 솔루션을 제안할 수 있는 분이 필요해요.
          </div>
          <div className="description">
            &middot; TypeScript, Flow를 이용한 JavaScript 정적 타입 분석을 경험해보신 분이면 좋아요.
          </div>
        </div>

        <div className="uxui-designer">
          <div className="subtitle">Front-end Engineer는...</div>
          <div className="description">
            &middot; GOODWILL 출시한 제품이 시장에서 할 수 있는 역할을 찾아 성숙한 서비스로 성장시키는 역할을 담당해요.
          </div>
          <div className="description">
            &middot; GOODWILL은 새롭게 여러 프로젝트에 지원하면서 서로 다른 웹사이트를 개발해보면서 경험을 쌓아요.
          </div>
          <div className="description">
            &middot; 단 1분 만에 프론트엔드 웹 서비스가 빌드되고 배포되는 환경처럼, 최고의 사용감을 위해 프론트엔드 개발 환경을 개선하고 있어요.
          </div>
        </div>

        <div className="sub-title-section">
          <div className="subtitle">이력서는 이렇게 작성하시는 걸 추천해요</div>
          <div className="description">
            &middot; 그동안의 경험을 단순 나열하는 것이 아닌, 경험 속에서 임팩트 및 러닝 포인트를 기술해주세요.
          </div>
          <div className="description">
            &middot; 고객의 보이스를 기반으로 빠르게 제품의 완성도를 높여가기 때문에, 주어진 문제를 스스로 해결해보려고 시도하는지 보고 있어요.
          </div>
          <div className="description">
            &middot; 서버 사이드 렌더링(SSR) 및 모바일 앱 내 웹앱 개발 경험이 있으면 기술해주세요.
          </div>
          <div className="description">
            &middot; 기존 소스 코드를 새로운 코드 베이스로 점진적으로 이관한 경험이 있으면 기술해주세요.
          </div>
        </div>

      </div>
        

      <div className="right-card">
        <div className="card">
          <div className="card-content">
            <div className="card-item">
              <div className="card-label">직군</div>
              <div className="card-value">Front-end Engineer</div>
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

export default RoleDetail;
