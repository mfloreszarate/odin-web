
import styles from './project-item.module.css';
import { useNavigate } from 'react-router-dom';
interface ProjectProps {
  name: string,
  backgroundImage: any,
  id: number,
  description: string,
}
export const ProjectItem = ({ name, backgroundImage, id, description }: ProjectProps) => {

  const navigate = useNavigate()

  const onNavigate = (id: number) => {
    navigate(`/proyecto/${id}`)
  }

  return (
    <div className={styles.card} style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className={styles.overlay}>
        <h3 className={styles.cardTitle}>{name}</h3>
        <p className={styles.cardText}>{description}</p>
        <a className={styles.cardButton} onClick={() => { onNavigate(id) }}>Ver más</a>
      </div>
    </div>
  )
}
