import { motion } from "motion/react";
import { useState } from "react";
import {
  docAddButton,
  docAddContainer,
  docAddContainerButton,
  docAddContainerList,
  docContainer,
} from "./DocAdd.style.ts";
import FileUpload from "./FileUpload/FileUpload.tsx";
import fileAddFormAdd from "../../assets/fileUpload/PlusCircle.svg";

const DocAdd = () => {
  const [isContest, setContest] = useState(true);

  return (
    <div css={docContainer}>
      <motion.button
        css={docAddButton}
        onTap={() => {
          setContest(true);
        }}
        animate={
          isContest
            ? { backgroundColor: "#262626", color: "#ffffff" }
            : { backgroundColor: "rgba(0, 0, 0, 0)", color: "#000000" }
        }
      >
        대회 수상 내역
      </motion.button>
      <motion.button
        css={docAddButton}
        onTap={() => {
          setContest(false);
        }}
        animate={
          isContest
            ? { backgroundColor: "rgba(0, 0, 0, 0)", color: "#000000" }
            : { backgroundColor: "#262626", color: "#ffffff" }
        }
      >
        개인 포트폴리오
      </motion.button>
      <div css={{ height: "25px" }}></div>
      <div css={docAddContainer}>
        <div css={docAddContainerList}>
          <FileUpload />
        </div>
        <div css={{ height: "24px" }}></div>
        <button css={docAddContainerButton}>
          <img src={fileAddFormAdd} alt="fileAdd" />
        </button>
      </div>
    </div>
  );
};

export default DocAdd;
