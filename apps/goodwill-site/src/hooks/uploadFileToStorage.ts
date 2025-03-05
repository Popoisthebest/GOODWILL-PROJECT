import { storage } from "../firebase/firebaseConfig";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

export const uploadFileToStorage = async (
    userId: string,
    file: File,
    fileType: string,
    fileTitle?: string // 파일 제목을 별도로 받을 수 있도록 수정
): Promise<string> => {
    try {
        if (!file || Object.keys(file).length === 0) {
            throw new Error(`올바른 파일이 제공되지 않았습니다. 파일 데이터: ${JSON.stringify(file)}`);
        }

        // ✅ 파일 이름 가져오기 (file.name이 없으면 fileTitle 사용)
        const fileName = file.name || fileTitle || `파일_${Date.now()}.pdf`;

        console.log(`업로드할 파일 확인:`, file, `파일 이름: ${fileName}`);

        // ✅ 업로드할 파일 경로
        const filePath = `applications/${userId}/${fileType}/${fileName}`;
        const fileRef = ref(storage, filePath);

        // ✅ Firebase Storage에 파일 업로드
        await uploadBytes(fileRef, file);

        // ✅ 다운로드 가능한 URL 반환
        return await getDownloadURL(fileRef);
    } catch (error) {
        console.error("파일 업로드 실패:", error);
        throw error;
    }
};



