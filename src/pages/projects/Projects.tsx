import { ProjectItem } from "./item/ProjectItem"
import './projects.css'
import { projectsConfiguration } from "./projects.config"

export const Projects = () => {

  return (
    <div className="project-section" id="projects">
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
