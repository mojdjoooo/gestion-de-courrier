import React from "react";
import {useNavigate} from "react-router-dom";

const Modifier = () => {
  const navigate = useNavigate();
  return (
    <div>
      <header><h1>Modifier Courrier</h1></header>
      <p>Formulaire avec données préremplies...</p>
      <button onClick={() => navigate("/details")}>Valider</button>
      <footer>Gestion de Courrier - 2025</footer>
    </div>
  );
};
export default Modifier;

