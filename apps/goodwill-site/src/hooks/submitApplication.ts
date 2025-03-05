import { db } from "../firebase/firebaseConfig";
import { setDoc, doc, runTransaction } from "firebase/firestore";
import {generateApplicationId} from "./generateApplicationId.ts";

export const submitApplication = async (applicationData: any, collectionName: string) => {
    try {
        if (!collectionName) {
            throw new Error("유효한 컬렉션 이름이 필요합니다.");
        }

        // ✅ 1️⃣ Firestore에서 지원서 개수(`order`) 증가
        const order = await runTransaction(db, async (transaction) => {
            const counterRef = doc(db, "counters", "applicationCount");
            const counterDoc = await transaction.get(counterRef);

            let newOrder = counterDoc.exists() ? counterDoc.data().count + 1 : 1;
            transaction.set(counterRef, { count: newOrder }, { merge: true });

            return newOrder;
        });

        // ✅ 2️⃣ 지원서 ID 생성
        const applicationId = generateApplicationId(applicationData.application_field, order);

        // ✅ 3️⃣ Firestore에 지원서 데이터 저장
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
