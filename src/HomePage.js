import React from "react";
import CarsDetails from "./components/CarsDetails";
import Intro from "./components/UsedCardComp/Intro";
import IntroHeadline from "./components/IntroHeadline";
import Navbarr from "./components/Navbar";
import SellCars from "./components/SellCars";
import CarsMade from "./components/CarsMade";
import BrowseCars from "./components/BrowseCars";
import VehicleAcessories from "./components/UsedCardComp/VehicleAcessories";
import Footer from "./components/Footer";
import AllBlogs from "./components/AllBlogs";
import Bikes from "./components/Bikes";
import Cars from "./components/Cars";

import car1 from "./assets/car1.png";
import VehicleAutoparts from "./components/VehicleAutoparts";

const HomePage = () => {
  return (
    <>
      <Intro
        vehicle="Cars"
        text="Discover your perfect ride from our vast selection of thousands of cars. Whether you crave efficiency, luxury, or adventure, we have the ideal match waiting for you. Explore our inventory today and find the vehicle that perfectly fits your lifestyle."
        image={car1}
      />
      <CarsMade />
      <IntroHeadline />
      <SellCars />
      <BrowseCars />
      <Cars />
      <CarsDetails />
      <AllBlogs />
      <Bikes />
      <VehicleAutoparts />
    </>
  );
};

export default HomePage;
