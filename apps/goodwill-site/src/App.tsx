import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import RoleSelect from "./pages/RoleSelect.tsx";
import ApplicationFormPage from "./pages/ApplicationForm.tsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/role-select" element={<RoleSelect />} />
          <Route path="/write-application" element={<ApplicationFormPage />} />
      </Routes>
    </Router>
  );
}

export default App;
