import { Routes, Route } from "react-router-dom";
import "./App.css";
import MainPage from "./pages/main-page/index";
import AboutPage from './pages/about-page/index';
import TravelPage from './pages/travel-page/index';
function App() {
  return (
    <div>

      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/travel" element={<TravelPage />} />
      </Routes>
    </div>
  );
}

export default App;
