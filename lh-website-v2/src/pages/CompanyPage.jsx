// src/pages/CompanyPage.jsx
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

import QueryStatsIcon from "@mui/icons-material/QueryStats";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import PublicIcon from "@mui/icons-material/Public";

import PageWrapper from "../components/common/PageWrapper";
import GlowingLinesBackground from "../components/common/GlowingLinesBackground";
import HeroSection from "../components/common/HeroSection";

import CompanyFlexibilitySection from "../components/pages/company/CompanyFlexibilitySection";
import CompanySpecialisationSection from "../components/pages/company/CompanySpecialisationSection";
import CompanyInternationalitySection from "../components/pages/company/CompanyInternationalitySection";

const MotionBox = motion.create ? motion.create(Box) : motion(Box);

const CompanyPage = ({ section, state = "company" }) => {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";
  const { t } = useTranslation("company");

  const flexibilityRef = useRef(null);
  const specialisationRef = useRef(null);
  const internationalityRef = useRef(null);

  const scrollTo = (ref) => {
    if (!ref?.current) return;
    ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  useEffect(() => {
    if (!section) return undefined;

    const sectionRefs = {
      flexibility: flexibilityRef,
      specializations: specialisationRef,
      internationality: internationalityRef,
    };

    const targetRef = sectionRefs[section];
    if (!targetRef) return undefined;

    // PageWrapper scrolls to top on mount – wait a tick before jumping.
    const timer = setTimeout(() => {
      targetRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);

    return () => clearTimeout(timer);
  }, [section]);

  return (
    <PageWrapper state={state}>
      <Box sx={{ bgcolor: "background.default", color: "text.primary" }}>
        <HeroSection backgroundUrl="/wallpapers/home_hero.avif" big>
          <MotionBox
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            sx={{ position: "relative", width: "100%" }}
          >
            {/* Deko-Bubbles */}
            <MotionBox
              aria-hidden
              initial={{ opacity: 0.25, x: -60, y: -30, scale: 0.85 }}
              animate={{ opacity: 0.6, x: -20, y: -10, scale: 1 }}
              transition={{
                duration: 10,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
              sx={{
                position: "absolute",
                top: -40,
                left: -40,
                width: 180,
                height: 180,
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
              animate={{ opacity: 0.5, x: 10, y: 0, scale: 1 }}
              transition={{
                duration: 12,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
              sx={{
                position: "absolute",
                bottom: -50,
                right: -20,
                width: 220,
                height: 220,
                borderRadius: "50%",
                background: isDark
                  ? "radial-gradient(circle at 70% 70%, rgba(0,0,0,0.65), transparent 60%)"
                  : "radial-gradient(circle at 70% 70%, rgba(255,255,255,0.8), transparent 60%)",
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
                  {t("hero.header")}
                </Typography>
                <Typography variant="h4" component="h1" fontWeight={700}>
                  {t("hero.title")}
                </Typography>
                <Typography variant="body1" sx={{ maxWidth: 560 }}>
                  {t("hero.subtitle")}
                </Typography>

                <Stack direction="row" spacing={1.5} mt={1} flexWrap="wrap">
                  <Chip
                    icon={<QueryStatsIcon />}
                    label={t("hero.chips.full_service")}
                    size="small"
                    color="secondary"
                    variant="filled"
                  />
                  <Chip
                    icon={<DirectionsCarIcon />}
                    label={t("hero.chips.automotive_finance")}
                    size="small"
                    variant="outlined"
                  />
                  <Chip
                    icon={<PublicIcon />}
                    label={t("hero.chips.international_reach")}
                    size="small"
                    variant="outlined"
                  />
                </Stack>

                <Stack direction="row" spacing={1.5} mt={2} flexWrap="wrap">
                  <Button
                    variant="text"
                    sx={{
                      borderRadius: "999px",
                      px: 2,
                      py: 1.2,
                      fontWeight: 600,
                      border: isDark
                        ? "1px solid rgba(255,255,255,0.4)"
                        : "1px solid rgba(0,0,0,0.2)",
                      color: isDark ? "common.white" : theme.palette.text.primary,
                      "&:hover": {
                        borderColor: isDark
                          ? "rgba(255,255,255,0.8)"
                          : "rgba(0,0,0,0.5)",
                        backgroundColor: isDark
                          ? "rgba(255,255,255,0.04)"
                          : "rgba(0,0,0,0.03)",
                      },
                    }}
                    onClick={() => scrollTo(flexibilityRef)}
                  >
                    {t("hero.buttons.flexibility")}
                  </Button>

                  <Button
                    variant="text"
                    sx={{
                      borderRadius: "999px",
                      px: 2,
                      py: 1.2,
                      fontWeight: 600,
                      border: isDark
                        ? "1px solid rgba(255,255,255,0.4)"
                        : "1px solid rgba(0,0,0,0.2)",
                      color: isDark ? "common.white" : theme.palette.text.primary,
                      "&:hover": {
                        borderColor: isDark
                          ? "rgba(255,255,255,0.8)"
                          : "rgba(0,0,0,0.5)",
                        backgroundColor: isDark
                          ? "rgba(255,255,255,0.04)"
                          : "rgba(0,0,0,0.03)",
                      },
                    }}
                    onClick={() => scrollTo(specialisationRef)}
                  >
                    {t("hero.buttons.specialisation")}
                  </Button>

                  <Button
                    variant="text"
                    sx={{
                      borderRadius: "999px",
                      px: 2,
                      py: 1.2,
                      fontWeight: 600,
                      border: isDark
                        ? "1px solid rgba(255,255,255,0.4)"
                        : "1px solid rgba(0,0,0,0.2)",
                      color: isDark ? "common.white" : theme.palette.text.primary,
                      "&:hover": {
                        borderColor: isDark
                          ? "rgba(255,255,255,0.8)"
                          : "rgba(0,0,0,0.5)",
                        backgroundColor: isDark
                          ? "rgba(255,255,255,0.04)"
                          : "rgba(0,0,0,0.03)",
                      },
                    }}
                    onClick={() => scrollTo(internationalityRef)}
                  >
                    {t("hero.buttons.internationality")}
                  </Button>
                </Stack>
              </Stack>
            </Container>
          </MotionBox>
        </HeroSection>

        <Box sx={{ position: "relative" }}>
          <GlowingLinesBackground count={5} infront={false} />

          <Box sx={{ position: "relative", zIndex: 1 }}>
            <CompanyFlexibilitySection refProp={flexibilityRef} />
            <CompanySpecialisationSection refProp={specialisationRef} />
            <CompanyInternationalitySection refProp={internationalityRef} />
          </Box>
        </Box>
      </Box>
    </PageWrapper>
  );
};

export default CompanyPage;
