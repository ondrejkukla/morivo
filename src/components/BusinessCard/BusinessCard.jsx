import React from "react";
import Button from "../Button/Button";
import { background_image, vojtech } from "../../assets/faq";
import { default as calendarIcon } from "../../assets/calendar.svg";
import { default as phoneIcon } from "../../assets/phone.svg";
import { default as emailIcon } from "../../assets/email.svg";
import "./BusinessCard.css";

function BusinessCard() {
    return (
        <div className="business-card">
            <div className="business-card__image">
                <img src={vojtech} alt="" style={{ backgroundImage: `url(${background_image})` }} />
                <p>Vojtěch Moric, kapitán týmu</p>
            </div>
            <div className="bc-title">Vyberte si termín <br /> online schůzky</div>
            <div className="bc-button">
                <div className="button-with-icon">
                    <img src={calendarIcon} alt="Calendar" className="button-icon" style={{ width: '24px', height: '24px' }} />
                    <Button 
                        type="header" 
                        text="Naplánovat online schůzku" 
                        link="https://calendly.com/morivo/schuzka" 
                    />
                </div>
            </div>
            <div className="nebo-label">nebo</div>
            <div className="contact-details">
                <div className="contact-item">
                    <img src={phoneIcon} alt="Phone" className="contact-icon" style={{ width: '24px', height: '24px' }} />
                    <a href="tel:+420777907805">+420 777 907 805</a>
                </div>
                <div className="contact-item">
                    <img src={emailIcon} alt="Email" className="contact-icon" style={{ width: '24px', height: '24px' }} />
                    <a href="mailto:hello@morivo.cz">hello@morivo.cz</a>
                </div>
            </div>
        </div>
    );
}

export default BusinessCard;