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
            En nuestra empresa, transformamos ideas en realidades extraordinarias. Con un equipo apasionado y comprometido, vivimos bajo el lema: “El resultado de nuestro trabajo refleja la dedicación y el empeño que ponemos en cada proyecto”.
            Nos especializamos en llevar tus ideas a otro nivel, superando expectativas y acompañándote en cada paso del camino.
            Contamos con un equipo propio de arquitectos y diseñadores que crean proyectos innovadores, como nuestras exclusivas Granni House y Casas Financiadas. Además, desarrollamos proyectos a medida, dando vida a la visión única de cada cliente.

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
          primaryDescription='5'
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
