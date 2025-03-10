import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import DefaultLayout from "../../layouts/DefaultLayout.tsx";

interface RoleData {
  title: string;
  markdown: string;
}

const RoleDetail = () => {
  const { roleName } = useParams(); // URL에서 역할명 가져오기
  const [markdownContent, setMarkdownContent] = useState<string>("");

  useEffect(() => {
    fetch("/data/roles.json") // public 폴더 내 JSON 불러오기
      .then((res) => res.json())
      .then((data: Record<string, RoleData>) => {
        if (roleName && data[roleName]) {
          setMarkdownContent(data[roleName].markdown);
        } else {
          setMarkdownContent("# 해당 역할을 찾을 수 없습니다.");
        }
      })
      .catch(() => {
        setMarkdownContent("# 데이터를 불러오는 중 오류가 발생했습니다.");
      });
  }, [roleName]);

  return (
    <>
      <DefaultLayout>
        <div className="markdown-body">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {markdownContent}
          </ReactMarkdown>
        </div>
      </DefaultLayout>
    </>
  );
};

export default RoleDetail;
