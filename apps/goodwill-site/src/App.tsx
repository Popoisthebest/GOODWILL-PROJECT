import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RoleSelect from "./pages/RoleSelect.tsx";
import RoleDetail from "./components/RoleInfo/RoleDetail.tsx";
import ApplicationFormPage from "./pages/ApplicationForm.tsx";
// import TeamCulture from "./pages/TeamCulture.tsx";
import Announcement from "./pages/Announcement.tsx";
import NoticeDetail from "./pages/NoticeDetail.tsx";
// import Article from "./pages/Article.tsx";
// import Project from "./pages/Project.tsx";
import SubmissionFinished from "./pages/SubmissionFinished.tsx";
import MainAbout from "./pages/About.tsx";
import Main from "./pages/Main.tsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route index element={<Main />} />
        <Route path="/career" element={<RoleSelect />} />
        <Route path="/:roleName" element={<RoleDetail />} />
        <Route path="/about" element={<MainAbout />} />
        <Route path="/write-application" element={<ApplicationFormPage />} />
        <Route path="/submission-finished" element={<SubmissionFinished />} />

        {/*<Route path="/team-and-culture" element={<TeamCulture />} />*/}
        {/*<Route path="/project" element={<Project />} />*/}
        <Route path="/announcement" element={<Announcement />} />
        <Route
          path="/notice/:category/:title/:date/:views/:content"
          element={<NoticeDetail />}
        />
        {/*<Route path="/article" element={<Article />} />*/}
      </Routes>
    </Router>
  );
}

export default App;
