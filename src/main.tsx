import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { QuizContextProvider } from "./context/quizContext";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <QuizContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </QuizContextProvider>
  </React.StrictMode>
);
