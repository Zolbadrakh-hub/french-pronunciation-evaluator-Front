import React, { useState } from "react";
import "./Login.css";

function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

  return (
    <div className="login">
      <h1>Login</h1>
      <input
        type="text"
        name="email"
        value={email}
        onChange={(e)=> setEmail(e.target.value)}
        placeholder="Enter your Email"
      ></input>
      <input
        type="password"
        name="password"
        value={password}
        onChange={(e)=> setPassword(e.target.value)}
        placeholder="Enter your Password"
      ></input>
      <div className="button">
        Login
      </div>
      <div>or</div>
      <div className="button">
        SignUp
      </div>
    </div>
  );
};
export default Login;