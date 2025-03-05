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
    <>
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
        <div css={moreDetailButton}>보기</div>
      </div>
    </>
  );
};

export default AgreeButton;
