// src/pages/OnlineSurveysPage.jsx
import React, { useRef } from "react";
import { Box } from "@mui/material";
import PageWrapper from "../components/common/PageWrapper";
import GlowingLinesBackground from "../components/common/GlowingLinesBackground";

import OnlineSurveysHeroSection from "../components/pages/onlineSurveys/OnlineSurveysHeroSection";
import OnlineSurveysWhySection from "../components/pages/onlineSurveys/OnlineSurveysWhySection";

const OnlineSurveysPage = () => {
  const whyRef = useRef(null);

  const scrollTo = (ref) => {
    if (!ref?.current) return;
    ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <PageWrapper state="online-surveys">
      <Box sx={{ bgcolor: "background.default", color: "text.primary" }}>
        <OnlineSurveysHeroSection onJumpWhy={() => scrollTo(whyRef)} />

        <Box sx={{ position: "relative" }}>
          <GlowingLinesBackground count={8} infront={false} fullPage />

          <Box sx={{ position: "relative", zIndex: 1 }}>
            <OnlineSurveysWhySection refProp={whyRef} />
          </Box>
        </Box>
      </Box>
    </PageWrapper>
  );
};

export default OnlineSurveysPage;
