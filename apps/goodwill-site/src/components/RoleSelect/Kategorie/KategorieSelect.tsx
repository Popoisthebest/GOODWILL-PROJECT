import {
  CheckBox,
  KategorieContainer,
  KategorieRoleText,
  KategorieSelectContainer,
  KategorieTitleText,
  RoleSelectTitleContainer,
} from "../Kategorie/Kategorie.style.ts";

const KategorieSelect = () => {
  const categoryList = [
    { name: "Product" },
    { name: "Design" },
    { name: "Engineer" },
    { name: "Content" },
  ];

  return (
    <div css={KategorieSelectContainer}>
      <div css={KategorieTitleText}>직군</div>
      <div css={RoleSelectTitleContainer}>
        {categoryList.map((item) => {
          return (
            <label key={item.name} css={KategorieContainer}>
              <input type="checkbox" id={item.name} css={CheckBox} />
              <label htmlFor={item.name}>
                <span css={KategorieRoleText}>{item.name}</span>
              </label>
            </label>
          );
        })}
      </div>
    </div>
  );
};

export default KategorieSelect;
