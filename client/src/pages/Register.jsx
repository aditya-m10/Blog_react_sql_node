import React, { useState } from "react";
import {Link} from "react-router-dom"
import "./style.css"
function Register() {
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
      <h1>Create Account {headingText}</h1>
      <form onSubmit={handleClick}>
        <input
          onChange={handleChange}
          type="text"
          placeholder="What's your name?"
          value={name}
        />
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
        <button className="Button" type="Register">Submit</button>
        <div>
        <span>Already have an account?  <Link style={{color:"whitesmoke"}} to="/login">Login</Link></span>
        </div>
      </form>
    </div>
  );
}

export default Register;
