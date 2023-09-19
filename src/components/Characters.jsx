import React, { useState } from "react";
import { Link,useNavigate } from "react-router-dom";

import "/index.css";


const Characters = () => {
  const [selectedName, setSelectedName] = useState("");
  const navigate = useNavigate();


  const handleNameChange = (event) => {
    setSelectedName(event.target.value);
  };

  const handleValidate = () => {
    // Construire le chemin de redirection en utilisant le nom sélectionné
    const heroPath = `/${selectedName}`;
    navigate(heroPath);
  };
  const links = [
    { path: "/Frigg", text: "Frigg" },
    { path: "/Freyja", text: "Freyja" },
    { path: "/Viggo", text: "Viggo" },
  ];

  return (
    <div>
      <div className="youare">
        <h1>
          Vous êtes {""}  
          <input
            type="text"
            value={selectedName}
            onChange={handleNameChange}
            placeholder="Nom"
            className="input-name"
          />
      </h1>
      </div>
      <div className="bvalidate">
      <button onClick={handleValidate} className="bvalidate1">Valider</button>    
      </div>

      <div className="img3">
        {links.map((link) => (
          <div key={link.text}>
              <h2>{link.text}</h2>
            <Link to={link.path}>
              <img
                src={`/public/assets/${link.text}.jpg`}
                alt={link.text}
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}; 

export default Characters;
