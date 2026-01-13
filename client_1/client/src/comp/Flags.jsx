import React, { useEffect, useState } from "react";
import axios from "axios";

function Flags() {
  const [restcountries, setRestCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");
  useEffect(() => {
    axios
      .get(
        "https://restcountries.com/v3.1/all?fields=name,population,region,capital,flags,cca3"
      )
      .then((response) => {
        setRestCountries(response.data);
        setLoading(false);
      })
      .catch((err) => {
        setError("Failed to load countries");
        setLoading(false);
      });
  }, []);

  if (loading) return <h3>Loading...</h3>;
  if (error) return <h3>{error}</h3>;
  const filteredCountries = restcountries.filter((country) =>
    country.name.common.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h2>Country List</h2>
      <input
        type="text"
        placeholder="Search Country"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button onClick={() => setSearch}>Search</button>
      <ul>
        {filteredCountries.map((country) => (
          <li key={country.cca3}>
            <img src={country.flags.png} alt={country.name.common} width="50" />
            <strong> {country.name.common}</strong>
            <p>Capital: {country.capital?.[0]}</p>
            <p>Region: {country.region}</p>
            <p>Population: {country.population.toLocaleString()}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Flags;
