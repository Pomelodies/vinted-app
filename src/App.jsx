import "./App.css";
import { useState } from "react";

// import de react-router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Offer from "./pages/Offer";
import Header from "./components/Header";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Publish from "./pages/Publish";

function App() {
  const [isUserAuthenticated, setIsUserAuthenticated] = useState(null);

  return (
    <>
      <Router>
        <Header setIsUserAuthenticated={setIsUserAuthenticated} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/offers/:id" element={<Offer />} />
          <Route
            path="/signup"
            element={<Signup />}
            isUserAuthenticated={isUserAuthenticated}
          />
          <Route path="/login" element={<Login />} />
          <Route path="/publish" element={<Publish />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
