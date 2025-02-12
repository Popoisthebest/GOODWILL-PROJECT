import { useForm, useFieldArray } from "react-hook-form";

interface FormProps {
    fields: { name: string; label: string; type: string; }[];
    onSubmit: (data: any) => void;
    onFileChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onRemoveFile: (removeFunc: (index: number) => void, index: number) => void; // 추가
}

const Form = ({ fields, onSubmit, onFileChange, onRemoveFile }: FormProps) => {
    const { register, handleSubmit, control } = useForm();
    
    // 수상 기록 필드 추가
    const { fields: awards, append: addAward, remove: removeAward } = useFieldArray({
        control,
        name: "awards"
    });

    // 자기 개발 프로젝트 필드 추가
    const { fields: projects, append: addProject, remove: removeProject } = useFieldArray({
        control,
        name: "projects"
    });

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            {fields.map((field) => (
                <div key={field.name}>
                    <label>{field.label}: </label>
                    <input {...register(field.name)} type={field.type} />
                </div>
            ))}
            
            {/* 수상 기록 입력 */}
            <h3>경력 포트폴리오 (수상 기록)</h3>
            {awards.map((award, index) => (
                <div key={award.id}>
                    <input {...register(`awards.${index}.title`)} placeholder="수상 명" />
                    <input type="file" {...register(`awards.${index}.proof`)} onChange={onFileChange} />
                    <button type="button" onClick={() => onRemoveFile(removeAward, index)}>삭제</button>
                </div>
            ))}
            <button type="button" onClick={() => addAward({ title: "" })}>+</button>

            {/* 자기 개발 프로젝트 입력 */}
            <h3>자기 개발 포트폴리오 (개인 프로젝트)</h3>
            {projects.map((project, index) => (
                <div key={project.id}>
                    <input {...register(`projects.${index}.title`)} placeholder="프로젝트 명" />
                    <input type="file" {...register(`projects.${index}.file`)} onChange={onFileChange} />
                    <button type="button" onClick={() => onRemoveFile(removeProject, index)}>삭제</button>
                </div>
            ))}
            <button type="button" onClick={() => addProject({ title: "" })}>+</button>

            <button type="submit">제출</button>
        </form>
    );
};

export default Form;
