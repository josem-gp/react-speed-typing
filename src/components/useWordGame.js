import { useState, useEffect, useRef } from "react";

const useWordGame = (startingTime) => {
  const [type, setType] = useState("");
  const [timeRemaining, setTimeRemaining] = useState(startingTime);
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
    textAreaRef.current.disabled = false;
    textAreaRef.current.focus();
  };

  const restartGame = () => {
    setType("");
    setTimeRemaining(startingTime);
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

  return {
    textAreaRef,
    shouldRun,
    type,
    handleChange,
    timeRemaining,
    handleClick,
    totalWords,
  };
};

export default useWordGame;
