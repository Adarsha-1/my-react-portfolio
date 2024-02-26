import React from 'react';
import './header.css';

function Header() {
  return (
    <header className="header">
      <div className="nav-container">
        <nav>
          <ul className="nav-links">
            <li><a href="#intro">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#education">Education</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
        
      </div>
    </header>
  );
}

export default Header;
