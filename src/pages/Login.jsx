// exemple token : bnVrYQHooe6lUg_MPYGvo0fi3fN3GnWpFbnVjHF5DyKBMkAOkW31ei_BCmmbYre2

import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const Login = ({ setUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleEmailChange = (event) => {
    const value = event.target.value;
    setEmail(value);
  };

  const handlePasswordChange = (event) => {
    const value = event.target.value;
    setPassword(value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // console.log(email, password); // sailor-moon@mail.com Artemis

    try {
      if (email && password) {
        const response = await axios.post(
          "https://lereacteur-vinted-api.herokuapp.com/user/login",
          {
            email: email,
            password: password,
          }
        );
        console.log(response.data);
        //       {
        //     "_id": "691f265ec5938e80b955ff56",
        //     "token": "Kopn4_SAGPFQCZWkdVfxgzCBqRLhBovy6ROvDkL1o2boIawbvfumoz7IlgP_o903",
        //     "account": {
        //         "username": "SailorMoon1"
        //     }
        // }
        if (response.data.token) {
          setUser(response.data.token);
          setErrorMessage("");
          navigate("/");
        } else {
          setErrorMessage("Un problème est survenu !");
        }
      } else {
        setErrorMessage("Email ou mot de passe incorrect");
      }
    } catch (error) {
      error.response
        ? setErrorMessage(error.response.data.message)
        : console.log(error);
    }
  };

  return (
    <div onSubmit={handleSubmit} className="login">
      <h2>Se connecter</h2>
      <form className="login-form">
        <input
          type="email"
          name="email"
          value={email}
          placeholder="Adresse email"
          onChange={handleEmailChange}
        />
        <input
          type="password"
          name="password"
          value={password}
          placeholder="Mot de passe"
          onChange={handlePasswordChange}
        />
        <button className="se-connecter">Se connecter</button>
        {errorMessage && <p className="error">{errorMessage}</p>}
      </form>
      <Link to="/signup" className="no-account-yet">
        Pas encore de compte ? Inscris-toi !
      </Link>
    </div>
  );
};

export default Login;
