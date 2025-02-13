import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation(); // 🔥 Mendapatkan path halaman saat ini

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // 🔥 Function untuk menambahkan style aktif
  const getLinkClass = (path) =>
    location.pathname === path
      ? "text-black font-bold"
      : "text-gray-500 hover:text-black";

  return (
    <nav className="fixed w-full bg-white top-0 px-6 md:px-20 shadow z-50">
      <div className="flex h-16 items-center justify-between">
        <div className="font-bold text-xl flex items-center">
          <img src="/logo_countries.png" alt="" className="w-[40px] h-[40px]" />
          <p>Countries</p>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex md:items-center md:space-x-6">
          <Link to="/" className={getLinkClass("/")}>
            Negara
          </Link>
          <Link to="/benua" className={getLinkClass("/benua")}>
            Benua
          </Link>
          <Link to="/help" className={getLinkClass("/help")}>
            Help
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 rounded text-gray-700 focus:outline-none"
        >
          {isMenuOpen ? (
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all ${
          isMenuOpen ? "flex flex-col" : "hidden"
        }`}
      >
        <div className="px-4 pb-3 space-y-2 flex flex-col">
          <Link
            to="/"
            className={`${getLinkClass("/")} border-b border-gray-300 pb-2`}
          >
            Negara
          </Link>
          <Link
            to="/benua"
            className={`${getLinkClass(
              "/benua"
            )} border-b border-gray-300 pb-2`}
          >
            Benua
          </Link>
          <Link
            to="/help"
            className={`${getLinkClass("/help")} border-b border-gray-300 pb-2`}
          >
            Help
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
