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
  { id: 1, roleName: "디자이너", jobGroup: "Design" },
  { id: 2, roleName: "프론트엔드 개발자", jobGroup: "Engineer" },
  { id: 3, roleName: "마케터", jobGroup: "Product/Marketing" },
  { id: 4, roleName: "콘텐츠 기획자", jobGroup: "Content" },
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

  const filteredRoles = roles.filter(
    (role) =>
      role.roleName.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (selectedCategories.length === 0 ||
        selectedCategories.includes(role.jobGroup)),
  );


  return (
    <div css={roleListContainer}>
      {filteredRoles.map((role, index) => (
        <div key={role.id}>
          <button
            onClick={() => {
              navigate(`/role-select`);
              alert("Role Select Page");
            }}
            css={roleItemButton}
          >
            <h2 css={roleTitle}>{role.roleName}</h2>
            <p css={roleSubtitle}>{role.jobGroup}</p>
          </button>
          {index !== filteredRoles.length - 1 && <div css={divider} />}{" "}
          {/* 마지막 항목에는 구분선 표시 안 함 */}
        </div>
      ))}
    </div>
  );
};

export default RoleSelectList;
