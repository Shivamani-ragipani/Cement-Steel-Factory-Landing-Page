import React from 'react';
import './CareerCentersSection.css';

const CareerCentersSection = () => {
  return (
    <section className="career-centers-section">
      <div className="section-container">
        <h2 className="section-title">
          1,500+ construction partners building the future with our Shiva Steels
        </h2>
        
        <div className="dashboard-mockup">
          <div className="mobile-dashboard">
            <div className="dashboard-header">
              <div className="profile-section">
                <div className="profile-avatar"></div>
                <div className="profile-info">
                  <h3>Welcome back, Shivamani!</h3>
                  <p>Ready to strengthen your next project?</p>
                </div>
              </div>
            </div>
            
            <div className="dashboard-content">
              <div className="quick-actions">
                <div className="action-card">
                  <div className="action-icon">🦾</div>
                  <div className="action-text">
                    <h4>New Supply Orders</h4>
                    <p>5 pending deliveries</p>
                  </div>
                </div>
                
                <div className="action-card">
                  <div className="action-icon">🏗️</div>
                  <div className="action-text">
                    <h4>Project Updates</h4>
                    <p>3 sites in progress</p>
                  </div>
                </div>
              </div>
              
              <div className="recent-activity">
                <h4>Recent Activity</h4>
                <div className="activity-item">
                  <div className="activity-icon">🚚</div>
                  <div className="activity-text">
                    <p>Steel shipment delivered to Site A</p>
                    <span>2 hours ago</span>
                  </div>
                </div>
                
                <div className="activity-item">
                  <div className="activity-icon">🧱</div>
                  <div className="activity-text">
                    <p>Bulk cement order confirmed for Bridge Project</p>
                    <span>1 day ago</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerCentersSection;
