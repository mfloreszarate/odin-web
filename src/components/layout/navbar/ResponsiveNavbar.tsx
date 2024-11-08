import { useState } from 'react';
import './navbar.css';

// interface Props {
//   display: string
// }
const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Maneja el estado de apertura y cierre del menú
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

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
          <li >INICIO</li>
          <li >NOSOTROS</li>
          <li >SERVICIOS</li>
          <li >PROYECTOS</li>
          <li >CLIENTES</li>
          <li >CONTACTO</li>
        </ul>
      </nav>
    </div>
  );
};

export default HamburgerMenu;
