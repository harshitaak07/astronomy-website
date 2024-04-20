import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import ProfilePage from "../profile/profile";
import { FaBars} from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import "./navbar.css";

const NavbarPage = ({ details }) => {
  const [theme, setTheme] = useState("light");
  const [visibleDetails, setVisibleDetails] = useState(false);
  const [showMenu, setShowMenu] = useState(false); 
  const location = useLocation();

  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const handleClick = () => {
    setVisibleDetails(!visibleDetails);
  };

  const renderNavbar = () => {
    if (location.pathname === "/astronomy") {
      return null;
    }
    return (
      <header>
        <nav className={`topnav ${showMenu ? "responsive_nav" : ""}`} ref={navRef}>
          <button className="nav-btn" onClick={showNavbar}><FaBars /></button>
          <ul className={`ulc ${showMenu ? "responsive" : ""}`} ref={navRef}>
            <li>
            <div style={{ display: "flex",justifyContent: "space-around", alignItems: "flex-start", marginTop: '10px', gap: "60px"}}>
            <div className="profile-container">
                <img
                  src="/assets/profile.png"
                  alt="Profile"
                  onClick={handleClick}
                />
                {visibleDetails && <ProfilePage details={details} />}
              </div>
              <RxCross2 size="40" onClick={() => setShowMenu(false)} className="crossClass" />
            </div>
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

  return renderNavbar();
};

export default NavbarPage;
