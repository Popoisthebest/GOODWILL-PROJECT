import React from "react";
import InfoBox from "../components/SubmissionFinished/infobox.tsx";
import MainButton from "../components/SubmissionFinished/to_main_button.tsx";

const TextSection: React.FC = () => {
  const containerStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    minHeight: "100vh",
    textAlign: "left",
  };

  const contentStyle: React.CSSProperties = {
    width: "680px",
    maxWidth: "90%",
  };

  const titleStyle: React.CSSProperties = {
    color: "#000",
    fontFamily: "Pretendard",
    fontSize: "43px",
    fontWeight: 600,
    marginTop: "100px",
    marginBottom: "24px",
  };

  const textStyle: React.CSSProperties = {
    color: "#000",
    fontFamily: "Pretendard",
    fontSize: "16px",
    fontWeight: 600,
    lineHeight: "1.6",
    marginBottom: "30px",
  };

  return (
    <body>
      <div style={containerStyle}>
        <div style={contentStyle}>
          <h1 style={titleStyle}>입사지원서 접수완료</h1>
          <br />
          <p style={textStyle}>
            GOODWILL Corp.에 관심을 갖고 지원해주셔서 감사드립니다.
            <br />
            <br />
            귀하께서 작성하신 지원서는 무사히 접수가 완료되었습니다.
            <br />
            내부에서 꼼꼼히 검토 후 결과를 안내드릴 예정입니다.
            <br />
            <br />
            채용 진행과 관련하여 궁금하신 점이 있으시면 (전화번호)로 편하게 문의
            주시길 바랍니다.
            <br />
            <br />
            감사합니다.
            <br />
            GOODWILL Corp. 담당자 드림
          </p>

          {/* InfoBox - 동적으로 값 전달 가능 */}
          <InfoBox applicantNumber="1234567890" role="Visual Designer" />

          {/* 하단 버튼 */}
          <MainButton />
        </div>
      </div>
    </body>
  );
};

export default TextSection;
