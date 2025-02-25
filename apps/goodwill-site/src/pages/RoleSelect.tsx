// src/pages/Home.tsx
import { useForm, SubmitHandler } from "react-hook-form";
import DefaultLayout from "../layouts/DefaultLayout";
import mainImg from "../assets/role-select-page/main-img.jpg";
import RoleSelectSearchBar from "../components/RoleSelect/RoleSelectSearchBar";
import RoleSelectList from "../components/RoleSelect/RoleSelectList";
import {
  CheckBox,
  ImgContainer,
  KategorieRoleText,
  KategorieTitleText,
  MainImg,
  Overlay,
  RoleSelectContainer,
  KategorieSelectContainer,
  RoleSelectTitleContainer,
  TextContainer,
  KategorieContainer,
  SearchContainer,
  SearchImgStyle,
  SearchBar,
} from "../components/RoleSelect/RoleSelect.style.ts";

type Inputs = {
  example: string;
  exampleRequired: string;
};

const RoleSelectPage = () => {
  const categoryList = [
    { name: "Product" },
    { name: "Design" },
    { name: "Engineer" },
    { name: "Content" },
  ];

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

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
        <RoleSelectSearchBar />
        <RoleSelectList />
      </div>
    </DefaultLayout>
  );
};

export default RoleSelectPage;
