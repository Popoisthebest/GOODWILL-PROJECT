import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import "./RoleDetail.css";
import DefaultLayout from "../../layouts/DefaultLayout.tsx";

interface RoleData {
  title: string;
  jobGroup: string;
  markdown: string;
}

const RoleDetail = () => {
  const { roleName } = useParams(); // URL에서 역할명 가져오기
  const navigate = useNavigate();
  const [roleData, setRoleData] = useState<RoleData | null>(null);

  useEffect(() => {
    fetch("/data/roles.json") // JSON 데이터 불러오기
      .then((res) => res.json())
      .then((data: Record<string, RoleData>) => {
        if (roleName && data[roleName]) {
          setRoleData(data[roleName]); // 해당 역할 데이터 저장
        }
      })
      .catch(() => {
        setRoleData(null);
      });
  }, [roleName]);

  return (
    <>
      <DefaultLayout>
        <div css={{ display: "flex", flexDirection: "row" }}>
          {/* 마크다운 역할 설명 */}
          <div className="markdown-body">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {roleData ? roleData.markdown : "# 해당 역할을 찾을 수 없습니다."}
            </ReactMarkdown>
          </div>
          <div css={{ width: "24px" }}></div>
          {/* 지원하기 버튼 위 컨테이너 */}
          <div className="right-card">
            <div className="card">
              <div className="card-content">
                {/* 역할 타이틀 표시 */}
                <div className="card-item">
                  <div className="card-label">직무</div>
                  <div className="card-value">
                    {roleData
                      ? roleData.jobGroup
                      : "직무 정보를 찾을 수 없습니다."}
                  </div>
                </div>
                <div className="card-item">
                  <div className="card-label">역할</div>
                  <div className="card-value">
                    {roleData
                      ? roleData.title
                      : "역할 정보를 찾을 수 없습니다."}
                  </div>
                </div>
                <div className="card-image"></div>
              </div>
            </div>
            {/* 지원하기 버튼 */}
            <button
              onClick={() =>
                navigate("/write-application", {
                  state: { roleName, jobGroup: roleData?.jobGroup },
                })
              }
              className="apply-button"
            >
              지원하기
            </button>
          </div>
        </div>
      </DefaultLayout>
    </>
  );
};

export default RoleDetail;
