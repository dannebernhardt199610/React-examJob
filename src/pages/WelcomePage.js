import React, { useState, useEffect } from "react";
import { Navbar } from "../homepage/components/Navbar";
import GlobalStyle from "../homepage/components/globalStyles";
import { Hero } from "../homepage/components/Hero";
import { SliderData } from "../homepage/data/SliderData";
import DropDown from "../homepage/components/DropDown";
import InfoSection from "../homepage/components/InfoSection";
import { InfoData } from "../homepage/data/InfoData";

const WelcomePage = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    console.log("Welcome page loaded")
  }, []);

  //for the DropDown.
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="WelcomePage">
      <GlobalStyle />
      <Navbar toggle={toggle} />
      <DropDown isOpen={isOpen} toggle={toggle} />
      <Hero slides={SliderData} />
      <InfoSection infoData={InfoData} />
    </div>
  );
};

export default WelcomePage;
