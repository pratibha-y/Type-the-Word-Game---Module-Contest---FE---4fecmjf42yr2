/*import React, { useState, useEffect } from 'react';
import "../styles/App.css"

const WORD_LIST = ['apple', 'banana', 'cherry', 'grape', 'orange'];

function App() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isDisplayWord, setIsDisplayWord] = useState(true);
  const [userInput, setUserInput] = useState("");
  const [isCorrect, setIsCorrect] = useState(null);
 // const [index, setIndex] = useState(0);
  useEffect(()=>{ const timeoutId =setTimeout(()=>{
    setIsDisplayWord(false);
  },500);
    return()=>{
    clearout(TimeoutId);
    };
                },[currebtWordIndex]);
  
  const
            
    }
                 
                                              
   
  return (
    <div class="mini-game-container">
      <h2 class="mini-game-title">Mini Game</h2>
      <p class="mini-game-word">{word}</p>
      <form class="mini-game-form" onSubmit={handleFormSubmit}>
        <input class="mini-game-input" type="text" value={userInput} onChange={handleInputChange} />
        <button class="mini-game-button" type="submit">Check Answer</button>
      </form>
      {result && (
        <>
          <p class="mini-game-result">{result}</p>
          <button class="mini-game-restart-button" onClick={handleRestartClick}>Restart</button>
        </>
      )}
    </div>
  );
}

export default App;*/

import React, { useState, useEffect } from 'react';
import "../styles/App.css";
const WORD_LIST = ["apple", "banana", "cherry", "orange"];

function App() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isDisplayingWord, setIsDisplayingWord] = useState(true);
  const [userInput, setUserInput] = useState("");
  const [isCorrect, setIsCorrect] = useState(null);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsDisplayingWord(false);
    }, 500);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [currentWordIndex]);

  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (userInput === WORD_LIST[currentWordIndex]) {
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
    }
  };

  const handleRestart = () => {
    setIsCorrect(null);
    setIsDisplayingWord(true);
    setUserInput("");
    setCurrentWordIndex((prevIndex) => prevIndex + 1);
  };

  const handleStart = () => {
    setIsCorrect(null);
    setIsDisplayingWord(true);
    setUserInput("");
    setCurrentWordIndex(0);
  };

  if (isDisplayingWord) {
    return <p>{WORD_LIST[currentWordIndex]}</p>;
  }

  return (
    <div>
      {isCorrect === true && <p>You won!</p>}
      {isCorrect === false && <p>You lost!</p>}
      <form onSubmit={handleSubmit}>
        <input type="text" value={userInput} onChange={handleInputChange} />
        <button type="submit">Submit</button>
      </form>
      <button onClick={handleRestart}>Restart</button>
      <button onClick={handleStart}>Start</button>
    </div>
  );
}

export default App;
