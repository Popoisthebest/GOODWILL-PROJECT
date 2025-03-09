import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/announcement.css";
import magnifyIcon from "../icons/MagnifyingGlass.svg";
import DefaultLayout from "../layouts/DefaultLayout.tsx";

const Announcement = () => {
  const navigate = useNavigate();

  const announcements = [
    {
      category: "채용공고",
      classific: "채용공고",
      title: "GOODWILL(KE) Inc. Business Operations 창업 직군 인재 채용",
      content:
        'GOODWILL(KE) Inc.에서 남다른 도전정신과 열정으로 **스타트업 DNA**를 가진 차세대 비즈니스 리더를 찾습니다! 🌎\n\n단순한 운영이 아닌, **전략적 사고와 창의적인 문제 해결 능력**을 통해 회사를 함께 성장시킬 **Business Operation Manager, Executive Assistant, Biz Dev** 포지션을 모집합니다.\n\n우리는 **정형화된 비즈니스가 아닌, 빠르게 변화하는 시장 속에서 도전하고, 실행하고, 혁신하는 곳**입니다.\n\n🔥 **"이런 기회를 놓친다면 두고두고 후회할 수도?"**\n\n💡 **창업의 본질을 배우고, 직접 비즈니스 운영에 참여하고 싶은 당신!**\n\n📈 **스타트업 환경에서 실질적인 성장 경험을 쌓고 싶은 당신!**\n\n📢 2025년, GOODWILL과 함께 **새로운 시장을 개척할 준비가 되었다면** 지금 도전하세요!\n\n👉 [지원하기](http://wearegoodwill.kro.kr/career)\n\n---\n\n# 1. 모집 직무\n\n## 1-1. Business Operations 창업 직군 인재 채용 역할\n\n1. Business Operation Manager(OM)\n2. Executive Assistant\n3. Business Development(Biz Dev)\n\n# 2. 지원자격\n\n## 2-1. 지원대상\n\n1. 국적: 대한민국 국적자\n   - 복수국적자는 외국국적불행사서약 시 지원 가능. 단, 관련 서류는 국적법에 따라 관계 기관에 제출하여 처리 완료되어야 함. (’25년 04월 30일까지)\n2. 연령: 2007년 12월 31일 이후 ~ 2009년 12월 31일 이전 출생자\n3. 조건: GOODWILL(KE) Inc. 입사 시의 업무 협약 기간(2025년 3월 ~ 2026년 2월) 중 대전대신고등학교 52기, 53기 재학생으로서 Business Operation과 창업 역량을 겸비하고 업무 협약 기간 동안의 업무를 충실히 이행할 수 있는 자.\n4. GOODWILL(KE) Inc. Business Operations 창업 직군 신규입사 선발과정에서 탈락한 경우는 재지원 가능\n\n# 3. 선발일정\n\n| 모집공고 | 지원서 접수 | 서류 검토 | 1차 직무 인터뷰 | 2차 문화적합성 인터뷰 | 레퍼런스 체크 및 GOODWILL 입사 여부 재확인 |\n| --- | --- | --- | --- | --- | --- |\n| 2025. 03. 10. (월) | 2025. 03. 10. (월) - 03. 21. (금) | 2025. 03. 15. (월) - 03. 21. |  |  |  |\n\n- 선발 일정은 사정에 의해 변경될 수 있음\n\n# 4. 선발 방법 및 우대사항\n\n## 4-1. 선발방법\n\n| 구분 | 서류 검토 | 1차 직무 인터뷰 | 2차 문화적합성 인터뷰 |\n| --- | --- | --- | --- |\n| 평가 방법 | 지원서, 제출 서류(포트폴리오), 적격 여부 검토 | 심층면접(오프라인) |  |\n| 평가 항목 | 자기소개 | 지원서, 포트폴리오 기반의 질의응답 |  |\n\n### 1) 서류 검토 - 지원자의 지원서 검증을 통한 적격 여부 판별\n\n### 2) 1차 직무 인터뷰 - 대면 오프라인 질의응답 방식의 종합평가 실시\n\n- 평가 항목: 자기소개 및 업무 활동 계획, 포트폴리오 발표 기반 프로젝트 수행 능력, 업무의지 및 목표, 업무 계획 등 질의 응답 진행\n\n### 3) 2차 문화적합성 인터뷰\n\n## 4-2. 우대사항 (리틀 정주영 전형)\n\nGOODWILL(KE) Inc.는 효과적인 인재 영입을 위하여 아래의 우대사항을 충족하는 경우 ‘리틀 정주영’ 칭호를 부여하고 선발 절차를 간소화할 수 있습니다.\n\n1. GOODWILL(KE) Inc. 사칙에 따라 CEO 혹은 이에 준하는 GOODWILL C-Level의 경영진이 인정하는 ‘리틀 정주영’ 칭호를 받은 자.\n2. 중·고등학교 재학 중 ‘장관상급 이상’ 혹은 ‘국제 대회’ 수상 경력이 있으며, CEO 혹은 GOODWILL C-Level의 경영진이 인정하는 ‘리틀 정주영’ 칭호를 받은 자.\n\n# 5. 접수 안내\n\n## 5-1. 접수기간: 2025. 03. 10.(월) ~ 03. 21.(금), 18:00\n\n## 5-2. 접수방법: [GOODWILL(KE) Inc. 공식 웹사이트](http://wearegoodwill.kro.kr)에서 신청 접수\n\n# 6. 지원 내용\n\n- 신규 입사자 웰컴키트 지급\n- 프로젝트 활동비 지원 (**한도 무제한**)\n- KENTECH 입학 시 고교 학년별 1학점 인정\n- 창업 중심 대학 창업 보육 센터 이용 지원\n- 경영학 MBA, 컨설팅 등 대학 석사 수준의 멘토링 제공\n\n# 7. 지원자 유의사항\n\n- 지원서 작성 시 기재 오류, 누락으로 인한 불이익은 지원자 본인의 책임입니다.\n- 제출된 서류는 반환되지 않으며, 허위사실이 발견될 경우 합격이 취소될 수 있습니다.\n\n# 8. 과정설명회(홍보영상)\n\n자세한 과정 설명과 기업 홍보 영상은 유튜브 대전대신고등학교 채널 및 GOODWILL(KE) Inc. 공식 웹사이트에서 확인 가능합니다.\n\n# 9. 문의처\n\n- **대표이사(CEO):** s.h.putrats@wearegoodwill.kro.kr\n- **운영책임자(COO):** gw.hs@wearegoodwill.kro.kr',
      date: "2025년 03월 10일",
      views: "고승한 CEO",
    },
    {
      category: "채용공고",
      classific: "채용공고",
      title: "GOODWILL(KE) Inc. Finance & Marketing 직군 인재 채용",
      content:
        'GOODWILL(KE) Inc.에서 **새로운 금융 전략을 설계하고, 브랜드를 성장시킬 주인공**을 찾습니다! 🎯\n\n💰 **Finance** – 단순한 숫자 관리가 아닌, **회사의 가치를 극대화할 전략적 금융 설계**\n\n📈 **Marketing** – 제품이 아닌 **브랜드를 키우고, 시장을 움직이는 크리에이티브한 전략가**\n\n이제 막연한 ‘재무’, ‘마케팅’이 아니라 **실전에서 배우고 실행하며 성장할 준비가 된 당신**을 기다립니다.\n\n🔥 **"당신의 아이디어가 GOODWILL의 새로운 성장 동력이 될 수 있습니다!"**\n\n📢 2025년, **돈의 흐름을 읽고, 브랜드의 가치를 극대화할 준비가 되었다면?**\n\n지금 바로 도전하세요!\n\n👉 [지원하기](http://wearegoodwill.kro.kr/career)\n\n---\n\n# 1. 모집 직무\n\n## 1-1. Finance & Marketing 직군 인재 채용 역할\n\n1. **Finance**\n   - Equity Plan Administrator(주식 보상 계획 관리자)\n2. **Marketing**\n   - Market Operations Manager\n\n# 2. 지원자격\n\n## 2-1. 지원대상\n\n1. **국적**: 대한민국 국적자\n   - 복수국적자는 외국국적불행사서약 시 지원 가능. 관련 서류는 국적법에 따라 관계 기관에 제출하여 처리 완료되어야 함 (’25년 04월 30일까지)\n2. **연령**: 2007년 12월 31일 이후 ~ 2009년 12월 31일 이전 출생자\n3. **조건**: GOODWILL(KE) Inc. 입사 시의 업무 협약 기간(2025년 3월 ~ 2026년 2월) 중 대전대신고등학교 52기, 53기 재학생으로서 Finance 혹은 Marketing 역량을 겸비하고 업무 협약 기간 동안의 업무를 충실히 이행할 수 있는 자.\n4. **GOODWILL(KE) Inc. Finance & Marketing 직군 신규입사 선발과정에서 탈락한 경우 재지원 가능**\n\n# 3. 선발일정\n\n| 모집공고 | 지원서 접수 | 서류 검토 | 1차 직무 인터뷰 | 2차 문화적합성 인터뷰 | 레퍼런스 체크 및 GOODWILL 입사 여부 재확인 |\n| --- | --- | --- | --- | --- | --- |\n|  |  |  |  |  |  |\n\n- 선발 일정은 사정에 의해 변경될 수 있음\n\n# 4. 선발 방법 및 우대사항\n\n## 4-1. 선발방법\n\n| 구분 | 서류 검토 | 1차 직무 인터뷰 | 2차 문화적합성 인터뷰 |\n| --- | --- | --- | --- |\n| 평가 방법 | 지원서, 제출 서류, 적격 여부 검토 | 심층면접(오프라인) |  |\n| 평가 항목 | 자기소개 | 지원서, 포트폴리오 기반의 질의응답 |  |\n\n### 1) 서류 검토 - 지원자의 지원서 검증을 통한 적격 여부 판별\n\n### 2) 1차 직무 인터뷰 - 대면 오프라인 질의응답 방식의 종합평가 실시\n\n- 평가 항목: 자기소개 및 업무 활동 계획, 포트폴리오 발표 기반 프로젝트 수행 능력, 업무의지 및 목표, 업무 계획 등 질의 응답 진행\n\n### 3) 2차 문화적합성 인터뷰\n\n## 4-2. 우대사항 (리틀 정주영 전형)\n\nGOODWILL(KE) Inc.는 효과적인 인재 영입을 위하여 아래의 우대사항을 충족하는 경우 ‘리틀 정주영’ 칭호를 부여하고 선발 절차를 간소화할 수 있습니다.\n\n1. GOODWILL(KE) Inc. 사칙에 따라 CEO 혹은 이에 준하는 GOODWILL C-Level의 경영진이 인정하는 ‘리틀 정주영’ 칭호를 받은 자.\n2. 중·고등학교 재학 중 ‘장관상급 이상’ 혹은 ‘국제 대회’ 수상 경력이 있으며, CEO 혹은 GOODWILL C-Level의 경영진이 인정하는 ‘리틀 정주영’ 칭호를 받은 자.\n\n# 5. 접수 안내\n\n## 5-1. 접수기간: 2025. 03. 10.(월) ~ 03. 21.(금), 18:00\n\n## 5-2. 접수방법: [GOODWILL(KE) Inc. 공식 웹사이트](http://wearegoodwill.kro.kr)에서 신청 접수\n\n# 6. 지원 내용\n\n- 신규 입사자 웰컴키트 지급\n- 프로젝트 활동비 지원 (**한도 무제한**)\n- KENTECH 입학 시 고교 학년별 1학점 인정\n- 창업 중심 대학 창업 보육 센터 이용 지원\n- 경영학 MBA, 컨설팅 등 대학 석사 수준의 멘토링 제공\n\n# 7. 지원자 유의사항\n\n- 지원서 작성 시 기재 오류, 누락으로 인한 불이익은 지원자 본인의 책임입니다.\n- 제출된 서류는 반환되지 않으며, 허위사실이 발견될 경우 합격이 취소될 수 있습니다.\n\n# 8. 과정설명회(홍보영상)\n\n자세한 과정 설명과 기업 홍보 영상은 유튜브 대전대신고등학교 채널 및 GOODWILL(KE) Inc. 공식 웹사이트에서 확인 가능합니다.\n\n# 9. 문의처\n\n- **대표이사(CEO):** s.h.putrats@wearegoodwill.kro.kr\n- **운영책임자(COO):** gw.hs@wearegoodwill.kro.kr',
      date: "2025년 03월 10일",
      views: "고승한 CEO",
    },
    {
      category: "채용공고",
      classific: "채용공고",
      title: "2025년도 GOODWILL(KE) Inc. Design 직군 인재 채용 공고",
      content: "",
      date: "2025년 03월 10일",
      views: "고승한 CEO",
    },
    {
      category: "채용공고",
      classific: "채용공고",
      title: "GOODWILL(KE) Inc. Engineering & Data 직군 인재 채용",
      content:
        'GOODWILL(KE) Inc.에서 **기술로 세상을 바꿀 엔지니어**를 찾습니다! ⚡\n\n💻 **Software Engineer** – **코드를 통해 세상을 혁신할 개발자**\n\n🔩 **Hardware Engineer** – **아이디어를 현실로 구현할 창의적 엔지니어**\n\n⚡ **Energy Engineer** – **지속 가능한 미래를 설계할 에너지 전문가**\n\n이곳에서는 **단순한 개발이 아닌, 새로운 기술을 실험하고, 데이터로 문제를 해결하며, 스타트업의 속도로 성장하는 경험**을 하게 됩니다.\n\n**웹, 모바일, AI, 데이터 사이언스, IoT, 클라우드, 머신러닝, 임베디드 시스템**… 어떤 분야든 상관없습니다. **기술과 데이터를 활용해 새로운 패러다임을 만들고 싶은 당신!**\n\n🔥 **"기술로 새로운 가치를 창출하고 싶다면, 여기 당신을 위한 무대가 준비되어 있습니다!"**\n\n📢 **도전하는 자만이 성장한다.**\n\n2025년, GOODWILL에서 **혁신을 이끌어 갈 준비가 되었다면?**\n\n👉 [지원하기](http://wearegoodwill.kro.kr/career)\n\n---\n\n# 1. 선발 역할\n\n## 1-1. Engineering & Data 직군 인재 채용 역할\n\n1. **Software Engineer**\n   - Front-End Engineer\n   - Back-End Engineer\n   - Full-Stack Engineer\n   - Mobile(Android/iOS) Engineer\n2. **Hardware Engineer**\n   - Exploring Engineer(탐색 엔지니어)\n   - Mechatronics Engineer(메카트로닉스 엔지니어)\n3. **Energy Engineer**\n   - Head of Energy Systems Engineer(에너지 시스템 엔지니어)\n   - Grid Integration Engineer(전력망 통합 엔지니어)\n   - Sustainability Engineer(지속가능성 엔지니어)\n\n# 2. 지원자격\n\n## 2-1. 지원대상\n\n1. **국적**: 대한민국 국적자\n   - 복수국적자는 외국국적불행사서약 시 지원 가능. 관련 서류는 국적법에 따라 관계 기관에 제출하여 처리 완료되어야 함 (’25년 04월 30일까지)\n2. **연령**: 2007년 12월 31일 이후 ~ 2009년 12월 31일 이전 출생자\n3. **조건**: GOODWILL Inc. 입사 시의 업무 협약 기간(2025년 3월 ~ 2026년 2월) 중 대전대신고등학교 52, 53기 재학생으로서 Engineering 분야의 역량을 겸비하고 업무 협약 기간 동안의 업무를 충실히 이행할 수 있는 자.\n4. **GOODWILL Inc. Engineering & Data 직군 신규입사 선발과정에서 탈락한 경우 재지원 가능**\n\n# 3. 선발일정\n\n| 모집공고 | 지원서 접수 | 서류 검토 | 1차 코딩 테스트 | 2차 직무 인터뷰 | 3차 문화적합성 인터뷰 | 레퍼런스 체크 |\n| --- | --- | --- | --- | --- | --- | --- |\n|  |  |  |  |  |  |  |\n\n- 선발 일정은 사정에 의해 변경될 수 있음\n\n# 4. 선발 방법 및 우대사항\n\n## 4-1. 선발방법\n\n| 구분 | 서류 검토 | 1차 코딩 테스트 | 2차 직무 인터뷰 | 3차 문화적합성 인터뷰 |\n| --- | --- | --- | --- | --- |\n| 평가 방법 | 지원서, 제출 서류, 적격 여부 검토 | 온라인 테스트 | 심층면접(오프라인) |  |\n\n### 1) 서류 검토 - 지원자의 지원서 검증을 통한 적격 여부 판별\n\n### 2) 1차 코딩 테스트 - 지원자를 대상으로 온라인 코딩 테스트 실시\n\n### 3) 2차 직무 인터뷰 - 코딩 테스트 합격자를 대상으로 대면 오프라인 질의응답 방식의 종합평가\n\n### 4) 3차 문화적합성 인터뷰\n\n## 4-2. 우대사항(리틀 빌게이츠 전형)\n\nGOODWILL Inc.는 우수한 인재 영입을 위해 ‘리틀 빌게이츠’ 칭호를 부여하고, 선발 절차를 조정할 수 있습니다.\n\n1. CEO 혹은 이에 준하는 GOODWILL C-Level 경영진이 인정하는 ‘리틀 빌게이츠’ 칭호를 받은 자.\n2. 중/고등학교 재학 중 ‘장관상급 이상’ 혹은 ‘국제 대회’의 수상 경력이 있는 자.\n\n# 5. 접수 안내\n\n## 5-1. 접수기간: 2025. 03. 10.(월) ~ 03. 21.(금), 18:00\n\n## 5-2. 접수방법: [GOODWILL(KE) Inc. 공식 웹사이트](http://wearegoodwill.kro.kr)에서 신청 접수\n\n# 6. 지원 내용\n\n- 신규 입사자 웰컴키트 지급\n- 프로젝트 활동비 지원 (**한도 무제한**)\n- KENTECH 입학 시 고교 학년별 1학점 인정\n- 창업 중심 대학 창업 보육 센터 이용 지원\n- Microsoft Azure 크레딧 제공 (월 150달러 상당)\n- Visual Studio Enterprise 제공\n\n# 7. 지원자 유의사항\n\n- 지원서 작성 시 기재 오류, 누락으로 인한 불이익은 지원자 본인의 책임입니다.\n- 제출된 서류는 반환되지 않으며, 허위사실이 발견될 경우 합격이 취소될 수 있습니다.\n\n# 8. 문의처\n\n- **대표이사(CEO):** s.h.putrats@wearegoodwill.kro.kr\n- **운영책임자(COO):** gw.hs@wearegoodwill.kro.kr',
      date: "2025년 03월 10일",
      views: "고승한 CEO",
    },
    {
      category: "채용공고",
      classific: "채용공고",
      title: "GOODWILL(KE) Inc. Economics & Data Science 직군 인재 채용",
      content:
        'GOODWILL(KE) Inc.에서 **데이터와 경제적 통찰력으로 새로운 기회를 발굴할 인재**를 찾습니다! 🌍\n\n**단순한 데이터 분석이 아닌, 시장을 읽고 전략을 설계하며, 스타트업의 속도로 도전하는 GOODWILL에 지원하세요!**\n\n🔥 **"숫자로 미래를 예측하고, 데이터로 변화를 만들고 싶다면?"**\n\n💡 **경제와 데이터 사이에서 혁신적인 솔루션을 고민하는 당신!**\n\n📈 **데이터 기반 사고로 시장을 선도할 실전 경험을 원하는 당신!**\n\n📢 **2025년, GOODWILL과 함께 데이터 혁신을 주도할 준비가 되었다면?**\n\n👉 [지원하기](http://wearegoodwill.kro.kr/career)\n\n---\n\n# 1. 모집 직무\n\n## 1-1. Economics & Data Science 직군 인재 채용 역할\n\n1. **Director of Data Science**\n2. **Machine Learning Engineer(ML Engineer)**\n3. **Machine Learning Assistant(ML Assistant)**\n\n# 2. 지원자격\n\n## 2-1. 지원대상\n\n1. **국적**: 대한민국 국적자\n   - 복수국적자는 외국국적불행사서약 시 지원 가능. 관련 서류는 국적법에 따라 관계 기관에 제출하여 처리 완료되어야 함 (’25년 04월 30일까지)\n2. **연령**: 2007년 12월 31일 이후 ~ 2009년 12월 31일 이전 출생자\n3. **조건**: GOODWILL(KE) Inc. 입사 시의 업무 협약 기간(2025년 4월 ~ 2026년 2월) 중 대전대신고등학교에 재학 중인 학생으로서 Economics & Data Science 분야 역량을 겸비하고 업무 협약 기간 동안의 업무를 충실히 이행할 수 있는 자.\n4. **GOODWILL(KE) Inc. Economics & Data Science 직군 신규입사 선발과정에서 탈락한 경우 재지원 가능**\n\n# 3. 선발일정\n\n| 모집공고 | 지원서 접수 | 서류 검토 | 1차 직무 인터뷰 | 2차 문화적합성 인터뷰 | 레퍼런스 체크 |\n| --- | --- | --- | --- | --- | --- |\n|  |  |  |  |  |  |\n\n- 선발 일정은 사정에 의해 변경될 수 있음\n\n# 4. 선발 방법 및 우대사항\n\n## 4-1. 선발방법\n\n| 구분 | 서류 검토 | 1차 직무 인터뷰 | 2차 문화적합성 인터뷰 |\n| --- | --- | --- | --- |\n| 평가 방법 | 지원서, 제출 서류, 적격 여부 검토 | 심층면접(오프라인) |  |\n\n### 1) 서류 검토 - 지원자의 지원서 검증을 통한 적격 여부 판별\n\n### 2) 1차 직무 인터뷰 - 지원자를 대상으로 대면 오프라인 질의응답 방식의 종합평가\n\n### 3) 2차 문화적합성 인터뷰\n\n## 4-2. 우대사항(리틀 정주영 전형)\n\nGOODWILL(KE) Inc.는 효과적인 인재 영입을 위하여 ‘리틀 정주영’ 칭호를 부여하고, 선발 절차를 조정할 수 있습니다.\n\n1. CEO 혹은 이에 준하는 GOODWILL C-Level 경영진이 인정하는 ‘리틀 정주영’ 칭호를 받은 자.\n2. 중/고등학교 재학 중 ‘장관상급 이상’ 혹은 ‘국제 대회’ 수상 경력이 있으며, CEO 혹은 GOODWILL C-Level의 경영진이 인정하는 ‘리틀 정주영’ 칭호를 받은 자.\n\n# 5. 접수 안내\n\n## 5-1. 접수기간: 2025. 03. 10.(월) ~ 03. 21.(금), 18:00\n\n## 5-2. 접수방법: [GOODWILL(KE) Inc. 공식 웹사이트](http://wearegoodwill.kro.kr)에서 신청 접수\n\n# 6. 지원 내용\n\n- 신규 입사자 웰컴키트 지급\n- 프로젝트 활동비 지원 (**한도 무제한**)\n- KENTECH 입학 시 고교 학년별 1학점 인정\n- 창업 중심 대학 창업 보육 센터 이용 지원\n- Microsoft Azure 크레딧 제공 (월 150달러 상당)\n- Visual Studio Enterprise 제공\n\n# 7. 지원자 유의사항\n\n- 지원서 작성 시 기재 오류, 누락으로 인한 불이익은 지원자 본인의 책임입니다.\n- 제출된 서류는 반환되지 않으며, 허위사실이 발견될 경우 합격이 취소될 수 있습니다.\n\n# 8. 문의처\n\n- **대표이사(CEO):** s.h.putrats@wearegoodwill.kro.kr\n- **운영책임자(COO):** gw.hs@wearegoodwill.kro.kr',
      date: "2025년 03월 10일",
      views: "고승한 CEO",
    },
    {
      category: "채용공고",
      classific: "채용공고",
      title: "GOODWILL(KE) Inc. Legal 직군 인재 채용",
      content:
        'GOODWILL(KE) Inc.에서 **법과 비즈니스를 연결하여 새로운 패러다임을 만들 인재**를 찾습니다! 💼\n\n우리는 **스타트업의 빠른 성장 속에서 법적 리스크를 관리하고, 창업과 법무를 융합해 혁신적인 법률 전략을 수립하는 곳**입니다.\n\n🔥 **"법을 활용해 비즈니스의 판을 바꿀 준비가 되었나요?"**\n\n💡 **법률적 사고와 창의적인 문제 해결 능력을 겸비한 당신!**\n\n📑 **스타트업 환경에서 실전 경험을 쌓고 싶은 당신!**\n\n📢 **2025년, GOODWILL과 함께 법과 비즈니스의 경계를 허물 준비가 되었다면?**\n\n👉 [지원하기](http://wearegoodwill.kro.kr/career)\n\n---\n\n# 1. 모집 직무\n\n## 1-1. Legal 직군 인재 채용 역할\n\n1. **Contracts Manager and Administrator** (계약 행정 책임자)\n2. **Deputy General Counsel** (부 법무 책임자)\n\n# 2. 지원자격\n\n## 2-1. 지원대상\n\n1. **국적**: 대한민국 국적자\n   - 복수국적자는 외국국적불행사서약 시 지원 가능. 관련 서류는 국적법에 따라 관계 기관에 제출하여 처리 완료되어야 함 (’25년 04월 30일까지)\n2. **연령**: 2007년 12월 31일 이후 ~ 2009년 12월 31일 이전 출생자\n3. **조건**: GOODWILL(KE) Inc. 입사 시의 업무 협약 기간(2025년 3월 ~ 2026년 2월) 중 대전대신고등학교 52, 53기 재학생으로서 Legal 분야 역량을 겸비하고 창업과 법무를 연결하며 업무 협약 기간 동안 충실히 이행할 수 있는 자.\n4. **GOODWILL(KE) Inc. Legal 직군 신규입사 선발과정에서 탈락한 경우 재지원 가능**\n\n# 3. 선발일정\n\n| 모집공고 | 지원서 접수 | 서류 검토 | 1차 직무 인터뷰 | 2차 문화적합성 인터뷰 | 레퍼런스 체크 |\n| --- | --- | --- | --- | --- | --- |\n|  |  |  |  |  |  |\n\n- 선발 일정은 사정에 의해 변경될 수 있음\n\n# 4. 선발 방법 및 우대사항\n\n## 4-1. 선발방법\n\n| 구분 | 서류 검토 | 1차 직무 인터뷰 | 2차 문화적합성 인터뷰 |\n| --- | --- | --- | --- |\n| 평가 방법 | 지원서, 제출 서류, 적격 여부 검토 | 심층면접(오프라인) |  |\n\n### 1) 서류 검토 - 지원자의 지원서 검증을 통한 적격 여부 판별\n\n### 2) 1차 직무 인터뷰 - 지원자를 대상으로 대면 오프라인 질의응답 방식의 종합평가\n\n### 3) 2차 문화적합성 인터뷰\n\n## 4-2. 우대사항 (리틀 정주영 전형)\n\nGOODWILL(KE) Inc.는 효과적인 인재 영입을 위하여 ‘리틀 정주영’ 칭호를 부여하고, 선발 절차를 조정할 수 있습니다.\n\n1. CEO 혹은 이에 준하는 GOODWILL C-Level 경영진이 인정하는 ‘리틀 정주영’ 칭호를 받은 자.\n2. 중/고등학교 재학 중 ‘장관상급 이상’ 혹은 ‘국제 대회’ 수상 경력이 있으며, CEO 혹은 GOODWILL C-Level의 경영진이 인정하는 ‘리틀 정주영’ 칭호를 받은 자.\n\n# 5. 접수 안내\n\n## 5-1. 접수기간: 2025. 03. 10.(월) ~ 03. 21.(금), 18:00\n\n## 5-2. 접수방법: [GOODWILL(KE) Inc. 공식 웹사이트](http://wearegoodwill.kro.kr)에서 신청 접수\n\n# 6. 지원 내용\n\n- 신규 입사자 웰컴키트 지급\n- 프로젝트 활동비 지원 (**한도 무제한**)\n- KENTECH 입학 시 고교 학년별 1학점 인정\n- 창업 중심 대학 창업 보육 센터 이용 지원\n- 경영학 MBA, 컨설팅 등 ‘대학 석사 이상 ~ 현업 실무’ 수준의 교육 제공\n\n# 7. 지원자 유의사항\n\n- 지원서 작성 시 기재 오류, 누락으로 인한 불이익은 지원자 본인의 책임입니다.\n- 제출된 서류는 반환되지 않으며, 허위사실이 발견될 경우 합격이 취소될 수 있습니다.\n\n# 8. 문의처\n\n- **대표이사(CEO):** s.h.putrats@wearegoodwill.kro.kr\n- **운영책임자(COO):** gw.hs@wearegoodwill.kro.kr',
      date: "2025년 03월 10일",
      views: "고승한 CEO",
    },
    {
      category: "채용공고",
      classific: "채용공고",
      title: "GOODWILL(KE) Inc. Content 직군 인재 채용",
      content:
        'GOODWILL(KE) Inc.에서 **창의적인 콘텐츠로 세상을 움직일 인재**를 찾습니다! 🎥✨\n\n우리는 **단순한 영상 제작이 아닌, 기획부터 촬영, 편집까지 직접 참여하며 브랜드 스토리를 만들어가는 곳**입니다.\n\n🔥 **"당신의 아이디어가 콘텐츠가 되고, 콘텐츠가 트렌드를 만든다!"**\n\n💡 **콘텐츠를 통해 세상을 바꾸고 싶은 당신!**\n\n🎞️ **영상 기획, 촬영, 편집 중 한 가지 이상을 깊이 있게 탐구하고 싶은 당신!**\n\n📢 **2025년, GOODWILL과 함께 콘텐츠 혁신을 이끌어갈 준비가 되었다면?**\n\n👉 [지원하기](http://wearegoodwill.kro.kr/career)\n\n---\n\n# 1. 모집 직무\n\n## 1-1. Content 직군 인재 채용 역할\n\n1. **Content PD**\n2. **Content Design Assistant**\n\n# 2. 지원자격\n\n## 2-1. 지원대상\n\n1. **국적**: 대한민국 국적자\n   - 복수국적자는 외국국적불행사서약 시 지원 가능. 관련 서류는 국적법에 따라 관계 기관에 제출하여 처리 완료되어야 함 (’25년 04월 30일까지)\n2. **연령**: 2007년 12월 31일 이후 ~ 2009년 12월 31일 이전 출생자\n3. **조건**: GOODWILL(KE) Inc. 입사 시의 업무 협약 기간(2025년 4월 ~ 2026년 2월) 중 대전대신고등학교에 재학 중인 학생으로서 영상 기획, 촬영, 편집 역량 중 한 가지 이상을 겸비하고 업무 협약 기간 동안 충실히 이행할 수 있는 자.\n4. **GOODWILL(KE) Inc. Content 직군 신규입사 선발과정에서 탈락한 경우 재지원 가능**\n\n# 3. 선발일정\n\n| 모집공고 | 지원서 접수 | 서류 검토 | 1차 직무 인터뷰 | 2차 문화적합성 인터뷰 | 레퍼런스 체크 |\n| --- | --- | --- | --- | --- | --- |\n|  |  |  |  |  |  |\n\n- 선발 일정은 사정에 의해 변경될 수 있음\n\n# 4. 선발 방법 및 우대사항\n\n## 4-1. 선발방법\n\n| 구분 | 서류 검토 | 1차 직무 인터뷰 | 2차 문화적합성 인터뷰 |\n| --- | --- | --- | --- |\n| 평가 방법 | 지원서, 제출 서류, 적격 여부 검토 | 심층면접(오프라인) |  |\n\n### 1) 서류 검토 - 지원자의 지원서 검증을 통한 적격 여부 판별\n\n### 2) 1차 직무 인터뷰 - 지원자를 대상으로 대면 오프라인 질의응답 방식의 종합평가\n\n### 3) 2차 문화적합성 인터뷰\n\n## 4-2. 우대사항 (리틀 나영석 전형)\n\nGOODWILL(KE) Inc.는 효과적인 인재 영입을 위하여 ‘리틀 나영석’ 칭호를 부여하고, 선발 절차를 조정할 수 있습니다.\n\n1. CEO 혹은 이에 준하는 GOODWILL C-Level 경영진이 인정하는 ‘리틀 나영석’ 칭호를 받은 자.\n2. 중/고등학교 재학 중 뛰어난 영상 촬영·편집·기획 역량을 가진 자 중 CEO 혹은 GOODWILL C-Level의 경영진이 인정하는 ‘리틀 나영석’ 칭호를 받은 자.\n\n# 5. 접수 안내\n\n## 5-1. 접수기간: 2025. 03. 10.(월) ~ 03. 21.(금), 18:00\n\n## 5-2. 접수방법: [GOODWILL(KE) Inc. 공식 웹사이트](http://wearegoodwill.kro.kr)에서 신청 접수\n\n# 6. 지원 내용\n\n- 신규 입사자 웰컴키트 지급\n- 프로젝트 활동비 지원 (**한도 무제한**)\n- KENTECH 입학 시 고교 학년별 1학점 인정\n- 창업 중심 대학 창업 보육 센터 이용 지원\n- **대전외국어고등학교 영상 제작 동아리 STEP과의 협업 기회 제공**\n- **대전대신고등학교 방송 동아리 DCN과의 협업 기회 제공**\n\n# 7. 지원자 유의사항\n\n- 지원서 작성 시 기재 오류, 누락으로 인한 불이익은 지원자 본인의 책임입니다.\n- 제출된 서류는 반환되지 않으며, 허위사실이 발견될 경우 합격이 취소될 수 있습니다.\n\n# 8. 문의처\n\n- **대표이사(CEO):** s.h.putrats@wearegoodwill.kro.kr\n- **운영책임자(COO):** gw.hs@wearegoodwill.kro.kr',
      date: "2025년 03월 10일",
      views: "고승한 CEO",
    },
  ];

  const categoryCounts: Record<string, number> = {};
  announcements.forEach((item) => {
    categoryCounts[item.category] = (categoryCounts[item.category] || 0) + 1;
  });

  const totalCount = announcements.length;

  const categories = [
    { name: "전체", count: totalCount },
    ...Object.keys(categoryCounts).map((name) => ({
      name,
      count: categoryCounts[name],
    })),
  ];

  const [selectedCategory, setSelectedCategory] = useState<string>("전체");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredAnnouncements =
    selectedCategory === "전체"
      ? announcements.filter((item) =>
          item.title.toLowerCase().includes(searchQuery.toLowerCase()),
        )
      : announcements
          .filter((item) => item.category === selectedCategory)
          .filter((item) =>
            item.title.toLowerCase().includes(searchQuery.toLowerCase()),
          );

  const handleRowClick = (
    category: string,
    title: string,
    date: string,
    views: string,
    content: string,
  ) => {
    navigate(
      `/notice/${category}/${encodeURIComponent(title)}/${encodeURIComponent(date)}/${encodeURIComponent(views)}/${encodeURIComponent(content)}`,
    );
  };

  // 검색 실행 함수
  const handleSearch = () => {
    // 검색어가 바뀌면 자동으로 필터링됨
    setSearchQuery(searchQuery);
  };

  // 엔터키로 검색
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <DefaultLayout>
      <div className="announcement_box">
        <div className="announcement_header">
          <div className="header_text">ANNOUNCEMENT</div>
          <div className="header_inputbox">
            <input
              type="text"
              className="header_input"
              placeholder="제목으로 검색"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyPress={handleKeyPress} // 엔터키로 검색
            />
            <img
              src={magnifyIcon}
              className="announcement_magnify_icon"
              alt="검색 아이콘"
              onClick={handleSearch} // 클릭으로 검색
            />
          </div>
        </div>

        <div className="announcement_content">
          <div className="announcement_content_select">
            {categories.map((category) => (
              <div
                key={category.name}
                className="select_content"
                onClick={() => setSelectedCategory(category.name)}
                style={{
                  color:
                    selectedCategory === category.name ? "#000" : "#C4C4C4",
                  fontWeight:
                    selectedCategory === category.name ? "bold" : "normal",
                  cursor: "pointer",
                }}
              >
                <div className="text">{category.name}</div>
                <div
                  style={{
                    display: selectedCategory === category.name ? "" : "none",
                  }}
                  className="count"
                >
                  ({category.count})
                </div>
              </div>
            ))}
          </div>

          {/* 테이블 */}
          <table>
            <thead>
              <tr>
                <th scope="col">분류</th>
                <th scope="col">제목</th>
                <th scope="col">작성일</th>
                <th scope="col">작성자</th>
              </tr>
            </thead>
            <tbody>
              {filteredAnnouncements.length > 0 ? (
                filteredAnnouncements.map((item, index) => (
                  <tr
                    key={index}
                    onClick={() =>
                      handleRowClick(
                        item.category,
                        item.title,
                        item.date,
                        item.views,
                        item.content,
                      )
                    }
                    style={{ cursor: "pointer" }}
                  >
                    <td>{item.classific}</td>
                    <td>{item.title}</td>
                    <td>{item.date}</td>
                    <td>{item.views}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan={4}
                    style={{ textAlign: "center", color: "#7b7b7b" }}
                  >
                    해당 카테고리에 게시글이 없습니다.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Announcement;
