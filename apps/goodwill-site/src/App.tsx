import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CheckCareer from "./pages/CheckCareer.tsx";
import ApplicationFormPage from "./pages/ApplicationForm.tsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/career" element={<CheckCareer />} />
        <Route path="/application-form" element={<ApplicationFormPage />} />
      </Routes>
    </Router>
  );
}

export default App;
