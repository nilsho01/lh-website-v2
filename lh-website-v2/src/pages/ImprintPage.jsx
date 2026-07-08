// src/pages/ImprintPage.jsx
import {
  Box,
  Container,
  Grid,
} from "@mui/material";

import ParallaxClouds from "../components/common/ParallaxClouds";
import ImprintHeroSection from "../components/pages/imprint/ImprintHero";
import ImprintMainPart from "../components/pages/imprint/ImprintMainPart";
import ImprintFacts from "../components/pages/imprint/ImprintFacts";


const ImprintPage = () => {
  return (
      <Box sx={{ bgcolor: "background.default", color: "text.primary" }}>
        {/* ===== HERO ===== */}
        <ImprintHeroSection />

        {/* ===== CONTENT ===== */}
        <Box sx={{ position: "relative" }}>
          {/* Parallax Clouds im Hintergrund */}
          <ParallaxClouds count={5} infront={false} />

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
