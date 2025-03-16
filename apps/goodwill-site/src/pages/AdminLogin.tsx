import { useForm, SubmitHandler } from "react-hook-form";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  login,
  loginButton,
  loginDiv,
  loginFormDiv,
  loginFormInputDiv,
  loginForms,
  loginFormTitle1,
  loginFormTitle2,
  loginFormTitleDiv,
  loginImg,
  loginImgDiv,
  loginInput,
  loginInputWrapper,
  errorMessageStyle,
} from "../components/AdminLogin/AdminLogin.style.ts";
import EmailIcon from "../assets/login/material-symbols_mail.svg";
import PasswordIcon from "../assets/login/uis_lock.svg";
import LoginImg from "../assets/login/5758e96d9cfebcc75409aae095c29017.jpg";

interface FormValue {
  id: string;
  password: string;
}

// 사전 등록된 관리자 계정
const adminUsers = [
  { id: "admin", password: "admin" },
];

const AdminLogin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValue>();
  const navigate = useNavigate();
  const [idError, setIdError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  // 로그인 검증
  const onSubmitHandler: SubmitHandler<FormValue> = (data) => {
    setIdError("");
    setPasswordError("");

    // 필수 입력 검증이 있으면 서버 검증을 하지 않음
    if (errors.id || errors.password) return;

    const user = adminUsers.find((admin) => admin.id === data.id);

    if (!user) {
      setIdError("존재하지 않는 사번입니다.");
      return;
    }

    if (user.password !== data.password) {
      setPasswordError("비밀번호가 일치하지 않습니다.");
      return;
    }

    // 로그인 성공 → 세션 저장 후 대시보드 이동
    sessionStorage.setItem("isAdmin", "true");
    navigate("/admin/dashboard");
  };


  return (
      <div css={login}>
        <div css={loginDiv}>
          <div css={loginImgDiv}>
            <img src={LoginImg} alt="LoginImg" css={loginImg} />
          </div>
          <div css={loginFormDiv}>
            <div css={loginFormTitleDiv}>
              <div css={loginFormTitle1}>GOODWILL</div>
              <div css={loginFormTitle2}>관리자용 로그인</div>
            </div>
            <div css={{ height: "36px" }}></div>
            <div css={loginFormInputDiv}>
              <form onSubmit={handleSubmit(onSubmitHandler)} css={loginForms}>
                {/* 사번 입력 필드 */}
                <div css={loginInputWrapper}>
                  <img src={EmailIcon} alt="email-icon" />
                  <input
                      type="text"
                      {...register("id", { required: "사번을 입력해 주세요." })}
                      placeholder="사번을 입력해 주세요."
                      css={loginInput}
                  />
                </div>
                {/* 사번 에러 메시지 (하나만 출력) */}
                {!errors.id && idError && <div css={errorMessageStyle}>{idError}</div>}
                {errors.id && <div css={errorMessageStyle}>{errors.id.message}</div>}

                <div css={{ height: "10px" }}></div>

                {/* 비밀번호 입력 필드 */}
                <div css={loginInputWrapper}>
                  <img src={PasswordIcon} alt="password-icon" />
                  <input
                      type="password"
                      {...register("password", {
                        required: "비밀번호를 입력해 주세요.",
                      })}
                      placeholder="비밀번호를 입력해 주세요."
                      css={loginInput}
                  />
                </div>
                {/* 비밀번호 에러 메시지 (하나만 출력) */}
                {!errors.password && passwordError && (
                    <div css={errorMessageStyle}>{passwordError}</div>
                )}
                {errors.password && (
                    <div css={errorMessageStyle}>{errors.password.message}</div>
                )}

                <div css={{ height: "36px" }}></div>
                <button css={loginButton}>LOGIN</button>
              </form>
            </div>
          </div>
        </div>
      </div>
  );
};

export default AdminLogin;
