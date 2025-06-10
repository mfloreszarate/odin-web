
import { useState } from 'react';
import styles from './service-item.module.css';

interface Props {
  title: string,
  description: string,
  viewMore?: boolean,
  image: string,
  hoverImg: string
}
export const ServiceItem = ({ title, description, image, hoverImg, viewMore }: Props) => {

  const [isHovered, setIsHovered] = useState(false);
  const handleClick = async () => {
    try {
      const pdfPath = '/files/granny.pdf'; // por ejemplo en /public/files/

      // Obtener el PDF como Blob
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
      </div>
      {viewMore && <div style={{ display: 'flex', justifyContent: 'right', width: '100%' }}>
        <a className={styles.cardButton} onClick={handleClick}>Ver más..</a>
      </div>}

    </div>
  )
}
