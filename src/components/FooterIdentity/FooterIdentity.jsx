import React from "react";
import "./FooterIdentity.css";

function FooterIdentity() {
    return (
        <div className="grid">
            <div className="footer-i f-1"></div>
            <div className="footer-i f-2"></div>
            <div className="footer-i f-3"></div>
            <div className="footer-i f-4"></div>
            <div className="footer-i f-5"></div>
            <div className="footer-i f-6"></div>
            <div className="footer-i f-7"></div>
            <div className="footer-i f-8"></div>
            <div className="footer-i f-9"></div>
            <div className="footer-i f-10"></div>
            <div className="footer-i f-11"></div>
            <div className="footer-i f-12"></div>
            <div className="copyright">Copyright © {new Date().getFullYear()} morivo company s.r.o.</div>
            <div className="footer-i f-13"></div>
        </div>
    );
}

export default FooterIdentity;