import Announcement from "./pages/announcement";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NoticeDetail from "./pages/NoticeDetail";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Announcement />} />
        <Route path="/notice/:category/:title/:date/:views/:content" element={<NoticeDetail />} />
      </Routes>
    </Router>
  )
}

export default App;