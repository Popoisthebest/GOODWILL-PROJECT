import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import TeamCulture from "./pages/TeamCulture.tsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/team-and-culture" element={<TeamCulture />} />
      </Routes>
    </Router>
  );
}

export default App;
