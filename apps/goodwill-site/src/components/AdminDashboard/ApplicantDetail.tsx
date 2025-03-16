import { useParams } from "react-router-dom";
import useApplicationStats from "../../hooks/useApplicationStats";
import DefaultLayout from "../../layouts/DefaultLayout.tsx";

const ApplicantDetail = () => {
  const { id } = useParams();
  const { applications } = useApplicationStats();

  // 선택한 지원자 정보 찾기
  const applicant = applications.find((app) => app.docId === id);

  if (!applicant) return <p>지원자 정보를 찾을 수 없습니다.</p>;

  return (
    <DefaultLayout>
      <div
        css={{
          display: "flex",
          flexDirection: "column",
          padding: "0 72px 50px 72px",
        }}
      >
        <h2>{applicant.name} 상세 정보</h2>

        <h3>기본 정보</h3>
        <p>
          <strong>학번:</strong> {applicant.studentId}
        </p>
        <p>
          <strong>이메일:</strong> {applicant.email}
        </p>
        <p>
          <strong>전화번호:</strong> {applicant.phone}
        </p>
        <p>
          <strong>지원분야:</strong> {applicant.roleName}
        </p>
        <p>
          <strong>지원일자:</strong> {applicant.createdAt}
        </p>
        <p>
          <strong>리틀 전형 여부:</strong>{" "}
          {applicant.is_special ? "O" : "X"}
        </p>

        <h3>지원서 내용</h3>
        <p>
          <strong>진로 희망:</strong> {applicant.careerAspiration}
        </p>
        <p>
          <strong>지원 동기:</strong> {applicant.motivation}
        </p>
        <p>
          <strong>창업에 대한 생각:</strong>{" "}
          {applicant.entrepreneurshipThoughts}
        </p>
        <p>
          <strong>본인의 강점 및 기술:</strong> {applicant.strengthsSkills}
        </p>
        <p>
          <strong>리더십 경험:</strong> {applicant.leadershipExperience}
        </p>
        <p>
          <strong>GOODWILL에서의 계획:</strong> {applicant.goodwillPlan}
        </p>
        <p>
          <strong>팀 갈등 해결 경험:</strong> {applicant.teamConflictResolution}
        </p>
        <p>
          <strong>동아리 활동에 대한 생각:</strong>{" "}
          {applicant.clubActivityThoughts}
        </p>

        {applicant.additionalComments && (
          <>
            <h3>추가 의견</h3>
            <p>{applicant.additionalComments}</p>
          </>
        )}
      </div>
    </DefaultLayout>
  );
};

export default ApplicantDetail;
