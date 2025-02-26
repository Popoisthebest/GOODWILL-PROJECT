import { useState } from "react";
import { motion } from "framer-motion";
import DefaultLayout from "../layouts/DefaultLayout";
import mainImg from "../assets/role-select-page/main-img.jpg";
import RoleSelectSearchBar from "../components/RoleSelect/RoleSelect/RoleSelectSearchBar";
import RoleSelectList from "../components/RoleSelect/RoleSelect/RoleSelectList";
import KategorieSelect from "../components/RoleSelect/Kategorie/KategorieSelect";
import {
  ImgContainer,
  MainImg,
  Overlay,
  RoleSelectContainer,
  RoleSelectDiv,
  TextContainer,
  RoleSearchSelectDiv,
} from "../components/RoleSelect/RoleSelect/RoleSelect.style";

const RoleSelectPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <DefaultLayout>
        <div css={RoleSelectDiv}>
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
            <KategorieSelect
              selectedCategories={selectedCategories}
              setSelectedCategories={setSelectedCategories}
            />
            <div css={RoleSearchSelectDiv}>
              <RoleSelectSearchBar
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
              />
              <RoleSelectList
                searchQuery={searchQuery}
                selectedCategories={selectedCategories}
              />
            </div>
          </div>
        </div>
      </DefaultLayout>
    </motion.div>
  );
};

export default RoleSelectPage;
