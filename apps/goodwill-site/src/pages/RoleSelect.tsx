// src/pages/Home.tsx
import { useForm, SubmitHandler } from "react-hook-form";
import DefaultLayout from "../layouts/DefaultLayout";
import mainImg from "../assets/role-select-page/main-img.jpg";
import RoleSelectSearchBar from "../components/RoleSelect/RoleSelect/RoleSelectSearchBar.tsx";
import {
  ImgContainer,
  MainImg,
  Overlay,
  RoleSelectContainer,
  TextContainer,
} from "../components/RoleSelect/RoleSelect/RoleSelect.style.ts";
import KategorieSelect from "../components/RoleSelect/Kategorie/KategorieSelect.tsx";

type Inputs = {
  example: string;
  exampleRequired: string;
};

const RoleSelectPage = () => {
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
        <KategorieSelect />
        <RoleSelectSearchBar />
      </div>
    </DefaultLayout>
  );
};

export default RoleSelectPage;
