// src/pages/ReportingSystemPage.jsx
import React, { useRef } from "react";
import { Box } from "@mui/material";
import PageWrapper from "../components/common/PageWrapper";
import GlowingLinesBackground from "../components/common/GlowingLinesBackground";

import ReportingHeroSection from "../components/pages/reporting/ReportingHeroSection";
import ReportingWhySection from "../components/pages/reporting/ReportingWhySection";

const ReportingSystemPage = () => {
  const whyRef = useRef(null);

  const scrollTo = (ref) => {
    if (!ref?.current) return;
    ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <PageWrapper state="reporting-system">
      <Box sx={{ bgcolor: "background.default", color: "text.primary" }}>
        <ReportingHeroSection onJumpWhy={() => scrollTo(whyRef)} />

        <Box sx={{ position: "relative" }}>
          <GlowingLinesBackground count={8} infront={false} fullPage />

          <Box sx={{ position: "relative", zIndex: 1 }}>
            <ReportingWhySection refProp={whyRef} />
          </Box>
        </Box>
      </Box>
    </PageWrapper>
  );
};

export default ReportingSystemPage;
