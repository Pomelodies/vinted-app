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
            <div>
              {data.product_details.map((element) => {
                return (
                  <div>
                    <div>{element.MARQUE && <p>{element.MARQUE}</p>}</div>
                    {element.TAILLE && <p>{element.TAILLE}</p>}
                    {element.ETAT && <p>{element.ETAT}</p>}
                    {element.COULEUR && <p>{element.COULEUR}</p>}
                    {element.EMPLACEMENT && <p>{element.EMPLACEMENT}</p>}
                    {element["MODES DE PAIEMENT"] && (
                      <p>{element["MODES DE PAIEMENT"]}</p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          <div></div>
        </aside>
      </div>
    </main>
  );
};

export default Offer;

// Je dois interroger la base de donnée avec le params que je reçois
// à partir de cette information, je récupère les éléments demandés
// je les dispose sur la page
