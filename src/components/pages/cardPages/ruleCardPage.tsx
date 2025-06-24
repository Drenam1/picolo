import { Question } from "../../../models/question";

export interface RuleCardPageProps {
  players: string[];
  question: Question;
  nextQuestion: () => void;
  addRule: (rule: Question) => void;
}
const RuleCardPage: React.FunctionComponent<RuleCardPageProps> = ({
  players,
  question,
  nextQuestion,
  addRule,
}) => {
  return (
    <button
      className="invisibleButton"
      onClick={() => {
        addRule(question);
        nextQuestion();
      }}
    >
      <h1>New Rule!</h1>
      <h2>
        {question.startString.replace(
          /\{person(\d+)\}/g,
          (_, idx) => players[parseInt(idx, 10) % players.length] || ""
        )}
      </h2>
    </button>
  );
};

export default RuleCardPage;
