import { LOGO_IMG_URL } from "../utils/constants";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useNetworkCheck from "../utils/useNetworkCheck";

const Header = () => {
  const [loggedInButton, setLoggedInButton] = useState(true);

  useEffect(() => {}, [loggedInButton]);

  const isOffline = useNetworkCheck();

  const handleAuthButton = () => {
    setLoggedInButton(!loggedInButton);
  };

  return (
    <header className="bg-white shadow-md py-4 px-6 flex items-center justify-between">
      <Link to="/">
        <img className="h-10 w-auto" alt="Logo" src={LOGO_IMG_URL} />
      </Link>
      <nav>
  <ul className="flex items-center space-x-6 text-gray-700 font-medium">
    <li className="flex items-center">
      <span className="mr-1">Online Status:</span>
      <span>{isOffline ? "❌" : "✅"}</span>
    </li>
    <li>
      <Link
        to="/"
        className="hover:text-blue-500 transition-colors duration-200"
      >
        Home
      </Link>
    </li>
    <li>
      <Link
        to="/about"
        className="hover:text-blue-500 transition-colors duration-200"
      >
        About
      </Link>
    </li>
    <li>
      <Link
        to="/contact"
        className="hover:text-blue-500 transition-colors duration-200"
      >
        Contact Us
      </Link>
    </li>
    <li>
      <Link
        to="/grocery"
        className="hover:text-blue-500 transition-colors duration-200"
      >
        Grocery
      </Link>
    </li>
    <li>
      <Link
        to="/cart"
        className="hover:text-blue-500 transition-colors duration-200"
      >
        Cart
      </Link>
    </li>
    <li>
      <button
        onClick={handleAuthButton}
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-200"
      >
        {loggedInButton ? "Log In" : "Log Out"}
      </button>
    </li>
  </ul>
</nav>

    </header>
  );
};

export default Header;
