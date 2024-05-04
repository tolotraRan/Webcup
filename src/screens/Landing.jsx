import React from "react";
import Header from "../components/Sections/Header";
import Services from "../components/Sections/Services"; 
import About from "../components/Sections/About";
import Contact from "../components/Sections/Contact";
import Footer from "../components/Sections/Footer"

export default function Landing() {
  return (
    <>
      <Header />
      <About />
      <Services />
      <Contact />
      <Footer />
    </>
  );
}


