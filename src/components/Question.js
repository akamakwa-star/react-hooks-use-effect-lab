import React, { useEffect, useState } from "react";

export default function Question({ question, onAnswered }) {
  const [timeRemaining, setTimeRemaining] = useState(10);

  useEffect(() => {
    if (timeRemaining === 0) {
      setTimeRemaining(10);
      onAnswered(false); // time ran out, mark unanswered
      return;
    }

    const timerId = setTimeout(() => {
      setTimeRemaining(timeRemaining - 1);
    }, 1000);

    return () => clearTimeout(timerId);
  }, [timeRemaining, onAnswered]);

  return (
    <div>
      <h2>{question.prompt}</h2>
      <p>{timeRemaining} seconds remaining</p>

      <ul>
        {question.answers.map((answer, i) => (
          <li key={i}>{answer}</li>
        ))}
      </ul>
    </div>
  );
}
