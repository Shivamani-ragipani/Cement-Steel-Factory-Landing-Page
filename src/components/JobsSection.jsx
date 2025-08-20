import React, { useEffect, useRef } from 'react';
import { mockData } from '../data/mock';
import './JobsSection.css';

const JobsSection = () => {
  const titleRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });

    if (titleRef.current) observer.observe(titleRef.current);
  }, []);

  return (
    <section className="jobs-section">
      <div className="section-container">
        <h2 ref={titleRef} className="section-title">
          Careers That Build the Future
          <br />
          <span>Join Our Legacy in Cement & Steel</span>
        </h2>

        <div className="jobs-grid">
          {[mockData.jobsRow1, mockData.jobsRow2, mockData.jobsRow3].map((row, rowIndex) => (
            <div key={rowIndex} className={`jobs-row jobs-row-${rowIndex + 1}`}>
              {row.map((job, index) => (
                <div key={index} className="job-card">
                  <div className="company-logo">
                    <img src={job.companyLogo} alt={job.company} />
                  </div>
                  <h3 className="job-title">{job.title}</h3>
                  <p className="company-name">{job.company}</p>
                  <p className="job-location">{job.location}</p>
                  <div className="job-tags">
                    {job.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="job-tag">{tag}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JobsSection;
