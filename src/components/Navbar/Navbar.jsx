import { useRef } from "react";
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import Logo from "../Logo/Logo";
import NavigationLinks from "../NavigationLinks/NavigationLinks";
import "./Navbar.css";

function Navbar({ isSubPage }) {
    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle(
            "responsive_nav"
        );
    };

    return (
        <header>
            <div className="container">
                <Logo></Logo>
                <nav ref={navRef}>
                    <a className="a-dropdown" href="#projects" onClick={showNavbar}>Práce</a>
                    <a className="a-dropdown" href="#we" onClick={showNavbar}>O nás</a>
                    <a className="a-dropdown" href="#benefits" onClick={showNavbar}>Proč morivo?</a>
                    <a className="a-dropdown" href="#contact" onClick={showNavbar}>Kontaktovat</a>
                    <NavigationLinks isSubPage={isSubPage} />
                    <div className="logo-dropdown">
                        <Logo />
                    </div>
                    <button
                        className="nav-btn nav-close-btn"
                        onClick={showNavbar}>
                        <FaTimes />
                    </button>
                </nav>
                <div className="menu-btn">
                    <button
                        className="nav-btn"
                        onClick={showNavbar}>
                        <FaBars />
                    </button>
                </div>
            </div>
        </header>
    );
}

export default Navbar;