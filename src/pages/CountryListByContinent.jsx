import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import CountryCard from "../components/CountryCard";

const CountryListByContinent = () => {
  const { continent } = useParams();
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/region/${continent}`)
      .then((res) => res.json())
      .then((data) =>
        setCountries(
          data.sort((a, b) => a.name.common.localeCompare(b.name.common))
        )
      )
      .catch(() => setCountries([]));
  }, [continent]);

  return (
    <div className="container mx-auto mt-28 text-center px-6 lg:px-20">
      <h1 className="text-4xl font-bold mb-10 text-gray-700">
        Daftar Negara di {continent.toUpperCase()}
      </h1>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-16 sm:mx-2 mx-2">
        {countries.map((country) => (
          <CountryCard key={country.name.common} country={country} />
        ))}
      </div>
    </div>
  );
};

export default CountryListByContinent;
