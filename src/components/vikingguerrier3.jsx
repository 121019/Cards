import React from "react";

const CharacterDetails = (props) => {
  const { name, imageSrc, strength, endurance, charisma } =
    props.location.state;

  return (
    <div>
      <h2>{name}</h2>
      <img src={imageSrc} alt={name} />
      <div className="skills">
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
    </div>
  );
};

export default CharacterDetails;
