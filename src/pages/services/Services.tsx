import { ServiceItem } from './item/ServiceItem'
import './services.css'
import GrannyImg from './../../assets/img/granny-img.png'

export const Services = () => {

  const downloadPdf = (name: string) => {
    const pdfUrl = "/documents/" + name + ".pdf"
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = `${name}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="services-section" id='services'>
      <div className="content">
        <div className="overlay-services">

        </div>
        <ServiceItem
          title='Casas financiadas'
          description='Ofrecemos casas de 2 y 3 dormitorios, personalizables con o sin galería en la entrada principal. Construidas con madera de pino tratada de alta calidad, nuestras viviendas combinan calidad, seguridad y sustentabilidad, brindándote un espacio que no solo es hermoso, sino también resistente y amigable con el medio ambiente. Al valor de un alquiler.'
          onClick={() => { downloadPdf('casas_financiadas') }}
          viewMore={true}
          image={GrannyImg}
        />
        < ServiceItem
          title='Granny house'
          description='Creamos un concepto único para llevarte paso a paso hacia la casa ideal, 5 etapas, un sueño hecho realidad. Nuestro enfoque se basa en una construcción sólida, utilizando materiales duraderos, de fácil mantenimiento y con acabados simples pero elegantes. Este equilibrio entre funcionalidad y estética define nuestro diseño, ofreciendo un hogar que conserva su belleza y calidad a lo largo del tiempo. Tu hogar, pensado para durar y disfrutarse toda la vida.'
          onClick={() => { downloadPdf('granny') }}
          viewMore={true}
          image={GrannyImg}
        />
        < ServiceItem
          title='Sistema llave en mano'
          description='Nos enfocamos en fusionar diseño y tecnología
          para crear espacios que inspiran y conectan. Visualizados en presentaciones de Renders, diseños animados
          en 3D, recorridos virtuales atraves del Proyecto a Construir o edificar. El servicio llave en mano se desarrolla
          con una Arquitectura Sostenible, eficiente, medible a traves de curvas de avances y proyecciones para cada
          etapa del Proyecto; la integración e sistemas inteligentes, la cuantificación y selección de Materiales, equipos
          y herraminetas necesarias in situ y para trabajos en Obrador; la garantía de una Mano de Obra idónea cien
          por ciento disponible y abocada a lograr y cumplir con la calidad y plazos de entraga. Un Grupo de Personas
          comprometida con la Dirección y Supervisión de cada Proyecto, garantizando el Resultado preacordado'
          image={GrannyImg}
        />
        < ServiceItem
          title='Sistema contratista'
          description='Nos adaptamos a diferentes situaciones y entornos,
          nos adapatamos al cambio y asumimos los compromisos necesarios para llevar adelante un Contrato; porque
          en cada contrato, su puesta en marcha y su finalización están reflejados nuestro esfuerzo, politicas de
          operatividad y profesionalismo. A traves del Sistema Contratista, el Dueño del Poryecto plantea la necesidad
          específica de Mano de Obra, el tipo de especialidad que va a intervenir, y en conjunto, definimos plazos y
          métodos de Construcción, con la ventaja de poder aprovechar recursos, materiales y gestiones anteriores ya
          realizadas, como permisos, establecimiento de alcances y límites del proyecto, y asi solo nos abocamos a
          ejecutar con eficiencia y el mejor rendimiento posible.'
          image={GrannyImg}
        />
        < ServiceItem
          title='Planos y proyectos'
          description='Reunimos un equipo de profesionales y especialistas para cada proyecto, entendiendo tu búsqueda y
          escuchando tus necesidades, logramos una sinergia que permite bocetar y definir un proceso de construcción. Se hace
          necesario plasmarlo luego, en un PROYECTO ARQUITECTÓNICO Y GESTION DE PRESENTACION Y APROBACION DE PLANOS
          . El proceso se compone de: 1) diseño de ANTEPROYECTO – el cliente puede contar con un resumen ordenado de las
          diferentes etapas de construcción, plan de ejecución, renders, cuantificación y selección de materiales necesarios,
          presupuestos, planimetría de estructuras, instalaciones auxiliares y todo lo necesario para la siguiente etapa. 2)
          EJECUCIÓN DEL PROYECTO – teniendo en cuenta el sistema de contratación, ya sea llave en mano o sistema contratista,
          el Cliente participa activamente en el Proyecto Constructivo, visitando y aprobando la ejecución de cada etapa de la obra;
          la selección de materiales y acabados de superficies, la adición de nuevos elementos en la construcción, etc.'
          image={GrannyImg}
        />
        < ServiceItem
          title='Ampliaciones y remodelaciones'
          description='¿Querés cambiar tus ambientes? ¿Se agrando la familia y no sabes por dónde empezar?
          Estamos para ayudarte. Podes actualizar tus espacios con nuestras soluciones innovadoras y
          eficientes. Gracias a nuestro equipo de profesionales, podemos resolver cualquier solicitud en
          materia constructiva. No dudes en comunicarte para que podamos asesorarte.'
          image={GrannyImg}
        />

      </div>
    </section>
  )
}
