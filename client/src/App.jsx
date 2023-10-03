import "./App.css";
import Nav from "./Nav";
import Home from "./Home";
import Store from "./Store";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Router>
        <Nav></Nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
