import "./App.css";
import Nav from "./Nav";
import Home from "./Home";
import Store from "./Store";
import { createContext, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
export const CheckoutContext = createContext();

export default function App() {
  const [checkout, setCheckout] = useState([]);
  return (
    <>
      <Router>
        <Nav></Nav>
        <CheckoutContext.Provider value={{ checkout, setCheckout }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/store" element={<Store />} />
          </Routes>
        </CheckoutContext.Provider>
      </Router>
    </>
  );
}
