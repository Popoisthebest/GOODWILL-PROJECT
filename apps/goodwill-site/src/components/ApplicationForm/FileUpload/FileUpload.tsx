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
} from "./FileUpload.style.ts";
import fileDeleteIcon from "../../../assets/fileUpload/fileUploadDelete.svg";
import { docAddContainerList } from "../DocAdd.style.ts";
import { fileSend } from "../../../hooks/fileSend.ts";

interface FileUploadProps {
  id: number;
  removeFileUpload: () => void;
  isContest: boolean;
  isSubmitting: boolean;
  applicationId: string;
}

const FileUpload: React.FC<FileUploadProps> = ({
  id,
  removeFileUpload,
  isContest,
  isSubmitting,
  applicationId,
}) => {
  // 지원자 파일 저장
  const [file, setFile] = useState<File>(); // 초기값은 null

  console.log(applicationId);

  // isSubmitting 값이 변경될 때 업로드 실행
  useEffect(() => {
    const uploadFile = async () => {
      if (isSubmitting) {
        const result = await fileSend(
          file!,
          isContest ? "contest" : "portfolio",
          () => applicationId,
        );
        console.log("파일 업로드", result);
      }
    };

    uploadFile(); // 비동기 함수 실행
  }, [isSubmitting]); // isSubmitting이 변경될 때 실행

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const uploadedFile = event.target.files[0]; // 첫 번째 파일 객체 가져오기
      setFile(uploadedFile); // 파일 자체를 상태로 저장
    }
  };

  return (
    <div css={docAddContainerList}>
      <div css={{ display: "flex", alignItems: "space-between" }}>
        <div css={{ display: "flex", flexDirection: "column", width: "100%" }}>
          <div css={fileNameContainer}>
            {/* 지원자가 직접 입력하는 제목 (쿠키에 저장됨) */}
            <input
              placeholder={
                isContest
                  ? "대회 이름을 입력해 주세요."
                  : "프로젝트 이름을 입력해 주세요."
              }
              css={fileUploadNameInput}
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
