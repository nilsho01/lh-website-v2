// src/pages/HomePage.jsx
import React from "react";
import { Box } from "@mui/material";
import GlowingLinesBackground from "../components/common/GlowingLinesBackground";
import HomeHeroSection from "../components/pages/home/HomeHeroSection";
import HomeQuickLinksSection from "../components/pages/home/HomeQuickLinksSection";
import HomeClientsSection from "../components/pages/home/HomeClientsSection";

const HomePage = () => {
  return (
    <Box sx={{ bgcolor: "background.default", color: "text.primary" }}>
      <HomeHeroSection />

      <Box sx={{ position: "relative" }}>
        <GlowingLinesBackground count={5} infront={false} />

        <Box sx={{ position: "relative", zIndex: 1 }}>
          <HomeQuickLinksSection />
          <HomeClientsSection />
        </Box>
      </Box>
    </Box>
  );
};

export default HomePage;
