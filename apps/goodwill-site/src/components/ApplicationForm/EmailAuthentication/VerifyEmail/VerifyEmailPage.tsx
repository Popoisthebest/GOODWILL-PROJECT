import { useEffect } from "react";
import { confirmEmailVerification } from "../../../../firebase/auth"; // 이메일 인증 확인 함수 가져오기

const VerifyEmailPage = () => {
    useEffect(() => {
        const verifyEmail = async () => {
            await confirmEmailVerification(); // 이메일 인증 실행
            sessionStorage.setItem("emailVerified", "true"); // 🔥 세션에 인증 완료 상태 저장
            alert("이메일 인증이 완료되었습니다!");
            window.close(); // 🔥 인증 창 닫기
        };

        verifyEmail();
    }, []);

    return (
        <div>
            <h2>이메일 인증 중...</h2>
            <p>잠시만 기다려 주세요. 이메일 인증이 완료되면 창이 자동으로 닫힙니다.</p>
        </div>
    );
};

export default VerifyEmailPage;
