import React from "react";
import Link from "../Link/Link";
import Button from "../Button/Button";
import Menu from "../Menu/Menu";
import "./NavigationLinks.css";

function NavigationLinks() {
    return (
        <div className="grid-links">
            <div className="cell1">
                <div className="width-90">
                    <Link text="Práce" link="#projects" />
                    <Link text="O nás" link="#we" />
                </div>

            </div>
            <div className="cell2">
                <Link text="Proč morivo?" link="#benefits" />
            </div>
            <div className="cell3">
                <Button type="header" text="Kontaktovat" link="#footer" />
                <div className="dropdown">
                    <Menu />
                </div>
            </div>
            <div className="dropdown">
                    <Menu />
                </div>
        </div>
    )
}

export default NavigationLinks;