import React from "react";
import { Link } from "react-router-dom";
import QuizItem from "./QuizItem";

const Quizzes = () => {
  return (
    <div className="w-full h-full min-h-screen pt-28 px-4 pb-4">
      <main className="w-full h-full p-4 rounded-md white-glassmorphism">
        <h2 className="text-xl md:text-2xl font-bold mb-6">
          Quizzes You Can Take
        </h2>
        <div className="flex flex-wrap justify-center items-start md:justify-start h-full">
          <Link to="/quiz/123">
            <QuizItem />
          </Link>
          <Link to="/quiz/123">
            <QuizItem />
          </Link>
        </div>
      </main>
    </div>
  );
};

export default Quizzes;
