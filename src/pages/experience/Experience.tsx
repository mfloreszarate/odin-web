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
            En Odín Construcciones, un grupo humano de profesionales en permanente capacitación y desarrollo personal,
            ponen todo su empeño y talento al servicio de Nuestros Clientes, pequeños y grandes, nuevos y ya fidelizados, todos
            tienen a su disposición nuestro esfuerzo y compromiso para llevar adelante cada Proyecto y materializar sus Ideas.
            Somos consientes de que nuestro mundo es dinámico, cambiante, y exige que nuestra Organización se adapte a cada
            situación y particularidad de aquellos que nos eligen.
            Sabemos Escuchar y visualizar tus ideas.
            Proyectamos y Construimos sobre cimientos sólidos.
            Comprometidos y responsables, valorando el esfuerzo de cada persona que llega a nosotros, invirtiendo sus recursos,
            esperando resultados óptimos, nos encargamos de superar expectativas.
            Tenés una Idea? Nosotros te escuchamos, te Orientamos y te proponemos un Plan
            Construímos con sistemas Tradicionales
            Desarrollamos unidades con nuevos e innovadores sistemas constructivos: Wood Frame, Steel Frame.
            Construimos desde cero, remodelamos o ampliamos viviendas particulares, edificios y estructuras comunitarias.
            Diseñamos Planes que se adaptan a tu presupuesto y alcanzamos la satisfacción de nuestros Clientes

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
