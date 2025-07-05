import GenericHelper from "../../../helpers/generichelper";
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
      <h1>{GenericHelper.replaceTokens(question.startString, players)}</h1>
    </button>
  );
};

export default StandardCardPage;
