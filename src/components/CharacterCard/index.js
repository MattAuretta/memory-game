import React from "react";
import "./style.css"

function CharcterCard(props) {
    return (
        <div className="card">
            <img className="card-img-top" src={props.image} alt={props.name} />
        </div>
    )
}

export default CharcterCard;