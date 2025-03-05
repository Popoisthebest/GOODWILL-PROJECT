import { useState } from "react";
import { motion } from "motion/react";
import {
    docAddButton,
    docAddContainer,
    docAddContainerButton,
    docButtonContainer,
} from "./DocAdd.style.ts";
import fileAddFormAdd from "../../../assets/fileUpload/plus-circle.svg";
import FileUploader from "../FileUpload/FileUploader.tsx";
import { useFileUpload } from "../../../hooks/useFileUpload.ts";

const DocAdd = () => {
    const contest = useFileUpload("contestFiles");
    const portfolio = useFileUpload("portfolioFiles");
    const [isContest, setContest] = useState(true); // 여기에 선택 UI 추가하면 됨

    return (
        <div>
            <div css={docButtonContainer}>
                {/* 대회 수상 내역 / 개인 포트폴리오 버튼 */}
                <motion.button
                    css={docAddButton}
                    onClick={() => setContest(true)}
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
                    onClick={() => setContest(false)}
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
                    ? contest.files.map((file) => (
                        <FileUploader
                            key={file.id}
                            id={file.id}
                            removeFileUpload={() => contest.removeFile(file.id)}
                            type="contest"
                            onUpdateFile={(id, data) => {
                                console.log(`📩 부모 컴포넌트 (DocAdd)에서 파일 업데이트 호출됨! 파일 ID: ${id}, 데이터:`, data);
                                contest.updateFileDetails(id, data);
                            }}
                            fileData={file} // ✅ 파일 데이터 전달
                        />
                    ))
                    : portfolio.files.map((file) => (
                        <FileUploader
                            key={file.id}
                            id={file.id}
                            removeFileUpload={() => portfolio.removeFile(file.id)}
                            type="portfolio"
                            onUpdateFile={(id, data) => {
                                console.log(`📩 부모 컴포넌트 (DocAdd)에서 파일 업데이트 호출됨! 파일 ID: ${id}, 데이터:`, data);
                                portfolio.updateFileDetails(id, data);
                            }}
                            fileData={file} // ✅ 파일 데이터 전달
                        />
                    ))}

                {/* 추가 버튼 */}
                <button
                    onClick={() => (isContest ? contest.addFile() : portfolio.addFile())}
                    css={docAddContainerButton}
                >
                    <img src={fileAddFormAdd} alt="fileAdd" />
                </button>
            </div>
        </div>
    );
};

export default DocAdd;
