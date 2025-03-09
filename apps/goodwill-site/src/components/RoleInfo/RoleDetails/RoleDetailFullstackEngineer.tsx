import RoleDetail from "../RoleDetail.tsx";
import { RoleDetailProps } from "../RoleDetail.types.ts";

const fullStackEngineerData: RoleDetailProps = {
  roleName: "Full-Stack Engineer(FS)",
  mainTitle: "Engineering & Data 직군",
  teamIntroduction: [
    "프론트엔드와 백엔드 기술을 아우르는 풀스택 개발자로서, 유저 경험과 서버 성능을 모두 고려하여 개발하는 팀입니다.",
    "RESTful API 및 GraphQL을 활용하여 효율적인 데이터 처리를 구현합니다.",
    "React, Next.js, Node.js, NestJS 등을 활용하여 빠르고 확장 가능한 웹 서비스를 개발합니다.",
  ],
  responsibilities: [
    "프론트엔드 및 백엔드 시스템을 설계, 개발 및 운영합니다.",
    "React 및 TypeScript를 활용한 UI 개발 및 성능 최적화",
    "Node.js, Express, NestJS 등을 활용한 백엔드 서비스 구축",
    "클라우드 환경(AWS, GCP)에서의 서비스 배포 및 유지보수",
  ],
  idealCandidate: [
    "프론트엔드와 백엔드 개발 경험을 모두 갖춘 분",
    "React, Vue.js, Next.js 등 최신 웹 프레임워크 경험이 있는 분",
    "Node.js, Express, NestJS 등 백엔드 개발 경험이 있는 분",
    "데이터베이스 설계 및 최적화(MySQL, PostgreSQL, MongoDB) 경험이 있는 분",
  ],
  resumeTips: [
    "프론트엔드와 백엔드 개발을 어떻게 조합하여 문제를 해결했는지 기술하세요.",
    "사용한 기술 스택과 선택한 이유를 설명하고, 성과를 구체적으로 작성하세요.",
    "API 개발, 성능 최적화, 보안 강화를 위한 조치 등도 강조하세요.",
  ],
  teamMessage:
    "“프론트와 백엔드를 넘나들며 최고의 유저 경험을 만들어갈 분을 찾고 있습니다!”",
  processSteps: [
    "서류 접수",
    "1차 코딩 테스트",
    "2차 직무 인터뷰",
    "3차 문화적합성 인터뷰",
  ],
  jobDetails: [
    { label: "직군", value: "Full-Stack Engineer(FS)" },
    { label: "경력사항", value: "경력 3년 이상" },
    { label: "고용형태", value: "정규직" },
    { label: "사무실", value: "대전대신고등학교 대전광역시 서구 오량1길 98" },
  ],
};

const RoleDetailFullStack = () => <RoleDetail {...fullStackEngineerData} />;

export default RoleDetailFullStack;
