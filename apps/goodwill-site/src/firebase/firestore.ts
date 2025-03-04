import { getFirestore, setDoc, doc, runTransaction } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { app } from "./firebaseConfig";
import { generateApplicationId } from "../hooks/generateApplicationId";

const db = getFirestore(app);
const storage = getStorage(app);

/**
 * 🔥 파일을 Firebase Storage에 업로드하고 URL 반환
 */
export const uploadFileToStorage = async (
  file: File,
  path: string,
): Promise<string> => {
  if (!file) return "";
  const fileRef = ref(storage, path);
  await uploadBytes(fileRef, file);
  return await getDownloadURL(fileRef);
};

/**
 * 🔥 Firestore에 지원서 저장
 */
export const submitApplication = async (applicationData: any) => {
  try {
    const order = await runTransaction(db, async (transaction) => {
      const counterRef = doc(db, "counters", "applicationCount");
      const counterDoc = await transaction.get(counterRef);
      let newOrder = counterDoc.exists() ? counterDoc.data().count + 1 : 1;
      transaction.set(counterRef, { count: newOrder }, { merge: true });
      return newOrder;
    });

    const applicationId = generateApplicationId(applicationData.jobType, order);
    const collectionName =
      applicationData.specialApplication?.type || "일반전형";

    const docRef = doc(db, collectionName, applicationId);
    await setDoc(docRef, {
      ...applicationData,
      applicationId,
      timestamp: new Date().toISOString(),
    });

    alert(`지원서 제출 완료! 지원서 ID: ${applicationId}`);
    return applicationId;
  } catch (error) {
    console.error("지원서 제출 오류:", error);
    alert("지원서 제출에 실패했습니다.");
  }
};

export { db, storage };
