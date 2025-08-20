import React, { useState } from "react";
import { mockData } from "../data/mock";
import "./HeroSection.css";

const HeroSection = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [activeBg, setActiveBg] = useState(null);

  const handleGetApp = (e) => {
    e.preventDefault();
    if (phoneNumber) {
      alert(`Will Contact you to this number ${phoneNumber}`);
      setPhoneNumber("");
    }
  };

  const handleImageClick = (src) => {
    setActiveBg(src);

    // Reset back to normal after 5 seconds
    setTimeout(() => {
      setActiveBg(null);
    }, 5000);
  };

  return (
    <section
      className={`hero-section ${activeBg ? "active-bg" : ""}`}
      style={activeBg ? { backgroundImage: `url(${activeBg})` } : {}}
    >
      <div className="floating-images">
        {mockData.floatingImages.map((image, index) => (
          <div
            key={index}
            className={`floating-image floating-image-${index + 1}`}
            style={{
              backgroundImage: `url(${image.src})`,
              animationDelay: `${index * 0.5}s`,
            }}
            onClick={() => handleImageClick(image.src)}
          >
            <div className="image-overlay">
              <h4>{image.title}</h4>
              <p>{image.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="hero-content">
        <div className="animate-brand">Shiva Steels</div>

        <h1 className="hero-title">
          <span className="careers-text">Strength</span>
          <span className="start-here-text">In Every Structure</span>
        </h1>

        <form className="app-form" onSubmit={handleGetApp}>
          <div className="phone-input-container">
            <input
              type="number"
              placeholder="Phone number *"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="phone-input"
              required
            />
            <div className="country-selector">
              <span className="flag">IND</span>
              <span className="arrow">▼</span>
            </div>
          </div>
          <button type="submit" className="get-app-btn">
            Get the app
          </button>
        </form>

        <p className="disclaimer-text">
          *By entering my mobile number and clicking 'get the app', I agree to receive texts...
        </p>

        <p className="terms-text">
          Reply STOP to unsubscribe or HELP for help. View ShivaSteels's{" "}
          <a href="#terms">terms of service here</a> and{" "}
          <a href="#privacy">privacy policy here</a>.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
