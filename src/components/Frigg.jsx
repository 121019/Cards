import React from "react";
import "./Viking.css";
import ImgFrigg from "/ImgFrigg.jpg";
import { useNavigate } from "react-router-dom";

const BackButton = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1); // Navigue vers la page précédente dans l'historique de React Router
  };

  return (
    <div className="back-button-container">
    <button onClick={handleBack} className="back-button">
      Retour
    </button>
    </div>
  );
};

const Frigg = () => {
  const characterData = {
    name: "Frigg",
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
    <img className="img4"  src={ImgFrigg} alt={name} />
  </div>

  <div className="characteristic-details">
        {renderCharacteristics("Force", strength)}
        {renderCharacteristics("Endurance", endurance)}
        {renderCharacteristics("Charisme", charisma)}
      </div>
      <BackButton />

    </div>
  );
};

export default Frigg;
