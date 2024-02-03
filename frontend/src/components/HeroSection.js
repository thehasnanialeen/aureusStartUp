import React from 'react';
import './HeroSection.css'; 
import { Link } from 'react-router-dom';
import PricingComponent from '../pages/PricingComponent';
const HeroSection = () => {
    return (
        <div className="hero-container">
            {/* <h1>Welcome to Our Website</h1>
            <p>Explore our world of endless possibilities</p> */}
                      <Link to={`/PricingComponent`}>
                      <button className="hero-btn">Join the fight!</button>
          </Link>
            
        </div>
    );
}

export default HeroSection;
