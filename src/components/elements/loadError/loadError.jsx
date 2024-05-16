import React from "react";
import "./loadError.css"; // Importing stylesheet for LoadErrorCard component

function LoadErrorCard({ isLoading, error, submit }) {
  // Display loading message if isLoading is true
  if (isLoading) {
    return (
      <div className="containery">
        <p>Loading...</p>
      </div>
    );
  }

  // Display error message if error exists
  if (error) {
    return (
      <div className="containery">
        <p>Error...{error.message}</p>
      </div>
    );
  }

  // If neither loading nor error, return null
  return null;
}

export default LoadErrorCard;
