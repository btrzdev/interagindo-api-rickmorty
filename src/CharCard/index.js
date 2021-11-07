import "./styles.css";
export default function CharCard({ character }) {
  let statusClass = "card-profile-unknown";
  if (character.status === "Dead") {
    statusClass = "card-profile-dead";
  } else if (character.status === "Alive") {
    statusClass = "card-profile-alive";
  } else {
    statusClass = "card-profile-unknown";
  }
  return (
    <div
      className={`card-profile ${statusClass}

      `}
    >
      <p>{character.name}</p>
      <img src={character.image} alt="" />{" "}
    </div>
  );
}
