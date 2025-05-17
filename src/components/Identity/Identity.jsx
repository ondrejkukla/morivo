import React from "react";
import "./Identity.css";
import { computer, m, people, woman } from "../../assets/title/index.js";

function Identity() {
    return (
        <div className="grid-container">
            <div className="item-1 id-img">
                <img src={woman} alt="" id="woman" style={{
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    maxHeight: '100%',
                    maxWidth: '100%',
                    borderRadius: '50%',
                }} />
            </div>
            <div className="item-2" />
            <div className="item-3" />
            <div className="item-4">
                <img src={people} alt="" id="woman" style={{
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    maxHeight: '100%',
                    maxWidth: '100%',
                    borderRadius: '50%',
                }} />
            </div>
            <div className="item-5" />
            <div className="item-6" />
            <div className="item-7">
                <img src={computer} alt="" id="woman" style={{
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    maxHeight: '100%',
                    maxWidth: '100%',
                    borderRadius: '50%',
                }} />
            </div>
            <div className="item-8" />
            <div className="item-9">
                <img src={m} alt="" id="woman" style={{
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    maxHeight: '80%',
                    maxWidth: '80%',
                }} />
            </div>

            <div className="line-1" />
            <div className="line-2" />
            <div className="line-3" />
            <div className="line-4" />
            <div className="line-5" />
            <div className="line-6" />
        </div>
    )
}

export default Identity;