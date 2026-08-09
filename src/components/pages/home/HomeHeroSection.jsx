// src/components/pages/home/HomeHeroSection.jsx
import React from "react";
import { Box, Container, Stack, Typography, Button, Grid, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import { Link as RouterLink } from "react-router";
import HeroSection from "../../common/HeroSection";
import { useTranslation } from "react-i18next";

const MotionBox = motion.create ? motion.create(Box) : motion(Box);

const HomeHeroSection = () => {
  const theme = useTheme();
  const { t } = useTranslation("home");

  return (
    <HeroSection backgroundUrl={"/wallpapers/home_hero.avif"} big>
      <MotionBox
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        sx={{
          position: "relative",
          width: "100%",
        }}
      >
        {/* Soft glowing orb im Hintergrund */}
        <MotionBox
          aria-hidden
          initial={{ opacity: 0.15, scale: 0.9, x: 120, y: -80 }}
          animate={{ opacity: 0.4, scale: 1, x: 80, y: -40 }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
          sx={{
            position: "absolute",
            right: { xs: "-5%", md: "-10%" },
            top: { xs: "-10%", md: "-20%" },
            width: 320,
            height: 320,
            borderRadius: "50%",
            background: `radial-gradient(circle at 30% 30%, ${theme.palette.primary.main}, transparent 60%)`,
            filter: "blur(2px)",
            pointerEvents: "none",
          }}
        />

        <Container
          maxWidth="lg"
          sx={{
            textAlign: "left",
          }}
        >
          <Grid container spacing={6} sx={{ alignItems: "center" }}>
            {/* Left: Text */}
            <Grid size={{ xs: 12, md: 6 }}>
              <Stack spacing={3} sx={{ mt: { xs: 8, sm: 4, md: 0 } }}>
                <Typography
                  variant="overline"
                  sx={{
                    letterSpacing: 2,
                    color: theme.palette.secondary.main,
                  }}
                >
                  {t("hero_section.header")}
                </Typography>

                <Typography
                  variant="h3"
                  component="h1"
                  sx={{
                    fontWeight: 700,
                    lineHeight: 1.1,
                  }}
                >
                  {t("hero_section.title")}
                </Typography>

                <Typography variant="body1" sx={{ maxWidth: 520 }}>
                  {t("hero_section.content")}
                </Typography>

                <Stack direction="row" spacing={2} sx={{ alignItems: "center" }}>
                  <Button
                    variant="contained"
                    color="secondary"
                    component={RouterLink}
                    to="/financial-markets"
                    sx={{
                      borderRadius: "999px",
                      px: 3,
                      py: 1.2,
                      fontWeight: 600,
                    }}
                  >
                    {t("hero_section.buttons.get_in_touch")}
                  </Button>
                </Stack>
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </MotionBox>
    </HeroSection>
  );
};

export default HomeHeroSection;
