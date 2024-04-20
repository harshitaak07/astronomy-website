import React, { useState, useEffect } from "react";
import "./sidebar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faMoon } from '@fortawesome/free-solid-svg-icons';

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

const NavButton = ({
    onClick,
    name,
    icon,
    isActive,
}) => (
    <button 
        type="button"
        onClick={() => onClick({item: name})}
        className={isActive ? "active" : ""}>
        <FontAwesomeIcon icon={faMoon} />
        <span>{name}</span>
    </button>
);

export const SideBar = () => {
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

    const handleClick = ({ item }) => setActiveItem(
        item !== activeItem ? item : ""
    );

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    if (windowWidth >= 320 && windowWidth <= 425 && !isSidebarOpen) {
        return (
            <NavHeader toggleSidebar={toggleSidebar} />
        ); // Hides the sidebar for widths between 320px and 425px when it's closed
    }

    return (
        <aside className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
            <NavHeader toggleSidebar={toggleSidebar} />
            {menuItems.map((item, index) => (
                <div key={index}>
                    <NavButton
                        onClick={handleClick}
                        name={item.name}
                        icon={item.icon}
                        isActive={activeItem === item.name}
                    />
                </div>
            ))}
        </aside>
    );
};
