import React from "react";

function GuessInput({ status, handleGuess }) {
  const [guess, setGuess] = React.useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    handleGuess(guess);
    setGuess("");
  };

  return (
    <form
      className="guess-input-wrapper"
      onSubmit={handleSubmit}
    >
      <label
        htmlFor="guess-input"
        onSubmit={handleSubmit}
      >
        Enter guess:
      </label>
      <input
        minLength={5}
        maxLength={5}
        value={guess}
        onChange={(event) => {
          const nextGuess = event.target.value.toUpperCase();
          setGuess(nextGuess);
        }}
        id="guess-input"
        type="text"
        disabled={status !== "running"}
      />
    </form>
  );
}

export default GuessInput;
