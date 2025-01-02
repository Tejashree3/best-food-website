import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HeadlineCards from './components/HeadlineCards';
import Food from './components/Food';
import Category from './components/Category';
import Footer from './components/Footer';
import Contact from './Contact';
import Services from './components/Services';
import Home from './components/Home';
import Settings from './components/Setting';

function App() {
  const [primaryColor, setPrimaryColor] = useState(
    localStorage.getItem("primaryColor") || "#1d407f"
  );
  useEffect(() => {
    document.documentElement.style.setProperty("--primary-color", primaryColor);
    localStorage.setItem("primaryColor", primaryColor);
  }, [primaryColor]);

  return (
    <Router>
      <Navbar />
      <Settings setPrimaryColor={setPrimaryColor} /> {/* Add the Settings component */}
      <Routes>
      
      <Route path="/" element={<Home />} />

        <Route path="/headline-cards" element={<HeadlineCards />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
