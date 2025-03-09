import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TeamCulture from "./pages/TeamCulture.tsx";
import Announcement from "./pages/Announcement.tsx";
import NoticeDetail from "./pages/NoticeDetail.tsx";
import Article from "./pages/Article.tsx";
import Project from "./pages/Project.tsx";
import Main from "./pages/Main.tsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/team-and-culture" element={<TeamCulture />} />
        <Route path="/project" element={<Project />} />
        <Route path="/announcement" element={<Announcement />} />
        <Route
          path="/notice/:category/:title/:date/:views/:content"
          element={<NoticeDetail />}
        />
        <Route path="/article" element={<Article />} />
      </Routes>
    </Router>
  );
}

export default App;
