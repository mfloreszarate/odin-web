import { useParams } from "react-router-dom"
import { ProjectItemType, projectsConfiguration } from "../projects.config"
import { useEffect, useState } from "react"
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import Navbar from "../../../components/layout/navbar/Navbar";
import { Footer } from "../../../components/layout/footer/Footer";
import './projectPage.css';

export const ProjectPage = () => {

  const { id: projectId } = useParams()
  const [item, setItem] = useState<ProjectItemType>()

  useEffect(() => {
    if (projectId) {
      const item: ProjectItemType = projectsConfiguration.find((el) => el.id === +projectId)
      setItem(item)
    }
  }, [projectId])


  const renderCustomImage = (item) => (
    <div style={{
      width: '90%',
      aspectRatio: '16/9',
      overflow: 'hidden',
      borderRadius: '10px',
      margin: 'auto'
    }}>
      <img
        src={item.original}
        alt={item.originalAlt}
        style={{
          width: '90%',
          height: '100%',
          objectFit: 'cover',
        }}
      />
    </div>
  );

  return (
    <>
      <div className="project-page-container">
        <Navbar mainPage={false} />
        {item &&
          <section id='clients' className="clients-section-pp" style={{ minHeight: '60vh', marginBottom: '1rem' }} >
            <div className="title-pp">
              {item.name}
              <div className="separator"></div>
            </div>
            <div className="gallery-container">
              <ImageGallery
                showThumbnails={false}
                items={item.images}
                autoPlay={true}
                renderItem={renderCustomImage}
                showFullscreenButton={false}
                showPlayButton={false}
              />
            </div>
          </section>
        }
        <Footer />
      </div>
    </>
  )

}
