import { Routes, Route } from "react-router-dom";
import Popup from "./components/popup/Popup.tsx";
import RecruitmentForm from "./components/forms/RecruitmentForm";
import AdminDashboard from "./components/admin/AdminDashboard"; // 관리자 페이지

function App() {
  return (
    <div>
      <h1>GoodWill 채용 지원</h1>
      <Popup imageUrl="assets/29ed93aab6b48083-sticker.png" />
      <Routes>
        <Route path="/" element={<RecruitmentForm />} />
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
    </div>
  );
}

export default App;