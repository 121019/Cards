import React from "react";
import "./Viking.css";
import ImgViggo from "/ImgViggo.jpg";


const Viggo = () => {
  const characterData = {
    name: "Viggo",
    strength: 3,
    endurance: 4,
    charisma: 5,
  };

  return (
    <div className="characteristics">
      <CharacterDetails {...characterData} />
    </div>
  );
};

const CharacterDetails = ({
  name,
  strength,
  endurance,
  charisma,
 
}) => {
  const renderCharacteristics = (label, value) => {
    const characteristicElements = [];

   characteristicElements.push(
      <div key="space" className="characteristic-space"></div>
    );
    
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
        <strong>{label}</strong>
        {characteristicElements}
      </div>
    );
  };


  
    return(  
  <div className="characteristics">
  <div className="name">
    <h3>{name}</h3>
  </div>
  <div className="img2">
    <img className="img4"  src={ImgViggo} alt={name} />
  </div>



  <div className="characteristic-details">
        {renderCharacteristics("Force", strength)}
        {renderCharacteristics("Endurance", endurance)}
        {renderCharacteristics("Charisme", charisma)}
      </div>
    </div>
  );

};

export default Viggo;
