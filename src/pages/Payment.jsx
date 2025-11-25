import { Navigate } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import CheckoutForm from "../components/CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51HCObyDVswqktOkX6VVcoA7V2sjOJCUB4FBt3EOiAdSz5vWudpWxwcSY8z2feWXBq6lwMgAb5IVZZ1p84ntLq03H00LDVc2RwP"
);

const Payment = ({ token }) => {
  // Calcul des montants à payer
  const fraisProtection = 40 * 0.1;
  const fraisDePort = 40 * 0.2;
  const total = 40 + fraisProtection + fraisDePort;

  const options = {
    mode: "payment",
    amount: 20,
    currency: "eur",
    appearance: {
      /*...*/
    },
  };

  return !token ? (
    <Navigate to="/login" />
  ) : (
    <main>
      <section>
        <h5>Résumé de la commande</h5>
        <div>
          <p>Commande</p>
          <p></p>
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
      <section>
        <div>
          <p>Total</p>
          <p>{total.toFixed(2)} €</p>
        </div>
        <div>
          Il ne vous reste plus qu'une étape pour vous offrir (title produit).
          Vous allez payer {total.toFixed(2)}€ (frais de protection et frais de
          port inclus)
        </div>
      </section>
      <section>
        <Elements stripe={stripePromise} options={options}>
          <CheckoutForm />
        </Elements>
      </section>
    </main>
  );
};

export default Payment;
