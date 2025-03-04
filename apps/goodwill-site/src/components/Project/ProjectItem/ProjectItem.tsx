import {
    dateText, itemContainer,
    itemImg,
    itemImgDiv,
    titleText,
} from "./ProjectItem.style.ts";

interface ProjectItemProps {
  itemImgSrc: string;
  date: string;
  title: string;
}

const ProjectItem: React.FC<ProjectItemProps> = ({
  itemImgSrc,
  date,
  title,
}) => {
  return (
    <div css={itemContainer}>
      <div css={itemImgDiv}>
        <img src={itemImgSrc} alt="ItemImg" css={itemImg} />
      </div>
      <div css={{ height: "24px" }}></div>
      <div css={dateText}>{date}</div>
      <div css={{ height: "12px" }}></div>
      <div css={titleText}>{title}</div>
    </div>
  );
};

export default ProjectItem;
