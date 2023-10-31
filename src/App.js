import React, { useEffect } from 'react';
import Hero from './Hero';
import Mission from './Mission';
import Products from './Products.js';
import Services from './Services';
import Form from './Form';
import Footer from './Footer';
import './App.css';

function App() {
  useEffect(() => {
    // Load Tawk.to script
    const s1 = document.createElement("script");
    s1.async = true;
    s1.src = 'https://embed.tawk.to/65413b50a84dd54dc48739ee/1he3cvek7';
    s1.charset = 'UTF-8';
    s1.setAttribute('crossorigin', '*');
    document.head.appendChild(s1);

    // Cleanup on component unmount
    return () => {
      document.head.removeChild(s1);
    };
  }, []);

  return (
    <>
      <Hero />
      <div className="bg-stars">
        <Mission />
        <Products />
        <Services />
        {/* <Form /> */}
        <Footer />
      </div>
    </>
  );
}

export default App;
