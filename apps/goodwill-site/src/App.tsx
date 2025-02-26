import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "./pages/Home";
import CheckCareer from "./pages/CheckCareer.tsx";
import RoleSelectPage from "./pages/RoleSelect.tsx";

function App() {
  return (
    <AnimatePresence mode="wait">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/career" element={<CheckCareer />} />
          <Route path="/role-select" element={<RoleSelectPage />} />
        </Routes>
      </Router>
    </AnimatePresence>
  );
}

export default App;
