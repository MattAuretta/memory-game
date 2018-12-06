import React from "react";
import "./style.css"

const CharcterCard = props => (

    <div
        className="card"
        value={props.id}
        onClick={props.handleClick}
    >
        <img className="card-img-top" src={props.image} alt={props.name} />
    </div>

)

export default CharcterCard;