import { Link } from "react-router-dom";
import banner from "../assets/img/banner-hero.jpg";
import { useState, useEffect } from "react";
import axios from "axios";

const Home = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://lereacteur-vinted-api.herokuapp.com/offers"
      );
      setData(response.data);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  return isLoading ? (
    <main>Loading...</main>
  ) : (
    <main>
      <div className="home-banner">
        <img
          src={banner}
          alt="banner vinted women in front of a glass taking a picture of herself "
        />
        <div className="container">
          <aside className="ready-to-sort">
            <h1>Prêts à faire du tri dans vos placards ?</h1>
            <button>Commencer à vendre</button>
          </aside>
          <Link to="/offer">Go to Offer page</Link>
        </div>
      </div>
      <div className="container">
        {/* tableau.map() pour me sortir l'ensemble de mes articles */}
        <article>
          {console.log(data)}
          <p>User</p> {/*owner.account.username*/}
          <p>photo</p> {/*product_pictures.url*/}
          <p>Prix €</p> {/*product_price*/}
          <p>Taille</p> {/*product_details*/}
          {/* faire un .map() car c'est un tableau ?*/}
          <p>La marque</p>
          {/*product_details*/}
          {/* faire un .map() car c'est un tableau ?*/}
        </article>
      </div>
    </main>
  );
};

export default Home;
