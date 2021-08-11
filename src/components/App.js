import React, { useState, useEffect } from "react";

const App = () => {
  const [type, setType] = useState("");
  const [timeRemaining, setTimeRemaining] = useState(5);

  const handleChange = (event) => {
    const { value } = event.target;
    setType(value);
  };

  const calculateWords = () => {
    const wordsArr = type.trim().split(" ");
    return wordsArr.filter((word) => word !== "").length;
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (timeRemaining !== 0) {
        setTimeRemaining(timeRemaining - 1);
      }
    }, 1000);
  });

  return (
    <div>
      <h1>How fast do you type?</h1>
      <textarea value={type} onChange={handleChange} />
      <h4>Time remaining: {timeRemaining}</h4>
      <button onClick={() => calculateWords}>Start</button>
      <h1>Word count: ??? </h1>
    </div>
  );
};

export default App;
