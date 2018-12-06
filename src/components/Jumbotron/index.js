import React from "react";
import "./style.css";

function Jumbotron(props) {
    return <div className="jumbotron jumbotron-fluid">
  <div className="container">
    <h1>Memory Game!</h1>
    <p>Click on a pokemon to earn points, but don't click an image more than once!</p>
  </div>
</div>
}

export default Jumbotron