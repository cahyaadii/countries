import { useState, useEffect } from "react";
import { useParams} from "react-router-dom";
import { useNavigate } from "react-router-dom";

const CountryDetail = () => {
  const { name } = useParams();
  const [country, setCountry] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCountry = async () => {
      try {
        const response = await fetch(
          `https://restcountries.com/v3.1/name/${name}?fullText=true`
        );
        const data = await response.json();
        setCountry(data[0]);
      } catch (error) {
        console.error("Error fetching country details:", error);
      }
    };

    fetchCountry();
  }, [name]);

  if (!country) return <div className="text-center mt-[100px]">Loading...</div>;

  return (
    <div className="mt-[100px] mx-auto max-w-4xl px-4">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <div
          onClick={() => navigate(-1)}
          className="mb-4 inline-block text-blue-600 hover:text-blue-800 cursor-pointer"
        >
          &larr; Kembali
        </div>

        <h1 className="text-3xl font-bold mb-6 text-center">
          {country.name.common}
        </h1>

        <div className="grid md:grid-cols-2 gap-8">
          <img
            src={country.flags.png}
            alt={`Flag of ${country.name.common}`}
            className="w-full h-56 object-cover rounded-lg"
          />

          <div className="space-y-2">
            <p>
              <span className="font-semibold">Nama Resmi:</span>{" "}
              {country.name.official}
            </p>
            <p>
              <span className="font-semibold">Ibukota:</span>{" "}
              {country.capital?.[0] || "-"}
            </p>
            <p>
              <span className="font-semibold">Populasi:</span>{" "}
              {country.population.toLocaleString()} <span>Jiwa</span>{" "}
            </p>
            <p>
              <span className="font-semibold">Luas Area:</span>{" "}
              {country.area.toLocaleString()} <span>Km²</span>{" "}
            </p>
            <p>
              <span className="font-semibold">Mata Uang:</span>{" "}
              {Object.values(country.currencies)[0].name +
                " (" +
                Object.values(country.currencies)[0].symbol +
                ")"}
            </p>
            <p>
              <span className="font-semibold">Wilayah:</span> {country.region}
            </p>
            <p>
              <span className="font-semibold">Subwilayah:</span>{" "}
              {country.subregion || "-"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryDetail;
