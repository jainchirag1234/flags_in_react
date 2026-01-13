import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Flags.css";

function Flags() {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get(
        "https://restcountries.com/v3.1/all?fields=name,population,region,capital,flags,cca3"
      )
      .then((response) => {
        setCountries(response.data);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to load countries");
        setLoading(false);
      });
  }, []);

  if (loading) return <h3>Loading...</h3>;
  if (error) return <h3>{error}</h3>;

  const filteredCountries = countries.filter((country) =>
    country.name.common.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container">
      <h2>Country List</h2>

      <div className="search-box">
        <input
          type="text"
          placeholder="Search country..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <ul>
        {filteredCountries.map((country) => (
          <li key={country.cca3}>
            <img src={country.flags.png} alt={country.name.common} />
            <strong>{country.name.common}</strong>
            <p>Capital: {country.capital?.[0] || "N/A"}</p>
            <p>Region: {country.region}</p>
            <p>Population: {country.population.toLocaleString()}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Flags;
