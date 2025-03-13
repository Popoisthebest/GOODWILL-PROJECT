import { useState, useEffect } from "react";
import { docAddContainer, docAddContainerButton } from "./SpecialDoc.style.ts";
import FileUpload from "../SpecialFileUpload/SpecialFileUpload.tsx";
import fileAddFormAdd from "../../../assets/fileUpload/PlusCircle.svg";

const SpecialDocAdd = ({
  onFilesUpdate,
}: {
  onFilesUpdate: (
    files: { file: File; fileType: string; title: string }[],
  ) => void;
}) => {
  const [specialFiles, setSpecialFiles] = useState<
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
  const addFileUpload = () => {
    const newFile = { id: Date.now(), name: "" };

    setSpecialFiles((prevFiles) => [...prevFiles, newFile]);
  };

  // 특정 FileUpload 삭제
  const removeFileUpload = (id: number) => {
    setSpecialFiles((prevFiles) => prevFiles.filter((file) => file.id !== id));

    // 🔥 uploadedFiles에서도 해당 파일 삭제
    setUploadedFiles((prevFiles) =>
      prevFiles.filter((file) => file.file.name !== id.toString()),
    );
  };

  return (
    <div>
      <div css={docAddContainer}>
        {specialFiles.map((file) => (
          <FileUpload
            key={file.id}
            id={file.id}
            removeFileUpload={() => removeFileUpload(file.id)}
            onFileUpload={handleFileUpload} // 🔥 파일 업로드 후 처리
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
