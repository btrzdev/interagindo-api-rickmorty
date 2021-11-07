import "./styles.css";
import CharCard from "../CharCard";
export default function Characters({ characterList }) {
  return (
    <div>
      <h1> Meus Personagens</h1>
      <div className="container">
        {characterList.map((character, index) => {
          return (
            <div key={index}>
              <CharCard character={character} />{" "}
            </div>
          );
        })}
      </div>
    </div>
  );
}
