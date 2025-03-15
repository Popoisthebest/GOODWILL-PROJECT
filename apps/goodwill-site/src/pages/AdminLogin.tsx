import { useForm, SubmitHandler } from "react-hook-form";
import {
  login,
  loginDiv,
  loginFormDiv,
  loginFormInputDiv,
  loginForms,
  loginFormTitle1,
  loginFormTitle2,
  loginFormTitleDiv,
  loginImg,
  loginInput,
  loginInputWrapper,
} from "../components/AdminLogin/AdminLogin.style.ts";
import EmailIcon from "../assets/login/material-symbols_mail.svg";
import PasswordIcon from "../assets/login/uis_lock.svg";

interface FormValue {
  id: string;
  password: string;
}

const AdminLogin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValue>();

  const onSubmitHandler: SubmitHandler<FormValue> = (data) => {
    console.log(data);
  };

  return (
    <>
      <div css={login}>
        <div css={loginDiv}>
          <div css={loginImg}>이미지</div>
          <div css={loginFormDiv}>
            <div css={loginFormTitleDiv}>
              <div css={loginFormTitle1}>GOODWILL</div>
              <div css={loginFormTitle2}>관리자용 로그인</div>
            </div>
            <div css={{ height: "36px" }}></div>
            <div css={loginFormInputDiv}>
              <form onSubmit={handleSubmit(onSubmitHandler)} css={loginForms}>
                <div css={loginInputWrapper}>
                  <img src={EmailIcon} alt="email-icon" />
                  <input
                    type="text"
                    {...register("id")}
                    placeholder={"사번을 입력해 주세요."}
                    css={loginInput}
                  />
                </div>

                <div css={{ height: "10px" }}></div>
                <div css={loginInputWrapper}>
                  <img src={PasswordIcon} alt="password-icon" />
                  <input
                    type="text"
                    {...register("password")}
                    placeholder={"비밀번호를 입력해 주세요."}
                    css={loginInput}
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminLogin;
