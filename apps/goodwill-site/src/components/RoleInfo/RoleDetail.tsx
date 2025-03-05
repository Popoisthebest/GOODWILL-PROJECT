/** @jsxImportSource @emotion/react */
import React from "react";
import "./RoleDetail.css";
import { RoleDetailProps } from "./RoleDetail.types.ts";
import DefaultLayout from "../../layouts/DefaultLayout.tsx";
import { useNavigate } from "react-router-dom";

const RoleDetail = ({
  roleName,
  mainTitle,
  teamIntroduction,
  responsibilities,
  idealCandidate,
  resumeTips,
  teamMessage,
  processSteps,
  jobDetails, // 추가된 직군 정보
}: RoleDetailProps) => {
  const navigate = useNavigate();

  return (
    <DefaultLayout>
      <div className="wrapper">
        <div className="role-detail">
          <div className="left-content">
            <div className="role-name">{roleName}</div>
            <div className="main-title">{mainTitle}</div>

            <div className="requirement">
              <div className="subtitle">합류하게 될 팀에 대해 알려드립니다</div>
              {teamIntroduction.map((text, index) => (
                <div key={index} className="description">
                  <div className="middot">&middot;</div>
                  <div className="description_text">{text}</div>
                </div>
              ))}
            </div>

            <div className="uxui-designer">
              <div className="subtitle">합류하면 함께할 업무입니다.</div>
              {responsibilities.map((text, index) => (
                <div key={index} className="description">
                  <div className="middot">&middot;</div>
                  <div className="description_text">{text}</div>
                </div>
              ))}
            </div>

            <div className="sub-title-section">
              <div className="subtitle">이런 분과 함께하길 희망합니다.</div>
              {idealCandidate.map((text, index) => (
                <div key={index} className="description">
                  <div className="middot">&middot;</div>
                  <div className="description_text">{text}</div>
                </div>
              ))}
            </div>

            <div className="sub-title-section">
              <div className="subtitle">
                이력서는 이렇게 작성하시는 걸 추천합니다.
              </div>
              {resumeTips.map((text, index) => (
                <div key={index} className="description">
                  <div className="middot">&middot;</div>
                  <div className="description_text">{text}</div>
                </div>
              ))}
            </div>

            <div className="sub-title-section">
              <div className="subtitle">함께할 동료를 위한 한마디</div>
              <div className="description">
                <div className="middot">&middot;</div>
                <div className="description_text">{teamMessage}</div>
              </div>
            </div>
          </div>

          {/* 지원하기 버튼 위 컨테이너 */}
          <div className="right-card">
            <div className="card">
              <div className="card-content">
                {jobDetails.map((detail, index) => (
                  <div
                    key={index}
                    className={`card-item${index === jobDetails.length - 1 ? "-last" : ""}`}
                  >
                    <div className="card-label">{detail.label}</div>
                    <div className="card-value">{detail.value}</div>
                  </div>
                ))}
                <div className="card-image"></div>
              </div>
            </div>
            <button
              onClick={() =>
                navigate("/write-application", {
                  state: { roleName },
                })
              }
              className="apply-button"
            >
              지원하기
            </button>
          </div>
        </div>

        {/* 합류 과정 */}
        <div className="process_toworkwith">
          <div className="process-title">
            GOODWILL 합류 과정
            <img
              src="./icons/CaretRight.svg"
              alt="Caret Icon"
              className="caret-icon"
            />
          </div>
          <div className="process-steps">
            {processSteps.map((step, index) => (
              <React.Fragment key={index}>
                <div className="step">{step}</div>
                {index < processSteps.length - 1 && (
                  <img
                    src="./icons/CaretRight.svg"
                    alt="Caret Icon"
                    className="caret-icon"
                  />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default RoleDetail;
