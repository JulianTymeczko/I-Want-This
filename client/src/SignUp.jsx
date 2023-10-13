import { Link } from "react-router-dom";
import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import Auth from './utils/auth';
import { ADD_USER } from './utils/mutations';

function SignUp(props) {
  const [formState, setFormState] = useState({ username: '', email: '', password: '' });
  const [addUser] = useMutation(ADD_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const mutationResponse = await addUser({
        variables: {
          username: formState.username,
          email: formState.email,
          password: formState.password,
        },
      });
      console.log(mutationResponse);
      console.log('USER CREATED');
      const token = mutationResponse.data.addUser.token;
      Auth.login(token);
    }
    catch (error) {
      console.log(error);
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
        <h1 className="h3 mb-3 fw-normal">SignUp</h1>
        <div className="form-floating" style={{ marginBottom: "20px" }}>
          <input
            type="username"
            className="form-control"
            name="username"
            id="username"
            placeholder="Username"
            onChange={handleChange}
          />
          <label htmlFor="username">Username</label>
        </div>
        <div className="form-floating" style={{ marginBottom: "20px" }}>
          <input
            type="email"
            className="form-control"
            name="email"
            id="email"
            placeholder="email@email.com"
            onChange={handleChange}
          />
          <label htmlFor="emailt">Email</label>
        </div>
        <div className="form-floating" style={{ marginBottom: "15px" }}>
          <input
            type="password"
            className="form-control"
            name="password"
            id="password"
            placeholder="Password"
            onChange={handleChange}
          />
          <label htmlFor="password">Password</label>
        </div>
        <div className="checkbox mb-3">
          <Link className="nav-link active" aria-current="page" to="/login">
            Login Instead
          </Link>
        </div>
        <button
          className="w-100 btn btn-lg btn-primary"
          type="submit"
          id="log-in"
        >
          Sign Up
        </button>
        <p className="mt-5 mb-3 text-muted"></p>
      </form>
    </>
  );
}

export default SignUp;
