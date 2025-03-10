import React from "react";

const containerStyle: React.CSSProperties = {
    maxWidth: "800px",
    margin: "0 auto",
    marginTop: "50px",
    padding: "20px",
    fontFamily: "Arial, sans-serif",
    display: "flex",
    flexDirection: "column",
};

const ArticleContainer: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div style={containerStyle}>{children}</div>;
};

export default ArticleContainer;
