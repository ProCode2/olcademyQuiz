const firebaseConfig = {
  apiKey: process.env.VITE_API_KEY,
  authDomain: process.env.VITE_AUTH_DOMAIN,
  projectId: process.env.VITE_PROJECT_ID,
  storageBucket: process.env.VITE_STORAGE_BUCKET,
  messagingSenderId: process.env.VITE_MESSAGING_SENDER_ID,
  appId: process.env.VITE_APP_ID,
  measurementId: process.env.VITE_MEASUREMENT_ID,
};

import { initializeApp } from "firebase/app";

import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// this is vercel's serverless functions that runs on demand and
// evaluates the score by matching submitted answers with answers stored in the firestore database
export default async function handler(request, response) {
  const { quiz } = request.body;
  if (!quiz?.quizId) return response.status(400).send("quizId is required");
  // get correct answers
  const answer = await getDocs(
    query(collection(db, "answers"), where("quizId", "==", quiz.quizId))
  );
  if (answer.empty) return response.send("Invalid Answers");

  // correct answer key in a shape similar to submitted answers
  let answerKey = { ...answer.docs[0].data(), id: answer.docs[0].id };

  let marks = 0;
  let fullMarks = 0;

  Object.keys(answerKey.questions).forEach((qid) => {
    // full marks is the number of questions in a quiz
    fullMarks += 1;

    // default marks for question if answered correctly
    let marksForCurrentQuestion = 1;
    for (let i = 1; i < 5; i++) {
      if (
        answerKey.questions[qid][`option${i}`] !=
        quiz.questions[qid][`option${i}`]
      ) {
        // not answered correctly make it 0
        marksForCurrentQuestion = 0;
      }
    }
    // add it to total obtained marks
    marks += marksForCurrentQuestion;
  });

  return response.json({ marks, fullMarks });
}
