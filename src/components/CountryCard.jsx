import { Link } from "react-router-dom";

const CountryCard = ({ country }) => (
  <Link
    to={`/detail/${encodeURIComponent(country.name.common)}`}
    className="rounded-lg border border-gray-200 p-4 bg-[#F5F7F8] hover:scale-105 hover:shadow-lg transition-transform"
  >
    <img
      src={country.flags.png}
      alt={`Flag of ${country.name.common}`}
      className="w-full h-[200px] object-cover rounded-lg"
    />
    <h1 className="font-bold text-gray-900 mt-2 text-center text-xl">
      {country.name.common}
    </h1>
  </Link>
);

export default CountryCard;
