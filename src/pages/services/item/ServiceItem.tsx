
import styles from './service-item.module.css';
import ServiceIcon from './../../../assets/icons/service-icon-2.svg'

interface Props {
  title: string,
  description: string
}
export const ServiceItem = ({ title, description }: Props) => {

  return (
    <div className={styles.item}>
      <div className={styles.title}>
        <ServiceIcon></ServiceIcon>
        <span className={styles.inlineImg}>
          <ServiceIcon></ServiceIcon>
        </span>
        {title}
      </div>
      <div className={styles.description}>
        {description}
      </div>
    </div>
  )
}
