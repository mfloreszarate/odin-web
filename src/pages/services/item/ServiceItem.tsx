
import { useState } from 'react';
import styles from './service-item.module.css';
import { useNavigate } from 'react-router-dom';

interface Props {
  title: string,
  description: string,
  viewMore?: boolean,
  image: string,
  hoverImg: string
}

export const ServiceItem = ({ title, description, image, hoverImg, viewMore }: Props) => {

  const [isHovered, setIsHovered] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate()

  const goHouse = () => {
    navigate('/servicios/casas-financiadas')
  }

  const handleClick = async (name: string) => {
    try {
      let pdfPath = '';
      if (name == 'Casas financiadas') {
        pdfPath = '/files/casas.pdf';
      } else {
        pdfPath = '/files/granny.pdf';
      }
      const response = await fetch(pdfPath);

      if (!response.ok) {
        throw new Error(`Error al obtener el PDF: ${response.status}`);
      }
      const blob = await response.blob();

      const fileURL = URL.createObjectURL(blob);
      window.open(fileURL, '_blank');

      if (blob.type !== 'application/pdf') {
        alert('El archivo no es un PDF');
        return;
      }
      window.open(fileURL, '_blank');
    }
    catch (error) {
      console.error('Error al abrir el PDF:', error);
    }
  }

  return (
    <div className={styles.item}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}>

      <div className={styles.title}>
        <img
          src={!isHovered ? image : hoverImg}
          className={styles.rotateOnHover}
          alt="img" />
        {title}
      </div>
      <div className={styles.description}>
        {description}
        {viewMore && <div className={styles.buttonContainer}>
          <a className={styles.cardButton} onClick={goHouse}>Ver más</a>
        </div>}
      </div>


    </div>
  )
}
