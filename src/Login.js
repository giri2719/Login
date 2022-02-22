import React, { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
export default function Login() {
  const [Name1, setName1] = useState("");
  const [password1, setPassword1] = useState("");
  const handle1 = () => {
    localStorage.setItem("Name", Name1);
    localStorage.setItem("Password", password1);
    let c = localStorage.getItem("Name");
    let d = localStorage.getItem("Password");
    let e = localStorage.getItem("a");
    let f = localStorage.getItem("b");
    // console.log(c, e, d, f);
    c === e && d === f
      ? window.open("/details")
      : alert("login failed enter correct password and email");
  };
  return (
    <div id="main">
      <h3 className="h2">LOGIN FORM</h3>
      <form className="fm">
        <div className="signup">
          <label className="sub">Email address</label>
          <input
            className="inp"
            type="email"
            placeholder="Enter email"
            value={Name1}
            onChange={(e) => setName1(e.target.value)}
          ></input>
        </div>
        <div className="signup">
          <label className="sub">Password</label>
          <input
            className="inp"
            type="password"
            placeholder="Password"
            value={password1}
            required="required"
            onChange={(e) => setPassword1(e.target.value)}
          ></input>
        </div>
        <div className="signup" id="get">
          <button onClick={handle1} id="btn">
            Sign In
          </button>

          {/* // <input className="inp" type="button" value="Sign in" id="btn">
          
          // </input> */}
        </div>
        <hr></hr>
        <div className="signup">
          <label className="sub" id="log">
            Don't have a account?
          </label>
          <Link to="/">Sign Up</Link>
          {/* <a href="#">sign up</a> */}
        </div>
      </form>
    </div>
  );
}
