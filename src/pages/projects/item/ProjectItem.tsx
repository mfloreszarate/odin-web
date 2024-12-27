import { useEffect, useState } from 'react';
import ImageGalleryModal from '../../../components/common/modal/ModalGallery'
import './project-item.css'
interface ProjectProps {
  name: string,
  backgroundImage: any,
  description?: string,
  images: { original: string; thumbnail: string }[];
}
export const ProjectItem = ({ name, backgroundImage, images }: ProjectProps) => {

  const [isOpen, setIsOpen] = useState(false)

  const handleClose = (event: any) => {
    console.log('event', event)
    setIsOpen(false)
  }

  return (
    <div className='project-item'
      style={{ backgroundImage: `url(${backgroundImage})` }}
      onClick={() => { setIsOpen(true) }}
    >
      <div className="project-item-overlay"></div>
      <div className="project-detail">
        <ImageGalleryModal
          isOpen={isOpen}
          isClose={handleClose}
          title={name}
          images={images}
        />

      </div>
    </div>

  )
}
