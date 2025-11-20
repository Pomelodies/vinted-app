// exemple token : bnVrYQHooe6lUg_MPYGvo0fi3fN3GnWpFbnVjHF5DyKBMkAOkW31ei_BCmmbYre2

import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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
      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/user/login",
        {
          email: email,
          password: password,
        }
      );
      //       console.log(response.data);
      //       {
      //     "_id": "691f265ec5938e80b955ff56",
      //     "token": "Kopn4_SAGPFQCZWkdVfxgzCBqRLhBovy6ROvDkL1o2boIawbvfumoz7IlgP_o903",
      //     "account": {
      //         "username": "SailorMoon1"
      //     }
      // }

      const token = response.data.token;
      Cookies.set("userToken", token, { expires: 1 });
      navigate("/");
    } catch (error) {
      console.log(error.response);
      alert("Something went wrong! Please try again.");
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
      </form>
      <Link to="/signup" className="no-account-yet">
        Pas encore de compte ? Inscris-toi !
      </Link>
    </div>
  );
};

export default Login;
