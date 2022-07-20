import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import QuizItem from "./QuizItem";
import { db } from "../firebase";
import { quizContext } from "../context/quizContext";
import { AppContext, QuizType } from "../types/quiz";
import { collection, getDocs, query } from "firebase/firestore";

const Quizzes = () => {
  const { quizState } = useContext<AppContext>(quizContext);

  console.log(quizState);
  return (
    <div className="w-full h-full min-h-screen pt-28 px-4 pb-4">
      <main className="w-full h-full p-4 rounded-md white-glassmorphism">
        <h2 className="text-xl md:text-2xl font-bold mb-6">
          Quizzes You Can Take
        </h2>
        <div className="flex flex-wrap justify-center items-start md:justify-start h-full">
          {quizState?.quizzes &&
            Object.keys(quizState?.quizzes).length > 0 &&
            Object.keys(quizState?.quizzes).map((qz) => (
              <Link key={qz} to={`/quiz/${qz}`}>
                <QuizItem quiz={quizState?.quizzes[qz]} />
              </Link>
            ))}
        </div>
      </main>
    </div>
  );
};

export default Quizzes;
