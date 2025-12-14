// src/pages/CustomerSatisfactionPage.jsx
import React, { useRef } from "react";
import { Box } from "@mui/material";

import PageWrapper from "../components/common/PageWrapper";
import ParallaxClouds from "../components/common/ParallaxClouds";

import CustomerSatisfactionHeroSection from "../components/pages/customerSatisfaction/CustomerSatisfactionHeroSection";
import CustomerSatisfactionOverviewSection from "../components/pages/customerSatisfaction/CustomerSatisfactionOverviewSection";
import CustomerSatisfactionSegmentsSection from "../components/pages/customerSatisfaction/CustomerSatisfactionSegmentsSection";
import CustomerSatisfactionPlaygroundSection from "../components/pages/customerSatisfaction/CustomerSatisfactionPlaygroundSection";

const CustomerSatisfactionPage = () => {
  const overviewRef = useRef(null);
  const segmentsRef = useRef(null);
  const playgroundRef = useRef(null);

  const scrollTo = (ref) => {
    if (!ref?.current) return;
    ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <PageWrapper state="customer-satisfaction">
      <Box sx={{ bgcolor: "background.default", color: "text.primary" }}>
        <CustomerSatisfactionHeroSection
          onJumpOverview={() => scrollTo(overviewRef)}
          onJumpSegments={() => scrollTo(segmentsRef)}
          onJumpPlayground={() => scrollTo(playgroundRef)}
        />

        <Box sx={{ position: "relative" }}>
          <ParallaxClouds count={5} infront={false} />

          <Box sx={{ position: "relative", zIndex: 1 }}>
            <CustomerSatisfactionOverviewSection refProp={overviewRef} />
            <CustomerSatisfactionSegmentsSection refProp={segmentsRef} />
            <CustomerSatisfactionPlaygroundSection refProp={playgroundRef} />
          </Box>
        </Box>
      </Box>
    </PageWrapper>
  );
};

export default CustomerSatisfactionPage;
