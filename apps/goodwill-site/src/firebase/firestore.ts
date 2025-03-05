import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { app } from "./firebaseConfig";

const db = getFirestore(app);
const storage = getStorage(app);

/**
 * 🔥 Firestore에 지원서 저장
 */


export { db, storage };
