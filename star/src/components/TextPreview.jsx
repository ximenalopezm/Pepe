import React, { useState } from "react";
import "../styles/TextPreview.css";

const TextPreview = ({cardText, onClick}) => {
  const [cards, setCards] = useState([
    {
      id: 1,
      title: "This is option 2",
      description:
        cardText,
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
    <div className="card-container">
      {cards.map((card) => (
        <div
          key={card.id}
          className={`card2 ${card.isExpanded ? "expanded" : ""}`}
          onClick={() => {
            toggleCardExpansion(card.id);
            onClick();
          }}
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