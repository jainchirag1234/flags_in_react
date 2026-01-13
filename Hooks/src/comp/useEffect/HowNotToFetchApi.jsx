import { useEffect, useState } from "react";
import "./Pokemon.css";

export const HowNotToFetchApi = () => {
  const [apiData, setApiData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API = "https://pokeapi.co/api/v2/pokemon/pikachu";
  const fetchPokemon = () => {
    // fetch("https://jsonplaceholder.typicode.com/posts")
    fetch(API)
      .then((res) => res.json())
      .then((data) => {
        setApiData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setError(error);
        setLoading(false);
      });
  };
  useEffect(() => {
    fetchPokemon();
  }, []);
  console.log(apiData);
  if (loading)
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  if (error)
    return (
      <div>
        <h1>Error:{error.message}</h1>
      </div>
    );
  //   if (apiData)
  return (
    <section className="container">
      <header>
        <h1>Lets Catch Pokemon</h1>
      </header>
      <ul className="card-demo">
        <li className="pokemon-card">
          <figure>
            <img
              src={apiData.sprites.other.dream_world.front_default}
              alt={apiData.name}
              className="pokemon-image"
            />
          </figure>
          <h1>{apiData.name}</h1>
        </li>
      </ul>
    </section>
  );
};
