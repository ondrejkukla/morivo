import React from "react";
import { slider_lr } from "../../assets/about";
import { slider_rl } from "../../assets/about";
import "./Slider.css";

function Slider() {
    return (
        <slider>
            <div className="container">
                <div className="container-lr">
                    <img className="slider" src={slider_lr} alt="" />
                    <img className="slider" src={slider_lr} alt="" />
                    <img className="slider" src={slider_lr} alt="" />
                </div>
                <div className="container-rl">
                    <img className="slider" src={slider_rl} alt="" />
                    <img className="slider" src={slider_rl} alt="" />
                    <img className="slider" src={slider_rl} alt="" />
                </div>
            </div>
        </slider>
    );
}

export default Slider;