import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link, useNavigate, useParams } from "react-router-dom";

const Home = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    if (username && password) {
      setIsLoggedIn(true);
    }
  };

  return (
    <div>
      <header><h1>Gestion de Courrier</h1></header>
      {!isLoggedIn ? (
        <div>
          <input type="text" placeholder="Login" value={username} onChange={(e) => setUsername(e.target.value)} />
          <input type="password" placeholder="Mot de passe" value={password} onChange={(e) => setPassword(e.target.value)} />
          <button onClick={handleLogin}>Valider</button>
        </div>
      ) : (
        <div>
          <Link to="/scan">Page de Scan</Link>
          <Link to="/saisir">Page de Saisie</Link>
          <Link to="/details">Voir Détails</Link>
        </div>
      )}
      <footer>Gestion de Courrier - 2025</footer>
    </div>
  );
};

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
      <input type="text" name="numeroSortie" placeholder="Numéro de Sortie" onChange={handleChange} />
      <input type="date" name="date" onChange={handleChange} />
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

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/saisir" element={<Saisir />} />
        <Route path="/details" element={<Details />} />
        <Route path="/detail/:id" element={<DetailPage />} />
        <Route path="/modifier/:id" element={<Modifier />} />
      </Routes>
    </Router>
  );
};

export default App;
