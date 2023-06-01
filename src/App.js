import React from 'react';
import Hero from './Hero';
import Mission from './Mission';
import Products from './Products.js';
import Services from './Services';
import Form from './Form';
import Footer from './Footer';
import './App.css';

function App() {
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
