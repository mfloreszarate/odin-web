
import { useState } from 'react';
import styles from './service-item.module.css';

interface Props {
  title: string,
  description: string,
  viewMore?: boolean,
  image: string,
  hoverImg: string
}
export const ServiceItem = ({ title, description, image, hoverImg }: Props) => {

  const [isHovered, setIsHovered] = useState(false);

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
    </div>
  )
}
