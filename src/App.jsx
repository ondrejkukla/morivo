import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './components/MainPage/MainPage';
import SubPage from './components/SubPage/SubPage';
import useSmoothScroll from './hooks/useSmoothScroll';
import './App.css';

function App() {
  useSmoothScroll();

  return (
    <Router>
      <Routes>
        <Route path="/test/" element={<MainPage />} />
        <Route path="/test/subpage/" element={<SubPage />} />
      </Routes>
    </Router>
  );
}

export default App;