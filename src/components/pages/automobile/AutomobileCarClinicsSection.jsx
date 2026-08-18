// src/components/pages/automobile/AutomobileCarClinicsSection.jsx
import React from "react";
import { Box, Container, Grid, Stack, Typography, Paper, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

import BarChartIcon from "@mui/icons-material/BarChart";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import TouchAppIcon from "@mui/icons-material/TouchApp";

import PersonSearchIcon from "@mui/icons-material/PersonSearch";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import FactCheckIcon from "@mui/icons-material/FactCheck";

const MotionPaper = motion.create ? motion.create(Paper) : motion(Paper);

const CARD_TILES = [
  { key: "first", icon: <BarChartIcon /> },
  { key: "secound", icon: <DesignServicesIcon /> },
  { key: "third", icon: <VerifiedUserIcon /> },
  { key: "fourth", icon: <TouchAppIcon /> },
];

const CHIP_ICONS = {
  target_recruiting: <PersonSearchIcon fontSize="small" />,
  benchmarking: <CompareArrowsIcon fontSize="small" />,
  senior_execution: <WorkspacePremiumIcon fontSize="small" />,
  reliable_reporting: <FactCheckIcon fontSize="small" />,
};

const AutomobileCarClinicsSection = ({ refProp }) => {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";
  const { t } = useTranslation("automobile");

  const chipsRaw = t("car_clinics.chips", { returnObjects: true });
  const chipEntries =
    chipsRaw && typeof chipsRaw === "object" && !Array.isArray(chipsRaw)
      ? Object.entries(chipsRaw)
      : [];

  return (
    <Box id="car-clinics" ref={refProp} sx={{ py: { xs: 6, md: 8 } }}>
      <Container maxWidth="lg">
        <Stack spacing={1.5} sx={{ alignItems: "center", textAlign: "center", mb: 4 }}>
          <Typography variant="overline" sx={{ letterSpacing: 2, opacity: 0.8 }}>
            {t("car_clinics.header")}
          </Typography>
          <Typography variant="h5" component="h2" sx={{ fontWeight: 700 }}>
            {t("car_clinics.title")}
          </Typography>
          <Typography variant="body1" sx={{ maxWidth: 720 }}>
            {t("car_clinics.paragraph_1")}
          </Typography>
        </Stack>

        <Grid container spacing={4}>
          {CARD_TILES.map((tile) => (
            <Grid key={tile.key} size={{ xs: 12, sm: 6, md: 3 }}>
              <MotionPaper
                whileHover={{ y: -6, boxShadow: 6 }}
                transition={{ type: "spring", stiffness: 260, damping: 18 }}
                sx={{
                  height: "100%",
                  borderRadius: 3,
                  p: 3,
                  textAlign: "center",
                  background: theme.palette.mode === "light" ? "#ffffff" : theme.palette.background.paper,
                  border: isDark ? `1px solid ${theme.palette.divider}` : "none",
                }}
              >
                <Box
                  sx={{
                    width: 48,
                    height: 48,
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mb: 2,
                    mx: "auto",
                    backgroundColor: theme.palette.primary.main,
                    color: theme.palette.primary.contrastText,
                  }}
                >
                  {tile.icon}
                </Box>
                <Typography variant="h6" gutterBottom>
                  {t(`car_clinics.cards.${tile.key}.header`)}
                </Typography>
                <Typography variant="body2">
                  {t(`car_clinics.cards.${tile.key}.content`)}
                </Typography>
              </MotionPaper>
            </Grid>
          ))}
        </Grid>

        {/* Smaller supporting tiles */}
        <Grid container spacing={2} sx={{ mt: { xs: 1, md: 2 } }}>
          {chipEntries.map(([key, label]) => (
            <Grid key={key} size={{ xs: 6, sm: 3 }}>
              <Paper
                sx={{
                  borderRadius: 2,
                  p: 2,
                  display: "flex",
                  alignItems: "center",
                  gap: 1.5,
                  background: theme.palette.mode === "light" ? "#ffffff" : theme.palette.background.paper,
                  border: `1px solid ${theme.palette.divider}`,
                }}
              >
                <Box
                  sx={{
                    width: 32,
                    height: 32,
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    backgroundColor: theme.palette.secondary.main,
                    color: theme.palette.secondary.contrastText,
                  }}
                >
                  {CHIP_ICONS[key]}
                </Box>
                <Typography variant="body2" sx={{ fontWeight: 600 }}>
                  {label}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default AutomobileCarClinicsSection;
