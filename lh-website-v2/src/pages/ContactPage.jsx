// src/pages/ContactPage.jsx
import React from "react";
import { Box } from "@mui/material";

import PageWrapper from "../components/common/PageWrapper";
import ParallaxClouds from "../components/common/ParallaxClouds";

import ContactHero from "../components/pages/contact/ContactHero";
import ContactMainSection from "../components/pages/contact/ContactMainSection";
import ContactNextStepsSection from "../components/pages/contact/ContactNextStepsSection";
import ContactWhySection from "../components/pages/contact/ContactWhySection";
import ContactCTASection from "../components/pages/contact/ContactCTASection";

const ContactPage = () => {

  return (
      <Box sx={{ bgcolor: "background.default", color: "text.primary" }}>
        <ContactHero />

        <Box sx={{ position: "relative" }}>
          {/* Clouds im Hintergrund aller Content-Sektionen */}
          <ParallaxClouds count={7} infront={false} />

          <Box sx={{ position: "relative", zIndex: 1 }}>
            <ContactMainSection />
            <ContactNextStepsSection />
            <ContactWhySection />
            <ContactCTASection />
          </Box>
        </Box>
      </Box>
  );
};

export default ContactPage;
