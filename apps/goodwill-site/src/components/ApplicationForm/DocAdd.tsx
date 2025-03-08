import { motion } from "motion/react";
import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import {
  docAddButton,
  docAddContainer,
  docAddContainerButton,
  docButtonContainer,
} from "./DocAdd.style.ts";
import FileUpload from "./FileUpload/FileUpload.tsx";
import fileAddFormAdd from "../../assets/fileUpload/PlusCircle.svg";

const COOKIE_EXPIRATION_DAYS = 1; // 쿠키 유효기간 1일

const DocAdd = ({
  isSubmitting,
  applicationId,
}: {
  isSubmitting: boolean;
  applicationId: string;
}) => {
  const [isContest, setContest] = useState(true);
  const [contestFiles, setContestFiles] = useState<
    { id: number; name: string }[]
  >([]);
  const [portfolioFiles, setPortfolioFiles] = useState<
    { id: number; name: string }[]
  >([]);

  // isSubmitting 값이 변경될 때 업로드 실행
  useEffect(() => {
    if (isSubmitting) {
      console.log("나 독인데 전달 받았다.");
    }
  }, [isSubmitting]); // isSubmitting이 변경될 때 실행

  // 쿠키에서 파일 목록 불러오기
  useEffect(() => {
    const savedContestFiles = Cookies.get("contestFiles");
    const savedPortfolioFiles = Cookies.get("portfolioFiles");

    if (savedContestFiles) setContestFiles(JSON.parse(savedContestFiles));
    if (savedPortfolioFiles) setPortfolioFiles(JSON.parse(savedPortfolioFiles));
  }, []);

  // 새로운 FileUpload 추가
  const addFileUpload = () => {
    const newFile = { id: Date.now(), name: "" };
    if (isContest) {
      const updatedFiles = [...contestFiles, newFile];
      setContestFiles(updatedFiles);
      Cookies.set("contestFiles", JSON.stringify(updatedFiles), {
        expires: COOKIE_EXPIRATION_DAYS,
      });
    } else {
      const updatedFiles = [...portfolioFiles, newFile];
      setPortfolioFiles(updatedFiles);
      Cookies.set("portfolioFiles", JSON.stringify(updatedFiles), {
        expires: COOKIE_EXPIRATION_DAYS,
      });
    }
  };

  // 특정 FileUpload 삭제
  const removeFileUpload = (id: number, isContestType: boolean) => {
    if (isContestType) {
      const updatedFiles = contestFiles.filter((file) => file.id !== id);
      setContestFiles(updatedFiles);
      Cookies.set("contestFiles", JSON.stringify(updatedFiles), {
        expires: COOKIE_EXPIRATION_DAYS,
      });
    } else {
      const updatedFiles = portfolioFiles.filter((file) => file.id !== id);
      setPortfolioFiles(updatedFiles);
      Cookies.set("portfolioFiles", JSON.stringify(updatedFiles), {
        expires: COOKIE_EXPIRATION_DAYS,
      });
    }
  };

  return (
    <div>
      <div css={docButtonContainer}>
        {/* 대회 수상 내역 / 개인 포트폴리오 버튼 */}
        <motion.button
          css={docAddButton}
          onTap={() => setContest(true)}
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
          onTap={() => setContest(false)}
          animate={
            isContest
              ? { backgroundColor: "rgba(0, 0, 0, 0)", color: "#000000" }
              : { backgroundColor: "#262626", color: "#ffffff" }
          }
        >
          개인 포트폴리오
        </motion.button>
      </div>

      <div css={{ height: "25px" }}></div>

      <div css={docAddContainer}>
        {/* 대회 수상 내역 파일 업로드 리스트 */}
        {isContest
          ? contestFiles.map((file) => (
              <FileUpload
                key={file.id}
                id={file.id}
                removeFileUpload={() => removeFileUpload(file.id, true)}
                isContest={true}
                isSubmitting={isSubmitting}
                applicationId={applicationId}
              />
            ))
          : portfolioFiles.map((file) => (
              <FileUpload
                key={file.id}
                id={file.id}
                removeFileUpload={() => removeFileUpload(file.id, false)}
                isContest={false}
                isSubmitting={isSubmitting}
                applicationId={applicationId}
              />
            ))}

        {/* 추가 버튼 */}
        <button onClick={addFileUpload} css={docAddContainerButton}>
          <img src={fileAddFormAdd} alt="fileAdd" />
        </button>
      </div>
    </div>
  );
};

export default DocAdd;
