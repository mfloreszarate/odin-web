import './clients.css'
import { Review } from './review/Review'
import ClientImg from './../../assets/img/client-img.png'
import { Brands } from './brands/Brands'

export const Clients = () => {

  return (
    <section className="full-height clients-section">
      <div className="title">
        <div className="separator"></div>
        Clientes
      </div>
      <div className='client-wrapper'>
        <div className="reviews">
          <Review
            clientImg={ClientImg}
            clientName='Pilar Robles'
            content='Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure error eum nam soluta ipsam esse iste velit obcaecati accusantium. Sit odit velit rem recusandae quod eveniet dolorem tempora omnis nisi!'
          />
          <Review
            clientImg={ClientImg}
            clientName='Mariano Flores'
            content='Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure error eum nam soluta ipsam esse iste velit obcaecati accusantium. Sit odit velit rem recusandae quod eveniet dolorem tempora omnis nisi!'
          />
          <Review
            clientImg={ClientImg}
            clientName='Juan Ruiz'
            content='Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure error eum nam soluta ipsam esse iste velit obcaecati accusantium. Sit odit velit rem recusandae quod eveniet dolorem tempora omnis nisi!'
          />

        </div>
      </div>
      <div className="brands-wrapper">
        <Brands></Brands>
      </div>
    </section>
  )
}
