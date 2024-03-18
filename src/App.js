import "./App.css";
import BikesPage from "./BikesPage";
import HomePage from "./HomePage";
import AllBlogs from "./components/AllBlogs";
import Bikes from "./components/Bikes";
import CarsDetails from "./components/CarsDetails";
import Footer from "./components/Footer";
import Intro from "./components/UsedCardComp/Intro";
import IntroHeadline from "./components/IntroHeadline";
import Navbarr from "./components/Navbar";
import SellCars from "./components/SellCars";

import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import ScanApp from "./components/ScanApp";
import NewCarPage from "./NewCarPage";
function App() {
  return (
    <>
      <Router>
        <Navbarr />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/bikes" element={<BikesPage />} />
          <Route path="/blogs" element={<AllBlogs />} />

          <Route path="/new-cars" element={<NewCarPage />} />
        </Routes>
        <ScanApp />
        <Footer />
      </Router>
    </>
  );
}

export default App;
