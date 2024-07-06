import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './components/MainPage/MainPage';
import SubPage from './components/SubPage/SubPage';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import './App.css';

function App() {
  return (
    <Router basename="/morivo">
      <Navbar />
      <Routes>
        <Route exact path="/morivo" element={<MainPage />} />
        <Route exact path="/morivo/subpage" element={<SubPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;