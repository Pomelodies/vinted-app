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
            <button className="start-to-sell">Commencer à vendre</button>
          </aside>
        </div>
      </div>
      <div className="container-main-home">
        {/* tableau.map() pour me sortir l'ensemble de mes articles */}
        {data.offers.map((element) => {
          //   console.log(element);
          return (
            <article className="offer" key={element._id}>
              <div className="user">
                <img src={element.owner.account.avatar.secure_url} />
                <p>{element.owner.account.username}</p>
              </div>
              <Link className="link-to-offer" to={`/offers/${element._id}`}>
                <img
                  src={element.product_pictures[0].secure_url}
                  alt="clothes to be sold"
                />
                <div className="product-details">
                  <p className="price">{element.product_price} €</p>
                  {/* <p>{element.product_details[1].TAILLE}</p>
                <p>{element.product_details[0].MARQUE}</p> */}
                  {element.product_details.map((infos, index) => {
                    //   console.log(infos);
                    return (
                      <>
                        <p key={"taille" + index}>{infos.TAILLE}</p>
                        <p key={"marque" + index}>{infos.MARQUE}</p>
                      </>
                    );
                  })}
                </div>
              </Link>
            </article>
          );
        })}
      </div>
    </main>
  );
};

export default Home;
