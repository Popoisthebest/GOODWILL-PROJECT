import React from "react";
import { useNavigate } from "react-router-dom";
import MenuItem from "./MenuItem";
import { MenuContainer } from "./PopupMenu.style.ts";

const PopupMenu: React.FC = () => {
  const navigate = useNavigate(); // useNavigate 훅 사용

  return (
    <div css={MenuContainer}>
      <MenuItem onClick={() => navigate("/")} path="/">
        HOME
      </MenuItem>
      {/*<MenuItem onClick={() => navigate('/about')} path="/about">ABOUT</MenuItem>*/}
      {/*<MenuItem onClick={() => navigate('/articles')} path="/articles">ARTICLES</MenuItem>*/}
      {/*<MenuItem onClick={() => navigate('/benefits')} path="/benefits">BENEFITS</MenuItem>*/}
      {/*<MenuItem onClick={() => navigate('/login')} path="/login">LOGIN</MenuItem>*/}
    </div>
  );
};

export default PopupMenu;
