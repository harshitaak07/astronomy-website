import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faMoon } from "@fortawesome/free-solid-svg-icons";

const menuItems = [
  {
    name: "Ideas",
  },
  {
    name: "My Ideas",
  },
  {
    name: "Experiences",
  },
  {
    name: "My Experiences",
  },
  {
    name: "Share",
    link: "/share",
  },
  {
    name: "Go Back",
    link: "/"
  }
];

const NavHeader = ({ toggleSidebar }) => (
  <header className="sidebar-header">
    <button type="button" onClick={toggleSidebar}>
      <FontAwesomeIcon icon={faBars} />
      <span></span>
    </button>
  </header>
);

const NavButton = ({ onClick, name, isActive, icon, link }) => (
  <button type="button" onClick={() => onClick({ name })}>
    <Link to={link} className={`nav-link ${isActive ? "active" : ""}`}>
      <FontAwesomeIcon icon={faMoon} />
      <span style={{ marginLeft: "8px" }}>{name}</span>
    </Link>
  </button>
);

export const SideBar = ({ onItemClick }) => {
  const [activeItem, setActiveItem] = useState("");
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleClick = ({ name }) => {
    setActiveItem(name);
    onItemClick({ name }); // Pass the clicked item to the onItemClick function
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  if (windowWidth >= 320 && windowWidth <= 425 && !isSidebarOpen) {
    return <NavHeader toggleSidebar={toggleSidebar} />;
  }

  return (
    <aside className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
      <NavHeader toggleSidebar={toggleSidebar} />
      {menuItems.map((item, index) => (
        <div key={index}>
          <NavButton
            onClick={handleClick}
            name={item.name}
            isActive={activeItem === item.name}
            link={item.link}
          />
        </div>
      ))}
    </aside>
  );
};
