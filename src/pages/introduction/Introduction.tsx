import './introduction.css'
// import desktopVideo from './../../assets/videos/01.webm'
import desktopVideo from './../../assets/videos/01.webm'
import mobileVideo from './../../assets/videos/Vertical-new.mp4'

import { useEffect, useState } from 'react';

export default function Introduction() {

  const [videoSrc, setVideoSrc] = useState('');

  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth <= 768;
      setVideoSrc(isMobile ? mobileVideo : desktopVideo);
    };

    handleResize(); // run on mount
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className="full-height color-red video-container" id='introduction'>
      <video autoPlay={true} muted={true} loop={true} className="background-video" key={videoSrc}  >
        <source type="video/mp4" src={videoSrc} />
        Tu navegador no soporta la reproducción de videos.
      </video>
    </section>
  )
}
