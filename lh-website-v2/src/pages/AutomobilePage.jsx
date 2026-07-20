// src/pages/AutomobilePage.jsx
import React, { useEffect, useRef } from "react";
import {
  Box,
  Container,
  Stack,
  Typography,
  Chip,
  Button,
  useTheme,
} from "@mui/material";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

import DirectionsCarFilledIcon from "@mui/icons-material/DirectionsCarFilled";
import PublicIcon from "@mui/icons-material/Public";
import InsightsIcon from "@mui/icons-material/Insights";

import PageWrapper from "../components/common/PageWrapper";
import GlowingLinesBackground from "../components/common/GlowingLinesBackground";
import HeroSection from "../components/common/HeroSection";

import AutomobilePerformanceSection from "../components/pages/automobile/AutomobilePerformanceSection";
import AutomobileCustomersSection from "../components/pages/automobile/AutomobileCustomersSection";
import AutomobileMethodsSection from "../components/pages/automobile/AutomobileMethodsSection";
import AutomobileCarClinicsSection from "../components/pages/automobile/AutomobileCarClinicsSection";

const MotionBox = motion.create ? motion.create(Box) : motion(Box);

const AutomobilePage = ({ section, state = "automobile" }) => {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";
  const { t } = useTranslation("automobile");

  const performanceRef = useRef(null);
  const customersRef = useRef(null);
  const methodsRef = useRef(null);
  const carClinicsRef = useRef(null);

  const scrollTo = (ref) => {
    if (!ref?.current) return;
    ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  useEffect(() => {
    if (!section) return;

    const sectionRefs = {
      performance: performanceRef,
      customers: customersRef,
      methods: methodsRef,
      "car-clinics": carClinicsRef,
    };

    const ref = sectionRefs[section];
    if (!ref) return;

    // PageWrapper scrolls to top on mount, so jump to the section shortly after
    const timer = setTimeout(() => {
      ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);

    return () => clearTimeout(timer);
  }, [section]);

  const navButtonSx = {
    borderRadius: "999px",
    px: 2,
    py: 1.2,
    fontWeight: 600,
    border: isDark
      ? "1px solid rgba(255,255,255,0.4)"
      : "1px solid rgba(0,0,0,0.2)",
    color: isDark ? "common.white" : theme.palette.text.primary,
    "&:hover": {
      borderColor: isDark ? "rgba(255,255,255,0.8)" : "rgba(0,0,0,0.5)",
      backgroundColor: isDark
        ? "rgba(255,255,255,0.04)"
        : "rgba(0,0,0,0.03)",
    },
  };

  return (
    <PageWrapper state={state}>
      <Box sx={{ bgcolor: "background.default", color: "text.primary" }}>
        <HeroSection backgroundUrl="/wallpapers/automotiv_hero.avif" big>
          <MotionBox
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            sx={{ position: "relative", width: "100%" }}
          >
            {/* Decorative bubbles */}
            <MotionBox
              aria-hidden
              initial={{ opacity: 0.3, x: -40, y: -10, scale: 0.8 }}
              animate={{ opacity: 0.6, x: -10, y: -5, scale: 1 }}
              transition={{
                duration: 8,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
              sx={{
                position: "absolute",
                top: -40,
                left: -30,
                width: 160,
                height: 160,
                borderRadius: "50%",
                background: isDark
                  ? "radial-gradient(circle at 30% 30%, rgba(0,0,0,0.7), transparent 60%)"
                  : "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.9), transparent 60%)",
                filter: "blur(2px)",
                pointerEvents: "none",
              }}
            />
            <MotionBox
              aria-hidden
              initial={{ opacity: 0.2, x: 40, y: 20, scale: 0.8 }}
              animate={{ opacity: 0.5, x: 20, y: 0, scale: 1 }}
              transition={{
                duration: 10,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
              sx={{
                position: "absolute",
                bottom: -60,
                right: -10,
                width: 210,
                height: 210,
                borderRadius: "50%",
                background: isDark
                  ? "radial-gradient(circle at 70% 70%, rgba(0,0,0,0.65), transparent 60%)"
                  : "radial-gradient(circle at 70% 70%, rgba(255,255,255,0.7), transparent 60%)",
                filter: "blur(3px)",
                pointerEvents: "none",
              }}
            />

            <Container
              maxWidth="lg"
              sx={{
                position: "relative",
                zIndex: 1,
                display: "flex",
                justifyContent: "flex-start",
              }}
            >
              <Stack
                spacing={2}
                maxWidth={720}
                sx={{
                  mt: { xs: 4, md: 6, lg: 8 },
                  textAlign: "left",
                  alignItems: "flex-start",
                }}
              >
                <Typography
                  variant="overline"
                  sx={{ letterSpacing: 3, opacity: 0.9 }}
                >
                  {t("hero.overline")}
                </Typography>
                <Typography variant="h4" component="h1" fontWeight={700}>
                  {t("hero.title")}
                </Typography>
                <Typography variant="body1" sx={{ maxWidth: 560 }}>
                  {t("hero.subtitle")}
                </Typography>

                <Stack direction="row" spacing={1.5} mt={1} flexWrap="wrap">
                  <Chip
                    icon={<DirectionsCarFilledIcon />}
                    label={t("hero.chips.automotive_focus")}
                    size="small"
                    color="secondary"
                    variant="filled"
                  />
                  <Chip
                    icon={<PublicIcon />}
                    label={t("hero.chips.international")}
                    size="small"
                    variant="outlined"
                  />
                  <Chip
                    icon={<InsightsIcon />}
                    label={t("hero.chips.full_service")}
                    size="small"
                    variant="outlined"
                  />
                </Stack>

                <Stack
                  direction="row"
                  spacing={1.5}
                  mt={2}
                  flexWrap="wrap"
                  rowGap={1.5}
                >
                  <Button
                    variant="text"
                    sx={navButtonSx}
                    onClick={() => scrollTo(carClinicsRef)}
                  >
                    {t("hero.buttons.car_clinics")}
                  </Button>

                  <Button
                    variant="text"
                    sx={navButtonSx}
                    onClick={() => scrollTo(performanceRef)}
                  >
                    {t("hero.buttons.performance")}
                  </Button>

                  <Button
                    variant="text"
                    sx={navButtonSx}
                    onClick={() => scrollTo(customersRef)}
                  >
                    {t("hero.buttons.customers")}
                  </Button>

                  <Button
                    variant="text"
                    sx={navButtonSx}
                    onClick={() => scrollTo(methodsRef)}
                  >
                    {t("hero.buttons.methods")}
                  </Button>
                </Stack>
              </Stack>
            </Container>
          </MotionBox>
        </HeroSection>

        <Box sx={{ position: "relative" }}>
          <GlowingLinesBackground count={5} infront={false} />

          <Box sx={{ position: "relative", zIndex: 1 }}>
            <AutomobilePerformanceSection refProp={performanceRef} />
            <AutomobileCustomersSection refProp={customersRef} />
            <AutomobileMethodsSection refProp={methodsRef} />
            <AutomobileCarClinicsSection refProp={carClinicsRef} />
          </Box>
        </Box>
      </Box>
    </PageWrapper>
  );
};

export default AutomobilePage;
