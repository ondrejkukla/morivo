import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './components/MainPage/MainPage';
import SubPage from './components/SubPage/SubPage';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
import Slider from './components/Slider/Slider';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import We from './components/We/We';
import Benefits from './components/Benefits/Benefits';
import Faq from './components/Faq/Faq';
import Navbar from './components/Navbar/Navbar';
import SubNavbar from './components/SubNavbar/SubNavbar';
import useSmoothScroll from './hooks/useSmoothScroll';
import './App.css';

function App() {
  useSmoothScroll(); // Use the custom hook for smooth scrolling

  return (
    <Router>
      <Routes>
        {/* Main Layout */}
        <Route
          path="/test/*"
          element={
            <>
              <Navbar />
              <Hero />
              <Slider />
              <About />
              <Projects />
              <We />
              <Benefits />
              <Faq />
              <Routes>
                <Route path="/test/" element={<MainPage />} />
                <Route path="/subpage/" element={<SubPage />} />
              </Routes>
              <Footer />
            </>
          }
        />

        {/* Subpage Layout */}
        <Route
          path="/test/subpage/*"
          element={
            <>
              <SubNavbar />
              <SubPage />
              <Footer />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
