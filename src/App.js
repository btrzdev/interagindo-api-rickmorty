import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import Characters from "./Characters";

function App() {
  const [characterList, setCharacterList] = useState([]);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character/")
      .then((response) => response.json())
      .then((response) => setCharacterList(response.results))
      .catch((err) => console.error(err));
  }, []);
  console.log(characterList);
  return (
    <div className="App">
      <Characters characterList={characterList} />
    </div>
  );
}

export default App;
