import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import Login from "./Login";
import Details from "./Details";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App></App>}></Route>

      <Route path="/login" element={<Login></Login>}></Route>
      <Route path="/details" element={<Details></Details>}></Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
