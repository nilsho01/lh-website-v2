// src/pages/DirectionsPage.jsx
import React from "react";
import { Box } from "@mui/material";

import ParallaxClouds from "../components/common/ParallaxClouds";
import ScrollCarSection from "../components/pages/directions/DirectionsScrollCarSection";

import DirectionsHero from "../components/pages/directions/DirectionsHero";
import DirectionsInformationCards from "../components/pages/directions/DirectionsInformationCards";
import DirectionsMapsCard from "../components/pages/directions/DirectionsMapsCard";

const DirectionsPage = () => {
  return (
      <Box sx={{ bgcolor: "background.default", color: "text.primary" }}>
        <DirectionsHero />

        <Box sx={{ position: 'relative' }}>
          <ParallaxClouds count={5} infront={false} />
          <Box sx={{ position: "relative", zIndex: 1 }}>
            <DirectionsInformationCards />
            <DirectionsMapsCard />
            <ScrollCarSection />
          </Box>
        </Box>
      </Box>
  );
};

export default DirectionsPage;
