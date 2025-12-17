import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "@/context/AuthContext";
import {
  FaCalendarPlus,
  FaListUl,
  FaInfoCircle,
  FaEnvelope,
  FaSignOutAlt,
  FaUserCircle,
  FaBars,
  FaTimes,
} from "react-icons/fa";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate("/");
    setMenuOpen(false);
  };

  return (
    <nav className="bg-black px-6 py-4 shadow-lg">
      {/* TOP BAR */}
      <div className="flex justify-between items-center">
        {/* LOGO */}
        <Link
          to="/"
          className="text-[#FFB22C] text-2xl font-bold tracking-wide"
        >
          Eventify
        </Link>

        {/* DESKTOP LINKS */}
        <div className="hidden md:flex items-center space-x-6 text-[#F7F7F7]">
          <Link to="/events" className="flex items-center gap-1 hover:text-[#FFB22C]">
            <FaListUl /> View Events
          </Link>

          {user && (
            <Link
              to="/create-event"
              className="flex items-center gap-1 hover:text-[#FFB22C]"
            >
              <FaCalendarPlus /> Create Event
            </Link>
          )}

          <Link to="/about" className="flex items-center gap-1 hover:text-[#FFB22C]">
            <FaInfoCircle /> About Us
          </Link>

          <Link to="/contact" className="flex items-center gap-1 hover:text-[#FFB22C]">
            <FaEnvelope /> Contact Us
          </Link>
        </div>

        {/* DESKTOP AUTH */}
        <div className="hidden md:flex items-center space-x-4">
          {!user ? (
            <>
              <Link to="/login" className="text-white hover:text-[#FFB22C]">
                Login
              </Link>
              <Link
                to="/signup"
                className="bg-[#FFB22C] px-4 py-2 rounded text-black font-medium"
              >
                Signup
              </Link>
            </>
          ) : (
            <>
              <span className="flex items-center gap-2 text-white">
                <FaUserCircle />
                {user.name}
              </span>
              <button
                onClick={handleLogout}
                className="bg-[#FFB22C] px-4 py-2 rounded text-black flex items-center gap-2"
              >
                <FaSignOutAlt /> Logout
              </button>
            </>
          )}
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          className="md:hidden text-white text-xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="md:hidden mt-4 space-y-4 text-white">
          <Link to="/events" onClick={() => setMenuOpen(false)} className="block">
            View Events
          </Link>

          {user && (
            <Link
              to="/create-event"
              onClick={() => setMenuOpen(false)}
              className="block"
            >
              Create Event
            </Link>
          )}

          <Link to="/about" onClick={() => setMenuOpen(false)} className="block">
            About Us
          </Link>

          <Link to="/contact" onClick={() => setMenuOpen(false)} className="block">
            Contact Us
          </Link>

          <hr className="border-gray-700" />

          {!user ? (
            <>
              <Link to="/login" onClick={() => setMenuOpen(false)} className="block">
                Login
              </Link>
              <Link
                to="/signup"
                onClick={() => setMenuOpen(false)}
                className="block bg-[#FFB22C] text-black px-4 py-2 rounded"
              >
                Signup
              </Link>
            </>
          ) : (
            <>
              <span className="block text-sm">Hi, {user.name}</span>
              <button
                onClick={handleLogout}
                className="w-full bg-[#FFB22C] text-black px-4 py-2 rounded flex items-center gap-2 justify-center"
              >
                <FaSignOutAlt /> Logout
              </button>
            </>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
