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
        <div>C. Rivadavia 3455 - Grand Bourg</div>
        <div>Salta, Argentina</div>
        <div>+54-3872 64-7777</div>
        <div>odinconstruccionessrl@gmail.com</div>
        <div className='social-icons' id='desktop-social-icons'>
          <a href="https://www.instagram.com/odin.construcciones/profilecard/?igsh=Y2cwM3k5dHMxNTBl">
            <img src={InstagramIcon} alt="src" />
          </a>
          <a href="https://www.facebook.com/odin.construcciones?locale=es_LA">
            <img src={FacebookIcon} alt="src" />
          </a>
          <a href="https://www.tiktok.com/@odinconstrucciones?_t=8rmJuOfoAEi&_r=1">
            <img src={TikTokIcon} alt="src" />
          </a>
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
        <div className='social-icons' id='mobile-social-icons' >
          <a href="https://www.instagram.com/odin.construcciones/profilecard/?igsh=Y2cwM3k5dHMxNTBl">
            <img src={InstagramIcon} alt="src" />
          </a>
          <a href="https://www.facebook.com/odin.construcciones?locale=es_LA">
            <img src={FacebookIcon} alt="src" />
          </a>
          <a href="https://www.tiktok.com/@odinconstrucciones?_t=8rmJuOfoAEi&_r=1">
            <img src={TikTokIcon} alt="src" />
          </a>
        </div>
      </div>
      <div className="grid-item map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5511.032544009947!2d-65.45376735034013!3d-24.7790967077178!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x941bc216f8645c4d%3A0x57e71c8136b913d2!2sComodoro%20Rivadavia%203455%2C%20A4400%20Salta!5e0!3m2!1ses-419!2sar!4v1734313180768!5m2!1ses-419!2sar"
          width="100%"
          height="100%"
          style={{ border: '0' }}
          loading="lazy" referrerPolicy="no-referrer-when-downgrade">
        </iframe>
      </div>
    </footer>
  )
}
