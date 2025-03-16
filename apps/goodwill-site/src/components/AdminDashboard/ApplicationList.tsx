import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useApplicationStats from "../../hooks/useApplicationStats";
import {
  listContainer,
  searchBar,
  applicantCard,
  checkbox,
  nameColumn,
  studentIdColumn,
  emailColumn,
  phoneColumn,
  roleColumn,
  specialApplicationColumn,
  dateColumn,
} from "./ApplicationList.style";

const ApplicationList = () => {
  const { applications, loading } = useApplicationStats();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedApplicants, setSelectedApplicants] = useState<string[]>([]);
  const navigate = useNavigate();

  if (loading) return <p>지원자 데이터를 불러오는 중...</p>;

  // 검색 필터링
  const filteredApplications = applications.filter((app) => {
    const studentId = app.studentId;
    return (
      app.name.includes(searchTerm) ||
      studentId.includes(searchTerm) ||
      app.email.includes(searchTerm)
    );
  });

  // 체크박스 선택 핸들러
  const handleCheckboxChange = (id: string) => {
    setSelectedApplicants((prev) =>
      prev.includes(id) ? prev.filter((appId) => appId !== id) : [...prev, id],
    );
  };

  return (
    <div>
      {/* 검색 입력창 */}
      <input
        type="text"
        placeholder="검색"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        css={searchBar}
      />

      {/* 지원자 목록 */}
      <div css={listContainer}>
        {/* 테이블 헤더 스타일 적용 */}
        <div
          css={[
            applicantCard,
            { fontWeight: "bold", backgroundColor: "#f5f5f5" },
          ]}
        >
          <input type="checkbox" disabled css={checkbox} />
          <span css={nameColumn}>지원자</span>
          <span css={studentIdColumn}>학번</span>
          <span css={emailColumn}>이메일</span>
          <span css={phoneColumn}>전화번호</span>
          <span css={roleColumn}>지원분야</span>
          <span css={specialApplicationColumn}>리틀 전형 여부</span>
          <span css={dateColumn}>지원일자</span>
        </div>

        {filteredApplications.length > 0 ? (
          filteredApplications.map((app) => (
            <div
              key={app.docId}
              css={applicantCard}
              onClick={() => navigate(`/admin/applicants/${app.docId}`)}
            >
              <input
                type="checkbox"
                checked={selectedApplicants.includes(app.docId)}
                onChange={(e) => {
                  e.stopPropagation();
                  handleCheckboxChange(app.docId);
                }}
                css={checkbox}
              />
              <span css={nameColumn}>{app.name}</span>
              <span css={studentIdColumn}>{app.studentId}</span>
              <span css={emailColumn}>{app.email}</span>
              <span css={phoneColumn}>{app.phone}</span>
              <span css={roleColumn}>{app.roleName}</span>
              <span css={specialApplicationColumn}>
                {app.is_special ? "O" : "X"}
              </span>
              <span css={dateColumn}>{app.createdAt}</span>
            </div>
          ))
        ) : (
          <p>지원자가 없습니다.</p>
        )}
      </div>
    </div>
  );
};

export default ApplicationList;
