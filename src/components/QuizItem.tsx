import React from "react";

const QuizItem = () => {
  return (
    <div className="blue-glassmorphism p-2 m-4 rounded-md flex flex-col w-64 h-64 justify-center items-center">
      <div className="w-full h-32 bg-gray-700 rounded-md px-2 mb-2"></div>
      <span className="uppercase font-semibold w-full truncate">
        Acing Aptitude - General, Reasoningsdhasbdksad jsdkjsbfkjsbfkjsbf
        bakskasjb jasdjsadkjsalsl
      </span>
      <p className="flex flex-wrap justify-start items-start px-1 w-full mt-1">
        <span className="bg-slate-400 text-xs rounded shadow m-1 py-1 px-2">
          tag
        </span>
        <span className="bg-slate-400 text-xs rounded shadow m-1 py-1 px-2">
          tag
        </span>
        <span className="bg-slate-400 text-xs rounded shadow m-1 py-1 px-2">
          tag
        </span>
        <span className="bg-slate-400 text-xs rounded shadow m-1 py-1 px-2">
          tag
        </span>
      </p>
    </div>
  );
};

export default QuizItem;
