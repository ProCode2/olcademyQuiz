import React, { useState } from "react";
import { Quiz, IState, AppContext } from "../types/quiz";

const initialState: IState = {
  quizzes: {},
};

export const quizContext = React.createContext<AppContext | null>(null);

export const QuizContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [quizState, setQuizState] = useState<IState>(initialState);
  return (
    <quizContext.Provider value={{ quizState, setQuizState }}>
      {children}
    </quizContext.Provider>
  );
};
