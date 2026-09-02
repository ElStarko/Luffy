import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      title: 'Student Housing Platform',
      description: 'A comprehensive backend system for student accommodation with real-time availability, booking system, and payment integration.',
      tags: ['Node.js', 'Express', 'MongoDB', 'Redis', 'JWT'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      github: 'https://github.com/ElStarko',
      demo: '#'
    },
    {
      title: 'Sales Analytics Dashboard',
      description: 'Real-time sales data processing and visualization platform with predictive analytics and automated reporting.',
      tags: ['Python', 'Pandas', 'Plotly', 'FastAPI', 'Docker'],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      github: 'https://github.com/ElStarko',
      demo: '#'
    },
    {
      title: 'Payment Processing System',
      description: 'High-performance payment gateway with transaction management, fraud detection, and real-time notifications.',
      tags: ['Node.js', 'Socket.io', 'PostgreSQL', 'Docker', 'Redis'],
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      github: 'https://github.com/ElStarko',
      demo: '#'
    },
    {
      title: 'Live Chat Application',
      description: 'Real-time chat application with room-based messaging, file sharing, and user authentication.',
      tags: ['Socket.io', 'React', 'Node.js', 'MongoDB', 'WebRTC'],
      image: 'https://images.unsplash.com/photo-1587560699334-cc4ff634909a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      github: 'https://github.com/ElStarko',
      demo: '#'
    }
  ];

  return (
    <section id="projects">
      <div className="container">
        <div className="section-header">
          <h2>Featured Projects</h2>
          <p className="section-subtitle">Some of my recent work</p>
        </div>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <div className="project-links">
                    <a href={project.demo} className="project-link" target="_blank" rel="noopener noreferrer">
                      <FaExternalLinkAlt /> Live Demo
                    </a>
                    <a href={project.github} className="project-link" target="_blank" rel="noopener noreferrer">
                      <FaGithub /> Code
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                
                <div className="project-tags">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="project-tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;