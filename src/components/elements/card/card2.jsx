import "./card.css";

const cards = [
  {
    name: "author",
    total: "title",
    description: "description",
    footer: "Idea",
    more: "passage",
  },
  {
    name: "author",
    total: "title",
    description: "description",
    footer: "Idea",
    more: "passage",
  },
  {
    name: "author",
    total: "title",
    description: "description",
    footer: "Idea",
    more: "passage",
  },
  {
    name: "author",
    total: "title",
    description: "description",
    footer: "Idea",
    more: "passage",
  },
  {
    name: "author",
    total: "title",
    description: "description",
    footer: "Idea",
    more: "passage",
  },
];
export const Card2 = () => {
  return (
    <section className="page card-1-page">
      <div className="cards">
        {cards.map((card) => (
          <label id={card.name}>
            <input type="checkbox" />
            <div className="card">
              <div className="front">
                <header>
                  <h4>{card.name}</h4>
                  <span className="material-symbols-outlined"> more_vert </span>
                </header>
                <var>{card.total}</var>
                <h5>{card.description}</h5>
                <h5>{card.footer}</h5>
              </div>
              <div className="back">
                <header>
                  <h4>{card.name}</h4>
                  <span className="material-symbols-outlined"> close </span>
                </header>
                <p>{card.more}</p>
              </div>
            </div>
          </label>
        ))}
      </div>
    </section>
  );
};

export default Card2;

/*
import React, { useState, useEffect } from "react";
import "./card.css";
import axios from "axios";

export const Card2 = () => {
  const [ideas, setIdeas] = useState([]);

  useEffect(() => {
    const fetchIdeas = async () => {
      try {
        const response = await axios.get("/ideas");
        setIdeas(response.data);
      } catch (error) {
        console.error("Error fetching ideas:", error);
      }
    };

    fetchIdeas();
  }, []);

  return (
    <section className="page card-1-page">
      <div className="cards">
        {ideas.map((idea, index) => (
          <label key={index}>
            <input type="checkbox" />
            <div className="card">
              <div className="front">
                <header>
                  <h4>{idea.author}</h4>
                  <span className="material-symbols-outlined"> more_vert </span>
                </header>
                <var>{idea.title}</var>
                <h5>{idea.description}</h5>
                <h5>{idea.tags}</h5>
              </div>
              <div className="back">
                <header>
                  <h4>{idea.author}</h4>
                  <span className="material-symbols-outlined"> close </span>
                </header>
                <p>{idea.passage}</p>
              </div>
            </div>
          </label>
        ))}
      </div>
    </section>
  );
};
*/