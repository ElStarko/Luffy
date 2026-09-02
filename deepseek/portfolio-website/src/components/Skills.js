import React from 'react';
import { FaNodeJs, FaPython, FaDatabase, FaServer, FaChartBar, FaReact } from 'react-icons/fa';

const Skills = () => {
  const skills = [
    {
      icon: <FaNodeJs />,
      title: 'Node.js & JavaScript',
      description: 'Building scalable server-side applications with Express.js and RESTful APIs',
      color: '#68A063'
    },
    {
      icon: <FaPython />,
      title: 'Python Development',
      description: 'Data analysis, automation, and backend development with Python frameworks',
      color: '#3776AB'
    },
    {
      icon: <FaDatabase />,
      title: 'Database Design',
      description: 'MongoDB, PostgreSQL, Redis with efficient data modeling and optimization',
      color: '#47A248'
    },
    {
      icon: <FaServer />,
      title: 'API Development',
      description: 'RESTful APIs, GraphQL, microservices architecture and integration',
      color: '#FF6B35'
    },
    {
      icon: <FaChartBar />,
      title: 'Data Analysis',
      description: 'Pandas, NumPy, data visualization, and statistical analysis',
      color: '#4ECDC4'
    },
    {
      icon: <FaReact />,
      title: 'Modern Frameworks',
      description: 'Experience with modern JavaScript and Python frameworks',
      color: '#61DAFB'
    }
  ];

  return (
    <section id="skills">
      <div className="container">
        <div className="section-header">
          <h2>Technical Skills</h2>
          <p className="section-subtitle">Technologies I work with</p>
        </div>
        
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div 
              key={index} 
              className="skill-card"
              style={{ '--skill-color': skill.color }}
            >
              <div className="skill-icon" style={{ color: skill.color }}>
                {skill.icon}
              </div>
              <h3>{skill.title}</h3>
              <p>{skill.description}</p>
              {/* <div className="skill-progress">
                <div 
                  className="progress-bar" 
                  style={{ 
                    background: `linear-gradient(90deg, ${skill.color}, ${skill.color}70)`
                  }}
                ></div>
              </div> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;