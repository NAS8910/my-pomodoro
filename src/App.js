import "./App.css";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import TaskPage from "./pages/TaskPage/TaskPage";

function App() {
  return (
    <div className="App bg-serene-white ">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/tasks" element={<TaskPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
