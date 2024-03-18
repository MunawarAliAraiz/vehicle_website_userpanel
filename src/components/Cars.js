import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import audi from "../assets/car4.jpg";
import ferrari from "../assets/car3.jpg";
import ford from "../assets/car2.png";
import kia from "../assets/car1.png";
import axios from 'axios';
import { useState, useEffect } from 'react';

import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa"; // Import icons for next and previous buttons

import { Container } from "react-bootstrap";
import VehicleSlidingCard from "../Cards/VehicleSlidingCard";

const Cars = () => {

  const [cars, setCars] = useState([]);

  // Fetch blog and car data from API
  useEffect(() => {
    const fetchCars = async () => {
      try {
        const response = await axios.get('http://localhost:4000/api/cars/list');
        setCars(response.data.cars);
      } catch (error) {
        console.error('Error fetching cars:', error);
      }
    };
    fetchCars();
  }, []);

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
      <h2 className="heading">Popular New Cars</h2>

      <Slider {...settings}>
        {cars.map((car)=>(
          <VehicleSlidingCard
          image={car.img}
          name={car.name}
          price={`${car.price} $`}
        />
        ))}
        <VehicleSlidingCard
          image={audi}
          name="Lorem ipsum sr."
          price="PKR 234,000"
        />
        <VehicleSlidingCard
          image={ferrari}
          name="Lorem ipsum sr."
          price="PKR 234,000"
        />
        <VehicleSlidingCard
          image={ford}
          name="Lorem ipsum sr."
          price="PKR 234,000"
        />
        <VehicleSlidingCard
          image={kia}
          name="Lorem ipsum sr."
          price="PKR 234,000"
        />
      </Slider>
    </Container>
  );
};

export default Cars;
