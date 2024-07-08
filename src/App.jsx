import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './components/MainPage/MainPage';
import SubPage from './components/SubPage/SubPage';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import SubNavbar from './components/SubNavbar/SubNavbar';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        {/* Main Layout */}
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/subpage" element={<SubPage />} />
              </Routes>
              <Footer />
            </>
          }
        />

        {/* Subpage Layout */}
        <Route
          path="/subpage/*"
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
