import React from "react";
import MenuItem from "./MenuItem";
import { MenuContainer } from "./PopupMenu.style.ts";

const PopupMenu: React.FC = () => {
  return (
    <div css={MenuContainer}>
      <MenuItem onClick={() => alert("Home clicked")}>HOME</MenuItem>
      <MenuItem onClick={() => alert("About clicked")}>ABOUT</MenuItem>
      <MenuItem onClick={() => alert("Articles clicked")}>ARTICLES</MenuItem>
      <MenuItem onClick={() => alert("Benefits clicked")}>BENEFITS</MenuItem>
      <MenuItem onClick={() => alert("Login clicked")}>LOGIN</MenuItem>
    </div>
  );
};

export default PopupMenu;
