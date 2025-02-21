/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const containerStyle = css`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f3f4f6;
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
  color: #4b5563;
  margin-bottom: 1rem;
  line-height: 1.6;
  width: 100%;
  margin-bottom: 0.2rem;
`;

const buttonStyle = css`
  margin-top: 2rem;
  width: 100%;
  background-color: #1e40af;
  color: white;
  padding: 1rem;
  border-radius: 0.5rem;
  transition: background-color 0.3s ease;
  max-width: 700px;
  &:hover {
    background-color: #2563eb;
  }
`;

const RejectionNotice = () => {
  return (
    <div css={containerStyle}>
      <div css={cardStyle}>
        <h1 css={headingStyle}>
          불합격을 <br /> 안내드립니다.
        </h1>
        <p css={textStyle}>안녕하세요 홍길동님.</p>
        <p css={textStyle}>
          GOODWILL Corp. 2025 Design 직군에 지원해주셔서 감사합니다.
        </p>
        <p css={textStyle}>
          모든 전형 과정에서 보여주신 노력과 열정에 진심으로 감사드리며,
          안타깝게도 이번에는 합격 소식을 전해드리지 못하게 되었습니다.
        </p>
        <p css={textStyle}>
          앞으로 더 좋은 기회가 있기를 바라며, GOODWILL Corp.와 함께 할 수 있는
          날을 기대하겠습니다.
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
