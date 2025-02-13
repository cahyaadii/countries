import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Continents = () => {
  const [continents, setContinents] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchContinents = async () => {
      try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const data = await response.json();

        const uniqueContinents = [
          ...new Set(data.map((country) => country.region).filter(Boolean)),
        ];

        // Gunakan nama region secara langsung tanpa manipulasi
        const formattedContinents = uniqueContinents.map((region) => ({
          name: region,
          code: region,
        }));

        setContinents(formattedContinents);
      } catch (error) {
        console.error("Error fetching continents:", error);
      }
    };

    fetchContinents();
  }, []);

  return (
    <div className="container px-6 lg:px-20 text-center mt-25 ">
      <h1 className="text-4xl font-bold mb-6">Daftar Benua</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {continents.map((continent) => (
          <button
            key={continent.code}
            onClick={() => navigate(`/benua/${continent.code}`)}
            className="bg-blue-500 text-white py-2 px-4 rounded-lg shadow-md transition-transform transform hover:scale-105"
          >
            {continent.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Continents;
