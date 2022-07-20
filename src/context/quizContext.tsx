import { collection, getDocs, query } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { IState, AppContext, QuizType } from "../types/quiz";

const initialState: IState = {
  quizzes: {},
};

export const quizContext = React.createContext<AppContext>({
  quizState: initialState,
  setQuizState: () => {},
});

export const QuizContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [quizState, setQuizState] = useState<IState>(initialState);

  const getQuizzes = async () => {
    let quizzes = await getDocs(query(collection(db, "quizzes")));
    let qzs = {} as {
      [key: string]: QuizType;
    };
    quizzes.docs.forEach((doc) => {
      const { tags, questions, title } = doc.data();
      qzs[doc.id as string] = {
        tags,
        questions,
        title,
      };
    });

    setQuizState && setQuizState((prev) => ({ ...prev, quizzes: qzs }));
  };
  useEffect(() => {
    getQuizzes();
  }, []);

  return (
    <quizContext.Provider value={{ quizState, setQuizState }}>
      {children}
    </quizContext.Provider>
  );
};
