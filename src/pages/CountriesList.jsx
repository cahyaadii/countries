import React, { useState, useEffect } from "react";
import Heroes from "../components/Hero";
import CountryCard from "../components/CountryCard";

const CountryList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const data = await response.json();

        // Urutkan berdasarkan nama negara
        const sortedData = data.sort((a, b) => a.name.common.localeCompare(b.name.common));
        setCountries(sortedData);
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    };

    fetchCountries();
  }, []);

  // Filter berdasarkan input pencarian
  const filteredCountries = searchTerm
    ? countries.filter((country) =>
        country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : countries;

  return (
    <div className="my-[100px]">
      <Heroes setSearchTerm={setSearchTerm} />
      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-16 lg:px-20 sm:mx-8 mx-8">
        {filteredCountries.length > 0 ? (
          filteredCountries.map((country) => <CountryCard key={country.cca3} country={country} />)
        ) : (
          <p className="text-center text-gray-500">Tidak ada data negara.</p>
        )}
      </div>
    </div>
  );
};

export default CountryList;
