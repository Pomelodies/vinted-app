import logo from "../assets/img/logo-vinted.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="container">
        <div>
          <Link to="/">
            <img src={logo} alt="logo vinted" />
          </Link>
        </div>
        {userToken ? (
          <div>
            <button>Se déconnecter</button>
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
