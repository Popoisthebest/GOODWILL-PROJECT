import { useState, useEffect } from "react";
import { sendEmailVerification, isEmailVerified } from "../../../firebase/auth.ts"; // Firebase 인증 함수 가져오기
import { Button } from "./EmailAuthenticationButton.style.ts";

const EmailAuthenticationButton = ({ email }: { email: string }) => {
  const [isSent, setIsSent] = useState(false);
  const [isVerified, setIsVerified] = useState(false);

  // 🔥 컴포넌트가 마운트될 때 이메일 인증 상태 확인
  useEffect(() => {
    setIsVerified(isEmailVerified());
  }, []);

  const handleEmailVerification = async () => {
    if (!email) {
      alert("이메일을 입력해주세요.");
      return;
    }

    try {
      await sendEmailVerification(email);
      setIsSent(true);
    } catch (error) {
      console.error("이메일 인증 실패:", error);
    }
  };

  return (
      <button
          css={Button}
          type="button" // 🔥 submit이 아니라 button 동작으로 설정
          onClick={handleEmailVerification}
          disabled={isSent || isVerified} // 🔥 인증 완료 시 버튼 비활성화
      >
        {isVerified ? "이메일 인증 완료" : isSent ? "인증 이메일 발송됨" : "이메일 인증"}
      </button>
  );
};

export default EmailAuthenticationButton;
