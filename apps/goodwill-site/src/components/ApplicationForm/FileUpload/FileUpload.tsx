/** @jsxImportSource @emotion/react */
import { useState } from "react";
import {
  fileDeleteButton,
  fileNameContainer,
  fileUploadNameInput,
  uploadContainer,
  fileNameDisplay,
  fileInput,
  uploadButton,
} from "./FileUpload.style.ts";
import fileDeleteIcon from "../../../assets/fileUpload/fileUploadDelete.svg";

const FileUpload: React.FC = () => {
  const [fileName, setFileName] = useState("");

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setFileName(event.target.files[0].name);
    } else {
      setFileName("");
    }
  };

  return (
    <div css={{ display: "flex", alignItems: "space-between" }}>
      <div css={{ display: "flex", flexDirection: "column", width: "100%" }}>
        <div css={fileNameContainer}>
          <input
            placeholder="대회 이름을 입력해 주세요."
            css={fileUploadNameInput}
          />
        </div>
        <div css={{ height: "10px" }}></div>
        <div css={uploadContainer}>
          <div css={fileNameDisplay}>{fileName || "파일을 선택해주세요."}</div>
          <input
            type="file"
            id="fileUpload"
            css={fileInput}
            onChange={handleFileChange}
          />
          <label htmlFor="fileUpload" css={uploadButton}>
            파일 선택
          </label>
        </div>
      </div>
      <div css={{ width: "50px" }}></div>
      <button
        onClick={() => {
          alert("pressed");
        }}
        css={fileDeleteButton}
      >
        <img src={fileDeleteIcon} alt="fileDeleteIcon" />
      </button>
    </div>
  );
};

export default FileUpload;
