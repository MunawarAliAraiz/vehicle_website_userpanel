import React from "react";
import { Container } from "react-bootstrap";
import Bikes from "./components/Bikes";
import Intro from "./components/UsedCardComp/Intro";

import bike from "./assets/bike/bike5.png";
import BikesLogo from "./components/BikesLogo";
import BrowseCars from "./components/BrowseCars";
const BikesPage = () => {
  return (
    <>
      <Intro
        vehicle="Bikes"
        text="Explore our extensive collection of bikes, where you'll find the perfect ride for every journey. From sleek urban commuters to rugged off-road adventurers, we have the ideal bike waiting just for you. Start your biking adventure today and find your ultimate two-wheeled companion."
        image={bike}
      />
      <Bikes></Bikes>
      <BikesLogo />
      <BrowseCars />
    </>
  );
};

export default BikesPage;
