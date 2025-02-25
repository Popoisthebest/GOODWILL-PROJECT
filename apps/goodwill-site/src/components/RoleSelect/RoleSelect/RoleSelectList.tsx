import React from "react";
import {
  roleListContainer,
  roleItem,
  roleTitle,
  roleSubtitle,
  divider,
} from "./RoleSelectList.style.ts";

interface Role {
  id: number;
  roleName: string;
  jobGroup: string;
}

const roles: Role[] = [
  { id: 1, roleName: "역할명", jobGroup: "직군" },
  { id: 2, roleName: "역할명", jobGroup: "직군" },
  { id: 3, roleName: "역할명", jobGroup: "직군" },
  { id: 4, roleName: "역할명", jobGroup: "직군" },
];

const RoleSelectList: React.FC = () => {
  return (
    <div css={roleListContainer}>
      {roles.map((role, index) => (
        <div key={role.id}>
          <div css={roleItem}>
            <h2 css={roleTitle}>{role.roleName}</h2>
            <p css={roleSubtitle}>{role.jobGroup}</p>
          </div>
          {index !== roles.length - 1 && <div css={divider} />}{" "}
          {/* 마지막 항목에는 구분선 표시 안 함 */}
        </div>
      ))}
    </div>
  );
};

export default RoleSelectList;
