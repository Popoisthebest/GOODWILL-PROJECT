import React from "react";
import {
  roleListContainer,
  roleTitle,
  roleSubtitle,
  divider,
  roleItemButton,
} from "./RoleSelectList.style.ts";
import { useNavigate } from "react-router-dom";

interface Role {
  id: number;
  roleName: string;
  jobGroup: string;
}

const roles: Role[] = [
  {
    id: 1,
    roleName: "Business Operations Manager(OM)",
    jobGroup: "Business Operations",
  },
  { id: 2, roleName: "Executive Assistant", jobGroup: "Business Operations" },
  {
    id: 3,
    roleName: "Business Development(Biz Dev)",
    jobGroup: "Business Operations",
  },
  {
    id: 4,
    roleName: "Equity Plan Administrator(주식 보상 계획 관리자)",
    jobGroup: "Finance & Marketing",
  },
  {
    id: 5,
    roleName: "Market Operations Manager",
    jobGroup: "Finance & Marketing",
  },
  { id: 6, roleName: "Visual Designer(VD)", jobGroup: "Design" },
  { id: 7, roleName: "Front-End Engineer", jobGroup: "Engineering" },
  { id: 8, roleName: "Back-End Engineer", jobGroup: "Engineering" },
  { id: 9, roleName: "Full-Stack Engineer", jobGroup: "Engineering" },
  { id: 10, roleName: "Mobile(Android/iOS) Engineer", jobGroup: "Engineering" },
  {
    id: 11,
    roleName: "Exploring Engineer(탐색 엔지니어)",
    jobGroup: "Engineering",
  },
  {
    id: 12,
    roleName: "Mechatronics Engineer(메카트로닉스 엔지니어)",
    jobGroup: "Engineering",
  },
  {
    id: 13,
    roleName: "Head of Energy Systems Engineer(에너지 시스템 엔지니어)",
    jobGroup: "Engineering",
  },
  {
    id: 14,
    roleName: "Grid Integration Engineer(전력망 통합 엔지니어)",
    jobGroup: "Engineering",
  },
  {
    id: 15,
    roleName: "Sustainability Engineer(지속가능성 엔지니어)",
    jobGroup: "Engineering",
  },
  {
    id: 16,
    roleName: "Director of Data Science",
    jobGroup: "Economics & Data Science",
  },
  {
    id: 17,
    roleName: "Machine Learning Engineer(ML Engineer)",
    jobGroup: "Economics & Data Science",
  },
  {
    id: 18,
    roleName: "Machine Learning Assistant(ML Assistant)",
    jobGroup: "Economics & Data Science",
  },
  {
    id: 19,
    roleName: "Contracts Manager and Administrator(계약 행정 책임자)",
    jobGroup: "Legal",
  },
  {
    id: 20,
    roleName: "Deputy General Counsel(부 법무 책임자)",
    jobGroup: "Legal",
  },
  { id: 21, roleName: "Content PD", jobGroup: "Content" },
  { id: 22, roleName: "Content Design Assistant", jobGroup: "Content" },
];

interface RoleSelectListProps {
  searchQuery: string;
  selectedCategories: string[];
}

const RoleSelectList: React.FC<RoleSelectListProps> = ({
  searchQuery,
  selectedCategories,
}) => {
  const navigate = useNavigate();

  // 🔹 필터링된 역할 목록 생성
  const filteredRoles = roles.filter((role) => {
    const normalizedQuery = searchQuery.trim().toLowerCase();
    return (
      role.roleName.toLowerCase().includes(normalizedQuery) &&
      (selectedCategories.length === 0 ||
        selectedCategories.includes(role.jobGroup))
    );
  });

  // 🔹 역할 리스트 렌더링
  return (
    <div css={roleListContainer}>
      {filteredRoles.map((role, index) => (
        <div key={role.id}>
          <button
            onClick={() => {
              navigate(
                `/${encodeURIComponent(role.roleName)}?jobGroup=${encodeURIComponent(role.jobGroup)}`,
              );
            }}
            css={roleItemButton}
          >
            <h2 css={roleTitle}>{role.roleName}</h2>
            <p css={roleSubtitle}>{role.jobGroup}</p>
          </button>
          {index !== filteredRoles.length - 1 && <div css={divider} />}{" "}
          {/* 마지막 요소에는 구분선 생략 */}
        </div>
      ))}
    </div>
  );
};

export default RoleSelectList;
