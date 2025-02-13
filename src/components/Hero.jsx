import React from 'react';

const Hero = ({ setSearchTerm }) => (
  <div className="flex flex-col items-center justify-center text-center min-h-[50vh] px-4">
    <div className="heading max-w-[800px]">
      <h1 className="font-semibold text-2xl sm:text-2l md:text-3xl lg:text-4xl leading-snug">
        Kenali Negara-Negara di Dunia dengan Cara yang Lebih Mudah dan Menyenangkan
      </h1>
      <p className="text-gray-600 mt-4 text-sm sm:text-base md:text-lg">
        Jelajahi berbagai negara hanya dengan satu klik. Cari dan temukan informasi lengkap tentang negara favoritmu!
      </p>
    </div>

    <div className="input mt-6 flex flex-col sm:flex-row gap-3 w-full max-w-[500px]">
      <input
        type="text"
        placeholder="Cari nama negara..."
        onChange={(e) => setSearchTerm(e.target.value.toLowerCase())}
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  </div>
);

export default Hero;