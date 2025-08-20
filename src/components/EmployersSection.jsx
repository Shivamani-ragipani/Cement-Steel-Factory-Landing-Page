import React, { useEffect, useRef } from 'react';
import { mockData } from '../data/mock';
import './EmployersSection.css';

const EmployersSection = () => {
  const titleRef = useRef(null);
  const logoRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (titleRef.current) observer.observe(titleRef.current);
    logoRefs.current.forEach(logo => {
      if (logo) observer.observe(logo);
    });
  }, []);

  return (
    <section className="employers-section">
      <div className="section-container">
        <h2 ref={titleRef} className="section-title reveal-text">
          <span>BUILDING BONDS AS STRONG AS CONCRETE</span>
          <br />
          <span>TRUSTED BY TOP INDUSTRY NAMES</span>
        </h2>
        
        <div className="employers-grid">
          {mockData.employers.map((employer, index) => (
            <div
              key={index}
              className="employer-logo"
              ref={el => (logoRefs.current[index] = el)}
            >
              <img src={employer.logo} alt={employer.name} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EmployersSection;
