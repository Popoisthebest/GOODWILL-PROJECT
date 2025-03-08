import React from "react";
import {
  CheckBox,
  KategorieContainer,
  KategorieRoleText,
  KategorieSelectContainer,
  KategorieTitleText,
  RoleSelectTitleContainer,
} from "./Kategorie.style.ts";

interface KategorieSelectProps {
  selectedCategories: string[];
  setSelectedCategories: (categories: string[]) => void;
}

const KategorieSelect: React.FC<KategorieSelectProps> = ({ selectedCategories, setSelectedCategories }) => {
  const categoryList = ["Product/Marketing", "Design", "Engineer", "Content"];

  const handleCategoryChange = (category: string) => {
    setSelectedCategories(
        selectedCategories.includes(category)
            ? selectedCategories.filter((c) => c !== category)
            : [...selectedCategories, category]
    );
  };

  return (
      <div css={KategorieSelectContainer}>
        <div css={KategorieTitleText}>직군</div>
        <div css={RoleSelectTitleContainer}>
          {categoryList.map((category) => (
              <label key={category} css={KategorieContainer}>
                <input
                    type="checkbox"
                    checked={selectedCategories.includes(category)}
                    onChange={() => handleCategoryChange(category)}
                    css={CheckBox}
                />
                <span css={KategorieRoleText}>{category}</span>
              </label>
          ))}
        </div>
      </div>
  );
};

export default KategorieSelect;
