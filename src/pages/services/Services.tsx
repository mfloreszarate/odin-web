import { ServiceItem } from './item/ServiceItem'
import './services.css'
// import ServiceIcon from './../../assets/img/service-icon.png'

export const Services = () => {

  return (
    <section className="services-section" id='services'>
      <div className="content">
        <div className="overlay-services">

        </div>
        <ServiceItem
          title='Casas financiadas'
          description='Ofrecemos casas de 2 y 3 dormitorios, personalizables con o sin galería en la entrada principal. Construidas con madera de pino tratada de alta calidad, nuestras viviendas combinan calidad, seguridad y sustentabilidad, brindándote un espacio que no solo es hermoso, sino también resistente y amigable con el medio ambiente. Al valor de un alquiler.'
        />
        < ServiceItem
          title='Granny house'
          description='Creamos un concepto único para llevarte paso a paso hacia la casa ideal, 5 etapas, un sueño hecho realidad. Nuestro enfoque se basa en una construcción sólida, utilizando materiales duraderos, de fácil mantenimiento y con acabados simples pero elegantes. Este equilibrio entre funcionalidad y estética define nuestro diseño, ofreciendo un hogar que conserva su belleza y calidad a lo largo del tiempo. Tu hogar, pensado para durar y disfrutarse toda la vida.'
        />
        < ServiceItem
          title='Sistema llave en mano'
          description='Con nuestro servicio "llave en mano", nos encargamos de todo por vos. Desde los materiales y la mano de obra hasta la dirección técnica y los trámites necesarios, hacemos que tu proyecto de construcción sea fácil y sin preocupaciones.
          Además, te llevamos un paso más allá: te entregamos un recorrido virtual en 3D y renders de alta calidad, para que visualices y sientas cómo será tu hogar antes de que comience la construcción.
           Nos enfocamos en cumplir todas tus necesidades, optimizando cada espacio para que no solo tengas una casa, sino un lugar diseñado para mejorar tu calidad de vida.'
        />
        < ServiceItem
          title='Sistema contratista'
          description='¿Ya tienes un proyecto de obra y solo necesitas un equipo confiable para llevarlo a cabo? ¡Somos lo que buscas!
          En Odín Construcciones contamos con mano de obra altamente capacitada para coordinar, gestionar y ejecutar cada aspecto de tu proyecto, atendiendo a los más altos estándares en todas las áreas involucradas.
          Tu visión, nuestro compromiso. Con nosotros, transformar tus planos en realidad será un proceso eficiente y exitoso.'
        />
        < ServiceItem
          title='Planos y proyectos'
          description='Con nuestro equipo multidisciplinario de especialistas, arquitectos e ingenieros, técnicos y
          obreros oficiales especializados, y tu aporte, diseñaremos un Anteproyecto donde quede
          plasmado y detallado cada requerimiento y solicitud para llevar adelante tu propósito. Por eso
          queremos encontrarte, escucharte y entender tu necesidad. Nos esforzaremos cada día desde
          que nos contratas, para reunir y optimizar los recursos, haciendo posible el Nuevo Proyecto.'
        />
        < ServiceItem
          title='Ampliaciones y remodelaciones'
          description='¿Querés cambiar tus ambientes? ¿Se agrando la familia y no sabes por dónde empezar?
          Estamos para ayudarte. Podes actualizar tus espacios con nuestras soluciones innovadoras y
          eficientes. Gracias a nuestro equipo de profesionales, podemos resolver cualquier solicitud en
          materia constructiva. No dudes en comunicarte para que podamos asesorarte.'
        />

      </div>
    </section>
  )
}
