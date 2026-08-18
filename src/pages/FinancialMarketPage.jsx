import React from "react";
import { Box } from "@mui/material";
import PageWrapper from "../components/common/PageWrapper";

import FinancialMarketHero from "../components/pages/financialMarket/FinancialMarketHero";
import FinancialMarketApproachSection from "../components/pages/financialMarket/FinancialMarketApproachSection";
import FinancialMarketWebQuestionaireSection from "../components/pages/financialMarket/FinancialMarketWebQuestionaireSection";
import FinancialMarketReportingSystemsSection from "../components/pages/financialMarket/FinancialMarketReportingSystemsSection";
import GlowingLinesBackground from "../components/common/GlowingLinesBackground";

const FinancialMarketPage = () => {
  return (
    <PageWrapper state="financial-market">
      <Box sx={{ bgcolor: "background.default", color: "text.primary" }}>

        <FinancialMarketHero />

        <Box sx={{ position: "relative" }}>
          <GlowingLinesBackground count={8} infront={false} />

          <Box sx={{ position: "relative", zIndex: 1 }}>
            <FinancialMarketApproachSection />
            <FinancialMarketWebQuestionaireSection />
            <FinancialMarketReportingSystemsSection />
          </Box>
        </Box>

      </Box>
    </PageWrapper>
  );
};

export default FinancialMarketPage;
