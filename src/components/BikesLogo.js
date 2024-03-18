import React from "react";
import audi from "../assets/bikeslogo/Honda.png";
import bmw from "../assets/bikeslogo/Road-prince.png";
import ferrari from "../assets/bikeslogo/Super-Power.png";
import ford from "../assets/bikeslogo/SuperStar.png";
import kia from "../assets/bikeslogo/Suzuki.png";
import lotus from "../assets/bikeslogo/Yamaha.png";
import mazda from "../assets/bikeslogo/Yamaha.png";
import mercedes from "../assets/bikeslogo/hi-Speed.png";
import VehicleCateg from "./UsedCardComp/VehicleCateg";

const BikesLogo = () => {
  const carImages = [
    audi,
    bmw,
    ferrari,
    ford,
    kia,
    lotus,
    mazda,
    mercedes,
    audi,
    bmw,
    ferrari,
    ford,
    kia,
    lotus,
    mazda,
    mercedes,
    audi,
    bmw,
    ferrari,
    ford,
    kia /* add more car logos here */,
  ];

  return <VehicleCateg images={carImages} />;
};

export default BikesLogo;
