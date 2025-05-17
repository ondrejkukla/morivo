import React from "react";
import { timeline1, timeline2, timeline3, timeline4, timeline5, timeline6 } from "../../assets/index";
import "./Timeline.css";
import Button from "../Button/Button";

function Timeline() {
    return (
        <div className="grid-timeline">
            <div className="item item1"><p>{timeline1}</p></div>
            <div className="item item2"><p>{timeline2}</p></div>
            <div className="item item3"><p>{timeline3}</p></div>
            <div className="item item4"><p>{timeline4}</p></div>
            <div className="item item5"><p>{timeline5}</p></div>
            <div className="item item6">
                <p className="circle-btn">
                    {timeline6}
                    <Button type="header" text="Kontakt" link="#contact" />
                </p>
            </div>

            <div className="line line1"></div>
            <div className="line line2"></div>
            <div className="line line3"></div>
            <div className="line line4"></div>
            <div className="line line5"></div>
        </div>
    );
}

export default Timeline;