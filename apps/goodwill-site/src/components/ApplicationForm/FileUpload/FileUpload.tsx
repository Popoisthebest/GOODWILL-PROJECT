/** @jsxImportSource @emotion/react */
import { useState, useEffect } from "react";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "../../../firebase/firebaseConfig.ts";
import Cookies from "js-cookie";
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

interface FileUploadProps {
  id: number;
  removeFileUpload: () => void;
  isContest: boolean;
  applicationId: string;
}

const FileUpload: React.FC<FileUploadProps> = ({
  id,
  removeFileUpload,
  isContest,
  applicationId,
}) => {
  const fileCookieKey = `file-${id}`;
  const titleCookieKey = `title-${id}`;
  const [title, setTitle] = useState(() => Cookies.get(titleCookieKey) || "");
  const [file, setFile] = useState(() => Cookies.get(fileCookieKey) || "");
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    const savedTitle = Cookies.get(titleCookieKey);
    const savedFile = Cookies.get(fileCookieKey);
    if (savedTitle) setTitle(savedTitle);
    if (savedFile) setFile(savedFile);
  }, [titleCookieKey, fileCookieKey]);

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newTitle = event.target.value;
    setTitle(newTitle);
    Cookies.set(titleCookieKey, newTitle, { expires: 1 });
  };

  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    if (event.target.files && event.target.files.length > 0) {
      setUploading(true);
      const uploadedFile = event.target.files[0];
      const storageRef = ref(
        storage,
        `applications/${applicationId}/${isContest ? "awards" : "projects"}/${uploadedFile.name}`,
      );
      await uploadBytes(storageRef, uploadedFile);
      const fileUrl = await getDownloadURL(storageRef);
      setFile(fileUrl);
      Cookies.set(fileCookieKey, fileUrl, { expires: 1 });
      setUploading(false);
    }
  };

  return (
    <div css={docAddContainerList}>
      <div css={{ display: "flex", alignItems: "space-between" }}>
        <div css={{ display: "flex", flexDirection: "column", width: "100%" }}>
          <div css={fileNameContainer}>
            <input
              placeholder={
                isContest
                  ? "대회 이름을 입력해 주세요."
                  : "프로젝트 이름을 입력해 주세요."
              }
              css={fileUploadNameInput}
              value={title}
              onChange={handleTitleChange}
            />
          </div>
          <div css={{ height: "10px" }}></div>
          <div css={uploadContainer}>
            <div css={fileNameDisplay}>
              {uploading ? "업로드 중..." : file || "파일을 선택해주세요."}
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
        <button onClick={removeFileUpload} css={fileDeleteButton}>
          <img src={fileDeleteIcon} alt="fileDeleteIcon" />
        </button>
      </div>
    </div>
  );
};

export default FileUpload;
