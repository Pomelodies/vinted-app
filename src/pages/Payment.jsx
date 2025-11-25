import { Navigate, useLocation } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import CheckoutForm from "../components/CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51HCObyDVswqktOkX6VVcoA7V2sjOJCUB4FBt3EOiAdSz5vWudpWxwcSY8z2feWXBq6lwMgAb5IVZZ1p84ntLq03H00LDVc2RwP"
);

const Payment = ({ token }) => {
  const location = useLocation();
  const { title, price } = location.state;
  //   console.log(title);
  //   console.log(price);

  // Calcul des montants à payer
  const fraisProtection = price * 0.1;
  //   console.log(fraisProtection);
  const fraisDePort = price * 0.2;
  //   console.log(fraisDePort);
  const total = price + fraisProtection + fraisDePort;
  //   console.log(total);

  const options = {
    mode: "payment",
    amount: price * 100,
    currency: "eur",
    appearance: {
      theme: "night",
      labels: "floating",
    },
  };

  return !token ? (
    <Navigate to="/login" />
  ) : (
    <main className="container-payment">
      <div>
        <section className="basket-summary">
          <h5>Résumé de la commande</h5>
          <div>
            <p>Commande</p>
            <p>{price.toFixed(2)} €</p>
          </div>
          <div>
            <p>Frais de protection acheteurs</p>
            <p>{fraisProtection.toFixed(2)} €</p>
          </div>
          <div>
            <p>Frais de port</p>
            <p>{fraisDePort.toFixed(2)} €</p>
          </div>
        </section>
        <section className="payment-total">
          <div className="total">
            <p>Total</p>
            <p>{total.toFixed(2)} €</p>
          </div>
          <div>
            <p>
              Il ne vous reste plus qu'une étape pour vous offrir{" "}
              <span>{title}</span>. Vous allez payer{" "}
              <span>{total.toFixed(2)}€</span> (frais de protection et frais de
              port inclus).
            </p>
          </div>
        </section>
        <section className="stripe-component">
          <Elements stripe={stripePromise} options={options}>
            <CheckoutForm title={title} price={price} />
          </Elements>
        </section>
      </div>
    </main>
  );
};

export default Payment;
