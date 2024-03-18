import React from "react";
import wheel from "../assets/accessories/alloy-wheels.png";
import batteries from "../assets//accessories/batteries.png";
import engine from "../assets//accessories/complete-engines.png";
import oil from "../assets//accessories/engine-oil.png";
import fuelpump from "../assets//accessories/fuel-pump.png";
import gps from "../assets//accessories/gps-trackers.png";
import helmet from "../assets//accessories/helmets.png";
import keychain from "../assets//accessories/key-chains.png";
import microfiber from "../assets//accessories/microfiber-clothes.png";
import washer from "../assets//accessories/pressure-washers.png";
import tyres from "../assets//accessories/tyres.png";
import charger from "../assets//accessories/usb-car-charger.png";

import VehicleAccessories from "./UsedCardComp/VehicleAcessories";

const VehicleAutoparts = () => {
  const carLogos = [
    { image: wheel, alt: "Audi Logo", title: "Alloy Rings" },
    { image: batteries, alt: "BMW Logo", title: "Batteries" },
    { image: engine, alt: "Ferrari Logo", title: "oil" },
    { image: oil, alt: "Ford Logo", title: "oil" },
    { image: fuelpump, alt: "Kia Logo", title: "fuelpump" },
    { image: gps, alt: "Lotus Logo", title: "gps" },
    { image: helmet, alt: "Mazda Logo", title: "helmet" },
    { image: keychain, alt: "Mercedes Logo", title: "keychain" },
    { image: microfiber, alt: "Kia Logo", title: "microfiber" },
    { image: washer, alt: "Lotus Logo", title: "washer" },
    { image: tyres, alt: "Mazda Logo", title: "tyres" },
    { image: charger, alt: "Mercedes Logo", title: "charger" },
    { image: engine, alt: "Ferrari Logo", title: "engine" },
    { image: oil, alt: "Ford Logo", title: "oil" },
    { image: fuelpump, alt: "Kia Logo", title: "fuelpump" },
    { image: gps, alt: "Lotus Logo", title: "gps" },
    { image: helmet, alt: "Mazda Logo", title: "helmet" },
    { image: keychain, alt: "Mercedes Logo", title: "keychain" },
    { image: microfiber, alt: "Kia Logo", title: "microfiber" },
    { image: washer, alt: "Lotus Logo", title: "washer" },
    { image: tyres, alt: "Mazda Logo", title: "tyres" },
    // Add more logos as needed
  ];
  return <VehicleAccessories logos={carLogos} />;
};

export default VehicleAutoparts;
