
import styles from './service-item.module.css';

interface Props {
  icon: any
  title: string,
  description: string
}
export const ServiceItem = ({ title, description, icon }: Props) => {

  return (
    <div className={styles.item}>
      <img src={icon} alt="iconsrc" />
      <div className={styles.title}>
        {title}
      </div>
      <div className={styles.description}>
        {description}
      </div>
    </div>
  )
}
