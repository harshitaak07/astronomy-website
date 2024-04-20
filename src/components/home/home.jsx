import React, { useState} from "react";
import "./home.css";
function HomePage() {
  const [review, setReview] = useState("");

  const handleInputChange = (event) => {
    setReview(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Review submitted:", review);
    setReview("");
  };

  return (
    <div id="home" class="body">
      <div className= "responsivebanao">
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
