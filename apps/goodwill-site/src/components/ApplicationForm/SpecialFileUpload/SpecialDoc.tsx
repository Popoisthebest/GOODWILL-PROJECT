import FileUploader from "../FileUpload/FileUploader.tsx";
import { docAddContainer, docAddContainerButton } from "./SpecialDoc.style.ts";
import fileAddFormAdd from "../../../assets/fileUpload/plus-circle.svg";
import { useFileUpload } from "../../../hooks/useFileUpload.ts";

const SpecialDocAdd = () => {
  const { files, addFile, removeFile, updateFileDetails } = useFileUpload("specialFiles");

  return (
    <div>
      <div css={docAddContainer}>
        {files.map((file) => (
            <FileUploader
                key={file.id}
                id={file.id}
                removeFileUpload={() => removeFile(file.id)}
                type="special"
                onUpdateFile={updateFileDetails}
                fileData={file} // ✅ 파일 데이터 전달
            />
        ))}

        {/* 추가 버튼 */}
        <button onClick={() => addFile()} css={docAddContainerButton}>
          <img src={fileAddFormAdd} alt="fileAdd" />
        </button>
      </div>
    </div>
  );
};

export default SpecialDocAdd;
