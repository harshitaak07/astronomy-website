import "./card.css";

const cards = [
  {
    name: "harshitaa",
    total: "title",
    description: "description",
    footer: "Idea",
    more: "passage",
  },
  {
    name: "harshitaa",
    total: "title",
    description: "description",
    footer: "Idea",
    more: "passage",
  },
  {
    name: "harshitaa",
    total: "title",
    description: "description",
    footer: "Idea",
    more: "passage",
  },
  {
    name: "harshitaa",
    total: "title",
    description: "description",
    footer: "Idea",
    more: "passage",
  },
  {
    name: "harshitaa",
    total: "title",
    description: "description",
    footer: "Idea",
    more: "passage",
  },
];
export const Card3 = () => {
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

export default Card3;