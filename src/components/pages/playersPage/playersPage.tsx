import React from "react";
import "./playersPage.css";

export interface PlayersPageProps {
  startGame: (players: string[], cardTypes: string[]) => void;
}

const PlayersPage: React.FunctionComponent<PlayersPageProps> = ({
  startGame,
}) => {
  const [players, setPlayers] = React.useState<string[]>([]);
  const [enabledCardTypes, setEnabledCardTypes] = React.useState<string[]>([
    "Standard",
    "UmActually",
    "Categories",
    "Rule",
  ]);
  React.useEffect(() => {
    const storedPlayers = localStorage.getItem("picolo_players");
    if (storedPlayers) {
      setPlayers(JSON.parse(storedPlayers));
    }
  }, []);

  return (
    <div className="players-page">
      <h1>List your players</h1>
      <ul className="players-list">
        {players.map((player, idx) => (
          <li key={idx}>
            <input
              type="text"
              value={player}
              onChange={(e) => {
                const newPlayers = [...players];
                newPlayers[idx] = e.target.value;
                setPlayers(newPlayers);
              }}
              placeholder={`Player ${idx + 1} name`}
            />
            <button
              type="button"
              onClick={() => {
                setPlayers(players.filter((_, i) => i !== idx));
              }}
              aria-label="Remove player"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
      <button type="button" onClick={() => setPlayers([...players, ""])}>
        Add Player
      </button>
      {players.filter((player) => !!player).length > 1 && (
        <button
          type="button"
          disabled={enabledCardTypes.length === 0}
          onClick={() => {
            // Here you can implement the logic to start the game
            console.log("Starting game with players:", players);
            startGame(
              players.filter((player) => !!player),
              enabledCardTypes
            );
          }}
          className="start-game-button"
        >
          Start Game
        </button>
      )}
      <h2>Select Desired Card Types</h2>
      <div className="card-types">
        <label>
          <input
            type="checkbox"
            checked={enabledCardTypes.includes("Standard")}
            onChange={(e) => {
              const newCardTypes = e.target.checked
                ? [...enabledCardTypes, "Standard"]
                : enabledCardTypes.filter((type) => type !== "Standard");
              setEnabledCardTypes(newCardTypes);
            }}
          />
          {""}
          Um, Actually
        </label>
        <label>
          <input
            type="checkbox"
            checked={enabledCardTypes.includes("UmActually")}
            onChange={(e) => {
              const newCardTypes = e.target.checked
                ? [...enabledCardTypes, "UmActually"]
                : enabledCardTypes.filter((type) => type !== "UmActually");
              setEnabledCardTypes(newCardTypes);
            }}
          />
          {""}
          Um, Actually
        </label>
        <label>
          <input
            type="checkbox"
            checked={enabledCardTypes.includes("Categories")}
            onChange={(e) => {
              const newCardTypes = e.target.checked
                ? [...enabledCardTypes, "Categories"]
                : enabledCardTypes.filter((type) => type !== "Categories");
              setEnabledCardTypes(newCardTypes);
            }}
          />
          {""}
          Categories
        </label>
        <label>
          <input
            type="checkbox"
            checked={enabledCardTypes.includes("Rule")}
            onChange={(e) => {
              const newCardTypes = e.target.checked
                ? [...enabledCardTypes, "Rule"]
                : enabledCardTypes.filter((type) => type !== "Rule");
              setEnabledCardTypes(newCardTypes);
            }}
          />
          {""}
          Persistent Rules
        </label>
      </div>
    </div>
  );
};

export default PlayersPage;
