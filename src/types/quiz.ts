export interface QuizType {
  title: string;
  tags: string[];
  questions: QuizItemType[];
}

export interface QuizItemType {
  id: string;
  question: string;
  multipleCorrect: boolean;
  option1: string;
  option2: string;
  option3: string;
  option4: string;
}

export interface IState {
  quizzes: {
    [key: string]: QuizType;
  };
}

export interface AppContext {
  quizState: IState;
  setQuizState: React.Dispatch<React.SetStateAction<IState>>;
}

export interface AnswerType {
  quizId: string;
  questions: {
    [key: string]: {
      option1: boolean;
      option2: boolean;
      option3: boolean;
      option4: boolean;
    };
  };
}

export interface ResultType {
  marks: number;
  fullMarks: number;
}
