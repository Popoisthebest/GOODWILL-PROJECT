/** @jsxImportSource @emotion/react */
import { FC, useState } from "react";
import { UseFormRegister } from "react-hook-form";
import { motion } from "framer-motion";
import {
  containerStyle,
  labelStyle,
  inputStyle,
  errorMessageStyle,
} from "./EventApplicationForm.style.ts";

interface ApplicationFormData {
  name: string;
  studentId: string;
  email: string;
  phone: string;
}

interface ApplicationFormTextInputProps {
  name: keyof ApplicationFormData;
  placeholder: string;
  inputType?: "text" | "number";
  register: UseFormRegister<ApplicationFormData>;
  errorMessage?: string;
}

const ApplicationFormTextInput: FC<ApplicationFormTextInputProps> = ({
  name,
  placeholder,
  inputType = "text",
  register,
  errorMessage,
}) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div css={containerStyle}>
      <label htmlFor={name} css={labelStyle}>
        {placeholder}
      </label>
      <motion.input
        id={name}
        type={name === "studentId" || name === "phone" ? "text" : inputType}
        {...register(name, {
          required: `${placeholder}은(는) 필수입니다.`,
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
        animate={isFocused ? { borderColor: "#05308C" } : undefined}
        whileHover={isFocused ? undefined : { borderColor: "#6D80C5" }}
      />
      <div css={{ display: "flex", justifyContent: "space-between" }}>
        {errorMessage && <p css={errorMessageStyle}>{errorMessage}</p>}
      </div>
    </div>
  );
};

export default ApplicationFormTextInput;
