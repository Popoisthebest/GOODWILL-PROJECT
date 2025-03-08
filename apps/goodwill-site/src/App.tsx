import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import TeamCulture from "./pages/TeamCulture.tsx";
import Announcement from "./pages/Announcement.tsx";
import NoticeDetail from "./pages/NoticeDetail.tsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/team-and-culture" element={<TeamCulture />} />
          <Route path="/announcement" element={<Announcement />} />
          <Route path="/notice/:category/:title/:date/:views/:content" element={<NoticeDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
