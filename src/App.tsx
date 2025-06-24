import React from "react";
import "./App.css";
import { Question, QuestionType } from "./models/question";
import {
  standardQuestions,
  categoryQuestions,
  ruleQuestions,
  umActuallyQuestions,
} from "./constants/questions";
import PlayersPage from "./components/pages/playersPage/playersPage";
import { Rule } from "./models/rule";
import StandardCardPage from "./components/pages/cardPages/standardCardPage";
import UmActuallyPage from "./components/pages/cardPages/umActuallyCardPage";

function App() {
  const [gameStarted, setGameStarted] = React.useState<boolean>(false);
  const [questionList, setQuestionList] = React.useState<Question[]>([]);
  const [currentRules, setCurrentRules] = React.useState<Rule[]>([]);
  const [currentPlayers, setCurrentPlayers] = React.useState<string[]>([]);

  React.useEffect(() => {
    startGame(["Will", "Steve", "Tanisha"]);
  }, []);

  function startGame(players: string[]) {
    if (players.length < 2) {
      alert("You need at least 2 players to start the game.");
      return;
    }
    setCurrentPlayers(players);
    setGameStarted(true);

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

  function nextQuestion() {
    setQuestionList((prevQuestions) => {
      const newQuestions = [...prevQuestions];
      newQuestions.shift();
      return newQuestions;
    });
  }

  console.log("Question List:", questionList);

  const currentQuestion = questionList.length > 0 ? questionList[0] : null;

  console.log("Current Question:", currentQuestion);

  return (
    <div className="App">
      {gameStarted ? (
        <>
          {currentQuestion ? (
            <>
              {currentQuestion.type === QuestionType.Standard && (
                <StandardCardPage
                  question={currentQuestion}
                  players={currentPlayers}
                  nextQuestion={nextQuestion}
                />
              )}
              {currentQuestion.type === QuestionType.UmActually && (
                <UmActuallyPage
                  question={currentQuestion}
                  players={currentPlayers}
                />
              )}
            </>
          ) : (
            <></>
          )}
        </>
      ) : (
        <PlayersPage startGame={startGame} />
      )}
    </div>
  );
}

export default App;
