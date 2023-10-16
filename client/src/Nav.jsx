import { useContext } from "react";
import { Link } from "react-router-dom";
import {
  FilterContext,
  StrawberryContext,
  VanillaContext,
  ChocolateContext,
} from "./App";
import Auth from "./utils/auth";
export default function Nav() {
  const { setFilter } = useContext(FilterContext);
  const { setVanilla, vanilla } = useContext(VanillaContext);
  const { setStrawberry, strawberry } = useContext(StrawberryContext);
  const { setChocolate, chocolate } = useContext(ChocolateContext);
  let login = false;
  if (Auth.loggedIn() == true) {
    login = true;
  }
  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-light py-3"
        style={{ backgroundColor: "#e3f2fd" }}
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Home
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/store"
                >
                  Store
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to={login ? "/logout" : "/login"}
                >
                  {login ? "Logout" : "Login"}
                </Link>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>

              <div
                className="btn-group  ms-4 me-4 mb-4 mt-4 mb-lg-0 mt-lg-0"
                role="group"
                aria-label="Basic radio toggle button group"
              >
                <input
                  type="radio"
                  className="btn-check"
                  name="btnradio"
                  id="btnradio0"
                  autoComplete="off"
                  defaultChecked
                />
                <input
                  type="radio"
                  className="btn-check"
                  name="btnradio"
                  id="btnradio1"
                  autoComplete="off"
                  onClick={() => {
                    setVanilla(!vanilla);
                    setStrawberry(false);
                    setChocolate(false);
                  }}
                />
                <label className="btn btn-outline-primary" htmlFor="btnradio1">
                  Vanilla
                </label>

                <input
                  type="radio"
                  className="btn-check"
                  name="btnradio"
                  id="btnradio2"
                  autoComplete="off"
                  onClick={() => {
                    setStrawberry(!strawberry);
                    setChocolate(false);
                    setVanilla(false);
                  }}
                />
                <label className="btn btn-outline-primary" htmlFor="btnradio2">
                  Strawberry
                </label>

                <input
                  type="radio"
                  className="btn-check"
                  name="btnradio"
                  id="btnradio3"
                  autoComplete="off"
                  onClick={() => {
                    setChocolate(!chocolate);
                    setStrawberry(false);
                    setVanilla(false);
                  }}
                />
                <label className="btn btn-outline-primary" htmlFor="btnradio3">
                  Chocolate
                </label>
                <input
                  type="radio"
                  className="btn-check"
                  name="btnradio"
                  id="btnradio4"
                  autoComplete="off"
                  onClick={() => {
                    setChocolate(false);
                    setStrawberry(false);
                    setVanilla(false);
                  }}
                />
                <label className="btn btn-outline-primary" htmlFor="btnradio4">
                  All
                </label>
              </div>
            </ul>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                onChange={(e) => {
                  setFilter(e.target.value);
                }}
              />
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}
