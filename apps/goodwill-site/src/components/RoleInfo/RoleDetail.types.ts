export interface RoleDetailProps {
  roleName: string;
  mainTitle: string;
  teamIntroduction: string[];
  responsibilities: string[];
  idealCandidate: string[];
  resumeTips: string[];
  teamMessage: string;
  processSteps: string[];
  jobDetails: { label: string; value: string }[]; // 추가된 직군 정보 타입
}
