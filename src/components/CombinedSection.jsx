import React from 'react';
import './CombinedSection.css';

const CombinedSection = () => {
  return (
    <section className="combined-section">
      <div className="section-container">
        <div className="split-content">
          <div className="content-left">
            <div className="stats-display">
              <h2 className="large-stat">Where Steel <br/>Meets Unmatched Durability</h2>
            </div>
            
            <div className="employer-card">
              <div className="card-image">
              <img src='/assets/michael-pointner-7U4bTHtvTg8-unsplash.jpg' alt="Steel" />
              </div>
              <div className="card-content">
                <h3>Precision Steel for Modern Infrastructure</h3>
              </div>
            </div>
          </div>
          
          <div className="content-right">
            <div className="tagline">
              <h2 className="fancy-text"> Our Concrete Holds More Than Buildings. It Holds Trust</h2>
            </div>
            
            <div className="career-center-card">
              <div className="card-image">
                <img src="/assets/chris-linnett-EeqxbxILScA-unsplash.jpg" alt="Cement" />
              </div>
              <div className="card-content">
                <h3>Concrete Solutions for Every Build</h3>
                <a href="#career-centers" className="card-link"> View Our Concrete Range</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CombinedSection;