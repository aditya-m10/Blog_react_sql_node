import React, { useState } from "react";
import {Link} from "react-router-dom"
import "./style.css"
function Login() {
  const [name, setName] = useState("");
  const [headingText, setHeading] = useState("");

  function handleChange(event) {
    console.log(event.target.value);
    setName(event.target.value);
  }

  function handleClick(event) {
    setHeading(name);

    event.preventDefault();
  }

  return (
    <div className="container">
      <h1>Welcome !!{headingText}</h1>
      <form onSubmit={handleClick}>
        <input
          onChange={handleChange}
          type="text"
          placeholder="What's your email?"
          value={name}
        />
        <input
          onChange={handleChange}
          type="password"
          placeholder="What's your password?"
          value={name}
        />
        <button className="Button" type="submit">Submit</button>
        <div>
        <span>Already have an account?  <Link style={{color:"whitesmoke"}} to="/Register">Register</Link></span>
        </div>
      </form>
    </div>
  );
}

export default Login;
