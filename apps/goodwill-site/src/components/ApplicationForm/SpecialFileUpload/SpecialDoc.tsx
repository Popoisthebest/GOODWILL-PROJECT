import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import {
  docAddContainer,
  docAddContainerButton,
} from "./SpecialDoc.style.ts";
import FileUpload from "../SpecialFileUpload/SpecialFileUpload.tsx";
import fileAddFormAdd from "../../../assets/fileUpload/PlusCircle.svg";

const COOKIE_EXPIRATION_DAYS = 1; // 쿠키 유효기간 1일

const SpecialDocAdd = () => {
  const [specialFiles, setSpecialFiles] = useState<
    { id: number; name: string }[]
  >([]);

  // 쿠키에서 파일 목록 불러오기
  useEffect(() => {
    const savedSpecialFiles = Cookies.get("specialFiles");

    if (savedSpecialFiles) setSpecialFiles(JSON.parse(savedSpecialFiles));
  }, []);

  // 새로운 FileUpload 추가
  const addFileUpload = () => {
    const newFile = { id: Date.now(), name: "" };

    const updatedFiles = [...specialFiles, newFile];
    setSpecialFiles(updatedFiles);
    Cookies.set("specialFiles", JSON.stringify(updatedFiles), {
      expires: COOKIE_EXPIRATION_DAYS,
    });
  };

  // 특정 FileUpload 삭제
  const removeFileUpload = (id: number) => {
    const updatedFiles = specialFiles.filter((file) => file.id !== id);
    setSpecialFiles(updatedFiles);
    Cookies.set("contestFiles", JSON.stringify(updatedFiles), {
      expires: COOKIE_EXPIRATION_DAYS,
    });
  };

  return (
    <div>
      <div css={docAddContainer}>
        {specialFiles.map((file) => (
          <FileUpload
            key={file.id}
            id={file.id}
            removeFileUpload={() => removeFileUpload(file.id)}
            isContest={true}
          />
        ))}

        {/* 추가 버튼 */}
        <button onClick={addFileUpload} css={docAddContainerButton}>
          <img src={fileAddFormAdd} alt="fileAdd" />
        </button>
      </div>
    </div>
  );
};

export default SpecialDocAdd;
