import './project-item.css'
interface ProjectProps {
  name: string,
  backgroundImage: any,
  description?: string
}
export const ProjectItem = ({ name, backgroundImage }: ProjectProps) => {

  return (
    <div className='project-item'
      style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="project-item-overlay"></div>
      <div className="project-detail">
        {name}

      </div>
    </div>

  )
}
