import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="signup">
      <h2>S'inscrire</h2>
      <form className="form-signup">
        <input type="text" placeholder="Nom d'utilisateur" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Mot de passe" />
        <div className="newsletter">
          <input type="checkbox" />
          <p>S'inscrire à notre newsletter</p>
        </div>
        <p className="disclaimer">
          En m'inscrivant je confirme avoir lu et accepté les Termes &
          Conditions et Politique de Confidentialité de Vinted. Je confirme
          avoir au moins 18 ans.
        </p>
        <button type="submit">S'inscrire</button>
        <Link to="/login">Tu as déjà un compte ? Connecte-toi !</Link>
      </form>
    </div>
  );
};

export default Signup;
