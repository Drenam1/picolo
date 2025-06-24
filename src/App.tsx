import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Question } from "./models/question";
import {
  standardQuestions,
  categoryQuestions,
  ruleQuestions,
  umActuallyQuestions,
} from "./constants/questions";
import PlayersPage from "./components/pages/playersPage/playersPage";
import { Rule } from "./models/rule";

function App() {
  const [gameStarted, setGameStarted] = React.useState<boolean>(false);
  const [questionList, setQuestionList] = React.useState<Question[]>([]);
  const [currentRules, setCurrentRules] = React.useState<Rule[]>([]);
  const [currentPlayers, setCurrentPlayers] = React.useState<string[]>([]);

  function startGame(players: string[]) {
    if (players.length < 2) {
      alert("You need at least 2 players to start the game.");
      return;
    }
    setCurrentPlayers(players);
    setGameStarted(true);

    console.log("Game started with players:", players);

    const questions: Question[] = [
      ...standardQuestions,
      ...categoryQuestions,
      ...ruleQuestions,
      ...umActuallyQuestions,
    ];
    // Shuffle the questions array
    for (let i = questions.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [questions[i], questions[j]] = [questions[j], questions[i]];
    }
    setQuestionList(questions.slice(0, 30));
  }

  console.log("Question List:", questionList);

  return (
    <div className="App">
      {gameStarted ? (
        <div>
          <h1>Game Started</h1>
          <p>Here you can implement the game logic and display questions.</p>
        </div>
      ) : (
        <PlayersPage startGame={startGame} />
      )}
    </div>
  );
}

export default App;
