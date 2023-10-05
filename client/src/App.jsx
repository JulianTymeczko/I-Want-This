import "./App.css";
import Nav from "./Nav";
import Home from "./Home";
import Store from "./Store";
import Login from "./Login.jsx";
import SignUp from "./SignUp";
import { createContext, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
export const CheckoutContext = createContext();
export const FilterContext = createContext();
export const VanillaContext = createContext();
export const StrawberryContext = createContext();
export const ChocolateContext = createContext();
export default function App() {
  const [checkout, setCheckout] = useState([]);
  const [filter, setFilter] = useState("");
  const [vanilla, setVanilla] = useState(false);
  const [strawberry, setStrawberry] = useState(false);
  const [chocolate, setChocolate] = useState(false);
  return (
    <>
      <Router>
        <VanillaContext.Provider value={{ vanilla, setVanilla }}>
          <StrawberryContext.Provider value={{ strawberry, setStrawberry }}>
            <ChocolateContext.Provider value={{ chocolate, setChocolate }}>
              <FilterContext.Provider value={{ filter, setFilter }}>
                <Nav></Nav>
                <CheckoutContext.Provider value={{ checkout, setCheckout }}>
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/store" element={<Store />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<SignUp />} />
                  </Routes>
                </CheckoutContext.Provider>
              </FilterContext.Provider>
            </ChocolateContext.Provider>
          </StrawberryContext.Provider>
        </VanillaContext.Provider>
      </Router>
    </>
  );
}
