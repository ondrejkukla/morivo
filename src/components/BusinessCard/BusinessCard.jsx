import React from "react";
import Button from "../Button/Button";
import { background_image, vojtech } from "../../assets/faq";
import "./BusinessCard.css";

function BusinessCard() {
    return (
        <div className="business-card">
            <div className="business-card__image">
                <img src={vojtech} alt="" style={{ backgroundImage: `url(${background_image})` }} />
                <p>Vojtěch Moric, Art Director</p>
            </div>
            <div className="bc-title">Vyberte si termín <br /> online schůzky</div>
            <div className="bc-button">
                <Button type="header" text="Vybrat termín" link="https://calendly.com/morivo/schuzka" />
            </div>
        </div>
    );
}

export default BusinessCard;