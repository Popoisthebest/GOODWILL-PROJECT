import {
    getAuth,
    sendSignInLinkToEmail,
    isSignInWithEmailLink,
    signInWithEmailLink
} from "firebase/auth";
import { app } from "./firebaseConfig";

const auth = getAuth(app);

/**
 * 이메일 인증 링크 전송 (지원자가 입력한 이메일 확인용)
 */
export const sendEmailVerification = async (email: string) => {
    const actionCodeSettings = {
        url: `${window.location.origin}/verify-email`, // 인증 후 리디렉트될 페이지
        handleCodeInApp: true,
    };

    try {
        await sendSignInLinkToEmail(auth, email, actionCodeSettings);
        window.localStorage.setItem("emailForVerification", email);
        alert("인증 이메일을 보냈습니다. 메일을 확인하세요!");
    } catch (error) {
        console.error("이메일 전송 오류:", error);
    }
};

/**
 * 이메일 링크를 통해 지원자가 본인 이메일을 인증했는지 확인
 */
export const confirmEmailVerification = async () => {
    if (isSignInWithEmailLink(auth, window.location.href)) {
        try {
            const storedEmail = window.localStorage.getItem("emailForVerification");
            if (!storedEmail) throw new Error("저장된 이메일이 없습니다.");

            await signInWithEmailLink(auth, storedEmail, window.location.href);
            window.localStorage.setItem("emailVerified", "true");
            window.localStorage.removeItem("emailForVerification");

            alert("이메일 인증이 완료되었습니다!");
            console.log("✅ 이메일 인증 완료:", storedEmail);
        } catch (error) {
            console.error("이메일 인증 실패:", error);
        }
    }
};

/**
 * 이메일이 인증되었는지 확인하는 함수
 */
export const isEmailVerified = () => {
    return sessionStorage.getItem("emailVerified") === "true"; // 🔥 sessionStorage로 변경
};


export default auth;
