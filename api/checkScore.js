const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
  measurementId: import.meta.env.VITE_MEASUREMENT_ID,
};

import { initializeApp } from "firebase/app";

import {
  collection,
  getDoc,
  getFirestore,
  query,
  where,
} from "firebase/firestore";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default async function handler(request, response) {
  const { quiz } = request.body;
  const answer = await getDoc(
    query(collection(db, "answers"), where("quizId", "==", quiz.quizId))
  );
  let answerKey = { ...answer.data(), id: answer.id };

  let marks = 0;
  let fullMarks = 0;

  Object.keys(answerKey.questions).forEach((qid) => {
    fullMarks += 1;
    let marksForCurrentQuestion = 1;
    for (let i = 1; i < 5; i++) {
      if (answerKey.questions[qid][`option${i}`] != quiz[qid][`option${i}`]) {
        marksForCurrentQuestion = 0;
      }
    }
    marks += marksForCurrentQuestion;
  });

  response.json({ marks, fullMarks });
}
