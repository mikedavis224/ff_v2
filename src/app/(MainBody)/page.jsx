// containers/landing/page.jsx
"use client";  // Add this line to mark the component as client-side

import React, { useEffect } from "react";
//import header and nav bar
import Header from "../../containers/common/header";

// Import gym-related sections, excluding the ones you don't need
import GymBanner from "../../containers/layouts/sections/gym/banner";
import GymAbout from "../../containers/layouts/sections/gym/about";
import GymTestimonial from "../../containers/layouts/sections/gym/testimonial";
import GymFooter from "../../containers/layouts/sections/gym/footer";

const GymLandingPage = () => {
  useEffect(() => {
    document.body.style.setProperty("--primary", "#10266b"); // Customize colors
    document.body.style.setProperty("--secondary", "#464545");
    document.body.style.setProperty("--light", "#1F357D");
  }, []);

  return (
    <>
      <GymBanner />
      <GymAbout />
      <GymTestimonial />
      <GymFooter />
    </>
  );
};

export default GymLandingPage;
