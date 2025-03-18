/** @jsxImportSource @emotion/react */
import { FC, useState } from "react";
import { UseFormRegister, UseFormWatch } from "react-hook-form";
import { motion } from "framer-motion";
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
  student_id: string;
  email: string;
  phone: string;
  career_aspiration: string;
  motivation: string;
  entrepreneurship_thoughts: string;
  strengths_skills: string;
  leadership_experience: string;
  goodwill_plan: string;
  team_conflict_resolution: string;
  club_activity_thoughts: string;
  additional_comments?: string; // 🔥 선택 입력 필드로 변경
  portfolio_link?: string;
}

interface ApplicationFormTextInputProps {
  name: keyof ApplicationFormData;
  placeholder: string;
  inputType?: "text" | "number" | "textarea" | "url";
  register: UseFormRegister<ApplicationFormData>;
  watch: UseFormWatch<ApplicationFormData>;
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
              {...register(name, {
                ...(name !== "additional_comments" && name !== "portfolio_link" && {
                  required: `${placeholder || "이 항목"}은(는) 필수입니다.`,
                }),
                ...(name === "portfolio_link" && {
                  validate: (value) => {
                    if (!value) return true; // 입력 안 해도 OK
                    const links = value.split("\n").map((link) => link.trim()).filter(Boolean);
                    const invalidLink = links.find(
                        (link) => !/^(https?:\/\/)?([\w.-]+)+(:\d+)?(\/([\w/_.]*)?)?$/.test(link)
                    );
                    return invalidLink ? `"${invalidLink}" 는 올바른 URL 형식이 아닙니다.` : true;
                  },
                }),
                ...(name === "motivation" && {
                  validate: (value) =>
                      (value?.replace(/\s/g, "").length || 0) <= 300 ||
                      "최대 300자까지 입력할 수 있습니다.",
                }),
                ...(name !== "motivation" &&
                    name !== "additional_comments" &&
                    name !== "portfolio_link" && {
                      validate: (value) =>
                          (value?.replace(/\s/g, "").length || 0) <= 1000 ||
                          "최대 1000자까지 입력할 수 있습니다.",
                    }),
              })}
              placeholder={
                name === "portfolio_link"
                    ? "여러 개의 링크를 입력하려면 엔터로 구분하세요.\n예시:\nhttps://example.com\nhttps://portfolio.me"
                    : ""
              }
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              css={textareaStyle}
              animate={isFocused ? { borderColor: "#05308C" } : undefined}
              whileHover={isFocused ? undefined : { borderColor: "#6D80C5" }}
          />
      ) : (
        <motion.input
          id={name}
          type={name === "student_id" || name === "phone" ? "text" : inputType}
          {...register(name, {
            ...(name !== "additional_comments" && {
              required: `${placeholder}은(는) 필수입니다.`,
            }), // 🔥 additional_comments는 필수 X
            ...(name === "email" && {
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "올바른 이메일 형식을 입력하세요.",
              },
            }),
            ...(name === "student_id" && {
              validate: (value) =>
                /^[0-9]+$/.test(value!) || "학번은 숫자로 입력해야 합니다.",
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
      )}
      <div css={{ display: "flex", justifyContent: "space-between" }}>
        {errorMessage && <p css={errorMessageStyle}>{errorMessage}</p>}
        {[
          "motivation",
          "career_aspiration",
          "entrepreneurship_thoughts",
          "strengths_skills",
          "leadership_experience",
          "goodwill_plan",
          "team_conflict_resolution",
          "club_activity_thoughts",
          "additional_comments",
        ].includes(name) && (
          <div css={letterCount}>
            {inputValue?.replace(/\s/g, "").length || 0}/
            {name === "motivation" || name === "additional_comments"
              ? 300
              : 1000}
          </div>
        )}
      </div>
    </div>
  );
};

export default ApplicationFormTextInput;
