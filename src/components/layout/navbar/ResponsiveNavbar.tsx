import { useState } from 'react';
import './navbar.css';
import { menuConfig } from '../../../utils/menu.config';

// interface Props {
//   display: string
// }
const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const handleClick = (link: string) => {
    const element = document.getElementById(link)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false)
    }
  }
  return (
    <div className="hamburger-menu">
      {/* Botón de menú hamburguesa */}
      <button className={`hamburger ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <span className="line"></span>
        <span className="line"></span>
        <span className="line"></span>
      </button>

      {/* Menú desplegable a pantalla completa */}
      <nav className={`hamburger-menu-item ${isOpen ? 'show' : ''}`}>
        {/* Botón de cerrar */}
        <button className="close-button" onClick={toggleMenu}>X</button>
        <ul>
          {menuConfig.map(el => <li key={el.item} className='menu-item' onClick={() => { handleClick(el.link) }}>{el.item}</li>)}
        </ul>
      </nav>
    </div>
  );
};

export default HamburgerMenu;
