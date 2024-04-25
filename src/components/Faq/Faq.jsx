import React from "react";
import Accordion from "../../components/Accordion/Accordion.jsx";
import Title from "../../components/Title/Title.jsx";
import BusinessCard from "../BusinessCard/BusinessCard.jsx";
import BadgeSlider from "../BadgeSlider/BadgeSlider.jsx";
import { people } from "../../assets/faq/index.js";
import "./Faq.css";

function Faq() {
    return (
        <faq id="faq">
            <div className="container">
                <div className="faq-top">
                    <div className="title-accordion">
                        <div className="faq-title-width">
                            <Title name="Často se nás ptáte" color="black" />
                        </div>
                        <div className="faq-distance"></div>
                        <Accordion></Accordion>
                    </div>
                    <BusinessCard />
                </div>
                <div className="faq-bottom">
                    <div className="ppl-image">
                        <img src={people} alt="" />
                    </div>
                    <BadgeSlider />
                </div>
            </div>
        </faq>
    );
}

export default Faq;
