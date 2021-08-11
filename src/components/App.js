import React, { useState } from "react";

const App = () => {
  const [type, setType] = useState("");

  const handleChange = (event) => {
    const { value } = event.target;
    setType(value);
  };

  const calculateWords = () => {
    const wordsArr = type.trim().split(" ");
    return wordsArr.filter((word) => word !== "").length;
  };

  return (
    <div>
      <h1>How fast do you type?</h1>
      <textarea value={type} onChange={handleChange} />
      <h4>Time remaining: ???</h4>
      <button onClick={() => calculateWords}>Start</button>
      <h1>Word count: {calculateWords} </h1>
    </div>
  );
};

export default App;
