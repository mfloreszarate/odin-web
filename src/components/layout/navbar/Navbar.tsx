import './navbar.css'
import Logo from './../../../assets/img/logo-ultimo.png'
import InstagramIcon from './../../../assets/img/instagram.png'
import TikTokIcon from './../../../assets/img/tik-tok.png'
import FacebookIcon from './../../../assets/img/facebook.png'
import { useEffect, useState } from 'react'
import HamburgerMenu from './ResponsiveNavbar'
import { menuConfig } from '../../../utils/menu.config'
import { useNavigate } from 'react-router-dom'


interface Props {
  mainPage: boolean
}
export default function Navbar({ mainPage }: Props) {

  const [backgroundColor, setBackgroundColor] = useState<string>('transparent');

  const navigate = useNavigate()

  useEffect(() => {
    if (mainPage) {

      const handleScroll = () => {
        if (window.scrollY >= window.innerHeight) {
          setBackgroundColor('#333')
        } else {
          setBackgroundColor('transparent');
        }
      }

      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    } else {
      setBackgroundColor('#333')
    }
  }, [])

  const handleClick = (link: string) => {
    navigate(`/#${link}`)
  }
  return <>
    <div className='navbar-wrapper' style={{ position: mainPage ? 'fixed' : 'relative', width: '100%', zIndex: 1000, background: backgroundColor }}>
      <div className='odin-info'>
        <div className="social-links">
          <span>
            <a href="https://www.instagram.com/odin.construcciones/profilecard/?igsh=Y2cwM3k5dHMxNTBl">
              <img src={InstagramIcon} alt="FacebookIcon" />
            </a>
          </span>
          <span>
            <a href="https://www.facebook.com/odin.construcciones?locale=es_LA">
              <img src={FacebookIcon} alt="FacebookIcon" />
            </a>
          </span>
          <span>
            <a href="https://www.tiktok.com/@odinconstrucciones?_t=8rmJuOfoAEi&_r=1">
              <img src={TikTokIcon} alt="TikTokIcon" />
            </a>
          </span>
        </div>
      </div>
      <div className="navbar" style={{ display: 'flex' }}>
        <div className="logo">
          <img src={Logo} alt="odin-logo" />
        </div>
        <ul className="menu">
          {menuConfig.map(el => <li key={el.item} className='menu-item' onClick={() => { handleClick(el.link) }}>{el.item}</li>)}
        </ul>
      </div>
    </div >
    <HamburgerMenu />
  </>
}
