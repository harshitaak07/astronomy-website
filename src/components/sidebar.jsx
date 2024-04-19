import React, { useState } from "react";
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

const NavHeader = () => (
    <header className="sidebar-header">
        <button type="button">
            <FontAwesomeIcon icon={faBars} />
            <span>Admin</span>
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
    const handleClick = ({ item }) => setActiveItem(
        item !== activeItem ? item : ""
    );
    return (
        <aside className="sidebar">
            <NavHeader />
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
