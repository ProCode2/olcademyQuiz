import { Route, Routes } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Quiz from "./components/Quiz";
import Quizzes from "./components/Quizzes";

function App() {
  return (
    <div className="App text-white gradient-bg-hero">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/quizzes" element={<Quizzes />} />
        <Route path="/quiz/:quizId" element={<Quiz />} />
      </Routes>
    </div>
  );
}

export default App;
