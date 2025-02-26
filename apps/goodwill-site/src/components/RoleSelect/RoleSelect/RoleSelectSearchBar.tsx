import React from "react";
import SearchImg from "../../../assets/role-select-page/search-icon.svg";
import {
  searchContainer,
  searchInput,
} from "./RoleSelectSearchBar.style.ts";

interface SearchBarProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

const RoleSelectSearchBar: React.FC<SearchBarProps> = ({
  searchQuery,
  setSearchQuery,
}) => {
  return (
    <form css={searchContainer} onSubmit={(e) => e.preventDefault()}>
      <img src={SearchImg} />
      <input
        type="text"
        placeholder="검색"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        css={searchInput}
      />
    </form>
  );
};

export default RoleSelectSearchBar;
