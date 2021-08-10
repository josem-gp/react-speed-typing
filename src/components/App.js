import React from "react";

const App = () => {
  const [type, setType] = useState("");

  const handleChange = (event) => {
    const { value } = event.target;
    setType(value);
  };

  return (
    <div>
      <h1>How fast do you type?</h1>
      <textarea value={type} onChange={handleChange} />
      <h4>Time remaining: ???</h4>
      <button>Start</button>
      <h1>Word count: ???</h1>
    </div>
  );
};

export default App;
