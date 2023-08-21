import React from "react";
import PjCard from "../Pj-Card/PjCard";

const PjsCards = ({ characters, texto }) => {
  if (characters.length === 0)
    return (
      <div className="error">
        <p>{`There is no character with the name ${texto}`}</p>
      </div>
    );
  return (
    <div className="cards">
      {characters.map((character) => (
        <PjCard key={character.id} character={character} />
      ))}
    </div>
  );
};

export default PjsCards;
