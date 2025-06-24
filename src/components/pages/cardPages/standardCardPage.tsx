import { Question } from "../../../models/question";

export interface StandardCardPageProps {
  players: string[];
  question: Question;
  nextQuestion?: () => void;
}
const StandardCardPage: React.FunctionComponent<StandardCardPageProps> = ({
  players,
  question,
  nextQuestion,
}) => {
  return (
    <button className="invisibleButton" onClick={nextQuestion}>
      <h1>
        {question.startString
          .replace(
            /\{person(\d+)\}/g,
            (_, idx) => players[parseInt(idx, 10) % players.length] || ""
          )
          .replace(/\{number\}/g, () =>
            String(Math.floor(Math.random() * 4) + 2)
          )}
      </h1>
    </button>
  );
};

export default StandardCardPage;
