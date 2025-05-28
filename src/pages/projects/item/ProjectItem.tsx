
import './project-item.css'
import { useNavigate } from 'react-router-dom';
import Skyline from './test';
interface ProjectProps {
  name: string,
  backgroundImage: any,
  id: number,
  description: string,
}
export const ProjectItem = ({ name, backgroundImage, id, description }: ProjectProps) => {

  const navigate = useNavigate()

  const onNavigate = (id: number) => {
    navigate(`/proyecto/${id}`)
  }

  return (
    <div className='project-item'
      style={{ backgroundImage: `url(${backgroundImage})` }}
      onClick={() => { onNavigate(id) }}
    >
      <div className="project-item-overlay"></div>
      <div className="project-detail">
        <span>{name}</span>
        <div className='description'>{description}</div>
      </div>

    </div>

  )
}
