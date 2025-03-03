import RoleDetail from "./RoleDetail";
import { RoleDetailProps } from "./RoleDetail.types";

const backendEngineerData: RoleDetailProps = {
  roleName: "Back-End Engineer(BE)",
  mainTitle: "Engineering & Data 직군",
  teamIntroduction: [
    "대규모 트래픽을 안정적으로 처리할 수 있는 플랫폼 서비스를 개발하고 운영하는 팀입니다.",
    "API Gateway, 대용량 메시지 발송 시스템, FDS(Fraud Detection System), APM(Application Performance Management) 등의 인프라를 관리합니다.",
    "서비스의 안정성과 확장성을 고려하여 플랫폼 라이브러리를 제공하고, 개발 생산성을 높이는 환경을 구축합니다.",
  ],
  responsibilities: [
    "대규모 트래픽을 처리할 수 있는 백엔드 시스템을 설계 및 운영합니다.",
    "서비스 공통 기능을 플랫폼 라이브러리 형태로 제공하여 개발 효율성을 극대화합니다.",
    "ELK 스택, Haproxy 등의 기술을 활용해 실시간 모니터링 및 성능 최적화를 수행합니다.",
    "이중화 및 분산 시스템 설계를 통해 장애에 강한 아키텍처를 구축합니다.",
  ],
  idealCandidate: [
    "분산 시스템 및 마이크로서비스 아키텍처(MSA)에 대한 이해가 있는 분",
    "Kafka, Redis, RabbitMQ 등 백엔드 기술을 활용해 본 경험이 있는 분",
    "SSR(Server-Side Rendering) 환경 최적화 및 운영 경험이 있는 분",
  ],
  resumeTips: [
    "기술 나열이 아닌, 실제 개발 및 운영 과정에서 해결한 문제와 인사이트를 중심으로 작성하세요.",
    "대용량 트래픽 처리, 분산 시스템 설계 경험을 구체적으로 설명해 주세요.",
  ],
  teamMessage: "“보이지 않는 곳에서부터 서비스의 안정과 확장이 시작됩니다.”",
  processSteps: [
    "서류 접수",
    "1차 코딩 테스트",
    "2차 직무 인터뷰",
    "3차 문화적합성 인터뷰",
  ],
  jobDetails: [
    { label: "직군", value: "Back-End Engineer(BE)" },
    { label: "경력사항", value: "경력 2년 이상" },
    { label: "고용형태", value: "정규직" },
    { label: "사무실", value: "서울 강남구 테헤란로 123" },
  ],
};

const RoleDetailBackEnd = () => <RoleDetail {...backendEngineerData} />;

export default RoleDetailBackEnd;
