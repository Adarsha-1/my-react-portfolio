import Project from "./Project"

const Projects = ({projects}) => {
  return (
    <div className="portfolio__projects">
        {
            projects.map(project => (
                <Project key={project.id} project={project} className="card"/>
            ))
        }
    </div>
  )
}

export default Projects