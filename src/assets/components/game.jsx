import React from "react";
import { useState  } from "react";
import {useEffect} from "react";



function Game() {
  const [userScore, setUserScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
  const [userChoice, setUserChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState(null);
  

  const playGame = (choice) => {
    const choices = ["Rock", "Paper", "Scissor"];
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    setUserChoice(choice);
    setComputerChoice(computerChoice);

    if(choice === computerChoice) {
      setResult("It's a Draw!");
    } else if ((choice === "Rock" && computerChoice === "Scissor") ||
               (choice === "Paper" && computerChoice === "Rock") ||
               (choice === "Scissor" && computerChoice === "Paper")) {
      setResult("You Win!");
      setUserScore(userScore + 1);
    } else {
      setResult("You Lose!");
      setComputerScore(computerScore + 1);
    }
    
    const getHighScore = localStorage.getItem("highScore");
    if (getHighScore) {
       setHighScore(parseInt(getHighScore));
     }
  };

  useEffect(() => {
    if (userScore > highScore) {
      setHighScore(userScore);
     // localStorage.removeItem("highScore");
     localStorage.setItem("highScore", userScore.toString());
    }
  }, [userScore, highScore]);

  

  return (
     <div className="min-h-screen w-full bg-gradient-to-br from-cyan-500 to-[#000a28] flex items-center justify-center p-5">

      {/* CARD */}
      <div className="w-full max-w-2xl bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl p-8 flex flex-col items-center gap-10">

        {/* TITLE */}
        <h1 className="text-5xl font-extrabold text-white text-center leading-tight">
          Welcome to <br />
          <span className="text-yellow-400 drop-shadow-lg">
            Rock Paper Scissor
          </span>
        </h1>

        {/* SCORE BOARD */}
        <div className="grid grid-cols-3 gap-6 w-full">

          <div className="bg-white/10 rounded-2xl p-5 text-center hover:scale-105 transition">
            <p className="text-gray-300">Your Score</p>
            <h2 className="text-4xl font-bold text-yellow-700">
             {userScore.toString().padStart(2, '0')}
            </h2>
          </div>

          <div className="bg-white/10 rounded-2xl p-5 text-center hover:scale-105 transition">
            <p className="text-gray-300">High Score</p>
            <h2 className="text-4xl font-bold text-yellow-400">
              {highScore.toString().padStart(2, '0')}
            </h2>
          </div>

          <div className="bg-white/10 rounded-2xl p-5 text-center hover:scale-105 transition">
            <p className="text-gray-300">Computer</p>
            <h2 className="text-4xl font-bold text-pink-800">
              {computerScore.toString().padStart(2, '0')}
            </h2>
          </div>

        </div>

        {/* BUTTONS */}
        <div className="flex flex-wrap justify-center gap-6">

          <button
            onClick={() => playGame("Rock")}
            className="bg-gradient-to-r from-blue-400 to-blue-800 hover:scale-110 hover:shadow-blue-500/50 shadow-lg transition duration-300 text-white font-bold py-4 px-8 rounded-2xl text-xl cursor-pointer"
          >
            🪨 Rock
          </button>

          <button
            onClick={() => playGame("Paper")}
            className="bg-gradient-to-r from-green-400 to-green-800 hover:scale-110 hover:shadow-green-500/50 shadow-lg transition duration-300 text-white font-bold py-4 px-8 rounded-2xl text-xl cursor-pointer"
          >
            📄 Paper
          </button>

          <button
            onClick={() => playGame("Scissor")}
            className="bg-gradient-to-r from-pink-400 to-pink-800 hover:scale-110 hover:shadow-pink-500/50 shadow-lg transition duration-300 text-white font-bold py-4 px-8 rounded-2xl text-xl cursor-pointer"
          >
            ✂️ Scissor
          </button>

        </div>

        {/* CHOICES */}
        <div className="grid grid-cols-2 gap-6 w-full">

          <div className="bg-white/10 rounded-2xl p-5 text-center">
            <p className="text-gray-300 mb-2">
              Computer Chose
            </p>

            <h2 className="text-3xl font-bold text-red-300">
              {computerChoice}
            </h2>
          </div>

          <div className="bg-white/10 rounded-2xl p-5 text-center">
            <p className="text-gray-300 mb-2">
              You Chose
            </p>

            <h2 className="text-3xl font-bold text-cyan-300">
              {userChoice}
            </h2>
          </div>

        </div>

        {/* RESULT */}
        <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-10 py-5 rounded-2xl shadow-2xl animate-pulse">

          <h2 className="text-3xl font-extrabold text-center">
              {result}
          </h2>

        </div>

      </div>

    </div>


  )
}

export default Game

 