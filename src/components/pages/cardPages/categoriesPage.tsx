import { Question } from "../../../models/question";

export interface CategoriesCardPageProps {
  players: string[];
  question: Question;
  nextQuestion?: () => void;
}
const CategoriesCardPage: React.FunctionComponent<CategoriesCardPageProps> = ({
  players,
  question,
  nextQuestion,
}) => {
  return (
    <button className="invisibleButton" onClick={nextQuestion}>
      <h1>Categories!</h1>
      <h2>
        {question.startString}
        <br />
        <br />
        <u>{players[Math.floor(Math.random() * players.length)]}</u> to start.
        The first person to be unable to answer drinks{" "}
        {Math.floor(Math.random() * 4) + 2} times
      </h2>
    </button>
  );
};

export default CategoriesCardPage;
