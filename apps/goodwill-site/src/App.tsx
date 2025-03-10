import EventMain from "./pages/EventMain"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EventDetail from "./pages/EventDetail";

function App() {

  return (
       <Router>
      <Routes>
        <Route path="/" element={<EventMain />} />
        <Route path="/event/:id" element={<EventDetail />} />
      </Routes>
    </Router>
  )
}

export default App
