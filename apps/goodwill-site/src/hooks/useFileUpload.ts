import { useState, useEffect } from "react";
import Cookies from "js-cookie";

const COOKIE_EXPIRATION_DAYS = 1;

export const useFileUpload = (cookieKey: string) => {
  const [files, setFiles] = useState<
      { id: number; name: string; title: string; file?: File; fileName?: string }[]
  >([]);

  // ✅ 쿠키에서 불러올 때 `file.fileName`을 사용하여 `File` 객체로 변환
  useEffect(() => {
    const savedFiles = Cookies.get(cookieKey);
    if (savedFiles) {
      console.log(`쿠키에서 불러온 데이터: `, savedFiles);
      try {
        const parsedFiles = JSON.parse(savedFiles);
        if (Array.isArray(parsedFiles)) {
          const convertedFiles = parsedFiles.map((file: any) => ({
            ...file,
            file: file.fileName ? new File([], file.fileName, { type: "application/octet-stream" }) : undefined, // ✅ File 객체 변환
          }));

          if (JSON.stringify(convertedFiles) !== JSON.stringify(files)) {
            setFiles(convertedFiles);
            console.log("파싱된 파일 목록:", convertedFiles);
          }
        } else {
          console.error("쿠키 데이터가 배열이 아닙니다.", parsedFiles);
        }
      } catch (error) {
        console.error("쿠키 데이터 파싱 오류:", error);
      }
    }
  }, [cookieKey]); // ✅ files를 의존성에서 제거하여 무한 루프 방지

  // ✅ 쿠키에 저장할 때 `file.file`을 제외하고 저장 (직렬화 불가)
  const updateCookies = (
      updatedFiles: { id: number; name: string; title: string; file?: File; fileName?: string }[],
  ) => {
    const filesToStore = updatedFiles.map(({ file, ...rest }) => ({
      ...rest,
      fileName: file ? file.name : rest.fileName, // ✅ `fileName`을 별도로 저장
    }));

    setFiles(updatedFiles);
    setTimeout(() => {
      Cookies.set(cookieKey, JSON.stringify(filesToStore), {
        expires: COOKIE_EXPIRATION_DAYS,
      });
    }, 100);
  };

  const addFile = () => {
    const newFile = { id: Date.now(), name: "", title: "", file: undefined, fileName: "" };
    const updatedFiles = [...files, newFile];
    updateCookies(updatedFiles);
  };

  const removeFile = (id: number) => {
    const updatedFiles = files.filter((file) => file.id !== id);
    updateCookies(updatedFiles);
  };

  // ✅ `file.file`이 `undefined`가 되지 않도록 유지
  const updateFileDetails = (
      id: number,
      updatedData: Partial<{ title: string; file: File }>
  ) => {
    const updatedFiles = files.map((file) =>
        file.id === id
            ? { ...file, ...updatedData, fileName: updatedData.file ? updatedData.file.name : file.fileName }
            : file
    );
    updateCookies(updatedFiles);
  };

  return { files, addFile, removeFile, updateFileDetails };
};
