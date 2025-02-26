// src/pages/NotionEmbed.tsx

const NotionEmbed = () => {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <iframe
        src="https://seunghanko.notion.site/2025-GOODWILL-Corp-Business-Sales-1-1a61eee67027802aafe2f949eff34fa2?pvs=4"
        style={{ width: "100%", height: "100%", border: "none" }}
        allowFullScreen
      />
    </div>
  );
};

export default NotionEmbed;
