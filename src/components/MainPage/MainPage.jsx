import React from 'react';
import Navbar from '../Navbar/Navbar';
import Hero from '../Hero/Hero';
import Slider from '../Slider/Slider';
import About from '../About/About';
import Projects from '../Projects/Projects';
import We from '../We/We';
import TeamPhoto from '../TeamPhoto/TeamPhoto';
import Benefits from '../Benefits/Benefits';
import Faq from '../Faq/Faq';
import ContactForm from '../ContactForm/ContactForm';
import Footer from '../Footer/Footer';

function MainPage() {
  return (
    <>
      <Navbar />
      <Hero />
      <Slider />
      <About />
      <Projects />
      <We />
      <TeamPhoto />
      <Benefits />
      <Faq />
      <ContactForm />
      <Footer />
    </>
  );
}

export default MainPage;