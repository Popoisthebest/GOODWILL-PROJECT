// 역할 상세 데이터 타입 정의
export interface RoleDetail {
    roleName: string;
    mainTitle: string;
    teamIntroduction: string[];
    responsibilities: string[];
    idealCandidate: string[];
    resumeTips: string[];
    teamMessage: string;
    processSteps: string[];
    jobDetails: { label: string; value: string }[];
}

// 역할별 데이터 저장
export const roleDetails: Record<string, RoleDetail> = {
    "Business Operations Manager(OM)": {
        roleName: "Business Operations Manager(OM)",
        mainTitle: "비즈니스 운영을 최적화하고 효율성을 극대화하는 핵심 역할",
        teamIntroduction: [
            "GOODWILL의 운영팀은 회사의 전략적 목표를 달성하는 데 중요한 역할을 합니다.",
            "운영 프로세스를 최적화하고, 팀원들이 원활하게 협업할 수 있도록 지원합니다.",
        ],
        responsibilities: [
            "비즈니스 운영 전략 수립 및 실행",
            "운영팀 관리 및 팀원 성장 지원",
            "데이터 기반 의사결정 및 성과 분석",
        ],
        idealCandidate: [
            "비즈니스 운영 및 전략 기획 경험이 있는 분",
            "팀을 이끌고 관리하는 리더십을 보유한 분",
            "데이터 분석을 기반으로 문제를 해결할 수 있는 분",
        ],
        resumeTips: [
            "구체적인 운영 경험과 성과를 강조하세요.",
            "프로세스 최적화 및 팀 리딩 경험을 상세히 기재하세요.",
        ],
        teamMessage: "운영팀과 함께 성장하며 조직의 미래를 만들어가요!",
        processSteps: ["서류 전형", "1차 인터뷰", "최종 인터뷰", "합류"],
        jobDetails: [
            { label: "직군", value: "Business Operations" },
            { label: "근무 형태", value: "정규직" },
            { label: "근무 위치", value: "서울" },
        ],
    },
    "Front-End Engineer": {
        roleName: "Front-End Engineer",
        mainTitle: "React 기반의 UI 개발을 담당하며 사용자 경험을 극대화하는 역할",
        teamIntroduction: [
            "GOODWILL의 프론트엔드 엔지니어 팀은 최신 웹 기술을 활용하여 최고의 사용자 경험을 제공합니다.",
            "디자인 시스템을 구축하고, 성능 최적화를 수행하며, SEO를 고려한 개발을 진행합니다.",
        ],
        responsibilities: [
            "React 및 Next.js 기반의 웹 애플리케이션 개발",
            "UI/UX 최적화 및 성능 개선",
            "SEO 최적화 및 웹 접근성 고려",
        ],
        idealCandidate: [
            "React 및 TypeScript를 활용한 개발 경험이 있는 분",
            "UI/UX 디자인에 대한 감각이 뛰어난 분",
            "프론트엔드 성능 최적화 경험이 있는 분",
        ],
        resumeTips: [
            "구체적인 프로젝트 경험과 기술 스택을 강조하세요.",
            "웹 성능 최적화 및 UI/UX 개선 경험을 설명하세요.",
        ],
        teamMessage: "최신 웹 기술을 활용하여 최고의 사용자 경험을 만들어가요!",
        processSteps: ["서류 전형", "1차 인터뷰", "기술 면접", "최종 합류"],
        jobDetails: [
            { label: "직군", value: "Engineering" },
            { label: "근무 형태", value: "정규직" },
            { label: "근무 위치", value: "서울" },
        ],
    },
    // ⚡️ 여기에 다른 역할들도 같은 형식으로 추가 가능
};
