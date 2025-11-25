import logo from "../assets/img/logo-vinted.png";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";
// import { useState } from "react";

const Header = ({ token, setUser }) => {
  return (
    <header>
      <div className="container">
        <div>
          <Link to="/">
            <img src={logo} alt="logo vinted" />
          </Link>
        </div>
        {token ? (
          <div className="buttons-aside">
            <button
              className="disconnect"
              onClick={() => {
                setUser(null);
              }}
            >
              Se déconnecter
            </button>
            <Link to="/publish">
              <button className="sell-your-article">Vends tes articles</button>
            </Link>
          </div>
        ) : (
          <div className="buttons-aside">
            <div className="connect-buttons">
              <Link to="/signup">
                <button className="sinscrire">S'inscrire</button>
              </Link>

              <Link to="/login">
                <button className="seconnecter">Se connecter</button>
              </Link>
            </div>
            <Link to="/publish">
              <button className="sell-your-article">Vends tes articles</button>
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
