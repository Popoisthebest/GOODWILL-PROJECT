import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { collection, doc, setDoc, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig.ts";
import DefaultLayout from "../layouts/DefaultLayout.tsx";
import RoundedCheckbox from "../components/ApplicationForm/RoundedCheckbox/RoundedCheckbox.tsx";
import { useForm, SubmitHandler } from "react-hook-form";
import { fileSend } from "../hooks/fileSend.ts";
import {
  ApplicationInformation,
  BasicInformation,
  BasicInformationContainer,
  BasicInformationText,
  // emailButtonDiv,
  emailDiv,
  FormContainer,
  formContainerDiv,
  FormTitle,
  greyLine,
  RoleName,
  summitButton,
} from "../components/ApplicationForm/ApplicationForm.style.ts";
import ApplicationFormTextInput from "../components/ApplicationForm/ApplicationFormTextInput.tsx";
import DocAdd from "../components/ApplicationForm/DocAdd.tsx";
import SpecialDocAdd from "../components/ApplicationForm/SpecialFileUpload/SpecialDoc.tsx";
// import EmailAuthenticationButton from "../components/ApplicationForm/EmailAuthentication/EmailAuthenticationButton.tsx";
import AgreeButton from "../components/ApplicationForm/Agree/AgreeButton/AgreeButton.tsx";
import { generateApplicationId } from "../hooks/generateApplicationId.ts";

interface FormValues {
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
  additional_comments: string;
}

// Collection names for Firestore without spaces
const getLittleProgramName = (jobGroup: string) => {
  const jobGroupToProgramMap: Record<string, string> = {
    "Business Operations": "리틀_정주영_전형",
    "Finance & Marketing": "리틀_정주영_전형",
    Design: "리틀_도널드_노먼_전형",
    Engineering: "리틀_빌게이츠_전형",
    "Economics & Data Science": "리틀_도널드_노먼_전형",
    Legal: "리틀_정주영_전형",
    Content: "리틀_정주영_전형",
  };
  return jobGroupToProgramMap[jobGroup];
};

// Display names for UI (keeping original format with spaces)
const getLittleProgramDisplayName = (jobGroup: string) => {
  const jobGroupToProgramMap: Record<string, string> = {
    "Business Operations": "리틀 정주영 전형",
    "Finance & Marketing": "리틀 정주영 전형",
    Design: "리틀 도널드 노먼 전형",
    Engineering: "리틀 빌게이츠 전형",
    "Economics & Data Science": "리틀 도널드 노먼 전형",
    Legal: "리틀 정주영 전형",
    Content: "리틀 정주영 전형",
  };
  return jobGroupToProgramMap[jobGroup];
};

const ApplicationFormPage = () => {
  const location = useLocation();
  const roleName = location.state?.roleName;
  const jobGroup = location.state?.jobGroup;
  const littleProgramName = getLittleProgramName(jobGroup); // For Firestore (no spaces)
  const littleProgramDisplayName = getLittleProgramDisplayName(jobGroup); // For display
  const [isChecked, setIsChecked] = useState(false);
  const [allChecked, setAllChecked] = useState(false);
  const [requiredChecked, setRequiredChecked] = useState(false);
  const [optionalChecked, setOptionalChecked] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();
  const [files, setFiles] = useState<
    { file: File; fileType: string; title: string }[]
  >([]);

  // 전체 동의 체크 시 필수 및 선택 체크박스도 변경
  const handleAllCheck = () => {
    const newCheckState = !allChecked;
    setAllChecked(newCheckState);
    setRequiredChecked(newCheckState);
    setOptionalChecked(newCheckState);
  };

  // 필수 동의 체크박스 변경 시 처리
  const handleRequiredCheck = () => {
    const newRequiredState = !requiredChecked;
    setRequiredChecked(newRequiredState);

    if (!newRequiredState || !optionalChecked) {
      setAllChecked(false);
    } else {
      setAllChecked(true);
    }
  };

  // 선택 동의 체크박스 변경 시 처리
  const handleOptionalCheck = () => {
    const newOptionalState = !optionalChecked;
    setOptionalChecked(newOptionalState);

    if (!newOptionalState || !requiredChecked) {
      setAllChecked(false);
    } else {
      setAllChecked(true);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<FormValues>({});

  // 🔥 `DocAdd.tsx`에서 전달받은 파일 데이터를 저장
  const handleFilesUpdate = (
    newFiles: { file: File; fileType: string; title: string }[],
  ) => {
    setFiles(newFiles);
  };

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    try {
      if (isSubmitting) return;
      if (!requiredChecked) {
        alert("필수 동의 항목을 체크해야 지원서를 제출할 수 있습니다.");
        return;
      }

      setIsSubmitting(true);
      console.log("📂 파일 업로드 시작...");

      // Firestore에 저장할 새로운 지원서 ID 생성
      const applicationsRef = collection(db, littleProgramName);
      const querySnapshot = await getDocs(applicationsRef);
      const order = querySnapshot.size + 1;
      const newApplicationId = generateApplicationId(jobGroup, order);

      let uploadedFiles: {
        title: string;
        fileUrl: string;
        fileType: string;
      }[] = [];

      // ✅ 파일이 있을 경우 `fileSend` 실행 후 업로드 완료까지 대기
      if (files.length > 0) {
        uploadedFiles = await Promise.all(
          files.map(async (fileData) => {
            const result = await fileSend(
              fileData.file,
              fileData.fileType,
              () => newApplicationId,
              fileData.title,
            );
            console.log("📂 개별 파일 업로드 결과:", result);
            return {
              title: fileData.title,
              fileUrl: result.fileUrl, // 🔥 파일 다운로드 URL 저장
              fileType: fileData.fileType,
            };
          }),
        );
      }

      console.log("✅ 모든 파일 업로드 완료, 최종 데이터:", uploadedFiles);

      // ✅ 파일 데이터를 카테고리별로 정리
      const categorizedFiles = {
        contest_files: uploadedFiles.filter(
          (file) => file.fileType === "contest",
        ),
        portfolio_files: uploadedFiles.filter(
          (file) => file.fileType === "portfolio",
        ),
        special_files: uploadedFiles.filter(
          (file) => file.fileType === "special",
        ),
      };

      console.log("🚀 Firestore 저장 데이터:", {
        ...data,
        ...categorizedFiles,
      });

      // ✅ Firestore에 저장할 데이터 구성
      const formattedData = {
        ...data,
        applicationId: newApplicationId,
        roleName: roleName,
        order,
        createdAt: new Date(),
        application_status: "대기",
        programType: littleProgramDisplayName,
        ...categorizedFiles, // 🔥 Firestore에 파일 데이터 저장
      };

      await setDoc(doc(db, littleProgramName, newApplicationId), formattedData);

      console.log("✅ Firestore 저장 완료");
      navigate("/submission-finished", {
        state: { roleName, newApplicationId },
      });
    } catch (error) {
      console.error("🚨 지원서 제출 실패:", error);
      alert("지원서 제출 중 오류가 발생했습니다.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <DefaultLayout>
      <div css={formContainerDiv}>
        <div css={FormContainer}>
          <div>
            <div css={FormTitle}>지원서 작성하기</div>
            <div css={RoleName}>{roleName}</div>
            <div css={{ height: "48px" }}></div>
            <div css={ApplicationInformation}>지원자 정보</div>
            <div css={{ height: "32px" }}></div>
            <div css={BasicInformationContainer}>
              <div css={BasicInformation}>기본 정보</div>
              <div css={{ width: "10px" }}></div>
              <div css={BasicInformationText}>필수</div>
            </div>
            <div css={{ height: "32px" }}></div>
            <form>
              <ApplicationFormTextInput
                name="name"
                placeholder="이름"
                inputType="text"
                register={register}
                watch={watch}
                errorMessage={errors.name?.message}
              />
              <div css={{ height: "24px" }}></div>
              <ApplicationFormTextInput
                name="student_id"
                placeholder="학번"
                inputType="text"
                register={register}
                watch={watch}
                errorMessage={errors.student_id?.message}
              />{" "}
              <div css={{ height: "24px" }}></div>
              <div css={emailDiv}>
                <ApplicationFormTextInput
                  name="email"
                  placeholder="이메일"
                  inputType="text"
                  register={register}
                  watch={watch}
                  errorMessage={errors.email?.message}
                />{" "}
                {/*<div css={{ height: "11px" }}></div>*/}
                {/*<div css={emailButtonDiv}>*/}
                {/*  <EmailAuthenticationButton />*/}
                {/*</div>*/}
              </div>
              <div css={{ height: "24px" }}></div>
              {/*<div css={{ height: "60px" }}></div>*/}
              <ApplicationFormTextInput
                name="phone"
                placeholder="전화번호 (010-0000-0000)"
                inputType="text"
                register={register}
                watch={watch}
                errorMessage={errors.phone?.message}
              />
            </form>
            <div css={{ height: "48px" }}></div>
            <div css={BasicInformationContainer}>
              <div css={ApplicationInformation}>지원서 질문</div>
              <div css={{ width: "10px" }}></div>
              <div css={BasicInformationText}>필수</div>
            </div>
            <div css={{ height: "32px" }}></div>
            <div css={BasicInformationContainer}>
              <div css={BasicInformation}>
                자신의 희망 진로(분야)를 작성해주세요.
              </div>
            </div>
            <form>
              <ApplicationFormTextInput
                name="career_aspiration"
                placeholder=""
                inputType="textarea"
                register={register}
                watch={watch}
                errorMessage={errors.career_aspiration?.message}
              />
            </form>

            <div css={{ height: "32px" }}></div>
            <div css={BasicInformationContainer}>
              <div css={BasicInformation}>
                GOODWILL에 지원하게 된 동기를 설명해주세요.(300자 이내)
              </div>
            </div>
            <form>
              <ApplicationFormTextInput
                name="motivation"
                placeholder=""
                inputType="textarea"
                register={register}
                watch={watch}
                errorMessage={errors.motivation?.message}
              />
            </form>

            <div css={{ height: "32px" }}></div>
            <div css={BasicInformationContainer}>
              <div css={BasicInformation}>
                ‘창업’에 대한 자신생각을 자유롭게 작성해주세요.(1000자 이내)
              </div>
            </div>
            <form>
              <ApplicationFormTextInput
                name="entrepreneurship_thoughts"
                placeholder=""
                inputType="textarea"
                register={register}
                watch={watch}
                errorMessage={errors.entrepreneurship_thoughts?.message}
              />
            </form>

            <div css={{ height: "32px" }}></div>
            <div css={BasicInformationContainer}>
              <div css={BasicInformation}>
                자신이 지닌 장점, 역량, 특기를 설명해주세요.(1000자 이내)
              </div>
            </div>
            <form>
              <ApplicationFormTextInput
                name="strengths_skills"
                placeholder=""
                inputType="textarea"
                register={register}
                watch={watch}
                errorMessage={errors.strengths_skills?.message}
              />
            </form>

            <div css={{ height: "32px" }}></div>
            <div css={BasicInformationContainer}>
              <div css={BasicInformation}>
                중학교 시절 리더십 역량을 드러낼 수 있는 활동 경험을
                기재해주세요.(반장, 동아리 회장 등)(1000자 이내)
              </div>
            </div>
            <form>
              <ApplicationFormTextInput
                name="leadership_experience"
                placeholder=""
                inputType="textarea"
                register={register}
                watch={watch}
                errorMessage={errors.leadership_experience?.message}
              />
            </form>

            <div css={{ height: "32px" }}></div>
            <div css={BasicInformationContainer}>
              <div css={BasicInformation}>
                GOODWILL에 입사하여 하고 싶은 활동을 계획해서
                작성해주세요.(1000자 이내)
              </div>
            </div>
            <form>
              <ApplicationFormTextInput
                name="goodwill_plan"
                placeholder=""
                inputType="textarea"
                register={register}
                watch={watch}
                errorMessage={errors.goodwill_plan?.message}
              />
            </form>

            <div css={{ height: "32px" }}></div>
            <div css={BasicInformationContainer}>
              <div css={BasicInformation}>
                GOODWILL 내에서 활동을 진행하던 중 팀원 1명이 비협조적인 태도를
                지속적으로 보인다면 본인은 어떻게 대처할 것인지
                작성해주세요.(1000자 이내)
              </div>
            </div>
            <form>
              <ApplicationFormTextInput
                name="team_conflict_resolution"
                placeholder=""
                inputType="textarea"
                register={register}
                watch={watch}
                errorMessage={errors.team_conflict_resolution?.message}
              />
            </form>

            <div css={{ height: "32px" }}></div>
            <div css={BasicInformationContainer}>
              <div css={BasicInformation}>
                자신이 생각하는 동아리 활동이란 무엇인지 본인의 생각과 가치관을
                담아서 작성해주세요.(1000자 이내)
              </div>
            </div>
            <form>
              <ApplicationFormTextInput
                name="club_activity_thoughts"
                placeholder=""
                inputType="textarea"
                register={register}
                watch={watch}
                errorMessage={errors.club_activity_thoughts?.message}
              />
            </form>

            <div css={{ height: "48px" }}></div>
            <div css={ApplicationInformation}>제출 서류</div>
            <div css={{ height: "32px" }}></div>
            <DocAdd onFilesUpdate={handleFilesUpdate} />

            <div css={{ height: "36px" }}></div>
            <div
              css={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div css={ApplicationInformation}>{littleProgramDisplayName}</div>
              <RoundedCheckbox
                checked={true}
                onChange={(checked) => {
                  setIsChecked(!checked);
                }}
              />
            </div>
            {isChecked ? (
              <div css={{ paddingTop: "32px" }}>
                <SpecialDocAdd onFilesUpdate={handleFilesUpdate} />
              </div>
            ) : null}
            <div css={{ height: "48px" }}></div>
            <div css={ApplicationInformation}>기타 사항</div>
            <div css={{ height: "32px" }}></div>
            <form>
              <ApplicationFormTextInput
                name="additional_comments"
                placeholder="추가로 더 하고 싶은 말을 작성해주세요.(300자 이내)"
                inputType="textarea"
                register={register}
                watch={watch}
                errorMessage={errors.additional_comments?.message}
              />
            </form>
            <div css={{ height: "100px" }}></div>
            <AgreeButton
              agreeType="전체 동의"
              agreeDescription="개인정보 필수항목 수집 및 이용 동의"
              isChecked={allChecked}
              onToggle={handleAllCheck}
            />
            <div css={{ height: "27px" }}></div>
            <div css={greyLine}></div>
            <div css={{ height: "40px" }}></div>
            <AgreeButton
              agreeType="필수"
              agreeDescription="개인정보 필수항목 수집 및 이용 동의"
              isChecked={requiredChecked}
              onToggle={handleRequiredCheck}
            />
            <div css={{ height: "10px" }}></div>
            <AgreeButton
              agreeType="선택"
              agreeDescription="개인정보 필수항목 수집 및 이용 동의"
              isChecked={optionalChecked}
              onToggle={handleOptionalCheck}
            />

            <div css={{ height: "106px" }}></div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <button type="submit" css={summitButton} disabled={isSubmitting}>
                {isSubmitting ? "제출 중..." : "제출하기"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default ApplicationFormPage;
