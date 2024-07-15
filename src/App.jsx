import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './components/MainPage/MainPage';
import SubPage from './components/SubPage/SubPage';
import useSmoothScroll from './hooks/useSmoothScroll';
import { ScrollProvider } from './hooks/scrollProvider';
import './App.css';

function App() {
  useSmoothScroll();

  return (
    <Router>
      <ScrollProvider>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/:productId" element={<SubPage />} />
        </Routes>
      </ScrollProvider>
    </Router>
  );
}

export default App;