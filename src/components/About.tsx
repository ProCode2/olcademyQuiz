import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="w-full h-screen pt-28 px-4">
      <main className="w-full h-full flex flex-col justify-center items-center">
        <h2 className="text-2xl md:text-4xl lg:text-6xl text-gradient font-bold uppercase text-center">
          Olcademy Quiz
        </h2>
        <p className="text-center max-w-5xl mt-3 text-base md:text-xl">
          This is a take home assignment given by Olcademy. The Problem
          Statement is "You need to develop a quiz page where in the data will
          be fetched from the database". For the Frontend I have used ReactJs. I
          am using firebase firestore to store the quiz data. The submitted
          answers are being verified by a serverless function deployed with
          vercel.
        </p>
      </main>
    </div>
  );
};

export default About;
