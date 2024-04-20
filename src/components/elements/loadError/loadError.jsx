import React from "react";
import "./loadError.css";

function LoadErrorCard({ isLoading, error, submit }) {
  if (isLoading) {
    return (
      <div className="containery">
        <p>Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="containery">
        <p>Error...{error.message}</p>
      </div>
    );
  }
  return null;
}

export default LoadErrorCard;