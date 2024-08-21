import { LOGO_IMG_URL } from "../utils/constants";
import { useState } from "react";
const Header = () => {
  const [loggedInButton, setLoggedInButton] = useState(true);

  handleAuthButton = () => {
    setLoggedInButton(!loggedInButton);
  };

  return (
    <div className="header">
      <img className="logo-img" alt="Logo" src={LOGO_IMG_URL} />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact Us</li>
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
