// src/pages/OnlineSurveysPage.jsx
import React from "react";
import { Box } from "@mui/material";
import PageWrapper from "../components/common/PageWrapper";
import GlowingLinesBackground from "../components/common/GlowingLinesBackground";

import OnlineSurveysHeroSection from "../components/pages/onlineSurveys/OnlineSurveysHeroSection";
import OnlineSurveysWhySection from "../components/pages/onlineSurveys/OnlineSurveysWhySection";
import OnlineSurveysProcessSection from "../components/pages/onlineSurveys/OnlineSurveysProcessSection";
import OnlineSurveysAutomationSection from "../components/pages/onlineSurveys/OnlineSurveysAutomationSection";

const OnlineSurveysPage = () => {
  return (
    <PageWrapper state="online-surveys">
      <Box sx={{ bgcolor: "background.default", color: "text.primary" }}>
        <OnlineSurveysHeroSection />

        <Box sx={{ position: "relative" }}>
          <GlowingLinesBackground count={8} infront={false} fullPage />

          <Box sx={{ position: "relative", zIndex: 1 }}>
            <OnlineSurveysWhySection />
            <OnlineSurveysProcessSection />
            <OnlineSurveysAutomationSection />
          </Box>
        </Box>
      </Box>
    </PageWrapper>
  );
};

export default OnlineSurveysPage;
