import React, { useEffect } from "react";
import { Box } from "@mui/material";
import { useLocation } from "react-router";
import PageWrapper from "../components/common/PageWrapper";

import FinancialMarketHero from "../components/pages/financialMarket/FinancialMarketHero";
import FinancialMarketApproachSection from "../components/pages/financialMarket/FinancialMarketApproachSection";
import FinancialMarketWebQuestionaireSection from "../components/pages/financialMarket/FinancialMarketWebQuestionaireSection";
import FinancialMarketReportingSystemsSection from "../components/pages/financialMarket/FinancialMarketReportingSystemsSection";
import GlowingLinesBackground from "../components/common/GlowingLinesBackground";

const FinancialMarketPage = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;
    const el = document.getElementById(hash.slice(1));
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [hash]);

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
