// src/pages/AutomobilePage.jsx
import React from "react";
import { Box } from "@mui/material";
import { useLocation } from "react-router";

import PageWrapper from "../components/common/PageWrapper";
import GlowingLinesBackground from "../components/common/GlowingLinesBackground";
import AutomobileHero from "../components/pages/automobile/AutomobileHero";

import AutomobilePerformanceSection from "../components/pages/automobile/AutomobilePerformanceSection";
import AutomobileCustomersSection from "../components/pages/automobile/AutomobileCustomersSection";
import AutomobileMethodsSection from "../components/pages/automobile/AutomobileMethodsSection";
import AutomobileCarClinicsSection from "../components/pages/automobile/AutomobileCarClinicsSection";
import AutomobileConclusionSection from "../components/pages/automobile/AutomobileConclusionSection";

const AutomobilePage = ({ state = "automobile" }) => {
  const { hash } = useLocation();
  const section = hash ? hash.slice(1) : null;
  const effectiveState = section || state;

  return (
    <PageWrapper state={effectiveState}>
      <Box sx={{ bgcolor: "background.default", color: "text.primary" }}>
        <AutomobileHero />

        <Box sx={{ position: "relative" }}>
          <GlowingLinesBackground count={5} infront={false} />

          <Box sx={{ position: "relative", zIndex: 1 }}>
            <AutomobilePerformanceSection />
            <AutomobileCustomersSection />
            <AutomobileMethodsSection />
            <AutomobileCarClinicsSection />
            <AutomobileConclusionSection />
          </Box>
        </Box>
      </Box>
    </PageWrapper>
  );
};

export default AutomobilePage;
