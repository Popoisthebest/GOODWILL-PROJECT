/** @jsxImportSource @emotion/react */
import { FC, useState } from "react";
import { UseFormRegister, UseFormWatch } from "react-hook-form";
import { motion } from "motion/react";
import {
  containerStyle,
  labelStyle,
  inputStyle,
  textareaStyle,
  errorMessageStyle,
  letterCount,
} from "./ApplicationForm.style.ts";

interface ApplicationFormData {
  name: string;
  studentId: string;
  email: string;
  phone: string;
  coverLetter: string;
  questions: string;
}

interface ApplicationFormTextInputProps {
  name: keyof ApplicationFormData;
  placeholder: string;
  inputType?: "text" | "number" | "textarea";
  register: UseFormRegister<ApplicationFormData>;
  watch: UseFormWatch<ApplicationFormData>; // 🔥 watch 추가
  errorMessage?: string;
}

const ApplicationFormTextInput: FC<ApplicationFormTextInputProps> = ({
  name,
  placeholder,
  inputType = "text",
  register,
  watch,
  errorMessage,
}) => {
  const inputValue = watch(name) || "";
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div css={containerStyle}>
      <label htmlFor={name} css={labelStyle}>
        {placeholder}
      </label>
      {inputType === "textarea" ? (
        <motion.textarea
          id={name}
          {...register(
            name,
            name === "questions"
              ? {}
              : { required: `${placeholder}은(는) 필수입니다.` },
          )}
          placeholder=""
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          css={textareaStyle}
          animate={isFocused ? { borderColor: "#05308C" } : {}}
          whileHover={isFocused ? {} : { borderColor: "#6D80C5" }}
        />
      ) : (
        <motion.input
          id={name}
          type={name === "studentId" || name === "phone" ? "text" : inputType}
          {...register(name, {
            ...(name !== "questions" && {
              required: `${placeholder}은(는) 필수입니다.`,
            }),
            ...(name === "email" && {
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "올바른 이메일 형식을 입력하세요.",
              },
            }),
            ...(name === "studentId" && {
              validate: (value) =>
                /^[0-9]+$/.test(value) || "학번은 숫자로 입력해야 합니다.",
            }),
            ...(name === "phone" && {
              pattern: {
                value: /^010-\d{4}-\d{4}$/,
                message: "올바른 전화번호 형식(010-0000-0000)으로 입력하세요.",
              },
            }),
          })}
          placeholder=""
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          css={inputStyle}
          animate={isFocused ? { borderColor: "#05308C" } : {}}
          whileHover={isFocused ? {} : { borderColor: "#6D80C5" }}
        />
      )}
      <div css={{ display: "flex", justifyContent: "space-between" }}>
        {errorMessage && <p css={errorMessageStyle}>{errorMessage}</p>}
        {name === "coverLetter" && (
          <div css={letterCount}>
            {inputValue.replace(/\s/g, "").length}/100
          </div>
        )}
      </div>
    </div>
  );
};

export default ApplicationFormTextInput;
