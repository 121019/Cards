import React from "react";
import "./Viking.css";

const CharacterDetails = ({
  name,
  imageSrc,
  strength,
  endurance,
  charisma,
 
}) => {
  const renderCharacteristics = (label, value) => {
    const characteristicElements = [];

    for (let i = 1; i <= 5; i++) {
      const isActive = i <= value;
      characteristicElements.push(
        <span
          key={i}
          className={`characteristic-box ${isActive ? "active" : ""}`}
        ></span>
      );
    }

    return (
      <div className="characteristic">
        <strong>{label}:</strong>
        {characteristicElements}
      </div>
    );
  };

  return (
    <><div className="name">
      <h3>{name}</h3>
    </div><div className="img2">
    <img src={imageSrc} alt={name} className="img4"/>
      </div><div className="characteristic-details">
        {renderCharacteristics("Force", strength)}
        {renderCharacteristics("Endurance", endurance)}
        {renderCharacteristics("Charisme", charisma)}
      </div></>
  )
}

const Frigg = () => {

  const characterData = {
    name: "Frigg",
    imageSrc: "public/assets/Frigg.jpg",
    strength: 2,
    endurance: 5,
    charisma: 3,
  };



  return (
    <div className="characteristics">
      <CharacterDetails
        {...characterData}
      />
   
      
    </div>
  );
};


export default Frigg;
