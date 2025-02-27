import './clients.css'
import { Review } from './review/Review'
import ClientImg from './../../assets/img/client-img.png'
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
            clientImg={ClientImg}
            clientName='Olga Salfity Saade'
            content='Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure error eum nam soluta ipsam esse iste velit obcaecati accusantium. Sit odit velit rem recusandae quod eveniet dolorem tempora omnis nisi!'
          />
          <Review
            clientImg={ClientImg}
            clientName='Nahir Troncoso'
            content='Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure error eum nam soluta ipsam esse iste velit obcaecati accusantium. Sit odit velit rem recusandae quod eveniet dolorem tempora omnis nisi!'
          />
          <Review
            clientImg={ClientImg}
            clientName='Cristian Copa'
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
