import React from "react";
import Card from "../Card/Card";
import Title from "../Title/Title"
import {
    benefits_subtitle1,
    benefits_subtitle2,
    benefits_subtitle3,
    benefits_subtitle4,
    benefits_subtitle5,
    benefits_subtitle6,
    benefits_subtitle7,
    benefits_text1,
    benefits_text2,
    benefits_text3,
    benefits_text4,
    benefits_text5,
    benefits_text6,
    benefits_text7,
} from "../../assets/index";
import {
    doruceni,
    komunikace,
    prehled,
    sazba,
    unikatni,
    vykon,
    zamereni,
} from "../../assets/benefits/index";
import "./Benefits.css";

function Benefits() {
    return (
        <benefits id="benefits">
            <div className="container">
                <div className="grid-benefits">
                    <div className="title">
                        <Title color="black" name="Vaše benefity ze spolupráce" />
                    </div>
                    <Card
                        subtitle={benefits_subtitle1}
                        text={benefits_text1}
                        img={sazba}

                    />
                    <Card
                        subtitle={benefits_subtitle2}
                        text={benefits_text2}
                        img={komunikace}
                    />
                    <Card
                        subtitle={benefits_subtitle3}
                        text={benefits_text3}
                        img={doruceni}
                    />
                    <Card
                        subtitle={benefits_subtitle4}
                        text={benefits_text4}
                        img={unikatni}
                    />
                    <Card
                        subtitle={benefits_subtitle5}
                        text={benefits_text5}
                        img={zamereni}
                    />
                    <Card
                        subtitle={benefits_subtitle6}
                        text={benefits_text6}
                        img={prehled}
                    />
                    <Card
                        width="reduced"
                        subtitle={benefits_subtitle7}
                        text={benefits_text7}
                        img={vykon}
                    />
                </div>
            </div>
        </benefits>
    );
}

export default Benefits;
