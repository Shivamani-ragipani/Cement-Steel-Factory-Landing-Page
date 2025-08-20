import React from "react";
import "./NetworkSection.css";

const NetworkSection = () => {
  return (
    <section className="network-section">
      <div className="section-container">
        <h2 className="section-title">
          <span className="highlight-text">
            We Build Dreams. Let's Start Yours
          </span>
        </h2>

        <div className="network-content">
          <div className="stats-text">
            <h2 className="stats-large">
              <span className="stat-number">25+ Years</span>
              <span className="stat-description">
                Delivering world-class cement & steel solutions for
                infrastructure, construction, and industrial projects.
              </span>
            </h2>
          </div>
        </div>

        <br />
        <br />
        <br />

        <div className="floating-posts">
          <div className="post-card post-1">
            <div className="post-header">
              <div
                className="profile-pic"
                style={{
                  backgroundImage: `url(${process.env.PUBLIC_URL}/assets/cement-logo.png)`,
                }}
              ></div>
              <div className="post-info">
                <div className="username">Mega Bridge Project</div>
                <div className="post-time">2024</div>
              </div>
            </div>
            <div className="post-content">
              Supplied over <strong>50,000 tons</strong> of high-grade steel for
              the city’s largest bridge project.
            </div>
            <div className="post-actions">
              <span className="like">🏗 Quality Certified</span>
              <span className="comment">🌍 Sustainable Materials</span>
            </div>
          </div>

          <div className="post-card post-2">
            <div className="post-header">
              <div
                className="profile-pic"
                style={{
                  backgroundImage: `url(${process.env.PUBLIC_URL}/assets/cement-logo.png)`,
                }}
              ></div>
              <div className="post-info">
                <div className="username">Green Cement Initiative</div>
                <div className="post-time">2023</div>
              </div>
            </div>
            <div className="post-content">
              Introduced eco-friendly cement with{" "}
              <strong>40% reduced carbon emissions</strong> for residential
              projects.
            </div>
            <div className="post-actions">
              <span className="like">♻ Eco Certified</span>
              <span className="comment">🏠 Residential Impact</span>
            </div>
          </div>

          <div className="post-card post-3">
            <div className="post-header">
              <div
                className="profile-pic"
                style={{
                  backgroundImage: `url(${process.env.PUBLIC_URL}/assets/cement-logo.png)`,
                }}
              ></div>
              <div className="post-info">
                <div className="username">Industrial Supply Network</div>
                <div className="post-time">Ongoing</div>
              </div>
            </div>
            <div className="post-content">
              Partnered with <strong>150+ industries</strong> to ensure steady
              supply of premium-grade steel & cement.
            </div>
            <div className="post-actions">
              <span className="like">🚛 Pan-India Network</span>
              <span className="comment">🤝 Trusted Partnerships</span>
            </div>
          </div>

          <div className="post-card post-4">
            <div className="post-header">
              <div
                className="profile-pic"
                style={{
                  backgroundImage: `url(${process.env.PUBLIC_URL}/assets/cement-logo.png)`,
                }}
              ></div>
              <div className="post-info">
                <div className="username">Smart Infrastructure</div>
                <div className="post-time">2022</div>
              </div>
            </div>
            <div className="post-content">
              Contributed to the development of smart city projects with{" "}
              <strong>durable materials</strong> built to last decades.
            </div>
            <div className="post-actions">
              <span className="like">🏙 Urban Development</span>
              <span className="comment">🔒 Long-term Strength</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NetworkSection;
