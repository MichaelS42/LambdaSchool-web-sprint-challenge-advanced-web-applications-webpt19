import React, { useState }from "react";
import axios from "axios";
import {useHistory} from "react-router-dom";

const Login = (props) => {
  const [login, setLogin] = useState({ username: "", password: "" });
  const { push } = useHistory();
  
  const handleChanges = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
    console.log(login);
  };
  // make a post request to retrieve a token from the api
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/api/login', login).then((res) => {
      console.log(res);
      window.localStorage.setItem("token", res.data.payload);
      // when you have handled the token, navigate to the BubblePage route
      push("/bubbles");
    });
  };

  return (
    <div>
      <h1>Welcome to the Bubble App!</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          label="username"
          value={login.username}
          onChange={handleChanges}
          placeholder="username"
        ></input>

        <input
          type="text"
          name="password"
          label="password"
          value={login.password}
          onChange={handleChanges}
          placeholder="password"
        ></input>

        <button> Login </button>
      </form>
    </div>
  );
};

export default Login;
