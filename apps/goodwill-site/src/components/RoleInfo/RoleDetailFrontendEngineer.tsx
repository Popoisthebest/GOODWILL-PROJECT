import RoleDetail from "./RoleDetail";
import { RoleDetailProps } from "./RoleDetail.types";

const frontEndEngineerData: RoleDetailProps = {
  roleName: "Front-End Engineer(FE)",
  mainTitle: "Engineering & Data 직군",
  teamIntroduction: [
    "빠르고 효율적인 프론트엔드 개발 환경을 구축하는 팀입니다.",
    "WebView 기반의 플랫폼 서비스를 설계하고, 개발자 경험(DX)과 사용자 경험(UX)을 극대화하는 것을 목표로 합니다.",
    "React Native 및 MSA(Microservices Architecture) 환경을 기반으로, 확장성과 유지보수성을 고려한 프레임워크를 개발합니다.",
    "기술적인 성장과 협업 문화를 중요하게 여기며, 코드 리뷰 및 기술 공유 세션을 통해 팀 전체의 역량을 높이고 있습니다."
  ],
  responsibilities: [
    "사용자가 직관적으로 이해하고 쉽게 활용할 수 있는 웹·앱 서비스를 개발합니다.",
    "서비스의 방향성과 목표에 맞춰 최적의 기술을 선택하고, 효과적으로 구현합니다.",
    "운영과 확장을 고려한 개발 환경을 구축하여, 지속적으로 성능을 개선합니다.",
    "다양한 서비스 및 시스템과의 연계를 통해 플랫폼의 활용도를 높입니다."
  ],
  idealCandidate: [
    "React, Vue, Angular 등 SPA 프레임워크 사용 경험이 있는 분",
    "TypeScript를 활용한 안정적인 프론트엔드 개발 경험이 있는 분",
    "SSR(Server-Side Rendering) 환경 최적화 및 운영 경험이 있는 분",
    "단순히 코드를 작성하는 것이 아니라, 문제를 발견하고 해결하는 데 주도적인 분",
    "개발 표준화, 코드 품질 개선 및 Best Practice 도입에 관심이 있는 분"
  ],
  resumeTips: [
    "단순한 경험 나열이 아니라 어떤 문제를 해결했는지, 또한 그 과정에서 어떤 인사이트를 얻게 되었는지를 구체적으로 작성해 주시길 바랍니다.",
    "WebView 기반의 서비스 개발 경험이 있다면, 어떤 환경에서 어떤 기술을 활용했는지 강조하시는 것을 추천드립니다.",
    "SSR, React Native, MSA 등의 기술을 활용한 프로젝트 경험이 있다면 기술해 주시길 바랍니다.",
    "성능 최적화, 개발 효율성 개선, 대규모 트래픽 대응 등의 경험을 구체적으로 작성해 주시길 바랍니다."
  ],
  teamMessage:
      "“화면 한 장으로도 감동을 전할 수 있는 힘이 있다고 믿습니다. 사용자의 눈앞을 빛나게 하는 아름다운 UI와 직관적인 UX를 위해, 끊임없이 고민하고 실험해 주세요. 협업과 소통을 통해, 함께 눈에 보이는 가치(Visual Value)를 만들어 나갑시다!”",
  processSteps: ["서류 접수", "1차 코딩 테스트", "2차 직무 인터뷰", "3차 문화적합성 인터뷰"],
  jobDetails: [
    { label: "직군", value: "Front-End Engineer(FE)" },
    { label: "경력사항", value: "경력 1년 이상" },
    { label: "고용형태", value: "정규직" },
    { label: "사무실", value: "대전대신고등학교 대전광역시 서구 오량1길 98" }
  ]
};

const RoleDetailFrontEnd = () => <RoleDetail {...frontEndEngineerData} />;

export default RoleDetailFrontEnd;
