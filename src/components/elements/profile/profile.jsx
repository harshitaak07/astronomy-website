import React, { useState, useEffect } from "react";
import Axios from "axios";
import "./profile.css";
import LoadErrorCard from "../loadError/loadError";

function ProfilePage({ details }) {
  useEffect(() => {
    loadData();
  }, []);

  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const loadData = async () => {
    try {
      const response = await Axios.get("http://localhost:3003/details");
      console.log(response.data);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setError(error);
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return <LoadErrorCard isLoading={isLoading} />;
  }

  if (error) {
    return <LoadErrorCard error={error} />;
  }

  return (
    <div className="containerx">
      <h3>Username</h3>
      {details && details.name && <p>{details.name}</p>}
      <h3>Email</h3>
      {details && details.email && <p>{details.email}</p>}
      {details && details.length > 0 && (
        <div>
          {details.map((e) => (
            <div key={e.id}>
              {e.id} {e.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ProfilePage;