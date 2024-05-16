import React, { useState } from "react";
import "./home.css"; // Importing stylesheet for HomePage component

function HomePage() {
  // State to manage the review input
  const [review, setReview] = useState("");

  // Function to handle input change
  const handleInputChange = (event) => {
    setReview(event.target.value); // Update the review state with the input value
  };

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior
    console.log("Review submitted:", review); // Log the submitted review
    setReview(""); // Clear the review input after submission
  };

  return (
    <div id="home" className="body">
      <div className="responsivebanao">
        <div className="container2">
          <h1 style={{ textAlign: "left" }}>Welcome!</h1>
          <p style={{ textAlign: "left" }}>
            In the vast expanse of the cosmos, celestial bodies dance in an
            eternal ballet, weaving a tapestry of wonders that captivate the
            human imagination. Among the countless stars that adorn the cosmic
            canvas, constellations tell stories of ancient cultures and their
            celestial myths.
          </p>
          <div className="container3">
            {/* Form for submitting a review */}
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                id="review"
                name="review"
                placeholder="Give Feedback!"
                value={review}
                onChange={handleInputChange}
              />
            </form>
          </div>
        </div>
        <div className="container4">
          <img src="/assets/animation.gif" alt="Stars" />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
