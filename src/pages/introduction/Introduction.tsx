import './introduction.css'
import video from './../../assets/videos/video.mp4'

export default function Introduction() {
  return <>
    <section className="full-height color-red video-container">
      <video autoPlay={true} muted={true} loop={true} className="background-video" >
        <source src={video} type="video/mp4" />
        Tu navegador no soporta la reproducción de videos.
      </video>
      {/* <div className="contenido">
        <h1>Texto sobre el video</h1>
        <p>Más contenido aquí</p>
      </div> */}

    </section>
  </>
}
