import { Routes, Route, Link } from 'react-router-dom';
import CountriesList from './pages/CountriesList';
import CountryDetail from './pages/CountryDetail';
import Continents from './pages/Continents';
import CountryListByContinent from './pages/CountryListByContinent'; // 🔥 Import halaman ini
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="container">
      <Navbar />
      <Routes>
        <Route path="/" element={<CountriesList />} />
        <Route path="/detail/:name" element={<CountryDetail />} />
        <Route path="/benua" element={<Continents />} />
        <Route path="/benua/:continent" element={<CountryListByContinent />} /> {/* 🔥 Route ke daftar negara berdasarkan benua */}
      </Routes>
    </div>
  );
}

export default App;
