import WhatsAppIcon from './../../../assets/img/whatsapp.png'
import './whatsapp-icon.css'

export const WhatsappIcon = () => {

  const handleClick = () => {
    window.location.href = 'https://wa.me/message/G47F7LOQTGVOP1'
  }
  return <>
    <div className="floating-icon" onClick={handleClick}>
      <img src={WhatsAppIcon} alt="wp-icon" />
    </div>
  </>
}
