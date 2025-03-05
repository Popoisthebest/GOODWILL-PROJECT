import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import RoleSelect from "./pages/RoleSelect.tsx";
import ApplicationFormPage from "./pages/ApplicationForm.tsx";
import RoleDetailBackEndEngineer from "./components/RoleInfo/RoleDetailPages/RoleDetailBackendEngineer.tsx";
import RoleDetailFrontEndEngineer from "./components/RoleInfo/RoleDetailPages/RoleDetailFrontendEngineer.tsx";
import RoleDetailFullStackEngineer from "./components/RoleInfo/RoleDetailPages/RoleDetailFullstackEngineer.tsx";
import VerifyEmailPage from "./components/ApplicationForm/EmailAuthentication/VerifyEmail/VerifyEmailPage.tsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/role-select" element={<RoleSelect />} />
        <Route path="/write-application" element={<ApplicationFormPage />} />
        <Route
          path="/Back-End Engineer(BE)"
          element={<RoleDetailBackEndEngineer />}
        />
        <Route
          path="/Front-End Engineer(FE)"
          element={<RoleDetailFrontEndEngineer />}
        />
        <Route
          path="/Full-Stack Engineer(FS)"
          element={<RoleDetailFullStackEngineer />}
        />
        <Route path="/verify-email" element={<VerifyEmailPage />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
