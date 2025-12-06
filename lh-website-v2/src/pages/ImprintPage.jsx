// src/pages/ImprintPage.jsx
import React from "react";
import {
  Box,
  Container,
  Grid,
  Stack,
  Typography,
  Paper,
  Divider,
  Chip,
  useTheme,
} from "@mui/material";

import PageWrapper from "../components/common/PageWrapper";
import ParallaxClouds from "../components/common/ParallaxClouds";
import ImprintHeroSection from "../components/pages/imprint/ImprintHero";
import ImprintMainPart from "../components/pages/imprint/ImprintMainPart";
import ImprintFacts from "../components/pages/imprint/ImprintFacts";


const ImprintPage = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  return (
      <Box sx={{ bgcolor: "background.default", color: "text.primary" }}>
        {/* ===== HERO ===== */}
        <ImprintHeroSection />

        {/* ===== CONTENT ===== */}
        <Box sx={{ position: "relative" }}>
          {/* Parallax Clouds im Hintergrund */}
          <ParallaxClouds theme={theme} count={5} infront={false} />

          <Box sx={{ py: { xs: 5, md: 7 }, zIndex: 1 }}>
            <Container maxWidth="lg">
              <Grid container spacing={4} alignItems="flex-start">
                {/* Linke Seite – Haupttexte */}
                <ImprintMainPart />

                {/* Rechte Seite – "At a glance" / kleine Facts */}
                <ImprintFacts />
              </Grid>
            </Container>
          </Box>
        </Box>
      </Box>
  );
};

export default ImprintPage;
