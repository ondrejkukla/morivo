import React from "react";
import Logo from "../Logo/Logo"
import NavigationLinks from "../NavigationLinks/NavigationLinks"
import "./Header.css"

function Header() {
    return (
        <header>
            <div className="container">
                <Logo></Logo>
                <NavigationLinks />
            </div>
        </header>
    )
}

export default Header;