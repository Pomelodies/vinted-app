import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

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
        <img src={data.product_pictures[0].secure_url} alt="product pictures" />
        <aside>
          <div>
            <h3>{data.product_price}</h3>
            <div className="brand">
              <p>MARQUE</p>
              {data.product_details.map((element) => {
                return <>{element.MARQUE && <p>{element.MARQUE}</p>}</>;
              })}
            </div>
            <div className="size">
              <p>TAILLE</p>
              {data.product_details.map((element) => {
                return <>{element.TAILLE && <p>{element.TAILLE}</p>}</>;
              })}
            </div>
            <div className="condition">
              <p>ÉTAT</p>
              {data.product_details.map((element) => {
                return <>{element.ÉTAT && <p>{element.ÉTAT}</p>}</>;
              })}
            </div>
            <div className="article-color">
              <p>COULEUR</p>
              {data.product_details.map((element) => {
                return <>{element.COULEUR && <p>{element.COULEUR}</p>}</>;
              })}
            </div>
            <div className="localisation">
              <p>EMPLACEMENT</p>
              {data.product_details.map((element) => {
                return (
                  <>{element.EMPLACEMENT && <p>{element.EMPLACEMENT}</p>}</>
                );
              })}
            </div>
            <div className="payment-mode">
              <p>MODES DE PAIEMENT</p>
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
          <p>LINE DROITE</p>
          <div>
            <h2>{data.product_name}</h2>
            <p>{data.product_description}</p>
            <div>
              <img
                src={data.owner.account.avatar.secure_url}
                alt="userprofile picture"
              />
              <p>{data.owner.account.username}</p>
            </div>
          </div>
        </aside>
      </div>
      <div></div>
    </main>
  );
};

export default Offer;

// Je dois interroger la base de donnée avec le params que je reçois
// à partir de cette information, je récupère les éléments demandés
// je les dispose sur la page
