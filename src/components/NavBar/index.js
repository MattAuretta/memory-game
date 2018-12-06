import React from "react";
import "./style.css";

function NavBar(props) {
    return <nav className="navbar fixed-top">
        <ul>
            <li className="brand">
                Memory Game
            </li>
            <li id="game-message">
                {props.gameMessage}
            </li>
            <li id="score">
                Score: {props.score}
            </li>
        </ul>
    </nav>
}

export default NavBar