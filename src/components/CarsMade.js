import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import audi from "../assets/car_brand_logo/audi.svg";
import bmw from "../assets/car_brand_logo/bmw.svg";
import ferrari from "../assets/car_brand_logo/ferrari.svg";
import ford from "../assets/car_brand_logo/ford.svg";
import kia from "../assets/car_brand_logo/kia.svg";
import lotus from "../assets/car_brand_logo/lotus.svg";
import mazda from "../assets/car_brand_logo/mazda-alt.svg";
import mercedes from "../assets/car_brand_logo/mercedes-benz-alt.svg";

const CarsMade = () => {
  const settings = {
    // dots: true,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1024, // for tablet screens
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 600, // for mobile screens
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };

  return (
    <div className="card-made-con" style={{ margin: "1.4rem 0" }}>
      <Slider {...settings}>
        <div className="car-logo">
          <img src={audi} />
        </div>
        <div className="car-logo">
          <img src={bmw} />
        </div>
        <div className="car-logo">
          <img src={ferrari} />
        </div>
        <div className="car-logo">
          <img src={ford} />
        </div>
        <div className="car-logo">
          <img src={kia} />
        </div>
        <div className="car-logo">
          <img src={lotus} />
        </div>
        <div className="car-logo">
          <img src={mercedes} />
        </div>
        <div className="car-logo">
          <img src={mazda} />
        </div>
        <div className="car-logo">
          <img src={kia} />
        </div>
        <div className="car-logo">
          <img src={lotus} />
        </div>
      </Slider>
    </div>
  );
};

export default CarsMade;
