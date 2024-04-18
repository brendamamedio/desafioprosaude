import React from "react";
import Card from "../components/Card";
import "./Info.css";
import { Link } from "react-router-dom";

const Info = () => {
  return (
    <div id="info-container">
      <header>
        <Link to={"/"}>
          <button>&#8592;</button>
        </Link>
        <img src="../assets/logo.svg" alt="" />
      </header>

      <Card />
    </div>
  );
};

export default Info;
