// src/pages/AutomobilePage.jsx
import React, { useEffect, useRef } from "react";
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

  const performanceRef = useRef(null);
  const customersRef = useRef(null);
  const methodsRef = useRef(null);
  const carClinicsRef = useRef(null);
  const conclusionRef = useRef(null);

  useEffect(() => {
    if (!section) return;

    const sectionRefs = {
      performance: performanceRef,
      customers: customersRef,
      methods: methodsRef,
      "car-clinics": carClinicsRef,
      conclusion: conclusionRef,
    };

    const ref = sectionRefs[section];
    if (!ref) return;

    // PageWrapper scrolls to top on mount, so jump to the section shortly after
    const timer = setTimeout(() => {
      ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);

    return () => clearTimeout(timer);
  }, [section]);

  return (
    <PageWrapper state={effectiveState}>
      <Box sx={{ bgcolor: "background.default", color: "text.primary" }}>
        <AutomobileHero />

        <Box sx={{ position: "relative" }}>
          <GlowingLinesBackground count={5} infront={false} />

          <Box sx={{ position: "relative", zIndex: 1 }}>
            <AutomobilePerformanceSection refProp={performanceRef} />
            <AutomobileCustomersSection refProp={customersRef} />
            <AutomobileMethodsSection refProp={methodsRef} />
            <AutomobileCarClinicsSection refProp={carClinicsRef} />
            <AutomobileConclusionSection refProp={conclusionRef} />
          </Box>
        </Box>
      </Box>
    </PageWrapper>
  );
};

export default AutomobilePage;
