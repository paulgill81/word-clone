import React from "react";
import { checkGuess } from "../../game-helpers";
import { range } from "../../utils";

function Guess({ guess, answer }) {
  const result = checkGuess(guess, answer);

  return (
    <p className="guess">
      {range(5).map((num) => (
        <span
          key={num}
          className={`cell ${result && result[num].status}`}
        >
          {result && result[num].letter}
        </span>
      ))}
    </p>
  );
}

export default Guess;
