import React, { useState } from 'react';
import './App.css';
import AboutUs from './AboutUs';

function App() {
  const [showProductList, setShowProductList] = useState(false);

  return (
    <div className="app-container">
      {!showProductList ? (
        <div className="landing-page">
          <h1>Paradise Nursery</h1>
          <p>Where Green Meets Serenity</p>
          <button className="get-started-button" onClick={() => setShowProductList(true)}>
            Get Started
          </button>
        </div>
      ) : (
        <AboutUs />
      )}
    </div>
  );
}

export default App;
