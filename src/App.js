import { Routes, Route } from "react-router-dom";
import "./App.css";
import MainPage from "./pages/main-page/index";
import AboutPage from "./pages/about-page/index";
import TravelPage from "./pages/travel-page/index";
import ManholePage from "./pages/manhole-page/index";
import ManholeDetail from "./pages/manhole-detail-page";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/travel" element={<TravelPage />} />
        <Route path="/manholes" element={<ManholePage />} />
        <Route path="/manhole/:id" element={<ManholeDetail />} />
      </Routes>
    </div>
  );
}

export default App;
