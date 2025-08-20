import React, { useRef, useEffect, useState } from "react";
import "./Footer.css";
import { FaApple, FaGooglePlay, FaTiktok, FaInstagram, FaTwitter, FaFacebookF, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  const logoRef = useRef(null);
  const [logoVisible, setLogoVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setLogoVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (logoRef.current) observer.observe(logoRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-logo-wrapper">
  <h1
    ref={logoRef}
    className={`footer-logo ${logoVisible ? "animate-logo" : ""}`}
  >
    Shiva Steels
  </h1>
  <img
    src={process.env.PUBLIC_URL + "/assets/cement-logo.png"} 
    alt="ShivaSteels Logo"
    className="footer-logo-img"
  />
</div>


        <div className="footer-cards">
          <div className="footer-card">
            <h4>Projects</h4>
            <p className="card-action">Discover our infrastructure projects</p>
          </div>
          <div className="footer-card">
            <h4>Clients</h4>
            <p className="card-action">Trusted by top construction companies</p>
          </div>
          <div className="footer-card">
            <h4>Support</h4>
            <p className="card-action">Helping you every step of the way</p>
          </div>
        </div>

        <div className="footer-download">
          <button className="download-btn"><FaApple /> Download on the App Store</button>
          <button className="download-btn"><FaGooglePlay /> Get it on Google Play</button>
          <select className="country-select">
            <option>India</option>
            <option>United States</option>
            <option>Canada</option>
          </select>
        </div>
      </div>

      <div className="footer-links">
        <div>
          <h5>Projects</h5>
          <ul>
            <li>Our Plants</li>
            <li>Construction Solutions</li>
            <li>Engineering Services</li>
            <li>Industrial Consulting</li>
          </ul>
        </div>
        <div>
          <h5>Clients</h5>
          <ul>
            <li>Who We Serve</li>
            <li>Case Studies</li>
            <li>Testimonials</li>
            <li>Request Demo</li>
          </ul>
        </div>
        <div>
          <h5>Support</h5>
          <ul>
            <li>FAQ</li>
            <li>Technical Support</li>
            <li>Contact Us</li>
            <li>Safety Guidelines</li>
          </ul>
        </div>
        <div>
          <h5>Company</h5>
          <ul>
            <li>About Us</li>
            <li>Careers</li>
            <li>Press</li>
            <li>Blog</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>©2024 ShivaSteels. All rights reserved.</p>
        <div className="footer-socials">
          <FaTiktok />
          <FaInstagram />
          <FaTwitter />
          <FaFacebookF />
          <FaLinkedinIn />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
