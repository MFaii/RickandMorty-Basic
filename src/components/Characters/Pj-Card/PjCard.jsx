import React from "react";

const PjCard = ({ character }) => {
  return (
    <div className="pj-card">
      <h2>{character.name}</h2>
      <img src={character.image} alt={character.name} />
      <p>Specie: {character.species}</p>
      <p>Gender: {character.gender}</p>
    </div>
  );
};

export default PjCard;
