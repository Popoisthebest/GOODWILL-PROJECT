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
}

const AgreeButton: FC<AgreeButtonProps> = ({ agreeType, agreeDescription }) => {
  return (
    <div css={agreeButtonDiv}>
      <div css={checkBoxDiv}>
        <input type="checkbox" css={checkBox} />
        <div css={{ width: "20px" }}></div>
        <div css={checkItemDiv}>
          <div
            css={
              agreeType == "선택"
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
  );
};

export default AgreeButton;
