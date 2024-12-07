import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Cards from "./components/Cards/Cards";
import About from "./components/About/About";
import Popular from "./components/Popular/Popular";
import Testimonials from "./components/Testimonials/Testimonials";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="overflow-x-hidden bg-white2">
      <div className="relative overflow-hidden ">
        <Navbar />
        <Hero />
      </div>
      <Cards />
      <About />
      <Popular />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
