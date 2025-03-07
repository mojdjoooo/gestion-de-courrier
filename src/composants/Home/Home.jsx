import React, { useState } from "react";
import { Link} from "react-router-dom";

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
export default Home;
