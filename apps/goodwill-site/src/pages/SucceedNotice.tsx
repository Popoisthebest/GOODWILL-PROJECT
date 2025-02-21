/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const containerStyle = css`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  padding: 1.5;
  margin-top: -2rem;
`;

const cardStyle = css`
  padding: 10rem;
  max-width: 38rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: left;
`;

const headingStyle = css`
  font-size: 4rem;
  font-weight: bold;
  color: #000000;
  margin-bottom: 1.5rem;
  text-align: left;
  width: 100%;
`;

const textStyle = css`
  margin-bottom: 1rem;
  line-height: 1.6;
  width: 100%;
  margin-bottom: 0.2rem;
`;

const buttonStyle = css`
  margin-top: 5rem;
  width: 100%;
  background-color: rgba(5, 48, 140, 1);
  color: white;
  padding: 1rem;
  border-radius: 0.5rem;
  transition: background-color 0.3s ease;
  max-width: 700px;
  border-width: 1px;
  border-color: rgba(5, 48, 140, 1);
  &:hover {
    background-color: white;
    color: rgba(5, 48, 140, 1);
    border-color: rgba(5, 48, 140, 1);
    border-width: 1px;
  }
`;

const RejectionNotice = () => {
  return (
    <div css={containerStyle}>
      <div css={cardStyle}>
        <h1 css={headingStyle}>
          합격을 <br /> 축하드립니다.
        </h1>
        <p css={textStyle}>안녕하세요 홍길동님.</p>
        <p css={textStyle}>
          GOODWILL Corp. 2025 Design 직군에 지원해주셔서 감사합니다.
        </p>
        <p css={textStyle}>
          GOODWILL Corp. 2025 Deisgn 직군에 <br /> 최종 합격하셨습니다
        </p>
        <p css={textStyle}>
          모든 전형 과정에서 보여주신 노력과 열정에 진심으로 감사드리며, <br />
          GOODWILL Corp.와 함께 무한한 가능성을 꽃피우시길 바랍니다. 'GOODWILL{" "}
          <br />
          Corp.의 동료'로서 만나뵙게 될 첫 만남을 기대합니다. :
        </p>
        <p css={textStyle}>감사합니다.</p>
        <button css={buttonStyle} onClick={() => (window.location.href = "/")}>
          메인으로 돌아가기
        </button>
      </div>
    </div>
  );
};

export default RejectionNotice;
