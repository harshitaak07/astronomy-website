import React, { useState } from "react";
import { SideBar } from "../elements/sidebar/sidebar";
import { Card1 } from "../elements/card/card1";
import { Card2 } from "../elements/card/card2";
import { Card3 } from "../elements/card/card3";
import { Card4 } from "../elements/card/card4";
import { Card5 } from "../elements/card/card5";
import "./astronomy.css";

const AstronomyPage = () => {
  const [selectedCard, setSelectedCard] = useState("");

  const handleItemClick = (item) => {
    setSelectedCard(item.name);
  };

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
        return <Card1 />;
    }
  };

  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <div>
        <SideBar onItemClick={handleItemClick} />
      </div>
      <div
        style={{ overflowY: "auto", maxHeight: "100vh", marginLeft: "30px" }}
      >
        {renderSelectedCard()}
      </div>
    </div>
  );
};

export default AstronomyPage;
