import { useState, useEffect } from "react";
import { docAddContainer, docAddContainerButton } from "./DocAdd.style.ts";
import FileUpload from "./FileUpload/FileUpload.tsx";
import fileAddFormAdd from "../../assets/fileUpload/PlusCircle.svg";
import { BasicInformation } from "./ApplicationForm.style.ts";

const DocAdd = ({
  onFilesUpdate,
}: {
  onFilesUpdate: (
    files: { file: File; fileType: string; title: string }[],
  ) => void;
}) => {
  const [contestFiles, setContestFiles] = useState<
    { id: number; name: string }[]
  >([]);
  const [portfolioFiles, setPortfolioFiles] = useState<
    { id: number; name: string }[]
  >([]);
  const [uploadedFiles, setUploadedFiles] = useState<
    { file: File; fileType: string; title: string }[]
  >([]);

  // 🔥 uploadedFiles가 변경될 때마다 `onFilesUpdate` 실행
  useEffect(() => {
    onFilesUpdate(uploadedFiles);
  }, [uploadedFiles]);

  // 🔥 FileUpload에서 받은 파일 데이터를 추가
  const handleFileUpload = (fileData: {
    file: File;
    fileType: string;
    title: string;
  }) => {
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
      setContestFiles((prevFiles) =>
        prevFiles.filter((file) => file.id !== id),
      );
    } else {
      setPortfolioFiles((prevFiles) =>
        prevFiles.filter((file) => file.id !== id),
      );
    }

    // 🔥 uploadedFiles에서도 해당 파일 삭제
    setUploadedFiles((prevFiles) =>
      prevFiles.filter((file) => file.file.name !== id.toString()),
    );
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
              onFileUpload={handleFileUpload} // 🔥 파일 업로드 후 처리
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
              onFileUpload={handleFileUpload} // 🔥 파일 업로드 후 처리
            />
          ))}
        </div>

        <button
          onClick={() => addFileUpload(false)}
          css={docAddContainerButton}
        >
          <img src={fileAddFormAdd} alt="fileAdd" />
        </button>
      </div>
    </div>
  );
};

export default DocAdd;
