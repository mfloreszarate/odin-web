
import pqIndustrial1 from './../../assets/img/proyectos/parque-industrial/avances/1.jpeg'
import pqIndustrial2 from './../../assets/img/proyectos/parque-industrial/avances/2.jpeg'
import pqIndustrial3 from './../../assets/img/proyectos/parque-industrial/avances/4.jpeg'
import pqIndustrial4 from './../../assets/img/proyectos/parque-industrial/avances/8.jpeg'


import losProf1 from './../../assets/img/proyectos/los-profesionales/AVANCES/9.jpeg'
import losProf2 from './../../assets/img/proyectos/los-profesionales/AVANCES/1.jpeg'
import losProf3 from './../../assets/img/proyectos/los-profesionales/AVANCES/2.jpeg'
import losProf4 from './../../assets/img/proyectos/los-profesionales/AVANCES/3.jpeg'
import losProf5 from './../../assets/img/proyectos/los-profesionales/AVANCES/4.jpeg'
import losProf6 from './../../assets/img/proyectos/los-profesionales/AVANCES/5.jpeg'

import bioqCtro1 from './../../assets/img/proyectos/bioq-salta/6.jpg'
import bioqCtro3 from './../../assets/img/proyectos/bioq-salta/1.png'
import bioqCtro4 from './../../assets/img/proyectos/bioq-salta/2.png'
import bioqCtro5 from './../../assets/img/proyectos/bioq-salta/3.png'
import bioqCtro6 from './../../assets/img/proyectos/bioq-salta/4.png'

import bioqCerr1 from './../../assets/img/proyectos/bioq-cerrillos/1.png'
import bioqCerr2 from './../../assets/img/proyectos/bioq-cerrillos/2.jpg'
import bioqCerr3 from './../../assets/img/proyectos/bioq-cerrillos/3.jpg'
import bioqCerr4 from './../../assets/img/proyectos/bioq-cerrillos/4.jpg'


import quijano1 from './../../assets/img/proyectos/quijano/1.jpg'
import quijano2 from './../../assets/img/proyectos/quijano/2.jpg'
import quijano3 from './../../assets/img/proyectos/quijano/3.jpg'
import quijano4 from './../../assets/img/proyectos/quijano/4.jpg'
import quijano5 from './../../assets/img/proyectos/quijano/5.jpg'

import sanMartin1 from './../../assets/img/proyectos/calle-san-martin/1.jpg'
import sanMartin3 from './../../assets/img/proyectos/calle-san-martin/3.jpg'
import sanMartin5 from './../../assets/img/proyectos/calle-san-martin/5.jpg'
import sanMartin10 from './../../assets/img/proyectos/calle-san-martin/10.jpg'
import sanMartin11 from './../../assets/img/proyectos/calle-san-martin/11.jpg'

export type ProjectItemType = { id: number, name: string, images: { original: string; thumbnail: string }[], backgroundImage: string, description: string }
export const projectsConfiguration: ProjectItemType[] = [
  {
    id: 1,
    name: 'Parque Industrial',
    description: 'Montajes industriales construccion de galpones/tinglados',
    images: [
      { original: pqIndustrial1, thumbnail: pqIndustrial1 },
      { original: pqIndustrial2, thumbnail: pqIndustrial2 },
      { original: pqIndustrial3, thumbnail: pqIndustrial3 },
      { original: pqIndustrial4, thumbnail: pqIndustrial4 },
      // { original: pqIndustrial5, thumbnail: pqIndustrial5 },
    ],
    backgroundImage: pqIndustrial1
  },
  {
    id: 2,
    name: 'Los Profesionales',
    description: 'Sistema de construccion tradicional.',
    images: [
      { original: losProf1, thumbnail: losProf1 },
      { original: losProf2, thumbnail: losProf2 },
      { original: losProf3, thumbnail: losProf3 },
      { original: losProf4, thumbnail: losProf4 },
      { original: losProf5, thumbnail: losProf5 },
      { original: losProf6, thumbnail: losProf6 }
    ],
    backgroundImage: losProf1
  },
  {
    id: 3,
    name: 'Asociación Bioquímica de Salta (centro)',
    description: 'Remodelaciones, ampliacion de instalaciones ,agua, electricidad.',
    images: [
      { original: bioqCtro1, thumbnail: bioqCtro1 },
      { original: bioqCtro3, thumbnail: bioqCtro3 },
      { original: bioqCtro4, thumbnail: bioqCtro4 },
      { original: bioqCtro5, thumbnail: bioqCtro5 },
      { original: bioqCtro6, thumbnail: bioqCtro6 },
    ],
    backgroundImage: bioqCtro1
  },
  {
    id: 4,
    name: 'Asociación Bioquímica de Salta (Cerrillos)',
    description: 'Renovaciones y modernizacion de espacios.',
    images: [
      { original: bioqCerr1, thumbnail: bioqCerr1 },
      { original: bioqCerr2, thumbnail: bioqCerr2 },
      { original: bioqCerr3, thumbnail: bioqCerr3 },
      { original: bioqCerr4, thumbnail: bioqCerr4 },
    ],
    backgroundImage: bioqCerr1
  },
  {
    id: 5,
    name: 'Anteproyecto Campo Quijano',
    description: 'Diseño de anteproyecto, renderizado de ambientes.',
    images: [
      { original: quijano1, thumbnail: quijano1 },
      { original: quijano2, thumbnail: quijano2 },
      { original: quijano3, thumbnail: quijano3 },
      { original: quijano4, thumbnail: quijano4 },
      { original: quijano5, thumbnail: quijano5 }
    ],
    backgroundImage: quijano1
  },
  {
    id: 6,
    name: 'Anteproyecto Calle San Martín',
    description: 'Construccion por etapas.',
    images: [
      { original: sanMartin1, thumbnail: sanMartin1 },
      { original: sanMartin3, thumbnail: sanMartin3 },
      { original: sanMartin5, thumbnail: sanMartin5 },
      { original: sanMartin10, thumbnail: sanMartin10 },
      { original: sanMartin11, thumbnail: sanMartin11 },
    ],
    backgroundImage: sanMartin1
  }
]
