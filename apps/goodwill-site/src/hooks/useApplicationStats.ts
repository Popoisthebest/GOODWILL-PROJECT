import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig.ts"; // Firebase 설정 파일
import { Timestamp } from "firebase/firestore"; // 🔹 Timestamp 가져오기

const COLLECTIONS = [
  "리틀_정주영_전형",
  "리틀_빌게이츠_전형",
  "리틀_도널드_노먼_전형",
];

interface FileData {
  fileType: string;
  fileUrl: string;
  title: string;
}

interface Application {
  docId: string; // Firestore 문서의 고유 ID
  name: string;
  studentId: string; // 구버전 studentId
  email: string;
  phone: string;
  careerAspiration: string;
  motivation: string;
  entrepreneurshipThoughts: string;
  strengthsSkills: string;
  leadershipExperience: string;
  goodwillPlan: string;
  teamConflictResolution: string;
  clubActivityThoughts: string;
  additionalComments?: string;
  roleName: string;
  is_special: boolean;
  createdAt: string;
  contestFiles: FileData[]; // 🔹 공모전 관련 파일
  portfolioFiles: FileData[]; // 🔹 포트폴리오 파일
  specialFiles: FileData[]; // 🔹 스페셜 전형 파일
}

const useApplicationStats = () => {
  const [totalApplicants, setTotalApplicants] = useState(0);
  const [roleStats, setRoleStats] = useState<Record<string, number>>({});
  const [applications, setApplications] = useState<Application[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchApplications = async () => {
      try {
        let totalCount = 0;
        let roleCount: Record<string, number> = {};
        let allApplications: Application[] = [];

        for (const collectionName of COLLECTIONS) {
          const querySnapshot = await getDocs(collection(db, collectionName));
          totalCount += querySnapshot.size;

          querySnapshot.forEach((doc) => {
            const data = doc.data();

            // 🔹 Firestore Timestamp 변환
            const formattedDate =
              data.createdAt instanceof Timestamp
                ? data.createdAt.toDate().toLocaleDateString("ko-KR")
                : data.createdAt || "";

            allApplications.push({
              docId: doc.id,
              name: data.name || "",
              studentId: data.studentId
                ? String(data.studentId) // ✅ studentId가 있으면 사용
                : data.student_id
                  ? String(data.student_id) // ✅ 없으면 student_id 사용
                  : "", // 없으면 빈 문자열
              email: data.email || "",
              phone: data.phone || "",
              careerAspiration: data.career_aspiration || "",
              motivation: data.motivation || "",
              entrepreneurshipThoughts: data.entrepreneurship_thoughts || "",
              strengthsSkills: data.strengths_skills || "",
              leadershipExperience: data.leadership_experience || "",
              goodwillPlan: data.goodwill_plan || "",
              teamConflictResolution: data.team_conflict_resolution || "",
              clubActivityThoughts: data.club_activity_thoughts || "",
              additionalComments: data.additional_comments || "",
              roleName: data.roleName || "",
              is_special: Boolean(data.is_special),
              createdAt: formattedDate, // 변환된 날짜 저장
              contestFiles: data.contest_files
                ? data.contest_files.map((file: any) => ({
                    fileType: file.fileType || "",
                    fileUrl: file.fileUrl || "",
                    title: file.title || "",
                  }))
                : [], // 🔹 공모전 파일 목록 추가
              portfolioFiles: data.portfolio_files
                ? data.portfolio_files.map((file: any) => ({
                    fileType: file.fileType || "",
                    fileUrl: file.fileUrl || "",
                    title: file.title || "",
                  }))
                : [], // 🔹 포트폴리오 파일 목록 추가
              specialFiles: data.special_files
                ? data.special_files.map((file: any) => ({
                    fileType: file.fileType || "",
                    fileUrl: file.fileUrl || "",
                    title: file.title || "",
                  }))
                : [], // 🔹 스페셜 전형 파일 목록 추가
            });

            const role = data.roleName;
            roleCount[role] = (roleCount[role] || 0) + 1;
          });
        }

        setTotalApplicants(totalCount);
        setRoleStats(roleCount);
        setApplications(allApplications);
      } catch (error) {
        console.error("지원자 데이터를 불러오는 중 오류 발생:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchApplications();
  }, []);

  return { totalApplicants, roleStats, applications, loading };
};

export default useApplicationStats;
