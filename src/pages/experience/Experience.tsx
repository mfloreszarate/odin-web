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
            Construimos tus ideas con compromiso y calidad
          </div>
          <div className='text-shadow experience-description-text'>
            En Odín Construcciones llevamos más de 4 años transformando ideas en proyectos reales. Nos adaptamos a cada desafío, ofreciendo soluciones a medida con sistemas tradicionales y modernos como Wood Frame y Steel Frame.
            Escuchamos, proyectamos y construimos con responsabilidad, siempre enfocados en la satisfacción de nuestros clientes. Desde obras nuevas hasta remodelaciones, diseñamos planes que se ajustan a tu presupuesto y superan tus expectativas.
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
