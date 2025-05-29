import React from "react";
import FooterIdentity from "../FooterIdentity/FooterIdentity";
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