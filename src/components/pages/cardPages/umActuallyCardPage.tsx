import { Question } from "../../../models/question";

export interface UmActuallyPageProps {
  players: string[];
  question: Question;
}
const UmActuallyPage: React.FunctionComponent<UmActuallyPageProps> = ({
  players,
}) => {
  return (
    <div>
      <h1>Um Actually Card Page</h1>
      <p>This page is for displaying standard cards.</p>
      {players && players.length > 0 ? (
        <ul>
          {players.map((player, index) => (
            <li key={index}>{player}</li>
          ))}
        </ul>
      ) : (
        <p>No players available.</p>
      )}
    </div>
  );
};

export default UmActuallyPage;
