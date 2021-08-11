import React, { useState, useEffect, useRef } from "react";

const App = () => {
  const STARTING_TIME = 5;

  const [type, setType] = useState("");
  const [timeRemaining, setTimeRemaining] = useState(STARTING_TIME);
  const [shouldRun, setShouldRun] = useState(false);
  const [totalWords, setTotalWords] = useState(0);
  const textAreaRef = useRef(null);

  const handleChange = (event) => {
    const { value } = event.target;
    setType(value);
  };

  const calculateWords = () => {
    const wordsArr = type.trim().split(" ");
    const wordCount = wordsArr.filter((word) => word !== "").length;
    setTotalWords(wordCount);
  };

  const handleClick = () => {
    setShouldRun(true);
    restartGame();
    textAreaRef.current.focus();
  };

  const restartGame = () => {
    setType("");
    setTimeRemaining(STARTING_TIME);
    setTotalWords(0);
  };

  const endGame = () => {
    setShouldRun(false);
    calculateWords();
  };

  useEffect(() => {
    if (shouldRun && timeRemaining !== 0) {
      setTimeout(() => {
        setTimeRemaining(timeRemaining - 1);
      }, 1000);
    } else if (timeRemaining === 0) {
      endGame();
    }
  });

  return (
    <div>
      <h1>How fast do you type?</h1>
      <textarea
        ref={textAreaRef}
        disabled={!shouldRun}
        value={type}
        onChange={handleChange}
      />
      <h4>Time remaining: {timeRemaining}</h4>
      <button disabled={shouldRun} onClick={handleClick}>
        Start
      </button>
      <h1>Word count: {totalWords} </h1>
    </div>
  );
};

export default App;
