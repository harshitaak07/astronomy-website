import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import ProfilePage from "./profile";
import "./navbar.css";

const NavbarPage = ({ details }) => {
  const [theme, setTheme] = useState("light");
  const [visibleDetails, setVisibleDetails] = useState(false);
  const location = useLocation();

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const handleClick = () => {
    setVisibleDetails(!visibleDetails);
  };

  // Conditionally render the Navbar based on the current route
  const renderNavbar = () => {
    if (location.pathname === "/astronomy") {
      return null; // Don't render Navbar on Astronomy page
    }
    return (
      <nav className="topnav">
        <ul className="ulc">
          <li>
            <img
              src={theme === "dark" ? "/assets/moon.png" : "/assets/sun.png"}
              alt="Theme Toggle"
              onClick={toggleTheme}
            />
          </li>
          <li>
            <Link to="/" className="active">
              [Home]
            </Link>
          </li>
          <li>
            <Link to="/register">[Register]</Link>
          </li>
          <li>
            <Link to="/login">[Login]</Link>
          </li>
          <li>
            <Link to="/astronomy">[Astronomy]</Link>
          </li>
          <li>
            <div className="profile-container">
              <img
                src="/assets/profile.png"
                alt="Profile"
                onClick={handleClick}
              />
              {visibleDetails && <ProfilePage details={details} />}
            </div>
          </li>
        </ul>
      </nav>
    );
  };

  return renderNavbar();
};

export default NavbarPage;
