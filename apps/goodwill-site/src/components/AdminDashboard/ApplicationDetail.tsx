import {Link, useParams} from "react-router-dom";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig"; // Firestore 설정 가져오기
import useApplicationStats from "../../hooks/useApplicationStats";
import DefaultLayout from "../../layouts/DefaultLayout.tsx";
import {
  buttonDiv,
  passButton,
  rejectButton,
} from "./ApplicationDetail.style.ts";

const ApplicationDetail = () => {
  const { id } = useParams();
  const { applications } = useApplicationStats();

  // 선택한 지원자 정보 찾기
  const applicant = applications.find((app) => app.docId === id);

  if (!applicant) return <p>지원자 정보를 찾을 수 없습니다.</p>;

  // 🔹 Firestore에서 지원 상태 업데이트 함수
  const updateApplicationStatus = async (
    status: "합격" | "대기" | "불합격",
  ) => {
    if (!id) return;

    try {
      const applicantRef = doc(db, applicant.programType, id); // Firestore 문서 참조
      await updateDoc(applicantRef, { application_status: status }); // 🔹 상태 변경

      alert(`지원자 상태가 '${status}'(으)로 변경되었습니다.`);
    } catch (error) {
      console.error("지원자 상태 업데이트 중 오류 발생:", error);
      alert("상태 업데이트 중 오류가 발생했습니다.");
    }
  };

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
          <strong>지원서 ID:</strong> {applicant.docId}
        </p>
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
          <strong>지원일자:</strong>{" "}
          {applicant.createdAt
            ? applicant.createdAt.toDate().toLocaleString("ko-KR")
            : "정보 없음"}
        </p>
        <p>
          <strong>리틀 전형 여부:</strong> {applicant.is_special ? "O" : "X"}
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
        <p>
          <strong>첨부한 링크:</strong> <Link to={applicant.portfolio_link}>{applicant.portfolio_link}</Link>
        </p>

        {applicant.additionalComments && (
          <>
            <h3>추가 의견</h3>
            <p>{applicant.additionalComments}</p>
          </>
        )}

        {/* 🔹 대회 파일 */}
        {applicant.contestFiles.length > 0 && (
          <>
            <h3>대회 관련 파일</h3>
            <ul>
              {applicant.contestFiles.map((file, index) => (
                <li key={index}>
                  <p>
                    <strong>제목:</strong> {file.title}
                  </p>
                  <p>
                    <strong>파일 유형:</strong> {file.fileType}
                  </p>
                  <a
                    href={file.fileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    다운로드 링크
                  </a>
                </li>
              ))}
            </ul>
          </>
        )}

        {/* 🔹 포트폴리오 파일 */}
        {applicant.portfolioFiles.length > 0 && (
          <>
            <h3>포트폴리오</h3>
            <ul>
              {applicant.portfolioFiles.map((file, index) => (
                <li key={index}>
                  <p>
                    <strong>제목:</strong> {file.title}
                  </p>
                  <p>
                    <strong>파일 유형:</strong> {file.fileType}
                  </p>
                  <a
                    href={file.fileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    다운로드 링크
                  </a>
                </li>
              ))}
            </ul>
          </>
        )}

        {/* 🔹 스페셜 전형 파일 */}
        {applicant.specialFiles.length > 0 && (
          <>
            <h3>스페셜 전형 파일</h3>
            <ul>
              {applicant.specialFiles.map((file, index) => (
                <li key={index}>
                  <p>
                    <strong>제목:</strong> {file.title}
                  </p>
                  <p>
                    <strong>파일 유형:</strong> {file.fileType}
                  </p>
                  <a
                    href={file.fileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    다운로드 링크
                  </a>
                </li>
              ))}
            </ul>
          </>
        )}
        {/* 서류 전형 합격, 불합격 버튼 추가 */}
        <>
          <h2>서류 전형 합격 여부</h2>
          <div css={buttonDiv}>
            <button
              css={passButton}
              onClick={() => updateApplicationStatus("합격")}
            >
              합격
            </button>
            <button
              css={rejectButton}
              onClick={() => updateApplicationStatus("불합격")}
            >
              불합격
            </button>
          </div>
        </>
      </div>
    </DefaultLayout>
  );
};

export default ApplicationDetail;
