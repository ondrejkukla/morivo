import React from "react";
import Badge from "../Badge/Badge";
import "./BadgeSlider.css";

function BadgeSlider(props) {

    const direction = props.direction === "left" ? "move-left " : "move-right ";

    return (
        <div className="cont">
            <div className={direction + "slider-big"}>
                <Badge bg="white" text="Vizuální identity" />
                <Badge bg="white" text="Vizuální strategie" />
                <Badge bg="white" text="Bannery" />
                <Badge bg="white" text="PPC sady" />
                <Badge bg="white" text="Mobilní aplikace" />
                <Badge bg="white" text="Ikony" />
                <Badge bg="white" text="Sociální sítě" />
                <Badge bg="white" text="Animace" />
                <Badge bg="white" text="Brandmanuály" />
                <Badge bg="white" text="Loga" />
                <Badge bg="white" text="Webdesign" />
                <Badge bg="white" text="Design tiskovin" />
                <Badge bg="white" text="Vizuální identity" />
                <Badge bg="white" text="Vizuální strategie" />
                <Badge bg="white" text="Bannery" />
                <Badge bg="white" text="PPC sady" />
                <Badge bg="white" text="Mobilní aplikace" />
                <Badge bg="white" text="Ikony" />
                <Badge bg="white" text="Sociální sítě" />
                <Badge bg="white" text="Animace" />
                <Badge bg="white" text="Brandmanuály" />
                <Badge bg="white" text="Loga" />
                <Badge bg="white" text="Webdesign" />
                <Badge bg="white" text="Design tiskovin" />
                <Badge bg="white" text="Vizuální identity" />
                <Badge bg="white" text="Vizuální strategie" />
                <Badge bg="white" text="Bannery" />
                <Badge bg="white" text="PPC sady" />
                <Badge bg="white" text="Mobilní aplikace" />
                <Badge bg="white" text="Ikony" />
                <Badge bg="white" text="Sociální sítě" />
                <Badge bg="white" text="Animace" />
                <Badge bg="white" text="Brandmanuály" />
                <Badge bg="white" text="Loga" />
                <Badge bg="white" text="Webdesign" />
                <Badge bg="white" text="Design tiskovin" />
                <Badge bg="white" text="Vizuální identity" />
                <Badge bg="white" text="Vizuální strategie" />
                <Badge bg="white" text="Bannery" />
                <Badge bg="white" text="PPC sady" />
                <Badge bg="white" text="Mobilní aplikace" />
                <Badge bg="white" text="Ikony" />
                <Badge bg="white" text="Sociální sítě" />
                <Badge bg="white" text="Animace" />
                <Badge bg="white" text="Brandmanuály" />
                <Badge bg="white" text="Loga" />
                <Badge bg="white" text="Webdesign" />
                <Badge bg="white" text="Design tiskovin" />
            </div>
            <div className={`${direction} slider-small-l`}>
                <Badge bg="white" text="Vizuální identity" />
                <Badge bg="white" text="Vizuální strategie" />
                <Badge bg="white" text="Bannery" />
                <Badge bg="white" text="PPC sady" />
                <Badge bg="white" text="Mobilní aplikace" />
                <Badge bg="white" text="Ikony" />
                <Badge bg="white" text="Vizuální identity" />
                <Badge bg="white" text="Vizuální strategie" />
                <Badge bg="white" text="Bannery" />
                <Badge bg="white" text="PPC sady" />
                <Badge bg="white" text="Mobilní aplikace" />
                <Badge bg="white" text="Ikony" />
                <Badge bg="white" text="Vizuální identity" />
                <Badge bg="white" text="Vizuální strategie" />
                <Badge bg="white" text="Bannery" />
                <Badge bg="white" text="PPC sady" />
                <Badge bg="white" text="Mobilní aplikace" />
                <Badge bg="white" text="Ikony" />
                <Badge bg="white" text="Vizuální identity" />
                <Badge bg="white" text="Vizuální strategie" />
                <Badge bg="white" text="Bannery" />
                <Badge bg="white" text="PPC sady" />
                <Badge bg="white" text="Mobilní aplikace" />
                <Badge bg="white" text="Ikony" />
            </div>
            <div className={`${direction} slider-small-r`}>
                <Badge bg="white" text="Sociální sítě" />
                <Badge bg="white" text="Animace" />
                <Badge bg="white" text="Brandmanuály" />
                <Badge bg="white" text="Loga" />
                <Badge bg="white" text="Webdesign" />
                <Badge bg="white" text="Design tiskovin" />
                <Badge bg="white" text="Sociální sítě" />
                <Badge bg="white" text="Animace" />
                <Badge bg="white" text="Brandmanuály" />
                <Badge bg="white" text="Loga" />
                <Badge bg="white" text="Webdesign" />
                <Badge bg="white" text="Design tiskovin" />
                <Badge bg="white" text="Sociální sítě" />
                <Badge bg="white" text="Animace" />
                <Badge bg="white" text="Brandmanuály" />
                <Badge bg="white" text="Loga" />
                <Badge bg="white" text="Webdesign" />
                <Badge bg="white" text="Design tiskovin" />
                <Badge bg="white" text="Sociální sítě" />
                <Badge bg="white" text="Animace" />
                <Badge bg="white" text="Brandmanuály" />
                <Badge bg="white" text="Loga" />
                <Badge bg="white" text="Webdesign" />
                <Badge bg="white" text="Design tiskovin" />
            </div>
        </div>

    )
}

export default BadgeSlider;