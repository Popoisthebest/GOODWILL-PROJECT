import { FC } from "react";
import {
  agreeButtonDiv,
  checkBox,
  checkBoxDiv,
  checkItemDescription,
  checkItemDiv,
  checkItemTitleOption,
  checkItemTitleRequired,
  moreDetailButton,
} from "./AgreeButton.style.ts";

interface AgreeButtonProps {
  agreeType: string;
  agreeDescription: string;
  isChecked: boolean;
  onToggle: () => void;
}

const AgreeButton: FC<AgreeButtonProps> = ({
  agreeType,
  agreeDescription,
  isChecked,
  onToggle,
}) => {
  return (
    <div css={agreeButtonDiv}>
      <div css={checkBoxDiv}>
        <input
          type="checkbox"
          css={checkBox}
          checked={isChecked}
          onChange={onToggle}
        />
        <div css={{ width: "20px" }}></div>
        <div css={checkItemDiv}>
          <div
            css={
              agreeType === "선택"
                ? checkItemTitleOption
                : checkItemTitleRequired
            }
          >
            {agreeType}
          </div>
          <div css={{ width: "20px" }}></div>
          <div css={checkItemDescription}>{agreeDescription}</div>
        </div>
      </div>
      {agreeType === "전체 동의" ? (
        <></>
      ) : (
          <button
              onClick={() => {
                  const isLocal = window.location.hostname === "localhost";
                  const url = isLocal
                      ? "http://localhost:5173/agree"
                      : "https://www.wearegoodwill.kro.kr/agree";
                  window.open(url);
              }}
              css={moreDetailButton}
          >
              보기
          </button>
      )}
    </div>
  );
};

export default AgreeButton;
