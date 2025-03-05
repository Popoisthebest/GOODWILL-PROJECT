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
  { id: 1, roleName: "Front-End Engineer(FE)", jobGroup: "Engineering" },
  { id: 2, roleName: "Back-End Engineer(BE)", jobGroup: "Engineering" },
  { id: 3, roleName: "Full-Stack Engineer(FS)", jobGroup: "Engineering" },
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
              const jobGroup = role.jobGroup;
              navigate(`/${role.roleName}`, { state: jobGroup });
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
