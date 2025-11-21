import logo from "../assets/img/logo-vinted.png";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";
// import { useState } from "react";

const Header = () => {
  // const [userLogged, setUserLogged] = useState(false);
  return (
    <header>
      <div className="container">
        <div>
          <Link to="/">
            <img src={logo} alt="logo vinted" />
          </Link>
        </div>
        {Cookies.get("userToken") ? (
          <div className="userVerified">
            <button
              onClick={() => {
                Cookies.remove("userToken");
                // setUserLogged(false);
              }}
            >
              Se déconnecter
            </button>
            <button>Vends tes articles</button>
          </div>
        ) : (
          <div className="buttons">
            <Link to="/signup">
              <button>S'inscrire</button>
            </Link>
            <Link to="/login">
              <button>Se connecter</button>
            </Link>

            <button>Vends tes articles</button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
