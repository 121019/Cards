import React, { useState } from "react";

import "/index.css";

const renderSkills = (skillValue) => {
  const maxSkillValue = 5;
  const skillElements = [];

  for (let i = 1; i <= maxSkillValue; i++) {
    const isActive = i <= skillValue;
    skillElements.push(
      <span key={i} className={`skill-box ${isActive ? "active" : ""}`}></span>
    );
  }

  return skillElements;
};

const Characters = () => {
  const [selectedName, setSelectedName] = useState("");

  const handleNameChange = (event) => {
    setSelectedName(event.target.value);
  };

  const characters = [
    {
      imageSrc: "public/assets/vikingguerrier2.jpg",
      name: "Frigg",
      strength: 3,
      endurance: 4,
      charisma: 2,
    },
    {
      imageSrc: "public/assets/princesseguerriere1.jpg",
      name: "Freyja",
      strength: 1,
      endurance: 3,
      charisma: 5,
    },
    {
      imageSrc: "public/assets/vikingguerrier3.jpg",
      name: "Viggo",
      strength: 4,
      endurance: 3,
      charisma: 4,
    },
  ];

  return (
    <>
      <div className="youare">
        <h1>
          Vous êtes {""}
          <input
            type="text"
            value={selectedName}
            onChange={handleNameChange}
            placeholder="Nom"
          />
        </h1>
      </div>
      <div className="bvalidate">
        <button>Valider</button>
      </div>
      <div className="img3">
        {characters.map((character, index) => (
          <div key={index}>
            <h2>{character.name}</h2>
            <img src={character.imageSrc} alt={character.name} />
            <div className="skills">
              <div>
                <strong>Strength:</strong> {renderSkills(character.strength)}
              </div>
              <div>
                <strong>Endurance:</strong> {renderSkills(character.endurance)}
              </div>
              <div>
                <strong>Charisma:</strong> {renderSkills(character.charisma)}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="button1">
        <button onClick={startNextPage}>Start</button>
      </div>
    </>
  );
};

function startNextPage() {
  // Code pour passer à la page suivante
}

export default Characters;
