/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import '../../styles/RoleDetail.css';

const RoleDetail = () => {
  return (
    <div className='wrapper'>
    <div className="role-detail">
      <div className="left-content">
        <div className="role-name">역할명</div>
        <div className="main-title">대제목</div>
        <div className="requirement">
          <div className="subtitle">굿윌은 이런 인재가 필요합니다.</div>
          <div className="description">
            &middot; 내용을 입력해 주세요.내용을 입력해 주세요.내용을 입력해 주세요.
          </div>
          <div className="description">
            &middot; 내용을 입력해 주세요.내용을 입력해 주세요.내용을 입력해 주세요.
          </div>
        </div>

        <div className="uxui-designer">
          <div className="subtitle">UXUI Designer는...</div>
          <div className="description">
            &middot; 내용을 입력해 주세요.내용을 입력해 주세요.내용을 입력해 주세요.
          </div>
          <div className="description">
            &middot; 내용을 입력해 주세요.내용을 입력해 주세요.내용을 입력해 주세요.
          </div>
        </div>

        <div className="sub-title-section">
          <div className="subtitle">소제목</div>
          <div className="description">
            &middot; 내용을 입력해 주세요.내용을 입력해 주세요.내용을 입력해 주세요.
          </div>
          <div className="description">
            &middot; 내용을 입력해 주세요.내용을 입력해 주세요.내용을 입력해 주세요.
          </div>
        </div>

      </div>
        

      <div className="right-card">
        <div className="card">
          <div className="card-content">
            <div className="card-item">
              <div className="card-label">직군</div>
              <div className="card-value">Design</div>
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
      <div className="step">지원서 접수</div>
      <img src="./icons/CaretRight.svg" alt="My Icon" className="caret-icon" />
      <div className="step">1차 코딩 테스트</div>
      <img src="./icons/CaretRight.svg" alt="My Icon" className="caret-icon" />
      <div className="step">2차 직무 인터뷰</div>
      <img src="./icons/CaretRight.svg" alt="My Icon" className="caret-icon" />
      <div className="step">3차 문화적합성 인터뷰</div>
      <img src="./icons/CaretRight.svg" alt="My Icon" className="caret-icon" />
      <div className="step">레퍼런스 체크 및 GOODWILL 입사 여부 재확인</div>
    </div>
  </div>
  </div>
  );
};

export default RoleDetail;
