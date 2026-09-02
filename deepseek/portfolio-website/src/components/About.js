import React from 'react';
import { FaCode, FaChartLine, FaDatabase, FaServer } from 'react-icons/fa';

const About = () => {
  return (
    <section id="about">
      <div className="container">
        <div className="section-header">
          <h2>About Me</h2>
          <p className="section-subtitle">Transforming Ideas into Scalable Solutions</p>
        </div>
        
        <div className="about-content">
          <div className="about-text">
            <div className="about-intro">
              <h3>Hello, I'm Johnson Iloabuchi</h3>
              <p>
                A passionate backend developer and data analyst with expertise in building robust, 
                scalable server-side applications and extracting meaningful insights from data.
              </p>
            </div>
            
            <div className="about-details">
              <p>
                My journey in technology began with curiosity about how systems work behind the scenes. 
                This led me to specialize in backend development, where I create efficient APIs, design databases, 
                and ensure optimal performance.
              </p>
              <p>
                When I'm not coding or analyzing data, I contribute to open-source projects, explore new technologies, 
                and mentor aspiring developers. I believe in writing clean, maintainable code and creating solutions 
                that make a real impact.
              </p>
            </div>
          </div>
          
          <div className="about-image">
            <div className="image-wrapper">
              <img 
                src="/20250518_192349.jpg" 
                alt="Johnson Iloabuchi" 
              />
              <div className="image-border"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;