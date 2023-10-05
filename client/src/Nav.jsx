import { useContext } from "react";
import { Link } from "react-router-dom";
import { FilterContext } from "./App";

export default function Nav() {
  const { setFilter } = useContext(FilterContext);
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
                  to="/login"
                >
                  Login
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
                className="btn-group ms-4 me-4 mb-4 mt-4 mb-lg-0 mt-lg-0"
                role="group"
                aria-label="Basic checkbox toggle button group"
              >
                <input
                  type="checkbox"
                  className="btn-check"
                  id="btncheck1"
                  autoComplete="off"
                  key="btncheck1"
                />
                <label className="btn btn-outline-primary" htmlFor="btncheck1">
                  Chocolate
                </label>

                <input
                  type="checkbox"
                  className="btn-check"
                  id="btncheck2"
                  autoComplete="off"
                  key="btncheck2"
                />
                <label className="btn btn-outline-primary" htmlFor="btncheck2">
                  Strawberry
                </label>

                <input
                  type="checkbox"
                  className="btn-check"
                  id="btncheck3"
                  autoComplete="off"
                  key="btncheck3"
                />
                <label className="btn btn-outline-primary" htmlFor="btncheck3">
                  Vanilla
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

              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}
