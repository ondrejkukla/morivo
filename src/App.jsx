import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './components/MainPage/MainPage';
import SubPage from './components/SubPage/SubPage';
import useSmoothScroll from './hooks/useSmoothScroll';
import './App.css';

function App() {
  useSmoothScroll(); // Custom hook for smooth scrolling

  return (
    <Router basename="/test">
      <Routes>
        {/* Main Page */}
        <Route path="/" element={<MainPage />} />

        {/* Subpage */}
        <Route path="subpage" element={<SubPage />} />
      </Routes>
    </Router>
  );
}

export default App;