import React, { useEffect, useState } from "react";
import CardItem from "./components/CardItem";

import "./styles.css";

const url = "https://pokeapi.co/api/v2/pokemon?limit=50&offset=0";

export default function App() {
  const [pokemon, setPokemon] = useState([]);
  const [inputData, setInputData] = useState("");
  const filteredPokemon = pokemon.filter((p) =>
    p.name.toLowerCase().includes(inputData.toLowerCase().trim())
  );

  const callData = async () => {
    const info = await fetch(url);
    const data = await info.json();

    const arrayOfPromises = data.results.map(async ({ url }) => fetch(url));
    const allInfo = await Promise.all(arrayOfPromises);

    const arrayOfInfo = allInfo.map(async (data) => await data.json());
    const allData = await Promise.all(arrayOfInfo);
    setPokemon(allData);
  };

  useEffect(() => {
    callData();
  }, []);

  const handleInputChange = (e) => {
    setInputData(e.target.value);
  };

  return (
    <div className="app">
      <h2>Mini Challenge: Poke filter</h2>
      <input
        type="text"
        placeholder="Buscar un Pokemon"
        value={inputData}
        onChange={handleInputChange}
      />
      <div className="cards">
        {pokemon.length ? (
          <div className="cards">
            {filteredPokemon.map(
              ({ id, name, sprites: { front_default: imagen } }) => {
                return <CardItem nombre={name} imagen={imagen} key={id} />;
              }
            )}
          </div>
        ) : (
          "loanding ..."
        )}
      </div>
    </div>
  );
}
