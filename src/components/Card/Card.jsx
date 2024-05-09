import React from "react";
import "./Card.css";

function Card(props) {
    const widthClass = props.width === "reduced" ? "subtitle w-75" : "subtitle";

    return (
        <div className="card">
            <img className="inner-card" src={props.img} alt=""></img>
            <p className={widthClass}> {props.subtitle}</p>
            <p className="card-text"> {props.text} </p>
        </div>
    );
}

export default Card;
