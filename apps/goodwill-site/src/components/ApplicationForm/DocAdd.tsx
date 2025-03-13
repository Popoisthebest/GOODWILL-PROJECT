import { useState, useEffect } from "react";
import {
  docAddContainer,
  docAddContainerButton,
} from "./DocAdd.style.ts";
import FileUpload from "./FileUpload/FileUpload.tsx";
import fileAddFormAdd from "../../assets/fileUpload/PlusCircle.svg";
import { BasicInformation } from "./ApplicationForm.style.ts";

const DocAdd = ({
                  isSubmitting,
                  applicationId,
                  onFilesUpdate,
                }: {
  isSubmitting: boolean;
  applicationId: string;
  onFilesUpdate: (
      files: { title: string; fileUrl: string; fileType: string }[],
  ) => void;
}) => {
  const [contestFiles, setContestFiles] = useState<{ id: number; name: string }[]>([]);
  const [portfolioFiles, setPortfolioFiles] = useState<{ id: number; name: string }[]>([]);
  const [uploadedFiles, setUploadedFiles] = useState<{ title: string; fileUrl: string; fileType: string }[]>([]);

  // 🔥 uploadedFiles가 변경될 때마다 부모 컴포넌트로 데이터 전달
  useEffect(() => {
    onFilesUpdate(uploadedFiles);
  }, [uploadedFiles, onFilesUpdate]);

  // 🔥 FileUpload에서 업로드된 파일 정보를 업데이트
  const handleFileUpload = (fileData: { title: string; fileUrl: string; fileType: string }) => {
    setUploadedFiles((prevFiles) => [...prevFiles, fileData]);
  };

  // 새로운 FileUpload 추가
  const addFileUpload = (contest: boolean) => {
    const newFile = { id: Date.now(), name: "" };
    if (contest) {
      setContestFiles((prevFiles) => [...prevFiles, newFile]);
    } else {
      setPortfolioFiles((prevFiles) => [...prevFiles, newFile]);
    }
  };

  // 특정 FileUpload 삭제
  const removeFileUpload = (id: number, isContestType: boolean) => {
    if (isContestType) {
      setContestFiles((prevFiles) => prevFiles.filter((file) => file.id !== id));
    } else {
      setPortfolioFiles((prevFiles) => prevFiles.filter((file) => file.id !== id));
    }
  };

  return (
      <div>
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
                    onFileUpload={handleFileUpload}
                />
            ))}
          </div>

          <button onClick={() => addFileUpload(true)} css={docAddContainerButton}>
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
                    onFileUpload={handleFileUpload}
                />
            ))}
          </div>

          <button onClick={() => addFileUpload(false)} css={docAddContainerButton}>
            <img src={fileAddFormAdd} alt="fileAdd" />
          </button>
        </div>
      </div>
  );
};

export default DocAdd;
