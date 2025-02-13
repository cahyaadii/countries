import { useState } from 'react';
import Hero from '../components/Hero';
import CountryList from './CountriesList';

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="mt-[100px]">
      <Hero setSearchTerm={setSearchTerm} />
      <CountryList searchTerm={searchTerm} />
    </div>
  );
};

export default Home;