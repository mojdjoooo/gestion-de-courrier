
import React from "react";
import { useNavigate } from "react-router-dom";

const Details = () => {
    const navigate = useNavigate();
    return (
      <div>
        <header><h1>Voir Détails</h1></header>
        <input type="text" placeholder="Rechercher" />
        <table border="1">
          <thead>
            <tr>
              <th>#</th>
              <th>Numéro de Sortie</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>12345</td>
              <td>
                <button onClick={() => navigate("/detail/1")}>
                  Détail
                </button>
                <button>Modifier</button>
                <button>Supprimer</button>
              </td>
            </tr>
          </tbody>
        </table>
        <button onClick={() => navigate("/")}>Retour</button>
        <footer>Gestion de Courrier - 2025</footer>
      </div>
    );
  };
  export default Details;