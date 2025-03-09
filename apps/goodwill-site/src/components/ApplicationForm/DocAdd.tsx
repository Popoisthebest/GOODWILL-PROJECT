// import { motion } from "motion/react";
import { useState } from "react";
import {
  // docAddButton,
  docAddContainer,
  docAddContainerButton,
  // docButtonContainer,
} from "./DocAdd.style.ts";
import FileUpload from "./FileUpload/FileUpload.tsx";
import fileAddFormAdd from "../../assets/fileUpload/PlusCircle.svg";
import { BasicInformation } from "./ApplicationForm.style.ts";

const DocAdd = ({
  isSubmitting,
  applicationId,
}: {
  isSubmitting: boolean;
  applicationId: string;
}) => {
  // const [isContest, setContest] = useState(true);
  const [contestFiles, setContestFiles] = useState<
    { id: number; name: string }[]
  >([]);
  const [portfolioFiles, setPortfolioFiles] = useState<
    { id: number; name: string }[]
  >([]);

  // 새로운 FileUpload 추가
  const addFileUpload = (contest: boolean) => {
    const newFile = { id: Date.now(), name: "" };
    if (contest) {
      const updatedFiles = [...contestFiles, newFile];
      setContestFiles(updatedFiles);
    } else {
      const updatedFiles = [...portfolioFiles, newFile];
      setPortfolioFiles(updatedFiles);
    }
  };

  // 특정 FileUpload 삭제
  const removeFileUpload = (id: number, isContestType: boolean) => {
    if (isContestType) {
      const updatedFiles = contestFiles.filter((file) => file.id !== id);
      setContestFiles(updatedFiles);
    } else {
      const updatedFiles = portfolioFiles.filter((file) => file.id !== id);
      setPortfolioFiles(updatedFiles);
    }
  };

  return (
    <div>
      {/*<div css={docButtonContainer}>*/}
      {/*  /!* 대회 수상 내역 / 개인 포트폴리오 버튼 *!/*/}
      {/*  <motion.button*/}
      {/*    css={docAddButton}*/}
      {/*    onTap={() => setContest(true)}*/}
      {/*    animate={*/}
      {/*      isContest*/}
      {/*        ? { backgroundColor: "#262626", color: "#ffffff" }*/}
      {/*        : { backgroundColor: "rgba(0, 0, 0, 0)", color: "#000000" }*/}
      {/*    }*/}
      {/*  >*/}
      {/*    대회 수상 내역*/}
      {/*  </motion.button>*/}
      {/*  <motion.button*/}
      {/*    css={docAddButton}*/}
      {/*    onTap={() => setContest(false)}*/}
      {/*    animate={*/}
      {/*      isContest*/}
      {/*        ? { backgroundColor: "rgba(0, 0, 0, 0)", color: "#000000" }*/}
      {/*        : { backgroundColor: "#262626", color: "#ffffff" }*/}
      {/*    }*/}
      {/*  >*/}
      {/*    개인 포트폴리오*/}
      {/*  </motion.button>*/}
      {/*</div>*/}

      {/*<div css={{ height: "25px" }}></div>*/}

      <div css={BasicInformation}>대회 수상 내역</div>
      <div css={docAddContainer}>
        <div>
          {contestFiles.map((file) => (
            <FileUpload
              key={file.id}
              id={file.id}
              removeFileUpload={() => removeFileUpload(file.id, true)}
              isContest={true}
              isSubmitting={isSubmitting}
              applicationId={applicationId}
            />
          ))}
        </div>

        {/* 추가 버튼 */}
        <button
          onClick={() => {
            addFileUpload(true);
          }}
          css={docAddContainerButton}
        >
          <img src={fileAddFormAdd} alt="fileAdd" />
        </button>
      </div>

      <div css={{ height: "24px" }}></div>

      <div css={BasicInformation}>개인 포트폴리오</div>
      <div css={docAddContainer}>
        <div>
          {portfolioFiles.map((file) => (
            <FileUpload
              key={file.id}
              id={file.id}
              removeFileUpload={() => removeFileUpload(file.id, false)}
              isContest={false}
              isSubmitting={isSubmitting}
              applicationId={applicationId}
            />
          ))}
        </div>

        {/* 추가 버튼 */}
        <button
          onClick={() => {
            addFileUpload(false);
          }}
          css={docAddContainerButton}
        >
          <img src={fileAddFormAdd} alt="fileAdd" />
        </button>
      </div>
    </div>
  );
};

export default DocAdd;
