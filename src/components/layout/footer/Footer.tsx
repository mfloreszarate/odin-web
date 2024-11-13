import { useState } from 'react'
import './footer.css'
import InstagramIcon from './../../.../../../assets/img/instagram.png'
import FacebookIcon from './../../.../../../assets/img/facebook.png'
import TikTokIcon from './../../.../../../assets/img/tik-tok.png'

export const Footer = () => {

  const [email, setEmail] = useState<string>('')

  const onChangeEmail = (event: any) => {
    const value = event.target.value
    setEmail(value)
  }

  return (
    <footer className='footer' id='contact'>
      <div className="grid-item contact">
        <div className='title'>Contacto</div>
        <div>Avenida Entre Ríos 1297 </div>
        <div>Salta, Argentina</div>
        <div>+54-3874 67-9723</div>
        <div>odinconstruccionessrl@gmail.com</div>
        <div className='social-icons'>
          <img src={InstagramIcon} alt="src" />
          <img src={FacebookIcon} alt="src" />
          <img src={TikTokIcon} alt="src" />
        </div>
      </div>
      <div className="grid-item newsletter">
        <div>
          Suscríbete a nuestro newsletter y sé la primera persona en conocer nuestros últimos proyectos, ofertas,
        </div>
        <div className="row" style={{ paddingTop: '1.5rem' }}>
          <input type="text" placeholder='E-mail' value={email} onChange={onChangeEmail} />
        </div>
        <div className="row" style={{ paddingTop: '1.5rem', justifyContent: 'center' }}>
          <button type='button' className='subscribe-button c-pointer'>
            Suscríbete
          </button>
        </div>
      </div>
      <div className="grid-item map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3622.4297688375773!2d-65.4197545!3d-24.780733200000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x941bc3b62e8a494f%3A0x6c1ca522eeacf39c!2sAv.%20Entre%20R%C3%ADos%201297%2C%20A4400%20Salta!5e0!3m2!1ses-419!2sar!4v1730861836099!5m2!1ses-419!2sar"
          width="100%"
          height="100%"
          style={{ border: '0' }}
          loading="lazy" referrerPolicy="no-referrer-when-downgrade">
        </iframe>
      </div>
    </footer>
  )
}
