import { useParams } from "react-router-dom"
import { ProjectItemType, projectsConfiguration } from "../projects.config"
import { useEffect, useState } from "react"
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import Navbar from "../../../components/layout/navbar/Navbar";
import { Footer } from "../../../components/layout/footer/Footer";

export const ProjectPage = () => {

  const { id: projectId } = useParams()
  const [item, setItem] = useState<ProjectItemType>()

  useEffect(() => {
    if (projectId) {
      const item: ProjectItemType = projectsConfiguration.find((el) => el.id === +projectId)
      setItem(item)
    }
  }, [projectId])

  return (
    <>
      <div className="page-container">
        <Navbar mainPage={false} />
        {item &&
          <section id='clients' className="clients-section" style={{ minHeight: '60vh' }}>
            <div className="title">
              {item.name}
              <div className="separator"></div>
            </div>
            <div>
              <ImageGallery showThumbnails={false}
                items={item.images}
              />
            </div>
          </section>
        }
        <Footer />
      </div>
    </>
  )

}
