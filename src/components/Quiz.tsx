import QuizQuestion from "./QuizQuestion";

const Quiz = () => {
  return (
    <div className="w-full h-full min-h-screen pt-28 px-4 pb-4">
      <main className="w-full h-full p-4 rounded-md white-glassmorphism">
        <h2 className="text-xl md:text-2xl font-bold mb-6">
          This is the Quiz Title
        </h2>
        <div className="">
          <QuizQuestion />
          <QuizQuestion />
          <QuizQuestion />
          <QuizQuestion />
          <QuizQuestion />
        </div>
        <button className="block mx-auto bg-blue-700 py-4 px-8 text-base text-white rounded-md shadow-md hover:bg-blue-600 mt-6">
          Submit
        </button>
      </main>
    </div>
  );
};

export default Quiz;
