import "./styles.css";
import CharCard from "../CharCard";
export default function Characters({ characterList }) {
  return (
    <div className="characters-container">
      <h1>Meus personagens</h1>
      <div className="characters-list">
        {characterList.map((character, index) => {
          return (
            <div key={index} className="character-card">
              <CharCard character={character} />{" "}
            </div>
          );
        })}
      </div>
    </div>
  );
}
