import React from "react";
import Link from "../Link/Link";
import Button from "../Button/Button";
import "./SubNavLinks.css";

function NavigationLinks() {
    return (
        <div className="sub-grid-links">
            <div className="sub-cell1">
                <div className="width-90">
                    <Link text="Práce" link="#projects" />
                    <Link text="O nás" link="#we" />
                </div>

            </div>
            <div className="sub-cell2">
                <Link text="Proč morivo?" link="#benefits" />
            </div>
            <div className="sub-cell3">
                <Button type="header" text="Kontaktovat" link="#footer" />
                <div className="hamburger-icon">
                </div>
            </div>

        </div>
    )
}

export default NavigationLinks;