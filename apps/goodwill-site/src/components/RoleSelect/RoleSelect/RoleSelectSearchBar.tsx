import React from "react";
import { useForm } from "react-hook-form";
import SearchImg from "../../../assets/role-select-page/search-icon.svg";
import {RoleSelectDiv, searchContainer, searchInput} from "./RoleSelectSearchBar.style.ts";
import RoleSelectList from "./RoleSelectList.tsx";

interface SearchFormData {
  query: string;
}

const SearchBar: React.FC = () => {
  const { register, handleSubmit, reset } = useForm<SearchFormData>();

  const onSubmit = (data: SearchFormData) => {
    alert(`검색어: ${data.query}`);
    reset(); // 검색 후 입력 필드 초기화
  };

  return (
    <div css={RoleSelectDiv}>
      <form css={searchContainer} onSubmit={handleSubmit(onSubmit)}>
        <img src={SearchImg} />
        <input
          type="text"
          placeholder="검색"
          {...register("query")}
          css={searchInput}
        />
      </form>
      <RoleSelectList />
    </div>
  );
};

export default SearchBar;
