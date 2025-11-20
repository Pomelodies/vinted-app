import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const Offer = () => {
  const params = useParams();
  // console.log(params); {"id": "3"}
  return (
    <main>
      <h1>Offer Container</h1>
      <p>Cette page est la page du produit : {params.id}</p>
      <Link to="/">Go to Home page</Link>
      {/* Lien vers la page home */}
    </main>
  );
};

export default Offer;

// Je dois interroger la base de donnée avec le params que je reçois
// à partir de cette information, je récupère les éléments demandés
// je les dispose sur la page
