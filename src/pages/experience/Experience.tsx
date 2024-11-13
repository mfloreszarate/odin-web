import './experience.css'
import CraneIcon from './../../assets/img/grua.png'
import HouseIcon from './../../assets/img/casa-moderna.png'
import MapIcon from './../../assets/img/cuadrado.png'
import { ExperienceItem } from './items/ExperienceItem'

export default function Experience() {
  return (
    <section className='experience' id='experience'>
      <div className="overlay"></div>
      <div className="experience-content">
        <div className="info">
          <div className='text-shadow spacing'>
            NOSOTROS
          </div>
          <div className='text-shadow experience-description'>
            Hacemos realidad tus ideas
          </div>
          <div className='text-shadow experience-description-text'>
            Somos una empresa formada por un grupo de colaboradores que entendemos como lema, que el profesionalismo no está en nuestros títulos sino en el amor y dedicación que le ponemos a cada proyecto.
            Nos dedicamos a exponenciar las ideas de nuestros clientes para llevarlas al máximo nivel de su imaginación y los acompañamos desde el inicio del proyecto y hasta en cualquier etapa de la construcción. Contamos con nuestro propio departamento de arquitectura quienes desarrollan nuevos proyectos como las Granny House o Casas financiadas, como también realizamos proyectos a medida cumpliendo con todos los parámetros del cliente. Nosotros somos un reflejo de los deseos del cliente.

          </div>
        </div>
        <div className="info-years">
          <span className='number'>4</span>
          <div className='year-info'>años</div>
        </div>

      </div>
      <div className="overlay-detail">
        <ExperienceItem
          icon={CraneIcon}
          primaryDescription='490'
          secondaryDescription='Proyectos en curso'
        />
        <ExperienceItem
          icon={HouseIcon}
          primaryDescription='20'
          secondaryDescription='Proyectos terminados'
        />
        <ExperienceItem
          icon={MapIcon}
          primaryDescription='2000'
          secondaryDescription='M2 construidos'
        />
      </div>
    </section>
  )
}
