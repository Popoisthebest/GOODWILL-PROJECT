import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import RoleSelect from "./pages/RoleSelect.tsx";
import ApplicationFormPage from "./pages/ApplicationForm.tsx";
import RoleDetailBackEndEngineer from "./components/RoleInfo/RoleDetails/RoleDetailBackendEngineer.tsx";
import RoleDetailFrontEndEngineer from "./components/RoleInfo/RoleDetails/RoleDetailFrontendEngineer.tsx";
import RoleDetailFullStackEngineer from "./components/RoleInfo/RoleDetails/RoleDetailFullstackEngineer.tsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/career" element={<RoleSelect />} />
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
      </Routes>
    </Router>
  );
}

export default App;
