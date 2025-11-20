import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newsletter, setNewsletter] = useState(false);

  const handleNameChange = (event) => {
    const value = event.target.value;
    setName(value);
  };

  const handleEmailChange = (event) => {
    const value = event.target.value;
    setEmail(value);
  };

  const handlePasswordChange = (event) => {
    const value = event.target.value;
    setPassword(value);
  };

  const handleNewsletterChange = (event) => {
    const value = event.target.value;
    setNewsletter(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(name, email, password, newsletter);
  };

  return (
    <div className="signup">
      <h2>S'inscrire</h2>
      <form onSubmit={handleSubmit} className="form-signup">
        <input
          type="text"
          name="name"
          value={name}
          placeholder="Nom d'utilisateur"
          onChange={handleNameChange}
        />
        <input
          type="email"
          name="email"
          value={email}
          placeholder="Email"
          onChange={handleEmailChange}
        />
        <input
          type="password"
          name="password"
          value={password}
          placeholder="Mot de passe"
          onChange={handlePasswordChange}
        />
        <div className="newsletter">
          <input
            type="checkbox"
            name="subscribe"
            value="true"
            onChange={handleNewsletterChange}
          />
          <p>S'inscrire à notre newsletter</p>
        </div>
        <p className="disclaimer">
          En m'inscrivant je confirme avoir lu et accepté les Termes &
          Conditions et Politique de Confidentialité de Vinted. Je confirme
          avoir au moins 18 ans.
        </p>
        <button>S'inscrire</button>
        <Link to="/login">Tu as déjà un compte ? Connecte-toi !</Link>
      </form>
    </div>
  );
};

export default Signup;
