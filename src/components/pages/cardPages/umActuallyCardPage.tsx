import React from "react";
import { Question } from "../../../models/question";

export interface UmActuallyCardPageProps {
  players: string[];
  question: Question;
  nextQuestion?: () => void;
}
const UmActuallyCardPage: React.FunctionComponent<UmActuallyCardPageProps> = ({
  players,
  question,
  nextQuestion,
}) => {
  const [currentPage, setCurrentPage] = React.useState<number>(0);
  if (currentPage === 0) {
    return (
      <button className="invisibleButton" onClick={() => setCurrentPage(1)}>
        <h1>
          This is a "Um, Actually" question. The person to read it aloud is{" "}
          <span className="boldText">
            {players[currentPage % players.length]}
          </span>
          {""}. They will read the question aloud and then the other players
          will try to correct the statement. The first player to correct the
          statement can nominate a drink. If no one can correct the statement,
          the reader can nominate a drink.
        </h1>
      </button>
    );
  } else if (currentPage === 1) {
    return (
      <button className="invisibleButton" onClick={nextQuestion}>
        <h2>Question:</h2>
        <p>{question.startString}</p>
        <h2>Answer: </h2>
        <p>{question.endString}</p>
      </button>
    );
  } else {
    return null;
  }
};

export default UmActuallyCardPage;
