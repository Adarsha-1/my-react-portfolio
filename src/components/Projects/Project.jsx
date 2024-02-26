import React from 'react';
import Card from "../Card/Card";
import './project.css'; // Ensure you have a corresponding CSS file for this component

const Project = ({ project }) => {
  return (
    <Card className="portfolio__project">
      <figure className="portfolio__project-image">
        <img src={project.image} alt={`${project.title} Thumbnail`} />
      </figure>
      <div className="portfolio__project-info">
        <h4>{project.title}</h4>
        <p>{project.desc}</p>
        <div className="portfolio__project-tech">
          <h6>Technologies used:</h6>
          <p>{project.technologies_used}</p>
        </div>
        <div className="portfolio__project-cta">
          <a
            href={project.github}
            className="btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </div>
      </div>
    </Card>
  );
};

export default Project;
