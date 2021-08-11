import React, { useState, useEffect } from "react";

const App = () => {
  const [type, setType] = useState("");
  const [timeRemaining, setTimeRemaining] = useState(5);
  const [shouldRun, setShouldRun] = useState(false);
  const [totalWords, setTotalWords] = useState(0);

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
    handleRestart();
  };

  const handleRestart = () => {
    setType("");
    setTimeRemaining(5);
    setTotalWords(0);
  };

  useEffect(() => {
    if (shouldRun && timeRemaining !== 0) {
      setTimeout(() => {
        setTimeRemaining(timeRemaining - 1);
      }, 1000);
    } else if (timeRemaining === 0) {
      setShouldRun(false);
      calculateWords();
    }
  });

  return (
    <div>
      <h1>How fast do you type?</h1>
      <textarea value={type} onChange={handleChange} />
      <h4>Time remaining: {timeRemaining}</h4>
      <button onClick={handleClick}>Start</button>
      <h1>Word count: {totalWords} </h1>
    </div>
  );
};

export default App;
