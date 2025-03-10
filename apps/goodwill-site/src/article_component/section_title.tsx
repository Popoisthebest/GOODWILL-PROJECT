// SectionTitle.tsx
import React from "react";

interface SectionTitleProps {
  title: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title }) => {
  return <h2 style={{ ...titleStyle, fontSize: "27px" }}>{title}</h2>;
};

const titleStyle: React.CSSProperties = {
  fontSize: "45px",
  fontWeight: "bold",
};

export default SectionTitle;
