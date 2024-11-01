
import style from './experience-item.module.css';

interface Props {
  icon: any,
  primaryDescription: string,
  secondaryDescription: string
}
export const ExperienceItem = ({ icon, primaryDescription, secondaryDescription }: Props) => {
  return (
    <div className={style.item}>
      <img src={icon} alt="icon" />
      <span style={{ fontSize: '4.5em', fontWeight: 900 }}>{primaryDescription}</span>
      <span>{secondaryDescription}</span>
    </div>
  )
}
