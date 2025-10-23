import React, { useState } from "react";
import Question from "./Question";

const questions = [
  {
    id: 1,
    prompt: "What is the capital of France?",
    answers: ["Berlin", "London", "Paris", "Madrid"],
  },
  {
    id: 2,
    prompt: "What is 2 + 2?",
    answers: ["3", "4", "5", "6"],
  },
];

export default function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [message, setMessage] = useState("");

  function handleAnswered(didAnswer) {
    if (didAnswer) {
      setMessage("You answered correctly!");
    } else {
      setMessage("Time ran out! Moving to next question.");
    }

    // Move to next question after 1 second
    setTimeout(() => {
      setMessage("");
      setCurrentIndex((idx) => (idx + 1) % questions.length);
    }, 1000);
  }

  return (
    <div style={{ padding: 20 }}>
      <h1>Trivia App</h1>
      <Question question={questions[currentIndex]} onAnswered={handleAnswered} />
      {message && <p>{message}</p>}
    </div>
  );
}
