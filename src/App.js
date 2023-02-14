import { Routes, Route } from "react-router-dom";
import "./App.css";
import MainPage from "./pages/main-page/index";

function App() {
  return (
    <div>

      <Routes>
        <Route path={"/"} element={<MainPage />} />
      </Routes>
    </div>
  );
}

export default App;
