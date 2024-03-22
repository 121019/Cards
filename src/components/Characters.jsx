import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ImgFreyja from "/assets/ImgFreyja.jpg";
import ImgFrigg from "/assets/ImgFrigg.jpg";
import ImgViggo from "/assets/ImgViggo.jpg";
import backgroundlight from "/assets/backgroundlight.jpg";

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
    { path: "/Frigg", text: "Frigg", image: ImgFrigg },
    { path: "/Freyja", text: "Freyja", image: ImgFreyja },
    { path: "/Viggo", text: "Viggo", image: ImgViggo },
  ];

  return (
    <>
      <div style={{ backgroundImage: `url(${backgroundlight})` }}></div>

      <div className="img3">
        {links.map((link) => (
          <div key={link.text}>
            <h2>{link.text}</h2>
            <Link to={link.path}>
              <img src={link.image} alt={link.text} />
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default Characters;
