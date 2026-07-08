// src/pages/ReportingSystemPage.jsx
import React from "react";
import { Box } from "@mui/material";
import PageWrapper from "../components/common/PageWrapper";
import GlowingLinesBackground from "../components/common/GlowingLinesBackground";

import ReportingHeroSection from "../components/pages/reporting/ReportingHeroSection";
import ReportingWhySection from "../components/pages/reporting/ReportingWhySection";
import ReportingDashboardsSection from "../components/pages/reporting/ReportingDashboardsSection";
import ReportingDataGovernanceSection from "../components/pages/reporting/ReportingDataGovernanceSection";

const ReportingSystemPage = () => {
  return (
    <PageWrapper state="reporting-system">
      <Box sx={{ bgcolor: "background.default", color: "text.primary" }}>
        <ReportingHeroSection />

        <Box sx={{ position: "relative" }}>
          <GlowingLinesBackground count={8} infront={false} fullPage />

          <Box sx={{ position: "relative", zIndex: 1 }}>
            <ReportingWhySection />
            <ReportingDashboardsSection />
            <ReportingDataGovernanceSection />
          </Box>
        </Box>
      </Box>
    </PageWrapper>
  );
};

export default ReportingSystemPage;
