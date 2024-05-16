import React, { useState } from "react";
import { SideBar } from "../elements/sidebar/sidebar"; // Importing Sidebar component
import { Card1 } from "../elements/card/card1"; // Importing Card1 component
import { Card2 } from "../elements/card/card2"; // Importing Card2 component
import { Card3 } from "../elements/card/card3"; // Importing Card3 component
import { Card4 } from "../elements/card/card4"; // Importing Card4 component
import { Card5 } from "../elements/card/card5"; // Importing Card5 component
import "./astronomy.css"; // Importing stylesheet for AstronomyPage component

const AstronomyPage = () => {
  // State to track the selected card
  const [selectedCard, setSelectedCard] = useState("");

  // Function to handle item click in the sidebar
  const handleItemClick = (item) => {
    setSelectedCard(item.name); // Set the selected card based on the clicked item
  };

  // Function to render the selected card based on the state
  const renderSelectedCard = () => {
    switch (selectedCard) {
      case "Ideas":
        return <Card2 />;
      case "My Ideas":
        return <Card3 />;
      case "Experiences":
        return <Card4 />;
      case "My Experiences":
        return <Card5 />;
      default:
        return <Card1 />; // Default card to render if no specific card is selected
    }
  };

  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <div>
        {/* Sidebar component with onItemClick event handler */}
        <SideBar onItemClick={handleItemClick} />
      </div>
      <div
        style={{ overflowY: "auto", maxHeight: "100vh", marginLeft: "30px" }}
      >
        {/* Render the selected card */}
        {renderSelectedCard()}
      </div>
    </div>
  );
};

export default AstronomyPage;
