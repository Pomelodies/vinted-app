import { useState } from "react";
import axios from "axios";

const Publish = () => {
  const [picture, setPicture] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [brand, setBrand] = useState("");
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");
  const [condition, setCondition] = useState("");
  const [localisation, setLocalisation] = useState("");
  const [price, setPrice] = useState("");
  const [swap, setSwap] = useState(false);

  // création d'une fonction handleChange qui sera utilisé dans chaque input
  const handleChange = (event, setState) => {
    setState(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // création du form-data
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("price", price);
    formData.append("condition", condition);
    formData.append("city", localisation);
    formData.append("brand", brand);
    formData.append("size", size);
    formData.append("color", color);
    formData.append("picture", picture);

    // vérifier ce qu'il y a dans le form-data
    // for (let pair of formData.entries()) {
    //   console.log(pair[0] + ", " + pair[1]);
    // }

    //envoyer les infos via une requête axios en POST
    try {
      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/offer/publish",
        formData,
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response.data);
    } catch (error) {
      console.log(error.response);
    }
  };

  return (
    <div className="container-publish">
      <h2>Vends ton article</h2>
      <form onSubmit={handleSubmit}>
        <div className="photo-upload">
          <label htmlFor="picture">Ajoute une photo</label>
          <input
            type="file"
            id="picture"
            onChange={(event) => {
              //   console.log(event.target.files[0]);
              setPicture(event.target.files[0]);
            }}
          />
        </div>
        <div className="article-presentation">
          <div>
            <label htmlFor="title">Titre</label>
            <input
              type="text"
              id="title"
              value={title}
              placeholder="ex: Chemise Sézane verte"
              onChange={(event) => {
                handleChange(event, setTitle);
              }}
            />
          </div>
          <div>
            <label htmlFor="description">Décris ton article</label>
            <input
              type="text"
              id="description"
              value={description}
              placeholder="ex: porté quelques fois, taille correcte"
              onChange={(event) => {
                handleChange(event, setDescription);
              }}
            />
          </div>
        </div>
        <div className="article-presentation-details">
          <div>
            <label htmlFor="brand">Marque</label>
            <input
              type="text"
              id="brand"
              value={brand}
              placeholder="ex: Zara"
              onChange={(event) => {
                handleChange(event, setBrand);
              }}
            />
          </div>
          <div>
            <label htmlFor="size">Taille</label>
            <input
              type="text"
              id="size"
              value={size}
              placeholder="ex: L / 40/ 12"
              onChange={(event) => {
                handleChange(event, setSize);
              }}
            />
          </div>
          <div>
            <label htmlFor="color">Couleur</label>
            <input
              type="text"
              id="color"
              value={color}
              placeholder="ex: Noir"
              onChange={(event) => {
                handleChange(event, setColor);
              }}
            />
          </div>
          <div>
            <label htmlFor="condition">Etat</label>
            <input
              type="text"
              id="condition"
              value={condition}
              placeholder="ex: neuf avec étiquette"
              onChange={(event) => {
                handleChange(event, setCondition);
              }}
            />
          </div>
          <div>
            <label htmlFor="localisation">Lieu</label>
            <input
              type="text"
              id="localisation"
              value={localisation}
              placeholder="ex: Paris"
              onChange={(event) => {
                handleChange(event, setLocalisation);
              }}
            />
          </div>
        </div>
        <div className="article-price">
          <label htmlFor="price">Price</label>
          <div>
            <input
              type="text"
              id="price"
              value={price}
              placeholder="0,00€"
              onChange={(event) => {
                handleChange(event, setPrice);
              }}
            />
            <div>
              <input
                type="checkbox"
                id="checkSwap"
                onChange={(event) => {
                  setSwap(event.target.checked);
                }}
                checked={swap}
              />
              <label htmlFor="checkSwap">
                Je suis intéressé(e) par les échanges
              </label>
            </div>
          </div>
        </div>
        <button>Ajouter</button>
      </form>
    </div>
  );
};

export default Publish;
