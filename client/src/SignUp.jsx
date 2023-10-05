import { Link } from "react-router-dom";
export default function SignUp() {
  return (
    <>
      <div>
        <h1 className="h3 mb-3 fw-normal">SignUp</h1>
        <div className="form-floating" style={{ marginBottom: "20px" }}>
          <input
            type="text"
            className="form-control"
            id="floatingInput"
            placeholder="Username"
          />
          <label htmlFor="floatingInput">Username</label>
        </div>
        <div className="form-floating" style={{ marginBottom: "15px" }}>
          <input
            type="password"
            className="form-control"
            id="floatingPassword"
            placeholder="Password"
          />
          <label htmlFor="floatingPassword">Password</label>
        </div>
        <div className="checkbox mb-3">
          <Link className="nav-link active" aria-current="page" to="/login">
            Login Instead
          </Link>
        </div>
        <button
          className="w-100 btn btn-lg btn-primary"
          type="button"
          id="log-in"
        >
          Sign Up
        </button>
        <p className="mt-5 mb-3 text-muted"></p>
      </div>
    </>
  );
}
