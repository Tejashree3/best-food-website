import React, { useEffect, useState } from 'react'
import Food from "./Food.jsx"
import Hero from './Hero.jsx'
const Home = () => {
  const [primaryColor, setPrimaryColor] = useState(
    localStorage.getItem("primaryColor") || "#1d407f"
  );
  useEffect(() => {
    document.documentElement.style.setProperty("--primary-color", primaryColor);
    localStorage.setItem("primaryColor", primaryColor);
  }, [primaryColor]);

  return (
    <div>
        <Hero/>
        <Food/>
        

    </div>
  )
}

export default Home