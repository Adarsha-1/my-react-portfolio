import React from 'react';
import './experience.css';
// Import images for the logos if necessary
import Card from '../Card/Card';
import data from './data';

function Experience() {
  return (
    <section className="experience" id='experience'>
      <h2>Experience</h2>
        <div className="experience-cards">
          {data.map((item) => (
            <Card key={item.id} className="experience-card">
              <span>{item.icon}</span>
              <h5>{item.title}</h5>
              <h6>{item.subHeading}</h6>
            </Card>
          ))}
        </div>
    </section>
  );
}

export default Experience;
