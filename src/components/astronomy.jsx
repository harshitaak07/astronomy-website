import React from "react";
import { SideBar } from "./sidebar"; 
import { Card1 } from "./card";
import "./astronomy.css";

const AstronomyPage = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'row' }}>
            <div>
                <SideBar />
            </div>
            <div style={{ overflowY: 'auto', maxHeight: '100vh', marginLeft: '30px'}}>
                <Card1/>
            </div>
        </div>
    );
};

export default AstronomyPage;
