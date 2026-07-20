import React, { useRef } from "react";
import { Box, Container, Stack, Typography, Button, useTheme } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useTranslation } from "react-i18next";
import PageWrapper from "../components/common/PageWrapper";

import FinancialMarketHero from "../components/pages/financialMarket/FinancialMarketHero";
import FMCustIntroSection from "../components/pages/financialMarket/FinancialMarketCustomerIntroSection";
import FMProgramsSection from "../components/pages/financialMarket/FinancialMarketProgramsSection";
import GlowingLinesBackground from "../components/common/GlowingLinesBackground";

const FMTeaserSection = ({ refProp, overline, title, content, linkTo }) => {
  const theme = useTheme();
  const { t } = useTranslation("general");

  return (
    <Box
      ref={refProp}
      sx={{
        py: { xs: 5, md: 7 },
        borderTop: "1px solid",
        borderColor: theme.palette.divider,
      }}
    >
      <Container maxWidth="md">
        <Stack spacing={2} alignItems="center" textAlign="center">
          <Typography variant="overline" sx={{ letterSpacing: 3 }}>
            {overline}
          </Typography>
          <Typography variant="h5" fontWeight={700}>
            {title}
          </Typography>
          <Typography variant="body2" sx={{ opacity: 0.9, maxWidth: 680 }}>
            {content}
          </Typography>
          <Button
            component={RouterLink}
            to={linkTo}
            variant="outlined"
            color="secondary"
            endIcon={<ArrowForwardIcon />}
            sx={{ borderRadius: 999, px: 3, py: 1, mt: 1, fontWeight: 600 }}
          >
            {t("general.learn_more")}
          </Button>
        </Stack>
      </Container>
    </Box>
  );
};

const FinancialMarketPage = () => {
  const { t: tSurveys } = useTranslation("online_surveys");
  const { t: tReporting } = useTranslation("reporting");

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

        <FinancialMarketHero
          onJumpCostumers={() => scrollTo(customerRef)}
          onJumpSurveys={() => scrollTo(surveysRef)}
          onJumpReporting={() => scrollTo(reportingRef)}
        />

        <Box ref={customerRef} sx={{ position: "relative" }}>
          <GlowingLinesBackground count={8} infront={false} fullPage />

          <Box sx={{ position: "relative", zIndex: 1 }}>
            <FMCustIntroSection />
            <FMProgramsSection />
          </Box>
        </Box>

        <FMTeaserSection
          refProp={surveysRef}
          overline={tSurveys("hero.overline")}
          title={tSurveys("hero.title")}
          content={tSurveys("hero.content")}
          linkTo="/finanzmarket/online-surveys"
        />

        <FMTeaserSection
          refProp={reportingRef}
          overline={tReporting("hero_section.header")}
          title={tReporting("hero_section.title")}
          content={tReporting("hero_section.content")}
          linkTo="/finanzmarket/reporting-system"
        />

      </Box>
    </PageWrapper>
  );
};

export default FinancialMarketPage;
