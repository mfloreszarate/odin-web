import { ServiceItem } from './item/ServiceItem'
import './services.css'
import ServiceIcon from './../../assets/img/service-icon.png'

export const Services = () => {

  return (
    <section className="full-height services-section">
      <div className="content">
        < ServiceItem
          icon={ServiceIcon}
          title='Servicio 01'
          description='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla itaque obcaecati officiis quas sed expedita soluta cum porro deleniti. Eveniet dolorem nobis, non quisquam aperiam officia doloribus voluptatem possimus eaque?'
        />
        < ServiceItem
          icon={ServiceIcon}
          title='Servicio 02'
          description='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla itaque obcaecati officiis quas sed expedita soluta cum porro deleniti. Eveniet dolorem nobis, non quisquam aperiam officia doloribus voluptatem possimus eaque?'
        />
        < ServiceItem
          icon={ServiceIcon}
          title='Servicio 03'
          description='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla itaque obcaecati officiis quas sed expedita soluta cum porro deleniti. Eveniet dolorem nobis, non quisquam aperiam officia doloribus voluptatem possimus eaque?'
        />
        < ServiceItem
          icon={ServiceIcon}
          title='Servicio 04'
          description='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla itaque obcaecati officiis quas sed expedita soluta cum porro deleniti. Eveniet dolorem nobis, non quisquam aperiam officia doloribus voluptatem possimus eaque?'
        />
      </div>
    </section>
  )
}
