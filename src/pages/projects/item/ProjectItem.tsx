
import './project-item.css'
import { useNavigate } from 'react-router-dom';
interface ProjectProps {
  name: string,
  backgroundImage: any,
  id: number
}
export const ProjectItem = ({ name, backgroundImage, id }: ProjectProps) => {

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
        {/* <ImageGalleryModal
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          title={name}
          images={images}
        /> */}
      </div>
    </div>

  )
}
