import React from "react";

function Banner({ numOfGuesses, answer }) {
  function HappyBanner() {
    return (
      <p className="happy banner">
        <strong>Congratulations! </strong>
        Got it in <strong>{numOfGuesses}.</strong>
      </p>
    );
  }

  function SadBanner() {
    return (
      <p className="sad banner">
        Sorry, the correct answer is <strong>{answer}.</strong>
      </p>
    );
  }

  return (
    <>
      {numOfGuesses < 6 && <HappyBanner />}
      {numOfGuesses === 6 && <SadBanner />}
    </>
  );
}

export default Banner;
