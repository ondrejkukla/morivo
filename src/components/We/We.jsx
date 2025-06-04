import React from "react";
import Title from "../Title/Title"
import Timeline from "../Timeline/Timeline";
import Text from "../Text/Text";
import { timeline_text1, timeline_text2, timeline_text3 } from "../../assets";
import "./We.css";

function We() {
    return (
        <we id="we">
            <div className="container" style={{ overflow: "visible" }}>
                <div className="we-text-block">
                    <Title color="white" name="Kdo jsme?" />
                    <div className="whitespace"></div>
                    <Text color="white" bold="true" content={timeline_text1} />
                    <Text bold="false" color="white" content={timeline_text2} />
                    <Text bold="false" color="white" content={timeline_text3} />
                </div>
                <div className="timeline-cont">
                    <Timeline />
                </div>
            </div>
        </we>
    );
}

export default We;