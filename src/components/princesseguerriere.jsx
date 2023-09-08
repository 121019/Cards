import React from "react";

const CharacterDetails = ({
  name,
  imageSrc,
  strength,
  endurance,
  charisma,
}) => {
  return (
    <div>
      <h2>{name}</h2>
      <img src={imageSrc} alt={name} />
      <div>
        <strong>Strength:</strong> {strength}
      </div>
      <div>
        <strong>Endurance:</strong> {endurance}
      </div>
      <div>
        <strong>Charisma:</strong> {charisma}
      </div>
    </div>
  );
};

const PrincesseGuerriere = () => {
  const characterData = {
    name: "Princesse Guerrière",
    imageSrc: "chemin/vers/princesse.jpg",
    strength: 5,
    endurance: 8,
    charisma: 7,
  };

  return <CharacterDetails {...characterData} />;
};

export default PrincesseGuerriere;
