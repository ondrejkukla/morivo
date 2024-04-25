import React from "react";
import Title from "../Title/Title";
import Button from "../Button/Button";
import FooterIdentity from "../FooterIdentity/FooterIdentity";
import { email, calendar } from "../../assets/footer/index.js"
import "./Footer.css";

function Footer() {
    return (
        <footer id="footer">
            <div className="container">
                <div className="footer-title">
                    <Title name="Zjistěte, zda jsme pro Vás ti praví" color="white" />
                </div>
                <div className="footer-buttons">
                    <Button type="header" link="https://calendly.com/morivo/schuzka"
                        text={
                            <><img src={calendar} alt="Image" />
                                Naplánovat online schůzku</>
                        } >
                    </ Button>
                    <Button type="header" link="mailto:vojtech@morivo.cz"
                        text={
                            <><img src={email} alt="Image" />
                                Kontaktovat emailem</>
                        } >
                    </ Button>
                </div>
                <FooterIdentity />
            </div>
        </footer>
    );
}

export default Footer;