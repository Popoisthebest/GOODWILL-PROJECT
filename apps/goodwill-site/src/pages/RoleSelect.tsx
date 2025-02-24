// src/pages/Home.tsx
import DefaultLayout from "../layouts/DefaultLayout";
import mainImg from "../assets/role-select-page/main-img.jpg";
import {
  ImgContainer,
  MainImg,
  Overlay,
  TextContainer,
} from "../components/RoleSelect/RoleSelect.style.ts";

const RoleSelectPage = () => {
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
    </DefaultLayout>
  );
};

export default RoleSelectPage;
