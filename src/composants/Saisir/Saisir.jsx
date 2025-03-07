import React, { useState } from "react";
import { useNavigate} from "react-router-dom";


const Saisir = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
      numeroSortie: "",
      date: "",
      envoi: "",
      majal: "",
      lieu: "",
      sujet: "",
      source: ""
    });
  
    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };
  
    const handleSubmit = () => {
      alert("Formulaire soumis avec succès !");
      navigate("/details");
    };
  
    return (
      <div>
        <header><h1>Saisie de Courrier</h1></header>
        <div>
        <input type="text" name="numeroSortie" placeholder="Numéro de Sortie" onChange={handleChange} />
        </div>
        <div>
        <input type="date" name="date" onChange={handleChange} />
        </div>
        <div></div>
        <select name="envoi" onChange={handleChange}><option value="">Type d'Envoi</option></select>
        <select name="majal" onChange={handleChange}><option value="">Majal</option></select>
        <select name="lieu" onChange={handleChange}><option value="">Lieu</option></select>
        <input type="text" name="sujet" placeholder="Sujet" onChange={handleChange} />
        <input type="text" name="source" placeholder="Source" onChange={handleChange} />
        <button onClick={handleSubmit}>Entrer</button>
        <button onClick={() => navigate("/")}>Retour</button>
        <footer>Gestion de Courrier - 2025</footer>
      </div>
    );
  };
  export default Saisir;
  