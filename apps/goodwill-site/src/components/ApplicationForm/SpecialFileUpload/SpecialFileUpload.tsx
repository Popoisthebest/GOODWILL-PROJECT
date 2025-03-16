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
} from "./SpecialFileUpload.style.ts";
import fileDeleteIcon from "../../../assets/fileUpload/fileUploadDelete.svg";
import { docAddContainerList } from "../DocAdd.style.ts";

interface FileUploadProps {
  id: number;
  removeFileUpload: () => void;
  onFileUpload: (fileData: {
    file: File;
    fileType: string;
    title: string;
  }) => void;
}

const FileUpload: React.FC<FileUploadProps> = ({
  id,
  removeFileUpload,
  onFileUpload,
}) => {
  // 업로드한 파일
  const [file, setFile] = useState<File | null>(null); // 초기값은 null
  const [fileTitle, setFileTitle] = useState(""); // 🔥 지원자가 입력한 제목 저장

  // 🔥 파일과 제목이 입력되면 즉시 `SpecialDocAdd.tsx`로 데이터 전달
  useEffect(() => {
    if (file && fileTitle.trim()) {
      onFileUpload({
        file,
        fileType: "special",
        title: fileTitle,
      });
    }
  }, [file]);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setFile(event.target.files[0]);
    }
  };

  return (
    <div css={docAddContainerList}>
      <div css={{ display: "flex", alignItems: "space-between" }}>
        <div css={{ display: "flex", flexDirection: "column", width: "100%" }}>
          <div css={fileNameContainer}>
            {/* 지원자가 직접 입력하는 제목 (쿠키에 저장됨) */}
            <input
              placeholder="추천인 이름을 입력해 주세요."
              css={fileUploadNameInput}
              value={fileTitle}
              onChange={(e) => setFileTitle(e.target.value)}
            />
          </div>

          <div css={{ height: "10px" }}></div>

          {/* 파일 업로드 */}
          <div css={uploadContainer}>
            <div css={fileNameDisplay}>
              {file?.name || "파일을 선택해주세요."}
            </div>
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

        {/* 삭제 버튼 */}
        <button onClick={removeFileUpload} css={fileDeleteButton}>
          <img src={fileDeleteIcon} alt="fileDeleteIcon" />
        </button>
      </div>
    </div>
  );
};

export default FileUpload;
