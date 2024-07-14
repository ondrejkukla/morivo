import React from "react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import Link from "../Link/Link";
import Button from "../Button/Button";
import { useScroll } from '../../hooks/scrollProvider';
import "./SubNavLinks.css";

function SubNavLinks() {
    const navigate = useNavigate();
    const { setScrollTarget } = useScroll();

    const handleRedirect = () => {
        setScrollTarget('projects');
        navigate('/test');
    }

    return (
        <div className="sub-grid-links">
            <div className="sub-cell1">
                <div className="width-90">
                    <RouterLink to="/test/#projects" >
                        <Link text="Práce" onClick={() => handleRedirect('projects')} />
                    </RouterLink>
                    <RouterLink to="/test/#we">
                        <Link text="O nás" onClick={() => handleRedirect('we')} />
                    </RouterLink>
                </div>
            </div>
            <div className="sub-cell2">
                <RouterLink to="/test/#benefits">
                    <Link text="Proč morivo?" onClick={() => handleRedirect('benefits')} />
                </RouterLink>
            </div>
            <div className="sub-cell3">
                <Button type="header" text="Kontaktovat" link="#footer" />
                <div className="hamburger-icon">
                </div>
            </div>

        </div>
    )
}

export default SubNavLinks;