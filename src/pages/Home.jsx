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
              {element.product_pictures.map((pictures) => {
                // console.log(pictures);
                return (
                  <img
                    src={pictures.secure_url}
                    alt="clothes to be sold"
                    key={pictures.asset_id}
                  />
                );
              })}
              <div className="product-details">
                <p>{element.product_price} €</p>
                {element.product_details.map((infos) => {
                  //   console.log(infos);
                  return (
                    <>
                      <p>{infos.TAILLE}</p>
                      <p>{infos.MARQUE}</p>
                    </>
                  );
                })}
              </div>
            </article>
          );
        })}
      </div>
    </main>
  );
};

export default Home;
