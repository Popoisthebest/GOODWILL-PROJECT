/** @jsxImportSource @emotion/react */
import { useState, useEffect } from "react";
import Cookies from "js-cookie";
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
  isContest: boolean;
}

const FileUpload: React.FC<FileUploadProps> = ({ id, removeFileUpload }) => {
  const fileCookieKey = `file-${id}`;
  const titleCookieKey = `title-${id}`;

  // 지원자가 입력한 제목 (쿠키에서 불러옴)
  const [title, setTitle] = useState(() => Cookies.get(titleCookieKey) || "");
  // 업로드한 파일 이름 (쿠키에서 불러옴)
  const [file, setFile] = useState(() => Cookies.get(fileCookieKey) || "");

  // 쿠키에서 제목 및 파일 이름 불러오기
  useEffect(() => {
    const savedTitle = Cookies.get(titleCookieKey);
    const savedFile = Cookies.get(fileCookieKey);

    if (savedTitle) setTitle(savedTitle);
    if (savedFile) setFile(savedFile);
  }, [titleCookieKey, fileCookieKey]);

  // 제목 변경 (입력 시 쿠키에 저장)
  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newTitle = event.target.value;
    setTitle(newTitle);
    Cookies.set(titleCookieKey, newTitle, { expires: 1 }); // 1일 동안 유지
  };

  // 파일 선택 (파일명 쿠키에 저장)
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const uploadedFileName = event.target.files[0].name;
      setFile(uploadedFileName);
      Cookies.set(fileCookieKey, uploadedFileName, { expires: 1 }); // 1일 동안 유지
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
              value={title}
              onChange={handleTitleChange}
            />
          </div>

          <div css={{ height: "10px" }}></div>

          {/* 파일 업로드 */}
          <div css={uploadContainer}>
            <div css={fileNameDisplay}>{file || "파일을 선택해주세요."}</div>
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
