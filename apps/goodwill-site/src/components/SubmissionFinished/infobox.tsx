import React from "react";

interface InfoBoxProps {
  applicantNumber: string;
  role: string;
}

const InfoBox: React.FC<InfoBoxProps> = ({ applicantNumber, role }) => {
  const infoBoxStyle: React.CSSProperties = {
    width: "100%",
    borderRadius: "8px",
    border: "1px solid #E0E0E0",
    display: "flex",
    flexDirection: "column",
    marginBottom: "32px",
  };

  const rowStyle: React.CSSProperties = {
    display: "flex",
    gap: "35px",
    alignItems: "center",
    padding: "15px 23px",
  };

  const separatorStyle: React.CSSProperties = {
    width: "calc(100% - 40px)",
    borderBottom: "1px solid #E0E0E0",
    margin: "0 auto",
  };

  const labelStyle: React.CSSProperties = {
    fontWeight: 500,
    color: "#888",
    fontSize: "14px",
  };

  const valueStyle: React.CSSProperties = {
    fontSize: "14px",
    color: "#000",
    fontWeight: 500,
    textAlign: "left",
  };

  return (
    <div style={infoBoxStyle}>
      <div style={rowStyle}>
        <div style={labelStyle}>수험번호</div>
        <div style={valueStyle}>{applicantNumber}</div>
      </div>
      <div style={separatorStyle}></div>
      <div style={rowStyle}>
        <div style={labelStyle}>지원 역할</div>
        <div style={valueStyle}>{role}</div>
      </div>
    </div>
  );
};

export default InfoBox;
