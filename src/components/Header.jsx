import { LOGO_IMG_URL } from "../utils/constants";
import { useState, useEffect } from "react";
import {Link} from "react-router-dom"
const Header = () => {
  const [loggedInButton, setLoggedInButton] = useState(true);

  console.log("Header Rendered");
  
  useEffect (()=>{console.log("useEffect is called")},[loggedInButton])

  handleAuthButton = () => {
    setLoggedInButton(!loggedInButton);
  };

  return (
    <div className="header">
      <img className="logo-img" alt="Logo" src={LOGO_IMG_URL} />
      <div className="nav-items">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
          <li>Cart</li>
          <li>
            <button onClick={handleAuthButton}>
              {loggedInButton ? "Log In" : "Log Out"}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
