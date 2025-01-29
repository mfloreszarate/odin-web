import { useState } from 'react';
import './navbar.css';
import { menuConfig } from '../../../utils/menu.config';
import { useNavigate } from 'react-router-dom';

import Logo from './../../../assets/img/logo-corto.png'

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate()

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const handleClick = (link: string) => {
    navigate(`/#${link}`)
    toggleMenu()
  }

  return (
    // <div className='navbar-wrapper' style={{ position: mainPage ? 'fixed' : 'relative', width: '100%', zIndex: 1000, background: backgroundColor }}></div>
    <div className="hamburger-menu" style={{ position: 'fixed', width: '100%', zIndex: 1000 }}>
      <div className='hamburger-menu-wrapper'>
        <button className={`hamburger ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </button>
        {/* <img src={logo} alt="odin-logo" className='responsive-logo' /> */}
      </div>
      <nav className={`hamburger-menu-item ${isOpen ? 'show' : ''}`}>
        {/* Botón de cerrar */}
        <button className="close-button" onClick={toggleMenu}>X</button>
        <div className='ul-wrapper'>
          <span>
            <img src={Logo} alt="odin-logo" />
          </span>
          <ul>
            {menuConfig.map(el => <li key={el.item} className='menu-item' onClick={() => { handleClick(el.link) }}>{el.item}</li>)}
          </ul>
        </div>
      </nav>
    </div >
  );
};

export default HamburgerMenu;
