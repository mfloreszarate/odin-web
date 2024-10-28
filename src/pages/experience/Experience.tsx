import './experience.css'
import CraneIcon from './../../assets/img/grua.png'
import HouseIcon from './../../assets/img/casa-moderna.png'
import MapIcon from './../../assets/img/cuadrado.png'
import { ExperienceItem } from './items/ExperienceItem'

export default function Experience() {
  return (
    <section className='full-height color-yellow'>
      <div className="overlay"></div>
      <div className="experience-content">
        <div className="info">
          <div className='text-shadow spacing'>
            NOSOTROS
          </div>
          <div className='text-shadow experience-description'>
            Volvemos tus ideas en realidad
          </div>
          <div className='text-shadow'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, ut! Cum reiciendis veniam dicta tempora dolore accusantium veritatis, perspiciatis nostrum sapiente deleniti ipsum eligendi tempore blanditiis at nemo quis maxime!
          </div>
        </div>
        <div className="info-years">
          <span className='number'>4</span>
          <div>años</div>
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
