
import style from './experience-item.module.css';

interface Props {
  icon: any,
  primaryDescription: string,
  secondaryDescription: string
}
export const ExperienceItem = ({ icon, primaryDescription, secondaryDescription }: Props) => {
  return (
    <div className={style.item}>
      <img src={icon} className={style.floatAnimation} />
      <span className={style.spanNumber}>{primaryDescription}</span>
      <span className={style.secondaryDescription}>{secondaryDescription}</span>
    </div>
  )
}
