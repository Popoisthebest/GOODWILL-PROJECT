import { useEffect, useState } from "react";
import { db } from "/src/firebaseConfig.ts";
import { collection, getDocs, doc, updateDoc } from "firebase/firestore";

const APPLICATION_STATUSES = ["대기", "승인", "반려"];

const jobCollections: { [key: string]: string } = {
  "Business & Sales": "리틀 정주형 전형",
  "Engineering": "리틀 빌게이츠 전형",
  "Design & Media": "리틀 도널드 노먼 전형",
};

const AdminDashboard = () => {
  const [applications, setApplications] = useState<any[]>([]);
  const [filteredApplications, setFilteredApplications] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedJob, setSelectedJob] = useState<string>("");
  const [selectedRole, setSelectedRole] = useState<string>("");

  useEffect(() => {
    const fetchApplications = async () => {
      setLoading(true);
      let allApplications: any[] = [];

      for (const [jobType, collectionName] of Object.entries(jobCollections)) {
        const querySnapshot = await getDocs(collection(db, collectionName));
        querySnapshot.forEach((doc) => {
          allApplications.push({ id: doc.id, jobType, ...doc.data() });
        });
      }

      setApplications(allApplications);
      setFilteredApplications(allApplications);
      setLoading(false);
    };

    fetchApplications();
  }, []);

  useEffect(() => {
    let filtered = applications.filter((app) =>
      app.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (selectedJob) {
      filtered = filtered.filter((app) => app.jobType === selectedJob);
    }

    if (selectedRole) {
      filtered = filtered.filter((app) => app.role === selectedRole);
    }

    setFilteredApplications(filtered);
  }, [searchTerm, selectedJob, selectedRole, applications]);

  const handleStatusChange = async (applicationId: string, jobType: string, newStatus: string) => {
    const collectionName = jobCollections[jobType];
    if (!collectionName) return;

    try {
      const appRef = doc(db, collectionName, applicationId);
      await updateDoc(appRef, { status: newStatus });

      setApplications((prev) =>
        prev.map((app) => (app.id === applicationId ? { ...app, status: newStatus } : app))
      );
    } catch (error) {
      console.error("지원서 상태 업데이트 실패:", error);
    }
  };

  return (
    <div>
      <h1>지원서 관리자 페이지</h1>

      {/* 검색 및 필터 */}
      <div>
        <input
          type="text"
          placeholder="이름 검색..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select value={selectedJob} onChange={(e) => setSelectedJob(e.target.value)}>
          <option value="">전체 직군</option>
          {Object.keys(jobCollections).map((job) => (
            <option key={job} value={job}>{job}</option>
          ))}
        </select>
        <input
          type="text"
          placeholder="역할 검색..."
          value={selectedRole}
          onChange={(e) => setSelectedRole(e.target.value)}
        />
      </div>

      {loading ? (
        <p>데이터 로딩 중...</p>
      ) : (
        <table border="1">
          <thead>
            <tr>
              <th>이름</th>
              <th>이메일</th>
              <th>직군</th>
              <th>역할</th>
              <th>상태</th>
              <th>변경</th>
            </tr>
          </thead>
          <tbody>
            {filteredApplications.map((app) => (
              <tr key={app.id}>
                <td>{app.name}</td>
                <td>{app.email}</td>
                <td>{app.jobType}</td>
                <td>{app.role}</td>
                <td>{app.status}</td>
                <td>
                  <select
                    value={app.status}
                    onChange={(e) => handleStatusChange(app.id, app.jobType, e.target.value)}
                  >
                    {APPLICATION_STATUSES.map((status) => (
                      <option key={status} value={status}>
                        {status}
                      </option>
                    ))}
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default AdminDashboard;
