import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import "./navbar.css";

const NavbarPage = () => {
  // State variables for theme and menu visibility
  const [theme, setTheme] = useState("light");
  const [showMenu, setShowMenu] = useState(false);
  const location = useLocation(); // Get the current location using React Router's useLocation hook

  const navRef = useRef(); // Reference for the navigation bar

  // Function to toggle the menu visibility
  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav"); // Toggle responsive_nav class for mobile responsiveness
    setShowMenu(!showMenu); // Toggle the showMenu state
  };

  // Effect to update the body class based on the selected theme
  useEffect(() => {
    document.body.className = theme; // Update the body class with the selected theme
  }, [theme]); // Trigger effect when the theme state changes

  // Function to toggle between light and dark themes
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light")); // Toggle the theme state between light and dark
  };

  // Function to render the navigation bar
  const renderNavbar = () => {
    // If the current location is "/astronomy" or "/share", do not render the navigation bar
    if (location.pathname === "/astronomy" || location.pathname === "/share") {
      return null;
    }
    // Otherwise, render the navigation bar
    return (
      <header>
        {/* Navigation bar */}
        <nav className={`topnav ${showMenu ? "responsive_nav" : ""}`} ref={navRef}>
          {/* Hamburger menu button */}
          <button className="nav-btn" onClick={showNavbar}><FaBars /></button>
          {/* Menu items */}
          <ul className={`ulc ${showMenu ? "responsive" : ""}`} ref={navRef}>
            {/* Profile and close button */}
            <li>
              <div style={{ display: "flex", justifyContent: "space-around", alignItems: "flex-start", marginTop: '10px', gap: "60px"}}>
                <div className="profile-container">
                  <img
                    src="/assets/profile.png"
                    alt="Profile"
                  />
                </div>
                {/* Close button */}
                <RxCross2 size="40" onClick={() => setShowMenu(false)} className="crossClass" />
              </div>
            </li>
            {/* Menu links */}
            <li>
              <Link to="/" className="active">[Home]</Link>
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
            {/* Theme toggle icon */}
            <li>
              <img
                src={theme === "dark" ? "/assets/moon.png" : "/assets/sun.png"}
                alt="Theme Toggle"
                onClick={toggleTheme}
              />
            </li>
          </ul>
        </nav>
      </header>
    );
  };

  // Render the navigation bar
  return renderNavbar();
};

export default NavbarPage;
