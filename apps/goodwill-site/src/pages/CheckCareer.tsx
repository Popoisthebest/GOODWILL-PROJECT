/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const containerStyle = css`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 16px;
  margin-top: -10rem;
`;

const cardStyle = css`
  padding: 32px;
  border-radius: 5px;
  max-width: 600px;
  width: 100%;
  text-align: left;
`;

const titleStyle = css`
  font-size: 48px;
  font-style: normal;
  font-weight: 600;
  line-height: 140%;
`;

const inputContainerStyle = css`
  position: relative;
  width: 100%;
  margin-top: 45px;
  margin-bottom: 1rem;
`;

const textstyle = css`
  font-family: Pretendard;
  font-size: 36px;
  font-style: normal;
  font-weight: 600;
  line-height: 140%;
  display: flex;
  align-items: center;
`;

const labelStyle = css`
  position: absolute;
  top: 50%;
  left: 8px;
  transform: translateY(-50%);
  color: #9d9d9d;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 120% */
  letter-spacing: -0.06px;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  margin-top: -7px;
  margin-left: -9px;
`;

const inputStyle = css`
  width: 100%;
  padding: 12px 8px;
  border: none;
  border-bottom: 1px solid #ccc;
  font-size: 16px;
  outline: none;
  background: transparent;
  transition:
    border-color 0.2s,
    border-bottom-width 0.2s;

  &:focus + label,
  &:not(:placeholder-shown) + label {
    top: 4px;
    font-size: 12px;
    color: #1e40af;
  }
`;

const titleWithRequiredStyle = css`
  font-family: Pretendard;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 140%;
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 3.5rem;
`;

const requiredStyle = css`
  color: #f02f30;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 300;
  line-height: 140%;
`;

const buttonStyle = css`
  position: fixed;
  display: flex;
  width: 668px;
  height: 64px;
  padding: 18px 20px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  border-radius: 8px;
  background: #05308c;
  cursor: pointer;
  transition: background 0.2s;
  border: none;
  margin-top: 120px;
  color: #fff;
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
  &:hover {
    background: #172b85;
  }
`;

const errorStyle = css`
  color: red;
  font-size: 14px;
  height: 18px;
  margin-bottom: 12px;
  visibility: hidden;
`;

const errorVisibleStyle = css`
  visibility: visible;
`;

const ExamResultChecker: React.FC = () => {
  const [name, setName] = useState("");
  const [examNumber, setExamNumber] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate(); // useNavigate를 컴포넌트 최상단에 배치

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !examNumber) {
      setError("모든 필드를 입력해주세요.");
    } else {
      setError("");
      alert(`이름: ${name}, 수험번호: ${examNumber}`);
      navigate("/application-form"); // 이벤트 핸들러에서 navigate 사용
    }
  };

  return (
    <div css={containerStyle}>
      <div css={cardStyle}>
        <h1 css={titleStyle}>
          GOODWILL Corp. <br /> 신규입사자 합격 발표 안내
        </h1>

        <p css={textstyle}>지원자 정보</p>

        <h1 css={titleWithRequiredStyle}>
          기본 정보 <span css={requiredStyle}>필수</span>
        </h1>

        <form onSubmit={handleSubmit}>
          <div css={inputContainerStyle}>
            <input
              type="text"
              id="name"
              placeholder=" "
              value={name}
              onChange={(e) => setName(e.target.value)}
              css={inputStyle}
            />
            <label htmlFor="name" css={labelStyle}>
              이름
            </label>
          </div>

          <div css={inputContainerStyle}>
            <input
              type="text"
              id="examNumber"
              placeholder=" "
              value={examNumber}
              onChange={(e) => setExamNumber(e.target.value)}
              css={inputStyle}
            />
            <label htmlFor="examNumber" css={labelStyle}>
              수험번호
            </label>
          </div>

          <p css={[errorStyle, error ? errorVisibleStyle : null]}>
            {error || "⠀"} {/* 공백문자로 높이 유지 */}
          </p>

          <button type="submit" css={buttonStyle}>
            조회하기
          </button>
        </form>
      </div>
    </div>
  );
};

export default ExamResultChecker;
