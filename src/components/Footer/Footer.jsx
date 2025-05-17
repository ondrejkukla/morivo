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
                <FooterIdentity />
            </div>
        </footer>
    );
}

export default Footer;