import React from "react";
import {useNavigate, useParams } from "react-router-dom";



const DetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  return (
    <div>
      <header><h1>Détail du Courrier {id}</h1></header>
      <p>Informations du courrier...</p>
      <button onClick={() => navigate("/details")}>
        Retour
      </button>
      <button onClick={() => navigate("/modifier/1")}>
        Modifier
      </button>
      <footer>Gestion de Courrier - 2025</footer>
    </div>
  );
};
export default DetailPage;