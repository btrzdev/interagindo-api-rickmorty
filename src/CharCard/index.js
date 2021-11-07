import "./styles.css";
export default function CharCard({ character }) {
  return (
    <div className="card-profile">
      <p>{character.name}</p>
      <img src={character.image} alt="" />{" "}
    </div>
  );
}
