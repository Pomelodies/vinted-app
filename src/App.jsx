import "./App.css";
import { useState } from "react";
import Cookies from "js-cookie";

// import de react-router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Offer from "./pages/Offer";
import Header from "./components/Header";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Publish from "./pages/Publish";
import Payment from "./pages/Payment";

function App() {
  const [token, setToken] = useState(Cookies.get("userToken") || null);

  // fonction pour définir l'état d'authentification
  const setUser = (token) => {
    if (token) {
      Cookies.set("userToken", token, { expires: 7 });
      setToken(token);
    } else {
      Cookies.remove("userToken");
      setToken(null);
    }
  };

  return (
    <>
      <Router>
        <Header token={token} setUser={setUser} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/offers/:id" element={<Offer />} />
          <Route path="/signup" element={<Signup setUser={setUser} />} />
          <Route path="/login" element={<Login setUser={setUser} />} />
          <Route path="/publish" element={<Publish token={token} />} />
          <Route path="/payment" element={<Payment token={token} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
