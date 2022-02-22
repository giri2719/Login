import React, { useState } from "react";
import "./Details.css";

export default function Details() {
  const [name, setname] = useState([]);
  const [name1, setname1] = useState([]);
  const [company, setcompany] = useState([]);
  const [email, setemail] = useState([]);
  const [phone, setphone] = useState([]);
  const display = () => {
    alert("registration successfull");
    console.log(name, company, email, phone);
  };
  return (
    <div className="first">
      <table>
        <tr>
          <th colSpan="3">EVENT REGISTRATION FORM</th>
        </tr>

        <tr>
          <td>
            <label className="lab">Name</label>
          </td>
          <td>
            <input
              type="text"
              placeholder="First Name"
              value={name}
              onChange={(e) => setname(e.target.value)}
            ></input>
          </td>
          <td>
            <input
              type="text"
              placeholder="Last Name"
              value={name1}
              onChange={(e) => setname1(e.target.value)}
            ></input>
          </td>
        </tr>
        <tr>
          <td>
            <label className="lab">Company</label>
          </td>
          <td colSpan="2">
            <input
              type="text"
              style={{ width: "97%" }}
              value={company}
              onChange={(e) => setcompany(e.target.value)}
            ></input>
          </td>
          <td></td>
        </tr>
        <tr>
          <td>
            <label className="lab">Email</label>
          </td>
          <td colSpan="2">
            <input
              type="email"
              placeholder="example@gmail.com"
              style={{ width: "97%" }}
              value={email}
              onChange={(e) => setemail(e.target.value)}
            ></input>
          </td>
          <td></td>
        </tr>
        <tr>
          <td>
            <label className="lab">Phone</label>
          </td>
          <td colSpan="3">
            <input
              type="number"
              placeholder="Phone Number"
              style={{ width: "96%" }}
              value={phone}
              onChange={(e) => setphone(e.target.value)}
            ></input>
          </td>
        </tr>
        <tr>
          <td>
            <label className="lab">Subject</label>
          </td>
          <td colSpan="2">
            <select style={{ width: "100%" }}>
              <option>Choose Option</option>
              <option>Marriage</option>
              <option>Birthday</option>
              <option>Guest welcome</option>
              <option>Engagement</option>
            </select>
          </td>
          <td></td>
        </tr>
      </table>
      <div className="subdiv">
        <label>Are you a existing customer</label>
        <br></br>
        <input type="radio" name="name"></input>
        <label for="name">Yes</label>
        <input type="radio" name="name"></input>
        <label for="name">No</label>
        <br></br>
        <br></br>
        <input
          type="button"
          value="register"
          class="btn1"
          onClick={display}
        ></input>
      </div>
    </div>
  );
}
