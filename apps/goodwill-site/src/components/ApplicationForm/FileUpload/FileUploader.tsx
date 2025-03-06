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
  type: string;
  title?: string;
}

const FileUploader: React.FC<FileUploadProps> = ({type}, props) => {
  const setTitle = (title: string) => {
    props.getTitle(title);
  }

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
              onChange={setTitle}
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
