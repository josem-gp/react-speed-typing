import React from "react";
import useWordGame from "./useWordGame";

const App = () => {
  const {
    textAreaRef,
    shouldRun,
    type,
    handleChange,
    timeRemaining,
    handleClick,
    totalWords,
  } = useWordGame(5);

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
