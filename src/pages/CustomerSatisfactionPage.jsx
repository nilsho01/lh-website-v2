// src/pages/CustomerSatisfactionPage.jsx
import React from "react";
import { Box } from "@mui/material";

import PageWrapper from "../components/common/PageWrapper";
import GlowingLinesBackground from "../components/common/GlowingLinesBackground";

import CustomerSatisfactionHeroSection from "../components/pages/customerSatisfaction/CustomerSatisfactionHeroSection";
import CustomerSatisfactionApproachSection from "../components/pages/customerSatisfaction/CustomerSatisfactionApproachSection";

const CustomerSatisfactionPage = () => {
  return (
    <PageWrapper state="customer-satisfaction">
      <Box sx={{ bgcolor: "background.default", color: "text.primary" }}>
        <CustomerSatisfactionHeroSection />

        <Box sx={{ position: "relative" }}>
          <GlowingLinesBackground count={5} infront={false} />

          <Box sx={{ position: "relative", zIndex: 1 }}>
            <CustomerSatisfactionApproachSection />
          </Box>
        </Box>
      </Box>
    </PageWrapper>
  );
};

export default CustomerSatisfactionPage;
