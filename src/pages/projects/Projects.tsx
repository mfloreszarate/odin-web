import { ProjectItem } from "./item/ProjectItem"
import './projects.css'
import AdvanceImg1 from './../../assets/img/avance-obra.webp'
import AdvanceImg2 from './../../assets/img/avance-obra-2.webp'
import AdvanceImg3 from './../../assets/img/avance-3.webp'
import AdvanceImg4 from './../../assets/img/avance-4.webp'
export const Projects = () => {

  return (
    <div className="project-section" id="projects">
      <ProjectItem backgroundImage={AdvanceImg1} name="Proyecto 01" />
      <ProjectItem backgroundImage={AdvanceImg2} name="Proyecto 02" />
      <ProjectItem backgroundImage={AdvanceImg3} name="Proyecto 03" />
      <ProjectItem backgroundImage={AdvanceImg4} name="Proyecto 04" />
      <ProjectItem backgroundImage={AdvanceImg2} name="Proyecto 05" />
      <ProjectItem backgroundImage={AdvanceImg4} name="Proyecto 06" />
      <ProjectItem backgroundImage={AdvanceImg3} name="Proyecto 07" />
      <ProjectItem backgroundImage={AdvanceImg1} name="Proyecto 08" />
    </div>
  )
}
