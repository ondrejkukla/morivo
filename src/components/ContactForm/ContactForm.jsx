import React, { useState } from "react";
import "./ContactForm.css";
import Button from "../Button/Button";
import { default as emailIcon } from "../../assets/email.svg";
import { default as phoneIcon } from "../../assets/phone.svg";
import { default as calendarIcon } from "../../assets/calendar.svg";

function ContactForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        company: "",
        message: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // --- Replace this URL with your actual Formspree endpoint --- 
            const formSpreeEndpoint = 'https://formspree.io/f/xkgrrkew'; 
            // ----------------------------------------------------------

            const response = await fetch(formSpreeEndpoint, {
                method: 'POST', 
                headers: {
                    'Accept': 'application/json', // Formspree needs the Accept header
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                console.log("Form submitted successfully to Formspree!");
                alert("Děkujeme, Vaše poptávka byla odeslána."); 
                // Reset form after successful submission
                setFormData({
                    name: "",
                    email: "",
                    phone: "",
                    company: "",
                    message: ""
                });
            } else {
                // Handle potential Formspree errors (e.g., validation)
                const errorData = await response.json();
                console.error("Failed to submit to Formspree:", response.statusText, errorData);
                // Provide more specific feedback if possible
                const errorMessage = errorData?.errors?.map(err => err.message).join(", ") || errorData?.error || 'Zkuste to prosím později.';
                alert(`Odeslání poptávky se nezdařilo: ${errorMessage}`); 
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            alert("Došlo k chybě při odesílání. Zkuste to prosím později.");
        }
    };

    return (
        <section id="contact" className="contact-section">
            <h2 className="contact-title">Jsme ti praví?</h2>
            <div className="contact-container">
                <div className="contact-form-container">
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="name"
                            placeholder="Jméno"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="E-Mail"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                        <input
                            type="tel"
                            name="phone"
                            placeholder="Telefonní číslo"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                        />
                        <input
                            type="text"
                            name="company"
                            placeholder="Název společnosti či projektu"
                            value={formData.company}
                            onChange={handleChange}
                            required
                        />
                        <textarea
                            name="message"
                            placeholder="Rychlá informace, co budeme společně řešit"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        />
                        <button type="submit" className="submit-button">Odeslat poptávku</button>
                    </form>
                </div>
                <div className="contact-info-container">
                    <h3 className="company-name">morivo company s.r.o.</h3>
                    <p className="company-location">Sídlíme na jižní Moravě, ale fungujeme remote</p>
                    <div className="contact-details">
                        <div className="contact-phone">
                            <img src={phoneIcon} alt="Phone" />
                            <a href="tel:+420777907805">+420 777 907 805</a>
                        </div>
                        <div className="contact-email">
                            <img src={emailIcon} alt="Email" />
                            <a href="mailto:hello@morivo.cz">hello@morivo.cz</a>
                        </div>
                        <div className="contact-button">
                            <div className="button-with-icon">
                                <img src={calendarIcon} alt="Calendar" className="button-icon" />
                                <Button 
                                    type="header" 
                                    text="Naplánovat online schůzku" 
                                    link="https://calendly.com/morivo/schuzka" 
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ContactForm; 