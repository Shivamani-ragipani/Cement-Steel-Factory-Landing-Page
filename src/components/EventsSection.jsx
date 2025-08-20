import React from 'react';
import './EventsSection.css';

const EventsSection = () => {
  return (
    <section className="events-section">
      <div className="section-container">
        <h2 className="section-title">
          Experience Our Strength <br/>Where Innovation Meets Industry
        </h2>
        
        <div className="events-mockup">
          <div className="event-invitation">
            <div className="event-header">
              <div className="company-avatar">
                <img src="https://logo.clearbit.com/acclimited.com" alt="SteelWorks" />
              </div>
              <div className="event-info">
                <h3>Premium Steel Casting Tour</h3>
                <p className="event-company">SteelWorks Ltd.</p>
                <p className="event-date">This Friday, 10:00 AM</p>
              </div>
            </div>
            
            <div className="event-description">
              <p>Walk through our cutting-edge steel casting line, see our precision manufacturing in action, and connect with our engineering team for live Q&A.</p>
            </div>
            
            <div className="event-actions">
              <button className="attend-btn">Reserve My Spot</button>
              <button className="maybe-btn">Learn More</button>
            </div>
          </div>
          
          {/* Event Response Card */}
          <div className="event-response">
            <div className="response-header">
              <div className="user-avatar"></div>
              <div className="response-info">
                <h4>See You at the Factory!</h4>
                <p>We’ll send directions and safety guidelines 24 hours before your tour.</p>
              </div>
            </div>
            
            <div className="response-actions">
              <button className="calendar-btn">Add to Calendar</button>
              <button className="share-btn">Invite Colleagues</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
