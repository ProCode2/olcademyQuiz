import React from "react";
import { QuizItemType } from "../types/quiz";

const QuizQuestion: React.FC<{
  question: QuizItemType;
  updateAnswer: (gid: string, option: string) => void;
}> = ({ question, updateAnswer }) => {
  return (
    <div className="m-4 blue-glassmorphism rounded-md p-3">
      <p className="text-xl font-bold mb-4">{question.question}</p>
      <div
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          updateAnswer(question.id, e.target.value)
        }
      >
        <div className="flex items-center mb-4">
          <input
            id={question.id}
            type="radio"
            value="option1"
            name={question.id}
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            htmlFor="default-radio-1"
            className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            {question.option1}
          </label>
        </div>
        <div className="flex items-center mb-4">
          <input
            id={question.id}
            type="radio"
            value="option2"
            name={question.id}
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            htmlFor="default-radio-1"
            className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            {question.option2}
          </label>
        </div>
        <div className="flex items-center mb-4">
          <input
            id={question.id}
            type="radio"
            value="option3"
            name={question.id}
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            htmlFor="default-radio-1"
            className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            {question.option3}
          </label>
        </div>
        <div className="flex items-center mb-4">
          <input
            id={question.id}
            type="radio"
            value="option4"
            name={question.id}
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            htmlFor="default-radio-1"
            className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            {question.option4}
          </label>
        </div>
      </div>
    </div>
  );
};

export default QuizQuestion;
