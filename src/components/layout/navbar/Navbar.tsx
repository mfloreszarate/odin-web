import './navbar.css'
import logo from './../../../assets/img/logo.png'
import LocationIcon from './../../../assets/icons/location.svg'
import InstagramIcon from './../../../assets/img/instagram.png'
import TikTokIcon from './../../../assets/img/tik-tok.png'
import FacebookIcon from './../../../assets/img/facebook.png'
import { useEffect, useState } from 'react'
import HamburgerMenu from './ResponsiveNavbar'


export default function Navbar() {
  const [backgroundColor, setBackgroundColor] = useState<string>('transparent');

  // Manejar el evento scroll
  useEffect(() => {
    const handleScroll = () => {
      // Si el scroll es mayor a 100vh, cambia el color de fondo
      if (window.scrollY > window.innerHeight) {
        setBackgroundColor('#333')
        // setDisplay('none')
      } else {
        // setDisplay('block')
        setBackgroundColor('transparent');
      }
    }
    // Añadir el listener del scroll
    window.addEventListener('scroll', handleScroll);
    // Limpiar el listener al desmontar el componente
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [])  // Se ejecuta solo una vez al montar el componente

  return <>
    <div className='navbar-wrapper' style={{ position: 'fixed', width: '100%', zIndex: 1000, background: backgroundColor }}>
      <div className='odin-info'>
        <div className='info-item'>
          <LocationIcon />
          <span>  Avenida Entre Ríos 1297, Salta, Argentina</span>
        </div>
        <div className="social-links">
          <span><img src={InstagramIcon} alt="InstagramIcon" /></span>
          <span><img src={FacebookIcon} alt="FacebookIcon" /></span>
          <span><img src={TikTokIcon} alt="TikTokIcon" /></span>
        </div>
      </div>
      <div className="navbar">
        <div className="logo">
          <img src={logo} alt="odin-logo" />
        </div>
        <ul className="menu">
          <li className='menu-item'>INICIO</li>
          <li className='menu-item'>NOSOTROS</li>
          <li className='menu-item'>SERVICIOS</li>
          <li className='menu-item'>PROYECTOS</li>
          {/* <li className='menu-item'>NOVEDADES</li> */}
          <li className='menu-item'>CLIENTES</li>
          <li className='menu-item'>CONTACTO</li>
        </ul>
      </div>
    </div>
    <HamburgerMenu />
  </>
}
