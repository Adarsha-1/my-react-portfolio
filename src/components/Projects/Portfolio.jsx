import './portfolio.css'
import Projects from './Projects'
import data from './data'

const Portfolio = () => {

  const projects = data;

  return (
    <section className="portfolio" id='projects'>
      <h2>Recent Projects</h2>
      <p>
      Check out some of the projects I recently worked on.
      </p>
      <div className="container portfolio__container">
        <Projects projects={projects}/>
      </div>
    </section>
  )
}

export default Portfolio