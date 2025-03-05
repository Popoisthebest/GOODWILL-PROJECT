import { db } from "../firebase/firebaseConfig";
import { collection, getDocs } from "firebase/firestore";

export const getApplicationCount = async (collectionName: string) => {
    try {
        const querySnapshot = await getDocs(collection(db, collectionName));
        return querySnapshot.size + 1; // 🔹 기존 지원서 개수 + 1
    } catch (error) {
        console.error("지원서 개수 조회 실패:", error);
        throw error;
    }
};
