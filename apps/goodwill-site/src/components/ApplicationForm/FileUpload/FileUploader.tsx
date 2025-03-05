/** @jsxImportSource @emotion/react */
import { useState, useEffect } from "react";
import {
  fileDeleteButton,
  fileNameContainer,
  fileUploadNameInput,
  uploadContainer,
  fileNameDisplay,
  fileInput,
  uploadButton,
} from "./FileUploader.style.ts";
import fileDeleteIcon from "../../../assets/fileUpload/file-upload-delete.svg";
import { docAddContainerList } from "../DocAdd/DocAdd.style.ts";

interface FileUploadProps {
  id: number;
  removeFileUpload: () => void;
  type: "contest" | "portfolio" | "special";
  onUpdateFile: (
    id: number,
    data: Partial<{ title: string; file: File; fileName: string }>,
  ) => void;
  fileData?: {
    id: number;
    title: string;
    file?: File;
    fileName?: string;
  }; // ✅ 파일 정보 전달
}

const FileUploader: React.FC<FileUploadProps> = ({
  id,
  removeFileUpload,
  type,
  onUpdateFile,
  fileData,
}) => {
  const [title, setTitle] = useState(fileData?.title || "");
  const [fileName, setFileName] = useState(
    fileData?.fileName || "파일을 선택해주세요.",
  );

  useEffect(() => {
    if (fileData) {
      if (fileData.title !== undefined) setTitle(fileData.title);
      if (fileData.fileName) setFileName(fileData.fileName); // ✅ 쿠키에서 저장된 fileName을 불러오기
    }
  }, [fileData]);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const uploadedFile = event.target.files[0];

      console.log("📂 파일 선택됨!", uploadedFile);
      console.log("📌 부모로 전달 전 파일 데이터:", {
        file: uploadedFile,
        fileName: uploadedFile.name,
      });

      setFileName(uploadedFile.name);
      onUpdateFile(id, { file: uploadedFile, fileName: uploadedFile.name });

      console.log("🚀 부모 컴포넌트로 파일 데이터 전달 완료!");
    }
  };

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newTitle = event.target.value;
    setTitle(newTitle);
    onUpdateFile(id, { title: newTitle });
  };

  return (
    <div css={docAddContainerList}>
      <div css={{ display: "flex", alignItems: "space-between" }}>
        <div css={{ display: "flex", flexDirection: "column", width: "100%" }}>
          <div css={fileNameContainer}>
            <input
              placeholder={
                type === "contest"
                  ? "대회 이름을 입력해 주세요."
                  : type === "portfolio"
                    ? "프로젝트 이름을 입력해 주세요."
                    : "추천인의 이름을 입력해 주세요."
              }
              css={fileUploadNameInput}
              value={title}
              onChange={handleTitleChange}
            />
          </div>
          <div css={{ height: "10px" }}></div>
          <div css={uploadContainer}>
            <div css={fileNameDisplay}>{fileName}</div>
            <input
              type="file"
              id={`fileUpload-${id}`}
              css={fileInput}
              onChange={handleFileChange}
            />
            <label htmlFor={`fileUpload-${id}`} css={uploadButton}>
              파일 선택
            </label>
          </div>
        </div>
        <div css={{ width: "50px" }}></div>
        <button onClick={removeFileUpload} css={fileDeleteButton}>
          <img src={fileDeleteIcon} alt="fileDeleteIcon" />
        </button>
      </div>
    </div>
  );
};

export default FileUploader;
