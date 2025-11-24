import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import neutralPp from "../assets/img/neutral-pp.jpg";

const Offer = () => {
  const params = useParams(); // console.log(params); {"id": "3"}
  const { id } = params;
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://lereacteur-vinted-api.herokuapp.com/offer/${id}`
      );
      // console.log(response.data);
      setData(response.data);
      setIsLoading(false);
    };
    fetchData();
  }, [id]);

  return isLoading ? (
    <main>Data loading... please wait !</main>
  ) : (
    <main>
      <div className="offer-container">
        <img
          className="article-pic"
          src={data.product_pictures[0].secure_url}
          alt="product pictures"
        />
        <aside>
          <div className="product-details-offer">
            <h3>{data.product_price} €</h3>
            <div className="brand">
              <span>MARQUE</span>
              {data.product_details.map((element) => {
                return <>{element.MARQUE && <p>{element.MARQUE}</p>}</>;
              })}
            </div>
            <div className="size">
              <span>TAILLE</span>
              {data.product_details.map((element) => {
                return <>{element.TAILLE && <p>{element.TAILLE}</p>}</>;
              })}
            </div>
            <div className="condition">
              <span>ÉTAT</span>
              {data.product_details.map((element) => {
                return <>{element.ÉTAT && <p>{element.ÉTAT}</p>}</>;
              })}
            </div>
            <div className="article-color">
              <span>COULEUR</span>
              {data.product_details.map((element) => {
                return <>{element.COULEUR && <p>{element.COULEUR}</p>}</>;
              })}
            </div>
            <div className="localisation">
              <span>EMPLACEMENT</span>
              {data.product_details.map((element) => {
                return (
                  <>{element.EMPLACEMENT && <p>{element.EMPLACEMENT}</p>}</>
                );
              })}
            </div>
            <div className="payment-mode">
              <span>MODES DE PAIEMENT</span>
              {data.product_details.map((element) => {
                return (
                  <>
                    {element["MODES DE PAIEMENT"] && (
                      <p>{element["MODES DE PAIEMENT"]}</p>
                    )}
                  </>
                );
              })}
            </div>
          </div>
          <div className="product-description-offer">
            <h4>{data.product_name}</h4>
            <p>{data.product_description}</p>
            <div className="user-profile-offer">
              {data.owner.account.avatar ? (
                <img
                  src={data.owner.account.avatar.secure_url}
                  alt="user profile picture"
                />
              ) : (
                <img src={neutralPp} alt="neutral user profile picture" />
              )}
              <span>{data.owner.account.username}</span>
            </div>
          </div>
          <button>Acheter</button>
        </aside>
      </div>
    </main>
  );
};

export default Offer;

{
  /* Je dois interroger la base de donnée avec le params que je reçois
à partir de cette information, je récupère les éléments demandés
je les dispose sur la page */
}
