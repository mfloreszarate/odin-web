
import styles from './service-item.module.css';

interface Props {
  title: string,
  description: string,
  viewMore?: boolean,
  image: string,
  onClick?: () => void
}
export const ServiceItem = ({ title, description, viewMore = false, image, onClick: handleClick }: Props) => {

  return (
    <div className={styles.item}  >
      <div className={styles.title}>
        {/* <ServiceIcon></ServiceIcon> */}
        <img src={image} alt="img" />
        {/* <span className={styles.inlineImg}>
          <ServiceIcon></ServiceIcon>
        </span> */}
        {title}
      </div>
      <div className={styles.description}>
        {description}
        {viewMore &&
          <div className={styles.pdfLink} onClick={handleClick} >Ver mas..</div>
        }
      </div>

    </div>
  )
}
