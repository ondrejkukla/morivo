import React from "react";
import "./Card.css";

function Card(props) {
    return (
        <div className="card">
            <img className="inner-card" src={props.img} alt=""></img>
            <p className="subtitle"> {props.subtitle}</p>
            <p className="card-text"> {props.text} </p>
        </div>
    );
}

export default Card;