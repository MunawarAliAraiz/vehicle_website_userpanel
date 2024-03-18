import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import audi from "../assets/bike/bike1.png";
import ferrari from "../assets/bike/bike1.png";
import ford from "../assets/bike/bike2.png";
import kia from "../assets/bike/bike3.png";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa"; // Import icons for next and previous buttons

import { Container } from "react-bootstrap";
import VehicleSlidingCard from "../Cards/VehicleSlidingCard";

const Cars = () => {
  const NextArrow = (props) => {
    const { onClick } = props;
    return (
      <div className="slick-arrow next" onClick={onClick}>
        <FaArrowCircleRight
          style={{
            borderRadius: "50%",
            fontSize: "33px",
            color: "var(--peach)",
          }}
        />
      </div>
    );
  };

  const PrevArrow = (props) => {
    const { onClick } = props;
    return (
      <div className="slick-arrow prev" onClick={onClick}>
        <FaArrowCircleLeft
          style={{
            borderRadius: "50%",
            fontSize: "33px",
            color: "var(--peach)",
          }}
        />
      </div>
    );
  };

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 5000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024, // for tablet screens
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600, // for mobile screens
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Container className="card-made-con">
      <h2 className="heading">Popular New Bikes</h2>

      <Slider {...settings}>
        <VehicleSlidingCard
          image={audi}
          name="Lorem ipsum sr."
          price="PKR 234,000"
        />
        <VehicleSlidingCard
          image={ford}
          name="Lorem ipsum sr."
          price="PKR 234,000"
        />
        <VehicleSlidingCard
          image={ferrari}
          name="Lorem ipsum sr."
          price="PKR 234,000"
        />
        <VehicleSlidingCard
          image={kia}
          name="Lorem ipsum sr."
          price="PKR 234,000"
        />
        <VehicleSlidingCard
          image={audi}
          name="Lorem ipsum sr."
          price="PKR 234,000"
        />
      </Slider>
    </Container>
  );
};

export default Cars;
