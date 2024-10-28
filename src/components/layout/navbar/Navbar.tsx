import './navbar.css'
import logo from './../../../assets/img/logo.png'
import LocationIcon from './../../../assets/icons/location.svg'
import InstagramIcon from './../../../assets/icons/instagram.svg'
import TikTokIcon from './../../../assets/icons/tik-tok.svg'
import FacebookIcon from './../../../assets/icons/facebook.svg'
import { useEffect, useState } from 'react'


export default function Navbar() {
  const [backgroundColor, setBackgroundColor] = useState<string>('transparent');

  // Manejar el evento scroll
  useEffect(() => {
    console.log('effect')
    const handleScroll = () => {
      // Si el scroll es mayor a 100vh, cambia el color de fondo
      if (window.scrollY > window.innerHeight) {
        setBackgroundColor('#333'); // Color al hacer scroll
        console.log('deberia cambiar')
      } else {
        setBackgroundColor('transparent'); // Color inicial (transparente)
      }
    };

    // Añadir el listener del scroll
    window.addEventListener('scroll', handleScroll);

    // Limpiar el listener al desmontar el componente
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Se ejecuta solo una vez al montar el componente

  return <>
    <div className='navbar-wrapper' style={{ position: 'fixed', width: '100%', zIndex: 1000 }}>
      <div className='odin-info'>
        <div className='info-item'>
          <LocationIcon />
          <span>  Avenida Entre Ríos 1297, Salta, Argentina</span>
        </div>
        <div className='info-item'>  <InstagramIcon /></div>
        <div className='info-item'><FacebookIcon /></div>
        <div className='info-item'><TikTokIcon /></div>
      </div>
      <div className="navbar">
        <div className="logo">
          <img src={logo} alt="odin-logo" />
        </div>
        <ul className="menu">
          <li className='menu-item'>HOME</li>
          <li className='menu-item'>NOSOTROS</li>
          <li className='menu-item'>SERVICIOS</li>
          <li className='menu-item'>PROYECTOS</li>
          <li className='menu-item'>NOVEDADES</li>
          <li className='menu-item'>CLIENTES</li>
          <li className='menu-item'>CONTACTO</li>
        </ul>
      </div>
    </div>
  </>
}
