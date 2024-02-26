import React from 'react';
import './intro.css';
import profileImage from '../../assets/images/profile.jpg';
import { HiDownload } from "react-icons/hi";
import CV from "../../assets/CV.pdf";


function Intro() {
  return (
    <section className="intro" id='intro'>
      <div className="intro-text">
        <h1>Hi, I'm Adarsha 👋</h1>
        <p>I'm a computer science graduate student who is deeply enthusiastic about Full Stack Development. I possess a strong drive for crafting user-friendly interfaces coupled with a backend that can easily scale. Furthermore, I have a keen interest in delving into the realm of data structures and algorithms. I enjoy taking on intricate problems directly, aiming to provide technically robust solutions that operate with optimal effectiveness.</p>
        {/* <div className="intro-details">
          <span>📍 Ahmedabad, India</span>
          <span>💼 Available for new projects</span>
        </div> */}
        <div className="social-links">
          {/* Social icons go here */}
          <a href={CV} download className="btn primary">
            Download CV <HiDownload />
          </a>
        </div>
      </div>
      <div className="intro-image">
        <img src={profileImage} alt="Adarsha" />
      </div>
    </section>
  );
}

export default Intro;
