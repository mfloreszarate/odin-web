import './navbar.css'
import logo from './../../../assets/img/logo.png'
import LocationIcon from './../../../assets/icons/location.svg'
import InstagramIcon from './../../../assets/img/instagram.png'
import TikTokIcon from './../../../assets/img/tik-tok.png'
import FacebookIcon from './../../../assets/img/facebook.png'
// import OdinSmallIcon from './../../../assets/img/odin-small.webp'
import { useEffect, useState } from 'react'
import HamburgerMenu from './ResponsiveNavbar'
import { menuConfig } from '../../../utils/menu.config'


export default function Navbar() {
  const [backgroundColor, setBackgroundColor] = useState<string>('transparent');
  const [display, setDisplay] = useState<string>('flex');
  // Manejar el evento scroll
  useEffect(() => {
    const handleScroll = () => {
      // Si el scroll es mayor a 100vh, cambia el color de fondo
      if (window.scrollY >= window.innerHeight) {
        setBackgroundColor('#333')
        setDisplay('none')
      } else {
        setDisplay('flex')
        setBackgroundColor('transparent');
      }
    }

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [])

  const handleClick = (link: string) => {
    const element = document.getElementById(link)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
  return <>
    <div className='navbar-wrapper' style={{ position: 'fixed', width: '100%', zIndex: 1000, background: backgroundColor }}>
      <div className='odin-info'>
        {/* <span>
          <img src={OdinSmallIcon} alt="icon" style={{ width: '10%' }} />
        </span> */}
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
      <div className="navbar" style={{ display }}>
        <div className="logo">
          <img src={logo} alt="odin-logo" />
        </div>
        <ul className="menu">
          {menuConfig.map(el => <li key={el.item} className='menu-item' onClick={() => { handleClick(el.link) }}>{el.item}</li>)}
        </ul>
      </div>
    </div>
    <HamburgerMenu />
  </>
}
