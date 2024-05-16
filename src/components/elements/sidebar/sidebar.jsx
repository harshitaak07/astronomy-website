import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faMoon } from "@fortawesome/free-solid-svg-icons";

// Array of menu items with their names and optional links
const menuItems = [
  { name: "Ideas" },
  { name: "My Ideas" },
  { name: "Experiences" },
  { name: "My Experiences" },
  { name: "Share", link: "/share" },
  { name: "Go Back", link: "/" }
];

// Component for the header of the sidebar
const NavHeader = ({ toggleSidebar }) => (
  <header className="sidebar-header">
    {/* Button to toggle the sidebar */}
    <button type="button" onClick={toggleSidebar}>
      <FontAwesomeIcon icon={faBars} />
      <span></span>
    </button>
  </header>
);

// Component for individual navigation buttons in the sidebar
const NavButton = ({ onClick, name, isActive, link }) => (
  <button type="button" onClick={() => onClick({ name })}>
    {/* Link to navigate to the specified route */}
    <Link to={link} className={`nav-link ${isActive ? "active" : ""}`}>
      <FontAwesomeIcon icon={faMoon} />
      {/* Display the name of the menu item */}
      <span style={{ marginLeft: "8px" }}>{name}</span>
    </Link>
  </button>
);

// Sidebar component
export const SideBar = ({ onItemClick }) => {
  // State variables
  const [activeItem, setActiveItem] = useState(""); // Active menu item
  const [windowWidth, setWindowWidth] = useState(window.innerWidth); // Window width
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Sidebar visibility

  // Effect to update window width on resize
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Handle click on a menu item
  const handleClick = ({ name }) => {
    setActiveItem(name); // Set the active menu item
    onItemClick({ name }); // Pass the clicked item to the onItemClick function
  };

  // Toggle sidebar visibility
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Render the sidebar
  if (windowWidth >= 320 && windowWidth <= 425 && !isSidebarOpen) {
    // Render only the header when the window width is between 320 and 425 pixels and the sidebar is closed
    return <NavHeader toggleSidebar={toggleSidebar} />;
  }

  return (
    <aside className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
      {/* Sidebar header */}
      <NavHeader toggleSidebar={toggleSidebar} />
      {/* Menu items */}
      {menuItems.map((item, index) => (
        <div key={index}>
          {/* Render individual navigation buttons */}
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
