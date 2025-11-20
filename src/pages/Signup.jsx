import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newsletter, setNewsletter] = useState(false);
  const navigate = useNavigate();

  const handleUsernameChange = (event) => {
    const value = event.target.value;
    setUsername(value);
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

  const handleSubmit = async (event) => {
    event.preventDefault();
    // console.log(username, email, password, newsletter); SailorMoon sailor-moon@mail.com Artemis true

    //requête type POST Axios
    try {
      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/user/signup",
        {
          username: username,
          email: email,
          password: password,
          newsletter: newsletter,
        }
      );
      console.log(response.data);
      //{
      //     "_id": "691f265ec5938e80b955ff56",
      //     "email": "sailor-moon1@mail.com",
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
    <div className="signup">
      <h2>S'inscrire</h2>
      <form onSubmit={handleSubmit} className="form-signup">
        <input
          type="text"
          name="username"
          value={username}
          placeholder="Nom d'utilisateur"
          onChange={handleUsernameChange}
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
        <button className="sinscrire">S'inscrire</button>
        <Link to="/login" className="account-already">
          Tu as déjà un compte ? Connecte-toi !
        </Link>
      </form>
    </div>
  );
};

export default Signup;
