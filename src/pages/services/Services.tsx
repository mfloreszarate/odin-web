import { ServiceItem } from './item/ServiceItem'
import './services.css'
import GrannyImg from './../../assets/img/services/granni.png'
import GrannyHover from './../../assets/img/services/granni-hover.png'
import HouseIcon from './../../assets/img/services/casaN.png'
import HouseHover from './../../assets/img/services/casa-hover.png'
import KeyImg from './../../assets/img/services/llave.png'
import KeyHoverImg from './../../assets/img/services/llave-hover.png'
import ContractImg from './../../assets/img/services/contratoN.png'
import ContractHoverImg from './../../assets/img/services/contrato-hover.png';
import PlainImg from './../../assets/img/services/plano.png'
import PlainHoverImg from './../../assets/img/services/plano-hover.png'
import BigPlanImg from './../../assets/img/services/ampliacion.png'
import BigPlainHoverImg from './../../assets/img/services/ampliacion-hover.png'

export const Services = () => {
  return (
    <section className="services-section" id='services'>
      <div className="services-title">
        SERVICIOS
        <div className="separator"></div>
      </div>
      <div className="content">
        <ServiceItem
          title='Casas financiadas'
          description='Ofrecemos casas de 2 y 3 dormitorios, personalizables con o sin galería en la entrada principal. Construidas con madera de pino tratada de alta calidad, nuestras viviendas combinan calidad, seguridad y sustentabilidad, brindándote un espacio que no solo es hermoso, sino también resistente y amigable con el medio ambiente. Al valor de un alquiler.'
          viewMore={true}
          image={HouseIcon}
          hoverImg={HouseHover}

        />
        < ServiceItem
          title='Granny house'
          description='Creamos un concepto único para llevarte paso a paso hacia la casa ideal, 5 etapas, un sueño hecho realidad. Basado en una construcción sólida, utilizando materiales duraderos, de fácil mantenimiento y con acabados simples pero elegantes. Este equilibrio entre funcionalidad y estética define nuestro diseño, ofreciendo un hogar que conserva su belleza y calidad a lo largo del tiempo.'
          viewMore={true}
          image={GrannyImg}
          hoverImg={GrannyHover}
        />
        < ServiceItem
          title='Sistema llave en mano'
          description='Transformamos ideas en espacios reales. Presentamos tu proyecto con renders, animaciones 3D y recorridos virtuales, y lo llevamos a cabo con mano de obra especializada, materiales seleccionados y una planificación medida etapa por etapa. Nos encargamos de todo para que vos solo recibas el resultado final.'
          image={KeyImg}
          hoverImg={KeyHoverImg}
        />
        < ServiceItem
          title='Sistema contratista'
          description='Transformamos tu necesidad en acción. Nos adaptamos a cada proyecto con flexibilidad, compromiso y enfoque en resultados. Trabajamos junto al Dueño del Proyecto para definir mano de obra, especialidades, plazos y métodos. Vos planteás la necesidad, nosotros lo hacemos realidad, con eficiencia y alto rendimiento.'
          image={ContractImg}
          hoverImg={ContractHoverImg}
        />
        < ServiceItem
          title='Planos y proyectos'
          description='Reunimos un equipo de profesionales para escuchar tus necesidades y diseñar, paso a paso, el camino hacia la obra. Desde el anteproyecto con renders, presupuestos y selección de materiales, hasta la ejecución completa bajo el sistema que elijas (llave en mano o contratista). Gestionamos la presentación y aprobación de planos, y garantizamos que cada etapa avance con tu participación activa y nuestra guía profesional.'
          image={PlainImg}
          hoverImg={PlainHoverImg}
        />
        < ServiceItem
          title='Ampliaciones y remodelaciones'
          description='¿Querés cambiar tus ambientes? ¿Se agrando la familia y no sabes por dónde empezar?
          Estamos para ayudarte. Podes actualizar tus espacios con nuestras soluciones innovadoras y
          eficientes. Gracias a nuestro equipo de profesionales, podemos resolver cualquier solicitud en
          materia constructiva. No dudes en comunicarte para que podamos asesorarte.'
          image={BigPlanImg}
          hoverImg={BigPlainHoverImg}
        />

      </div>
    </section>
  )
}
