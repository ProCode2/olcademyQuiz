export interface Quiz {
  title: string;
  tags: string[];
  questions: QuizItem[];
}

export interface QuizItem {
  question: string;
  multipleCorrect: boolean;
  option1: string;
  option2: string;
  option3: string;
  option4: string;
}

export interface IState {
  quizzes: {
    [key: string]: Quiz;
  };
}

export interface AppContext {
  quizState: IState;
  setQuizState: React.Dispatch<React.SetStateAction<IState>>;
}
