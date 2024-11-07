import Slider from "react-slick";
import BackArrowIcon from './../../../assets/icons/back-arrow.svg'
import NewtArrowIcon from './../../../assets/icons/next-arrow.svg'
// import PepsiImg from './../../../assets/img/pepsi.png'
import CocaColaImg from './../../../assets/img/cocacola.png'
import BbvaImg from './../../../assets/img/bbva.png'
import FordImg from './../../../assets/img/ford.png'

import './brands.css'
function SamplePrevArrow({ onClick }: any) {
  // const { className, style, onClick } = props;
  return (
    <div
      className="custom-arrow next-arrow" onClick={onClick}
    >
      <NewtArrowIcon></NewtArrowIcon>
    </div>

  );
}

function SampleNextArrow({ onClick }: any) {
  return (
    <div className="custom-arrow prev-arrow" onClick={onClick}>
      <BackArrowIcon></BackArrowIcon>
    </div>
  );
}

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
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
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
