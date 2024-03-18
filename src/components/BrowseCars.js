import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
// import { fronteneddata, backeneddata, static_pagesdata } from '../components/Data/browsedata';
import VehicleCateg from "./UsedCardComp/VehicleCateg";
import CarsDetails from "./CarsDetails";
import VehicleBuget from "./UsedCardComp/VehicleBuget";
import { Container } from "react-bootstrap";
import audi from "../assets/car_brand_logo/audi.svg";
import bmw from "../assets/car_brand_logo/bmw.svg";
import ferrari from "../assets/car_brand_logo/ferrari.svg";
import ford from "../assets/car_brand_logo/ford.svg";
import kia from "../assets/car_brand_logo/kia.svg";
import lotus from "../assets/car_brand_logo/lotus.svg";
import mazda from "../assets/car_brand_logo/mazda-alt.svg";
import mercedes from "../assets/car_brand_logo/mercedes-benz-alt.svg";
const BrowseCars = () => {
  const [key, setKey] = useState("tab1");
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
  const cityData = [
    ["Hyderabad", "Sukkar", "Peshawar", "Karachi", "Umerkot"],
    ["Lahore", "Islamabad", "Quetta", "Multan", "Faisalabad"],
    ["Rawalpindi", "Gujranwala", "Sialkot", "Sargodha", "Bahawalpur"],
  ];
  const bugdetData = [
    ["under 5 lakh", "5-10 lakh", "10-20 lakh", "20-30 lakh"],
    ["30-40 lakh", "40-50 lakh", "50-60 lakh", "60-80 lakh"],
    ["80 lakh", "1 crore", "1-1.5 crore", "1.5-2 crore"],
  ];

  const modelData = [
    ["Corolla", "Civic", "City", "Mehran", "Alto", "Cultus"],
    ["Wagon R", "Vitz ", "Mira", "Swift", "Vezel", "Prado"],
    ["Hilux", " Aqua", " Prius", " Yaris", "Sportage", "Passo"],
  ];
  return (
    <Container>
      <h2 className="heading" id="cars">
        Browse Used Cars
      </h2>

      <section className="carbrowse_con" id="">
        <Tabs className="Tabs" activeKey={key} onSelect={(k) => setKey(k)}>
          <TabList>
            <Tab eventKey="tab1">Category</Tab>
            <Tab eventKey="tab2">City</Tab>
            <Tab eventKey="tab3">Make</Tab>
            <Tab eventKey="tab4">Model</Tab>
            <Tab eventKey="tab5">Budget</Tab>
          </TabList>
          <TabPanel>
            <VehicleCateg images={carImages} />
          </TabPanel>
          <TabPanel>
            <VehicleBuget data={cityData} />
          </TabPanel>
          <TabPanel>
            <VehicleCateg images={carImages} />
          </TabPanel>
          <TabPanel>
            <VehicleBuget data={modelData} />
          </TabPanel>
          <TabPanel>
            <VehicleBuget data={bugdetData} />
          </TabPanel>
        </Tabs>
      </section>
    </Container>
  );
};

export default BrowseCars;
