import ApplicationSummary from "../components/AdminDashboard/AppliocationSummary.tsx";
import ApplicationList from "../components/AdminDashboard/ApplicationList.tsx";
import DefaultLayout from "../layouts/DefaultLayout.tsx";

const AdminDashboard = () => {
  return (
    <DefaultLayout>
      <div css={{display: "flex", flexDirection: "column", padding: "0 72px 50px 72px"}}>
        <div css={{textAlign:"center", fontSize:"64px", fontWeight:"bold"}}>관리자 대시보드</div>
        <ApplicationSummary />
        <ApplicationList />
      </div>
    </DefaultLayout>
  );
};

export default AdminDashboard;
