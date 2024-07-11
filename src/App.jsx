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
import SubContent from './components/SubContent/SubContent';
import SubExamples from './components/SubExamples/SubExamples';
import useSmoothScroll from './hooks/useSmoothScroll';
import './App.css';

function App() {
  useSmoothScroll(); // Custom hook for smooth scrolling

  return (
    <Router>
      <MainLayout />
    </Router>
  );
}

function MainLayout() {

  return (
    <>
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
            </>
          }
        />
        <Route path="/test/" element={<MainPage />} />

        {/* Subpage Layout */}
        <Route
          path="/test/subpage/*"
          element={
            <>
              <SubNavbar />
              <SubContent />
              <SubExamples />
            </>
          }
        />
        <Route path="/test/subpage/" element={<SubPage />} />
      </Routes>

      <Footer /> {/* Always render Footer at the bottom of the page */}
    </>
  );
}

export default App;
