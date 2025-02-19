import { useForm, useFieldArray } from "react-hook-form";
import { useState } from "react";

interface FormProps {
    fields: { name: string; label: string; type: string; }[];
    onSubmit: (data: any) => void;
    onFileChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onRemoveFile: (removeFunc: (index: number) => void, index: number) => void;
}

const roleOptions: { [key: string]: string[] } = {
    "Business & Sales": ["Account Manager", "Business Development", "Sales Representative"],
    "Engineering": ["Software Engineer", "Data Scientist", "System Architect"],
    "Design & Media": ["Graphic Designer", "UI/UX Designer", "Video Editor"]
};

const applicationTypes: { [key: string]: string } = {
    "Business & Sales": "리틀 정주형 전형",
    "Engineering": "리틀 빌게이츠 전형",
    "Design & Media": "리틀 도널드 노먼 전형"
};

const Form = ({ fields, onSubmit, onFileChange, onRemoveFile }: FormProps) => {
    const { register, handleSubmit, control, watch, setValue } = useForm();
    const [selectedRole, setSelectedRole] = useState<string>("");
    const [isPortfolioEnabled, setIsPortfolioEnabled] = useState<boolean>(false);

    // 기본 포트폴리오 입력 필드
    const { fields: careerPortfolio, append: addCareerPortfolio, remove: removeCareerPortfolio } = useFieldArray({
        control,
        name: "careerPortfolio"
    });

    const { fields: selfDevelopmentPortfolio, append: addSelfDevelopmentPortfolio, remove: removeSelfDevelopmentPortfolio } = useFieldArray({
        control,
        name: "selfDevelopmentPortfolio"
    });

    const { fields: extraPortfolio, append: addExtraPortfolio, remove: removeExtraPortfolio } = useFieldArray({
        control,
        name: "extraPortfolio"
    });

    const selectedJob = watch("jobType", "Business & Sales"); // 직군 선택 감지

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            {fields.map((field) => (
                <div key={field.name}>
                    <label>{field.label}: </label>
                    <input {...register(field.name)} type={field.type} />
                </div>
            ))}

            {/* 직군 선택 */}
            <h3>직군 선택</h3>
            <select {...register("jobType")} 
                    onChange={(e) => { 
                        const newJob = e.target.value;
                        setValue("jobType", newJob);
                        setValue("role", roleOptions[newJob]?.[0] || ""); // 첫 번째 역할 자동 선택
                        setSelectedRole(roleOptions[newJob]?.[0] || "");
                        setIsPortfolioEnabled(false);
                    }}>
                {Object.keys(roleOptions).map((job) => (
                    <option key={job} value={job}>{job}</option>
                ))}
            </select>

            {/* 역할 선택 */}
            <h3>역할 선택</h3>
            <select {...register("role")} value={selectedRole} onChange={(e) => setSelectedRole(e.target.value)}>
                {roleOptions[selectedJob]?.map((role) => (
                    <option key={role} value={role}>{role}</option>
                ))}
            </select>

            {/* 경력 포트폴리오 (수상 기록) */}
            <h3>경력 포트폴리오 (수상 기록)</h3>
            {careerPortfolio.map((item, index) => (
                <div key={item.id}>
                    <input {...register(`careerPortfolio.${index}.title`)} placeholder="수상 명" />
                    <input type="file" {...register(`careerPortfolio.${index}.file`)} onChange={onFileChange} />
                    <button type="button" onClick={() => onRemoveFile(removeCareerPortfolio, index)}>삭제</button>
                </div>
            ))}
            <button type="button" onClick={() => addCareerPortfolio({ title: "" })}>+</button>

            {/* 자기 개발 포트폴리오 */}
            <h3>자기 개발 포트폴리오</h3>
            {selfDevelopmentPortfolio.map((item, index) => (
                <div key={item.id}>
                    <input {...register(`selfDevelopmentPortfolio.${index}.title`)} placeholder="프로젝트 명" />
                    <input type="file" {...register(`selfDevelopmentPortfolio.${index}.file`)} onChange={onFileChange} />
                    <button type="button" onClick={() => onRemoveFile(removeSelfDevelopmentPortfolio, index)}>삭제</button>
                </div>
            ))}
            <button type="button" onClick={() => addSelfDevelopmentPortfolio({ title: "" })}>+</button>

            {/* 전형 선택 (체크 시 파일 업로드 필드 표시) */}
            <h3>지원 전형</h3>
            <label>
                <input type="checkbox" onChange={(e) => setIsPortfolioEnabled(e.target.checked)} />
                {applicationTypes[selectedJob]} 전형으로 지원하시겠습니까?
            </label>
            
            {isPortfolioEnabled && (
                <>
                    {extraPortfolio.map((item, index) => (
                        <div key={item.id}>
                            <input type="file" {...register(`extraPortfolio.${index}.file`)} onChange={onFileChange} />
                            <button type="button" onClick={() => onRemoveFile(removeExtraPortfolio, index)}>삭제</button>
                        </div>
                    ))}
                    <button type="button" onClick={() => addExtraPortfolio({})}>+</button>
                </>
            )}

            <button type="submit">제출</button>
        </form>
    );
};

export default Form;
