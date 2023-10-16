import { Link } from "react-router-dom";
import { LOGIN } from "./utils/mutations";
import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import Auth from "./utils/auth";

function Login(props) {
  const [formState, setFormState] = useState({ username: "", password: "" });
  const [login, { error }] = useMutation(LOGIN);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const mutationResponse = await login({
        variables: {
          username: formState.username,
          password: formState.password,
        },
      });
      const token = mutationResponse.data.login.token;
      Auth.login(token);
    } catch (e) {
      console.log(e);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <h1 className="h3 mb-3 fw-normal">Log In</h1>
        <div className="form-floating" style={{ marginBottom: "20px" }}>
          <input
            type="username"
            className="form-control"
            id="username"
            name="username"
            placeholder="Username"
            onChange={handleChange}
          />
          <label htmlFor="username">Username</label>
        </div>
        <div className="form-floating" style={{ marginBottom: "15px" }}>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
          />
          <label htmlFor="password">Password</label>
        </div>
        <div className="checkbox mb-3">
          <Link className="nav-link active" aria-current="page" to="/signup">
            Sign Up Instead
          </Link>
        </div>
        <button
          className="w-100 btn btn-lg btn-primary"
          type="submit"
          id="log-in"
        >
          Log In
        </button>
        <p className="mt-5 mb-3 text-muted"></p>
      </form>
    </>
  );
}
export default Login;
