import './clients.css'
import { Review } from './review/Review'
import { Brands } from './brands/Brands'

export const Clients = () => {

  return (
    <section className="clients-section" id='clients'>
      <div className="title">
        Clientes satisfechos
        <div className="separator"></div>
      </div>
      <div className='client-wrapper'>
        <div className="reviews">
          <Review
            clientName='Rodrigo Martinez'
            content='"La verdad que nos sentimos muy cómodos trabajando con ud. Son muy resolutivos, eficaces y honestos. Lo de el acompañamiento en la compra de materiales a pesar de haber contratado como contratistas fue genial"'
          />
          <Review
            clientName='Facundo del Castillo'
            content='"Ver como avanzamos semana tras semana me gusta. Como también todo su asesoramiento para agarrar este proyecto que había sido comenzado por otro"'
          />
          <Review
            clientName='Silvia Dib Ashur'
            content='"Solucion, después de pasar por varios profesionales, fue una solución encontrarlos ya que me trasmitieron la confianza y seriedad necesaria para realizar las cosas"'
          />

          <Review
            clientName='Claudia Ovalle'
            content='"Me siento super contenta de la remodelacion, sobre todo el respeto de tu gente. Somos 3 mujeres solas así que no fue fácil encontrar gente tan respetuosa y educada. Gracias por todo"'
          />

        </div>
      </div>
      <div className="brands-wrapper">
        <Brands></Brands>
      </div>
    </section>
  )
}
