// src/pages/CompanyPage.jsx
import React, { useEffect, useRef } from "react";
import { Box } from "@mui/material";

import PageWrapper from "../components/common/PageWrapper";
import ParallaxClouds from "../components/common/ParallaxClouds";

import CompanyHero from "../components/pages/company/CompanyHero";
import CompanyFlexibilitySection from "../components/pages/company/CompanyFlexibilitySection";
import CompanySpecialisationSection from "../components/pages/company/CompanySpecialisationSection";
import CompanyInternationalitySection from "../components/pages/company/CompanyInternationalitySection";

const CompanyPage = ({ section, state = "company" }) => {
  const flexibilityRef = useRef(null);
  const specialisationRef = useRef(null);
  const internationalityRef = useRef(null);

  const scrollTo = (ref) => {
    if (!ref?.current) return;
    ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  useEffect(() => {
    if (!section) return undefined;

    const sectionRefs = {
      flexibility: flexibilityRef,
      specializations: specialisationRef,
      internationality: internationalityRef,
    };

    const targetRef = sectionRefs[section];
    if (!targetRef) return undefined;

    // PageWrapper scrolls to top on mount – wait a tick before jumping.
    const timer = setTimeout(() => {
      targetRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);

    return () => clearTimeout(timer);
  }, [section]);

  return (
    <PageWrapper state={state}>
      <Box sx={{ bgcolor: "background.default", color: "text.primary" }}>
        <CompanyHero
          onJumpFlexibility={() => scrollTo(flexibilityRef)}
          onJumpSpecialisation={() => scrollTo(specialisationRef)}
          onJumpInternationality={() => scrollTo(internationalityRef)}
        />

        <Box sx={{ position: "relative" }}>
          <ParallaxClouds count={5} infront={false} />

          <Box sx={{ position: "relative", zIndex: 1 }}>
            <CompanyFlexibilitySection refProp={flexibilityRef} />
            <CompanySpecialisationSection refProp={specialisationRef} />
            <CompanyInternationalitySection refProp={internationalityRef} />
          </Box>
        </Box>
      </Box>
    </PageWrapper>
  );
};

export default CompanyPage;
