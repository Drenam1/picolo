import React from "react";
import { Question } from "../../../models/question";

export interface UmActuallyCardPageProps {
  players: string[];
  question: Question;
  nextQuestion: () => void;
}
const UmActuallyCardPage: React.FunctionComponent<UmActuallyCardPageProps> = ({
  players,
  question,
  nextQuestion,
}) => {
  const [currentPage, setCurrentPage] = React.useState<number>(0);
  const [punishment] = React.useState<number>(
    Math.floor(Math.random() * 4) + 2
  );
  const [punisher] = React.useState<string>(
    players[Math.floor(Math.random() * players.length)]
  );
  if (currentPage === 0) {
    return (
      <button className="invisibleButton" onClick={() => setCurrentPage(1)}>
        <h1>Um, Actually...</h1>
        <h2>
          <span style={{ textDecoration: "underline" }}>{punisher}</span> will
          read the question aloud and then the other players will try to correct
          the statement, first stating the phrase 'Um, actually...'. The first
          player to correct the statement can nominate {punishment} drinks. If
          no one can correct the statement, {punisher} can nominate {punishment}{" "}
          drinks.
          <br />
          <br />
          Press the screen to see the statement and its correction.
        </h2>
      </button>
    );
  } else if (currentPage === 1) {
    return (
      <button
        className="invisibleButton"
        onClick={() => {
          setCurrentPage(0);
          nextQuestion();
        }}
      >
        <h2>Statement:</h2>
        <p>
          {question.startString
            .split(/\*([^*]+)\*/g)
            .map((part, idx) =>
              idx % 2 === 1 ? (
                <b key={`bold-${part}-${idx}`}>{part}</b>
              ) : (
                <React.Fragment key={`frag-${part}-${idx}`}>
                  {part}
                </React.Fragment>
              )
            )}
        </p>
        <h2>Correction: </h2>
        <p>{question.endString}</p>
      </button>
    );
  } else {
    return null;
  }
};

export default UmActuallyCardPage;
