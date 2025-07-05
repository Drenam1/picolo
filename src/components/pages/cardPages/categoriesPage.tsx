import GenericHelper from "../../../helpers/generichelper";
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
        {GenericHelper.replaceTokens(question.startString, players)}
        <br />
        <br />
        <u>{GenericHelper.replaceTokens("{player}", players)}</u>
        {GenericHelper.replaceTokens(
          ` to start. The first person to be unable to answer drinks {number} times`,
          players
        )}
      </h2>
    </button>
  );
};

export default CategoriesCardPage;
