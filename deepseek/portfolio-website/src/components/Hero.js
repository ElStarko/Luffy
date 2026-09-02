import React from 'react';
import { FaArrowRight, FaHandshake } from 'react-icons/fa';

const Hero = () => {
  const handleScrollToProjects = () => {
    document.querySelector('#projects').scrollIntoView({ behavior: 'smooth' });
  };

  const handleScrollToContact = () => {
    document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1>
              <span className="gradient-text">Backend Developer</span>
              <br />
              & <span className="highlight">Data Analyst</span>
            </h1>
            <p className="hero-description">
              I build scalable server-side solutions and extract valuable insights from complex datasets. 
              Specializing in Node.js, Python, API development, and data analysis to create impactful digital experiences.
            </p>
            <div className="hero-btns">
              <button onClick={handleScrollToProjects} className="btn btn-primary">
                View Projects <FaArrowRight />
              </button>
              <button onClick={handleScrollToContact} className="btn btn-outline">
                Contact Me <FaHandshake />
              </button>
            </div>
          </div>
          <div className="hero-image">
            <div className="image-container">
              <img 
                src="https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Developer workspace" 
              />
              <div className="image-overlay"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;