import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig.ts";
import { Timestamp } from "firebase/firestore";

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
  docId: string;
  name: string;
  studentId: string;
  application_status: string;
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
  createdAt: Timestamp | null;
  programType: string; // 🔹 programType 추가
  contestFiles: FileData[];
  portfolioFiles: FileData[];
  specialFiles: FileData[];
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

            allApplications.push({
              docId: doc.id,
              name: data.name || "",
              studentId: data.studentId ? String(data.studentId) : data.student_id ? String(data.student_id) : "",
              application_status: data.application_status,
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
              createdAt: data.createdAt instanceof Timestamp ? data.createdAt : null,
              programType: data.programType ? data.programType.replace(/\s+/g, "_") : "", // 🔹 띄어쓰기(_) 변환
              contestFiles: data.contest_files ? data.contest_files.map((file: any) => ({
                fileType: file.fileType || "",
                fileUrl: file.fileUrl || "",
                title: file.title || "",
              })) : [],
              portfolioFiles: data.portfolio_files ? data.portfolio_files.map((file: any) => ({
                fileType: file.fileType || "",
                fileUrl: file.fileUrl || "",
                title: file.title || "",
              })) : [],
              specialFiles: data.special_files ? data.special_files.map((file: any) => ({
                fileType: file.fileType || "",
                fileUrl: file.fileUrl || "",
                title: file.title || "",
              })) : [],
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
