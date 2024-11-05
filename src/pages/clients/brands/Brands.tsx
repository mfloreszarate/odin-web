import Slider from "react-slick";
import BackArrowIcon from './../../../assets/icons/back-arrow.svg'
import NewtArrowIcon from './../../../assets/icons/next-arrow.svg'
// import PepsiImg from './../../../assets/img/pepsi.png'
import CocaColaImg from './../../../assets/img/cocacola.png'
import BbvaImg from './../../../assets/img/bbva.png'
import FordImg from './../../../assets/img/ford.png'

import './brands.css'
export const Brands = () => {

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    nextArrow: <NewtArrowIcon />,
    prevArrow: <BackArrowIcon />
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {/* <div className="my-slider">
          <img src={PepsiImg} alt="brand1" className="brand-img" />
        </div> */}
        <div className="my-slider">
          <h3>
            <img src={CocaColaImg} alt="brand1" className="brand-img" />
          </h3>
        </div>
        <div className="my-slider">
          <h3>
            <img src={BbvaImg} alt="brand1" className="brand-img" />
          </h3>
        </div>
        <div className="my-slider">
          <h3>
            <img src={FordImg} alt="brand1" className="brand-img" />
          </h3>
        </div>
        <div className="my-slider">
          <h3>
            <img src={CocaColaImg} alt="brand1" className="brand-img" />
          </h3>
        </div>
        <div className="my-slider">
          <h3>
            <img src={BbvaImg} alt="brand1" className="brand-img" />
          </h3>
        </div>
      </Slider>
    </div>

  )


}
