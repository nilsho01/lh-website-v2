// src/pages/AutomobilePage.jsx
import React, { useEffect, useRef } from "react";
import { Box } from "@mui/material";

import PageWrapper from "../components/common/PageWrapper";
import ParallaxClouds from "../components/common/ParallaxClouds";

import AutomobileHero from "../components/pages/automobile/AutomobileHero";
import AutomobilePerformanceSection from "../components/pages/automobile/AutomobilePerformanceSection";
import AutomobileCustomersSection from "../components/pages/automobile/AutomobileCustomersSection";
import AutomobileMethodsSection from "../components/pages/automobile/AutomobileMethodsSection";
import AutomobileCarClinicsSection from "../components/pages/automobile/AutomobileCarClinicsSection";

const AutomobilePage = ({ section, state = "automobile" }) => {
  const performanceRef = useRef(null);
  const customersRef = useRef(null);
  const methodsRef = useRef(null);
  const carClinicsRef = useRef(null);

  const scrollTo = (ref) => {
    if (!ref?.current) return;
    ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  useEffect(() => {
    if (!section) return;

    const sectionRefs = {
      performance: performanceRef,
      customers: customersRef,
      methods: methodsRef,
      "car-clinics": carClinicsRef,
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
    <PageWrapper state={state}>
      <Box sx={{ bgcolor: "background.default", color: "text.primary" }}>
        <AutomobileHero
          onJumpPerformance={() => scrollTo(performanceRef)}
          onJumpCustomers={() => scrollTo(customersRef)}
          onJumpMethods={() => scrollTo(methodsRef)}
          onJumpCarClinics={() => scrollTo(carClinicsRef)}
        />

        <Box sx={{ position: "relative" }}>
          <ParallaxClouds count={5} infront={false} />

          <Box sx={{ position: "relative", zIndex: 1 }}>
            <AutomobilePerformanceSection refProp={performanceRef} />
            <AutomobileCustomersSection refProp={customersRef} />
            <AutomobileMethodsSection refProp={methodsRef} />
            <AutomobileCarClinicsSection refProp={carClinicsRef} />
          </Box>
        </Box>
      </Box>
    </PageWrapper>
  );
};

export default AutomobilePage;
