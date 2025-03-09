import { storage } from "../firebase/firebaseConfig.ts";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

// ✅ 특정 시간이 지나도록 기다리는 함수 (비동기 대기)
const waitForApplicationId = async (getApplicationId: () => string, timeout = 5000): Promise<string> => {
  const start = Date.now();
  while (true) {
    const appId = getApplicationId();
    if (appId) return appId; // applicationId가 존재하면 반환

    if (Date.now() - start > timeout) {
      throw new Error("⏳ applicationId가 설정되지 않아 파일 업로드를 중단합니다.");
    }
    await new Promise((resolve) => setTimeout(resolve, 100)); // 100ms 단위로 확인
  }
};

const uploadFileToStorage = async (file: File, path: string): Promise<string> => {
  if (!file) return "";
  const fileRef = ref(storage, path);
  await uploadBytes(fileRef, file);
  return await getDownloadURL(fileRef);
};

export const fileSend = async (
    file: File,
    fileType: string,
    getApplicationId: () => string // ✅ applicationId를 직접 전달받지 않고, "가져오는 함수"를 받음
) => {
  console.log("fileSend 호출됨");

  try {
    // ✅ applicationId가 설정될 때까지 기다림
    const applicationId = await waitForApplicationId(getApplicationId);
    console.log("✅ applicationId 확인됨:", applicationId);

    // ✅ applicationId가 준비된 후 업로드 진행
    const fileUrl = await uploadFileToStorage(
        file,
        `/${applicationId}/${fileType}/${file.name}`
    );

    return { fileUrl };
  } catch (error) {
    console.error("🚨 파일 업로드 실패:", error);
    return { fileUrl: "" };
  }
};
