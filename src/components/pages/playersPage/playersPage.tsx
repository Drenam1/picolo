import React from "react";
import "./playersPage.css";
import { Topic } from "../../../constants/topic";

export interface PlayersPageProps {
  startGame: (
    players: string[],
    cardTypes: string[],
    selectedTopics: string[]
  ) => void;
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
  const allUmActuallyTopics = Object.values(Topic);
  const [selectedTopics, setSelectedTopics] = React.useState<string[]>(() => {
    const stored = localStorage.getItem("picolo_umactually_topics");
    return stored ? JSON.parse(stored) : Object.values(Topic);
  });

  React.useEffect(() => {
    const storedPlayers = localStorage.getItem("picolo_players");
    if (storedPlayers) {
      setPlayers(JSON.parse(storedPlayers));
    }
  }, []);

  const toggleTopic = (topic: string) => {
    setSelectedTopics((prev) =>
      prev.includes(topic) ? prev.filter((t) => t !== topic) : [...prev, topic]
    );
  };

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
            startGame(
              players.filter((player) => !!player),
              enabledCardTypes,
              selectedTopics
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
          Standard
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
      </div>
      {enabledCardTypes.includes("UmActually") && (
        <div className="um-actually-topics">
          <h3>Select "Um Actually" Topics</h3>
          <div className="topics-list">
            {allUmActuallyTopics.sort().map((topic) => (
              <label key={topic} style={{ marginRight: 12 }}>
                <input
                  type="checkbox"
                  checked={selectedTopics.includes(topic)}
                  onChange={() => toggleTopic(topic)}
                />
                {topic}
              </label>
            ))}
            {selectedTopics.length === 0 && (
              <div style={{ color: "red" }}>Select at least one topic.</div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default PlayersPage;
