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
        {/* Main Layout */}
        <Route
          path="/"
          element={<MainLayout />}
        >
          <Route index element={<MainPage />} />
        </Route>

        {/* Subpage Layout */}
        <Route
          path="subpage/*"
          element={<SubLayout />}
        >
          <Route index element={<SubPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

function MainLayout() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
    </>
  );
}

function SubLayout() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SubPage />} />
      </Routes>
    </>
  );
}

export default App;
