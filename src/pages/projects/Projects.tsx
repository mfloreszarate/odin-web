import { ProjectItem } from "./item/ProjectItem"
import './projects.css'
import { projectsConfiguration } from "./projects.config"

export const Projects = () => {

  return (
    <div className="flex-container-projects" id="projects">
      <div className="projects-title">
        PROYECTOS
        <div className="separator"></div>
      </div>
      {
        projectsConfiguration.map((project) => {
          return (
            <ProjectItem
              key={project.name}
              backgroundImage={project.backgroundImage}
              name={project.name}
              id={project.id}
              description={project.description}
            />
          )
        })
      }
    </div>
  )
}
