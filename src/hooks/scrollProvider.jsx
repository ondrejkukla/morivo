import React, { createContext, useState, useContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollContext = createContext();

export const ScrollProvider = ({ children }) => {
  const [scrollTarget, setScrollTarget] = useState(null);
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const targetId = location.hash.substring(1);
      setScrollTarget(targetId);
    }
  }, [location]);

  useEffect(() => {
    if (scrollTarget) {
      const element = document.getElementById(scrollTarget);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
      setScrollTarget(null); // Reset scroll target after scrolling
    }
  }, [scrollTarget]);

  return (
    <ScrollContext.Provider value={{ setScrollTarget }}>
      {children}
    </ScrollContext.Provider>
  );
};

export const useScroll = () => {
  return useContext(ScrollContext);
};
