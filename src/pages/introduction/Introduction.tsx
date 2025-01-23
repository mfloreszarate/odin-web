import './introduction.css'
import video from './../../assets/videos/01.mp4'

export default function Introduction() {
  return (
    <section className="full-height color-red video-container" id='introduction'>
      <video autoPlay={true} muted={true} loop={true} className="background-video" >
        <source src={video} type="video/mp4" />
        Tu navegador no soporta la reproducción de videos.
      </video>
    </section>
  )
}
