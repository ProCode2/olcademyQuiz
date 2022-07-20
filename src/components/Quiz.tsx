import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { quizContext } from "../context/quizContext";
import { AnswerType, QuizType, ResultType } from "../types/quiz";
import Loader from "./Loader";
import QuizQuestion from "./QuizQuestion";

const Quiz = () => {
  const { quizId } = useParams();
  const { quizState } = useContext(quizContext);
  const [quiz, setQuiz] = useState<QuizType>({} as QuizType);
  const [answer, setAnswer] = useState<AnswerType>({} as AnswerType);
  const [showResult, setShowResult] = useState(false);
  const [result, setResult] = useState<ResultType>({ fullMarks: 0, marks: 0 });
  const [loading, setLoading] = useState(false);

  // get scores from vercel's serverless function
  const handleQuizSubmit = async () => {
    setLoading(true);
    try {
      const res = await axios({
        method: "post",
        url: "/api/checkScore",
        data: {
          quiz: answer,
        },
      });
      console.log(res.data);
      setLoading(false);
      setShowResult(true);
      setResult(res.data);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  // needed in line 53
  const newOptionSet = {
    option1: false,
    option2: false,
    option3: false,
    option4: false,
  };

  // when a radio button is clicked to select an answer
  // update the answer according to the questions id (qid)
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
        ans.questions[ques.id] = newOptionSet;
      });
      setAnswer(ans);
    }
  }, [quizId, quizState]);
  return (
    <div className="w-full h-full min-h-screen pt-28 px-4 pb-4 relative">
      <main className="w-full h-full p-4 rounded-md white-glassmorphism">
        <h2 className="text-xl md:text-2xl font-bold mb-6">{quiz?.title}</h2>
        <div className="">
          {quiz?.questions?.length ? (
            quiz?.questions?.map((q) => (
              <QuizQuestion
                key={q.id}
                question={q}
                updateAnswer={updateAnswer}
              />
            ))
          ) : (
            <div className="w-full h-full p-4 flex justify-center items-center">
              <Loader />
            </div>
          )}
        </div>
        <button
          onClick={handleQuizSubmit}
          className="flex mx-auto bg-blue-700 py-4 px-8 text-base text-white rounded-md shadow-md hover:bg-blue-600 mt-6"
        >
          <span className="mr-3">Submit</span>
          {loading && <Loader />}
        </button>
      </main>
      {showResult && (
        <div
          style={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}
          className="absolute z-50 w-full h-full top-0 left-0 flex justify-center items-center"
        >
          <div className="w-full md:w-80 h-80 rounded-md shadow bg-white text-black flex justify-center items-center flex-col">
            <h3 className="text-slate-900 text-2xl text-center font-bold mb-4">
              Your Score
            </h3>
            <div className="w-32 h-32 border-4 border-green-600 rounded-full flex flex-col justify-center items-center font-bold text-xl bg-slate-800 text-white divide-y-4 divide-white">
              <span className="w-full text-center">{result.marks}</span>
              <span className="w-full text-center">{result.fullMarks}</span>
            </div>
            <Link to="/quizzes">
              <button className="block mx-auto bg-blue-700 py-4 px-8 text-base text-white rounded-md shadow-md hover:bg-blue-600 mt-6">
                Go back
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Quiz;
