import React, { useState } from "react";
// import Details from "./Details";
// import Login from "./Login";
import { Link } from "react-router-dom";
import "./App.css";
// import Signup from "./Signup";

export default function App() {
  const [Name, setName] = useState("");
  const [password, setPassword] = useState("");
  const handle = () => {
    localStorage.setItem("a", Name);
    localStorage.setItem("b", password);
  };
  return (
    <div id="sign">
      <h3 class="h1">SIGN UP FORM</h3>
      <form className="fm">
        <div className="signup">
          <lable className="sub">First Name</lable>
          <input className="inp" type="text" placeholder="Enter name"></input>
        </div>
        <div className="signup">
          <lable className="sub">Last Name</lable>
          <input className="inp" type="text" placeholder="Enter Name"></input>
        </div>
        <div className="signup">
          <lable className="sub">Email address</lable>
          <input
            className="inp"
            type="email"
            placeholder="Enter email"
            value={Name}
            onChange={(e) => setName(e.target.value)}
          ></input>
        </div>
        <div className="signup">
          <lable className="sub">Password</lable>
          <input
            className="inp"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </div>
        <div className="signup">
          <lable className="sub">Mobile Number</lable>
          <input
            className="inp"
            type="number"
            placeholder="Mobile number"
          ></input>
        </div>
        <div className="signup">
          <Link
            to="/login"
            className="inp"
            type="button"
            id="btn"
            onClick={handle}
          >
            SignUp
          </Link>
        </div>
        <hr></hr>
        <div className="signup">
          <lable className="sub" id="log">
            Already registered User?
          </lable>
          <Link to="/login">LogIn</Link>
        </div>
      </form>
    </div>
    // <div>
    //   <div>
    //     {/* <Link to="/">SignUp</Link>

    //     <Link to="/Login" className="space">
    //       Login
    //     </Link> */}
    //   </div>
    //   {/* <Link to="/Details">Details</Link> */}

    //   {/* <Signup></Signup>
    //   <Login></Login>
    //   <Details></Details> */}
    // </div>
  );
}
