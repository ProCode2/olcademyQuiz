import React from "react";
import { Quiz } from "../types/quiz";

const QuizItem: React.FC<{ quiz: Quiz }> = ({ quiz }) => {
  return (
    <div className="blue-glassmorphism p-2 m-4 rounded-md flex flex-col w-64 h-64 justify-center items-center">
      <div className="w-full h-32 bg-gray-700 rounded-md px-2 mb-2"></div>
      <span className="uppercase font-semibold w-full truncate">
        {quiz.title}
      </span>
      <p className="flex flex-wrap justify-start items-start px-1 w-full mt-1">
        {quiz.tags.map((tag) => (
          <span
            key={tag}
            className="bg-slate-400 text-xs rounded shadow m-1 py-1 px-2"
          >
            {tag}
          </span>
        ))}
      </p>
    </div>
  );
};

export default QuizItem;
