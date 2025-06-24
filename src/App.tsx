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
import CategoriesPage from "./components/pages/cardPages/categoriesPage";
import RuleCardPage from "./components/pages/cardPages/ruleCardPage";

function App() {
  const colorArray = [
    "#FF5733", // Red
    "#33FF57", // Green
    "#3357FF", // Blue
    "#F1C40F", // Yellow
    "#8E44AD", // Purple
    "#E67E22", // Orange
    "#1ABC9C", // Teal
  ];
  const [gameStarted, setGameStarted] = React.useState<boolean>(false);
  const [questionList, setQuestionList] = React.useState<Question[]>([]);
  const [currentRules, setCurrentRules] = React.useState<Rule[]>([]);
  const [currentPlayers, setCurrentPlayers] = React.useState<string[]>([]);
  const [currentColor, setCurrentColor] = React.useState<string>(
    colorArray[Math.floor(Math.random() * colorArray.length)]
  );

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
    setCurrentRules((prevRules) =>
      prevRules.map((rule) => ({
        ...rule,
        duration: rule.duration - 1,
      }))
    );
    setQuestionList((prevQuestions) => {
      const newQuestions = [...prevQuestions];
      newQuestions.shift();
      return newQuestions;
    });
    const filteredColorArray = colorArray.filter(
      (color) => color !== currentColor
    );
    setCurrentColor(
      filteredColorArray[Math.floor(Math.random() * filteredColorArray.length)]
    );
  }

  function addRule(newRule: Question) {
    const rule: Rule = {
      startString: newRule.startString,
      endString: newRule.endString || "",
      duration: Math.floor(Math.random() * 6) + 5,
    };
    setCurrentRules([...currentRules, rule]);
  }

  console.log("Question List:", questionList);

  const currentQuestion = questionList.length > 0 ? questionList[0] : null;

  console.log("Current Question:", currentQuestion);

  return (
    <div className="App" style={{ backgroundColor: currentColor }}>
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
                  nextQuestion={nextQuestion}
                />
              )}
              {currentQuestion.type === QuestionType.Categories && (
                <CategoriesPage
                  question={currentQuestion}
                  players={currentPlayers}
                  nextQuestion={nextQuestion}
                />
              )}
              {currentQuestion.type === QuestionType.Rule && (
                <RuleCardPage
                  question={currentQuestion}
                  players={currentPlayers}
                  nextQuestion={nextQuestion}
                  addRule={addRule}
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
