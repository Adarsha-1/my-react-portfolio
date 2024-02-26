import React from 'react';
import './education.css';
// Import images for the logos if necessary
import Card from '../Card/Card';
import data from './data';

function Education() {
  return (
    <section className="education" id='education'>
      <h2>Education</h2>
        <div className="education-cards">
          {data.map((item) => (
            <Card key={item.id} className="education-card">
              <div className="service__icon">{item.icon}</div>
              <h5>{item.title}</h5>
              <h6>{item.desc}</h6>
            </Card>
          ))}
        </div>
    </section>
  );
}

export default Education;
