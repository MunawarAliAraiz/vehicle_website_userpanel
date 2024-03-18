import React from 'react'
import Intro from './components/UsedCardComp/Intro'

import car from './assets/car6.png'
import Cars from './components/Cars'
import CarsMade from './components/CarsMade'
import BrowseCars from './components/BrowseCars'
import CarsDetails from './components/CarsDetails'
const NewCarPage = () => {
  return (
   <>
    <Intro
    vehicle="Cars" 
    text="Discover your perfect ride from our vast selection of thousands of cars. Whether you crave efficiency, luxury, or adventure, we have the ideal match waiting for you. Explore our inventory today and find the vehicle that perfectly fits your lifestyle"
    image={car}    
    />

<Cars/>
<CarsDetails></CarsDetails>
<BrowseCars/>

   </>
  )
}

export default NewCarPage
