import { ServiceItem } from './item/ServiceItem'
import './services.css'
import ServiceIcon from './../../assets/img/service-icon.png'

export const Services = () => {

  return (
    <section className="services-section">
      <div className="content">
        < ServiceItem
          icon={ServiceIcon}
          title='Casas financiadas'
          description='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla itaque obcaecati officiis quas sed expedita soluta cum porro deleniti. Eveniet dolorem nobis, non quisquam aperiam officia doloribus voluptatem possimus eaque?'
        />
        < ServiceItem
          icon={ServiceIcon}
          title='Granny house'
          description='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla itaque obcaecati officiis quas sed expedita soluta cum porro deleniti. Eveniet dolorem nobis, non quisquam aperiam officia doloribus voluptatem possimus eaque?'
        />
        < ServiceItem
          icon={ServiceIcon}
          title='Sistema llave en mano'
          description='En ODIN CONSTRUCCIONES nos enfocamos en fusionar diseño y tecnología para crear espacios
          que inspiran y conectan. Nuestros servicios de construcción llave en mano incluye un recorrido
          virtual en3D de tu futura casa. Trabajamos con una arquitectura sostenible y eficiente, la
          integración de sistemas inteligentes. Incluye Materiales, Mano de Obra y Dirección.'
        />
        < ServiceItem
          icon={ServiceIcon}
          title='Sistema contratista'
          description='Si ya dispones de un proyecto de obra y solo te hace falta encontrar quién puede hacer
          realidad ese proyecto…. NOSOTROS SOMOS ESE ALGUIEN!!!. contamos con la mano de obra
          capacitada para coordinar, gestionar y ejecutar cada uno de los aspectos y requerimientos que
          las áreas que constituyen tu proyecto, merecen'
        />
        < ServiceItem
          icon={ServiceIcon}
          title='Ampliaciones y remodelaciones'
          description='¿Querés cambiar tus ambientes? ¿Se agrando la familia y no sabes por dónde empezar?
          Estamos para ayudarte. Podes actualizar tus espacios con nuestras soluciones innovadoras y
          eficientes. Gracias a nuestro equipo de profesionales, podemos resolver cualquier solicitud en
          materia constructiva. No dudes en comunicarte para que podamos asesorarte.'
        />
        < ServiceItem
          icon={ServiceIcon}
          title='Planos y proyectos'
          description='Con nuestro equipo multidisciplinario de especialistas, arquitectos e ingenieros, técnicos y
          obreros oficiales especializados, y tu aporte, diseñaremos un Anteproyecto donde quede
          plasmado y detallado cada requerimiento y solicitud para llevar adelante tu propósito. Por eso
          queremos encontrarte, escucharte y entender tu necesidad. Nos esforzaremos cada día desde
          que nos contratas, para reunir y optimizar los recursos, haciendo posible el Nuevo Proyecto.'
        />
      </div>
    </section>
  )
}
