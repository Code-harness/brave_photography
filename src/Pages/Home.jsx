import React from "react";

import Hero from "../components/Hero";
import Gallery from "./Gallery";
import Services from "./Services";
import About from "./About";

const Home = () => (
  <div>
    <Hero />
    <Gallery/>
    <Services/>
    <About/>
  </div>
);

export default Home;
