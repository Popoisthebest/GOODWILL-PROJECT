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
  onFileUpload: (fileData: { title: string; fileUrl: string; fileType: string }) => void; // 🔥 부모에게 업로드된 파일 정보 전달
}

const FileUpload: React.FC<FileUploadProps> = ({
                                                 id,
                                                 removeFileUpload,
                                                 isContest,
                                                 isSubmitting,
                                                 applicationId,
                                                 onFileUpload, // ✅ 업로드된 파일 데이터를 부모로 전달하는 함수
                                               }) => {
  // 지원자 파일 저장
  const [file, setFile] = useState<File>();
  const [fileTitle, setFileTitle] = useState(""); // 🔥 지원자가 입력한 제목 저장

  useEffect(() => {
    const uploadFile = async () => {
      if (!applicationId || !file || !fileTitle.trim()) {
        console.warn(
            "🚨 applicationId, file 또는 fileTitle이 설정되지 않음. 업로드 중단.",
        );
        return;
      }

      const result = await fileSend(
          file,
          isContest ? "contest" : "portfolio",
          () => applicationId,
          fileTitle, // 🔥 지원자가 입력한 제목 전달
      );

      if (result.fileUrl) {
        onFileUpload({
          title: fileTitle,
          fileUrl: result.fileUrl,
          fileType: isContest ? "contest" : "portfolio",
        }); // 🔥 업로드된 파일 정보를 부모 컴포넌트로 전달
      }
    };

    if (isSubmitting && applicationId) {
      uploadFile();
    }
  }, [isSubmitting, applicationId]);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const uploadedFile = event.target.files[0];
      setFile(uploadedFile);
    }
  };

  return (
      <div css={docAddContainerList}>
        <div css={{ display: "flex", alignItems: "space-between" }}>
          <div css={{ display: "flex", flexDirection: "column", width: "100%" }}>
            <div css={fileNameContainer}>
              {/* 🔥 지원자가 입력한 제목을 상태로 저장 */}
              <input
                  placeholder={
                    isContest
                        ? "대회 이름을 입력해 주세요."
                        : "프로젝트 이름을 입력해 주세요."
                  }
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
