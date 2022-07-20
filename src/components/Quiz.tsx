import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { quizContext } from "../context/quizContext";
import { AnswerType, QuizType } from "../types/quiz";
import QuizQuestion from "./QuizQuestion";

const Quiz = () => {
  const { quizId } = useParams();
  const { quizState } = useContext(quizContext);
  const [quiz, setQuiz] = useState<QuizType>({} as QuizType);
  const [answer, setAnswer] = useState<AnswerType>({} as AnswerType);

  const handleQuizSubmit = async () => {
    const res = await axios({
      method: "get",
      url: "/api/checkScore",
      data: {
        quiz: answer,
      },
    });
    console.log(res.data);
  };

  const newOptionSet = {
    option1: false,
    option2: false,
    option3: false,
    option4: false,
  };

  const updateAnswer = (qid: string, option: string) => {
    setAnswer((prev) => ({
      ...prev,
      questions: {
        ...prev?.questions,
        [qid]: {
          ...newOptionSet,
          [option]: true,
        },
      },
    }));
  };

  useEffect(() => {
    if (!quizId) return;
    let qz = quizState.quizzes[quizId];
    if (qz) {
      setQuiz(qz);
      let ans: AnswerType = {
        quizId: quizId,
        questions: {} as any,
      };
      qz.questions.forEach((ques) => {
        ans.questions[ques.id] = {
          option1: false,
          option2: false,
          option3: false,
          option4: false,
        };
      });
      setAnswer(ans);
    }
  }, [quizId, quizState]);
  return (
    <div className="w-full h-full min-h-screen pt-28 px-4 pb-4">
      <main className="w-full h-full p-4 rounded-md white-glassmorphism">
        <h2 className="text-xl md:text-2xl font-bold mb-6">{quiz?.title}</h2>
        <div className="">
          {quiz?.questions?.map((q) => (
            <QuizQuestion key={q.id} question={q} updateAnswer={updateAnswer} />
          ))}
        </div>
        <button
          onClick={handleQuizSubmit}
          className="block mx-auto bg-blue-700 py-4 px-8 text-base text-white rounded-md shadow-md hover:bg-blue-600 mt-6"
        >
          Submit
        </button>
      </main>
    </div>
  );
};

export default Quiz;
