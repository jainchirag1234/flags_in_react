// import { useEffect, useState } from "react";
// import "./Pokemon.css";

// export const Pokemon = () => {
//   const [pokemon, setPokemon] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   const API = "https://pokeapi.co/api/v2/pokemon/pikachu";

//   const fetchPokemon = async () => {
//     try {
//       const res = await fetch(API);
//       if (!res.ok) {
//         throw new Error("Failed to fetch Pokemon");
//       }
//       const data = await res.json();
//       setPokemon(data);
//       setLoading(false);
//     } catch (error) {
//       console.log(error);
//       setError(error);
//       setLoading(false);
//     }
//   };
//   useEffect(() => {
//     fetchPokemon();
//   }, []);
//   console.log(pokemon);
//   if (loading) {
//     return <h1>Loading...</h1>;
//   }

//   if (error) {
//     return <h1>Error:{error.message}</h1>;
//   }

//   //   if (apiData)
//   return (
//     <section className="container">
//       <header>
//         <h1>Lets Catch Pokemon</h1>
//       </header>
//       <ul className="card-demo">
//         <li className="pokemon-card">
//           <figure>
//             <img
//               src={pokemon.sprites.other.dream_world.front_default}
//               alt={pokemon.name}
//               className="pokemon-image"
//             />
//           </figure>
//           <h1>{pokemon.name}</h1>
//           <p className="grid-three-cols">
//             Height: <span>{pokemon.height}</span>
//           </p>
//           <p className="pokemon-info">
//             Weight: <span>{pokemon.weight}</span>
//           </p>
//           <p className="grid-three-cols">
//             speed: <span>{pokemon.stats[5].base_stat}</span>
//           </p>
//         </li>
//       </ul>
//     </section>
//   );
// };
import { useEffect, useState } from "react";
import "./Pokemon.css";

export const Pokemon = () => {
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API = "https://pokeapi.co/api/v2/pokemon/pikachu";

  // ✅ Async function
  const fetchPokemon = async () => {
    try {
      const res = await fetch(API);

      if (!res.ok) {
        throw new Error("Failed to fetch Pokemon");
      }

      const data = await res.json();
      setPokemon(data);
      setLoading(false);
    } catch (err) {
      setError(err);
      setLoading(false);
    }
  };

  // ✅ useEffect runs once when component mounts
  useEffect(() => {
    fetchPokemon();
  }, []);

  // ✅ Loading State
  if (loading) {
    return <h1>Loading...</h1>;
  }

  // ✅ Error State
  if (error) {
    return <h1>Error: {error.message}</h1>;
  }

  return (
    <section className="container">
      <header>
        <h1>Lets Catch Pokemon</h1>
      </header>

      <ul className="card-demo">
        <li className="pokemon-card">
          <figure>
            <img
              src={pokemon.sprites.other.dream_world.front_default}
              alt={pokemon.name}
              className="pokemon-image"
            />
          </figure>

          <h2>{pokemon.name}</h2>

          <p>
            Height: <span>{pokemon.height}</span>
          </p>

          <p>
            Weight: <span>{pokemon.weight}</span>
          </p>

          <p>
            Speed: <span>{pokemon.stats[5].base_stat}</span>
          </p>
        </li>
      </ul>
    </section>
  );
};
