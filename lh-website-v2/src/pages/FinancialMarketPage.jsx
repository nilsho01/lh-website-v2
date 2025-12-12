import React, { useRef } from "react";
import { Box } from "@mui/material";
import PageWrapper from "../components/common/PageWrapper";

import FinancialMarketHero from "../components/pages/financialMarket/FinancialMarketHero";
import FMCustIntroSection from "../components/pages/financialMarket/FinancialMarketCustomerIntroSection";
import FMChannelsSection from "../components/pages/financialMarket/FinancialMarketChannelsSection";
import FMProgramsSection from "../components/pages/financialMarket/FinancialMarketProgramsSection";
import FMInsightsSection from "../components/pages/financialMarket/FinancialMarketInsightsSection";
import OnlineSurveysHeroSection from "../components/pages/onlineSurveys/OnlineSurveysHeroSection";
import OnlineSurveysWhySection from "../components/pages/onlineSurveys/OnlineSurveysWhySection";
import OnlineSurveysProcessSection from "../components/pages/onlineSurveys/OnlineSurveysProcessSection";
import OnlineSurveysAutomationSection from "../components/pages/onlineSurveys/OnlineSurveysAutomationSection";
import ReportingHeroSection from "../components/pages/reporting/ReportingHeroSection";
import ReportingWhySection from "../components/pages/reporting/ReportingWhySection";
import ReportingDashboardsSection from "../components/pages/reporting/ReportingDashboardsSection";
import ReportingDataGovernanceSection from "../components/pages/reporting/ReportingDataGovernanceSection";

const FinancialMarketPage = () => {
  const customerRef = useRef(null);
  const surveysRef = useRef(null);
  const reportingRef = useRef(null);

  const scrollTo = (ref) => {
    if (!ref?.current) return;
    ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <PageWrapper state="financial-market">
      <Box sx={{ bgcolor: "background.default", color: "text.primary" }}>
        <FinancialMarketHero />
        <FMCustIntroSection />
        <FMProgramsSection />
        <FMChannelsSection />
        <FMInsightsSection />

        <OnlineSurveysHeroSection />
        <OnlineSurveysWhySection />
        <OnlineSurveysProcessSection />
        <OnlineSurveysAutomationSection />

        <ReportingHeroSection />
        <ReportingWhySection />
        <ReportingDashboardsSection />
        <ReportingDataGovernanceSection />
      </Box>
    </PageWrapper>
  );
};

export default FinancialMarketPage;
