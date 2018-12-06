import React from "react";
import "./style.css";

function NavBar(props) {
    return <nav className="navbar fixed-top">
        <ul>
            <li className="brand">
                Memory Game
            </li>
            <li id="game-message">
                Click An Image to Begin!
            </li>
            <li id="score">
                Score
            </li>
        </ul>
    </nav>
}

export default NavBar