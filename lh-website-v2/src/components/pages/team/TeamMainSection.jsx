import React, { useMemo } from "react";
import {
  Box,
  Container,
  Grid,
  Stack,
  Typography,
  Avatar,
  Chip,
  Paper,
  useTheme,
} from "@mui/material";
import { motion, useScroll, useTransform } from "framer-motion";

const MotionDiv = motion.div;

import getTeamSections from "../../../configs/team.configs";
import { useTranslation } from "react-i18next";
import TeamSectionBlock from "./TeamSectionBlock";

const TeamMainSection = () => {
    const theme = useTheme();
          const isDark = theme.palette.mode === "dark";
      const { t, i18n } = useTranslation("team");

  const teamSections = useMemo(
    () => getTeamSections(i18n.language),
    [i18n.language]
  );

      const { scrollY } = useScroll();
      const parallaxY = useTransform(scrollY, [0, 800], [0, 80]);

      const getAccentColor = (accent) => {
    switch (accent) {
      case "primary":
        return theme.palette.primary.main;
      case "secondary":
        return theme.palette.secondary.main;
      case "info":
        return theme.palette.info.main;
      case "success":
        return theme.palette.success.main;
      case "warning":
        return theme.palette.warning.main;
      default:
        return theme.palette.primary.main;
    }
  };

  return (
    <Box
          sx={{
            py: { xs: 5, md: 7 },
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Vertikale Scroll-Lichtspur */}
          <MotionDiv
            style={{
              position: "absolute",
              left: "8%",
              top: -200,
              height: "160%",
              width: 2,
              background:
                "linear-gradient(to bottom, rgba(120,140,255,0.25), transparent)",
              y: parallaxY,
              opacity: isDark ? 0.65 : 0.45,
            }}
          />

          <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
            {/* Intro / Header oben im Body */}
            <Stack
              direction={{ xs: "column", md: "row" }}
              spacing={3}
              alignItems={{ xs: "flex-start", md: "center" }}
              justifyContent="space-between"
              sx={{ mb: 5 }}
            >
              <Stack spacing={1}>
                <Typography variant="overline" sx={{ letterSpacing: 3 }}>
                  {t('main_section.header')}
                </Typography>
                <Typography variant="h5" fontWeight={700}>
                  {t('main_section.title')}
                </Typography>
              </Stack>
            </Stack>

            {/* Alle Team-Sektionen */}
            <Stack spacing={6}>
              {teamSections.map((section, index) => {
                const accentColor = getAccentColor(section.accent);
                const sectionNumber = index + 1;

                return (
                  <TeamSectionBlock
                    key={section.id}
                    section={section}
                    sectionIndex={index}
                    accentColor={accentColor}
                    sectionNumber={sectionNumber}
                    />

                );
              })}
            </Stack>
          </Container>
        </Box>
  )
}

export default TeamMainSection