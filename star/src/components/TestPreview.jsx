import React, { useState } from "react";
import "../styles/TextPreview.css";

const TextPreview = () => {
  const [cards, setCards] = useState([
    {
      id: 1,
      title: "This is option 2",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum scelerisque magna et ex cursus, at auctor elit consectetur. Nulla facilisi. Sed sit amet lacus augue. Quisque in justo nec libero aliquet faucibus. Aliquam erat volutpat. Sed bibendum tincidunt dui vel bibendum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Etiam non libero vitae dui mattis pellentesque eget vel turpis. Sed aliquet purus nec nibh vulputate rhoncus. Ut bibendum erat sed turpis euismod, sit amet convallis tellus varius.",
      isExpanded: false,
    },
    // Add more cards as needed
  ]);

  const toggleCardExpansion = (cardId) => {
    const updatedCards = cards.map((card) => {
      if (card.id === cardId) {
        return { ...card, isExpanded: !card.isExpanded };
      }
      return card;
    });
    setCards(updatedCards);
  };

  const removeCard = (cardId, event) => {
    event.stopPropagation(); // Prevent event propagation to the parent container
    const updatedCards = cards.filter((card) => card.id !== cardId);
    setCards(updatedCards);
  };

  return (
    <div className="container">
      {cards.map((card) => (
        <div
          key={card.id}
          className={`card2 ${card.isExpanded ? "expanded" : ""}`}
          onClick={() => toggleCardExpansion(card.id)}
        >
          <h3>{card.title}</h3>
          <p className={`small ${card.isExpanded ? "expanded" : ""}`}>
            {card.isExpanded
              ? card.description
              : card.description.split(" ").slice(0, 16).join(" ")}
          </p>

          <div
            className="go-corner"
            onClick={(event) => removeCard(card.id, event)}
            style={{ cursor: "pointer" }}
          >
            <div className="go-arrow">x</div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default TextPreview;