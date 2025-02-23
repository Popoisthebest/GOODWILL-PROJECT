import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CheckCareer from "./pages/CheckCareer.tsx";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/career" element={<CheckCareer />} />
            </Routes>
        </Router>
    );
}

export default App;
