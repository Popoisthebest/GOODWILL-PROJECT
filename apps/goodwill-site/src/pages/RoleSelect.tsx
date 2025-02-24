// src/pages/Home.tsx
import DefaultLayout from "../layouts/DefaultLayout";
import mainImg from "../assets/role-select-page/main-img.jpg";
import {
  CheckBox,
  ImgContainer,
  KategorieRoleText,
  KategorieTitleText,
  MainImg,
  Overlay,
  RoleSelectContainer,
  RoleSelectTitle,
  TextContainer,
} from "../components/RoleSelect/RoleSelect.style.ts";

const RoleSelectPage = () => {
  const categoryList = [
    { name: "Product" },
    { name: "Design" },
    { name: "Engineer" },
    { name: "Content" },
  ];

  return (
    <DefaultLayout>
      <div css={ImgContainer}>
        <img src={mainImg} alt="role-select-page-main-img" css={MainImg} />
        <div css={Overlay}>
          <div css={TextContainer}>
            자신의 일에
            <br />
            진심인 분을 찾습니다.
          </div>
        </div>
      </div>
      <div css={RoleSelectContainer}>
        <div css={KategorieTitleText}>직군</div>
        <div css={RoleSelectTitle}>
          {categoryList.map((item) => {
            return (
              <label className="checkboxLabel" key={item.name}>
                <input type="checkbox" id={item.name} css={CheckBox} />
                <label htmlFor={item.name}>
                  <span css={KategorieRoleText}>{item.name}</span>
                </label>
              </label>
            );
          })}
        </div>
      </div>
    </DefaultLayout>
  );
};

export default RoleSelectPage;
