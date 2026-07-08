// src/components/pages/onlineSurveys/OnlineSurveysAutomationSection.jsx
import React, { useState } from "react";
import {
  Box,
  Container,
  Grid,
  Stack,
  Typography,
  Paper,
  Chip,
  useTheme,
} from "@mui/material";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

import AutoModeIcon from "@mui/icons-material/AutoMode";
import LanIcon from "@mui/icons-material/Lan";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";

const MotionPaper = motion.create ? motion.create(Paper) : motion(Paper);

const OnlineSurveysAutomationSection = ({ refProp }) => {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";
  const { t } = useTranslation("online_surveys");

  const modeIds = ["automation", "integration", "alerts"];
  const modeIcons = [<AutoModeIcon />, <LanIcon />, <WarningAmberIcon />];
  const modes = t("automation.modes", { returnObjects: true }).map(
    (mode, idx) => ({
      id: modeIds[idx],
      icon: modeIcons[idx],
      ...mode,
    })
  );

  const [activeMode, setActiveMode] = useState("automation");
  const active = modes.find((m) => m.id === activeMode) ?? modes[0];

  return (
    <Box
      ref={refProp}
      sx={{
        py: { xs: 5, md: 7 },
        borderTop: "1px solid",
        borderColor: theme.palette.divider,
      }}
    >
      <Container maxWidth="lg">
        <Stack spacing={1.5} mb={4} alignItems="center" textAlign="center">
          <Typography variant="overline" sx={{ letterSpacing: 3 }}>
            {t("automation.overline")}
          </Typography>
          <Typography variant="h5" fontWeight={700}>
            {t("automation.title")}
          </Typography>
          <Typography
            variant="body2"
            sx={{ maxWidth: 760, mx: "auto", opacity: 0.9 }}
          >
            {t("automation.content")}
          </Typography>
        </Stack>

        <Grid container spacing={4} alignItems="center">
          {/* Left: Mode-Selector */}
          <Grid item xs={12} md={5}>
            <Stack spacing={2}>
              <Typography variant="subtitle2" sx={{ opacity: 0.85 }}>
                {t("automation.focus_label")}
              </Typography>
              <Stack direction="row" spacing={1} flexWrap="wrap">
                {modes.map((mode) => {
                  const activeChip = mode.id === activeMode;
                  return (
                    <motion.div
                      key={mode.id}
                      whileHover={{ y: -2, scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                    >
                      <Chip
                        label={mode.label}
                        size="small"
                        clickable
                        onClick={() => setActiveMode(mode.id)}
                        color={activeChip ? "primary" : "default"}
                        variant={activeChip ? "filled" : "outlined"}
                        sx={{ borderRadius: 999, mr: 0.5, mb: 0.5 }}
                      />
                    </motion.div>
                  );
                })}
              </Stack>

              <Typography variant="body2" sx={{ opacity: 0.9 }}>
                {t("automation.toggle_hint")}
              </Typography>

              <Chip
                label={t("automation.current_focus", { label: active.label })}
                size="small"
                sx={{ alignSelf: "flex-start", mt: 1, borderRadius: 999 }}
              />
            </Stack>
          </Grid>

          {/* Right: Active Mode Card */}
          <Grid item xs={12} md={7}>
            <MotionPaper
              key={active.id}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              sx={{
                borderRadius: 3,
                p: 3,
                position: "relative",
                overflow: "hidden",
                border: `1px solid ${
                  isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)"
                }`,
              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  inset: 0,
                  opacity: 0.05,
                  background:
                    "radial-gradient(circle at top right, #5564b5, transparent 55%)",
                  pointerEvents: "none",
                }}
              />
              <Stack spacing={1.5} position="relative" zIndex={1}>
                <Box
                  sx={{
                    width: 40,
                    height: 40,
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    bgcolor: isDark
                      ? "rgba(255,255,255,0.06)"
                      : "rgba(0,0,0,0.04)",
                  }}
                >
                  {active.icon}
                </Box>
                <Typography variant="subtitle1" fontWeight={700}>
                  {active.headline}
                </Typography>
                <Typography variant="body2" sx={{ opacity: 0.9 }}>
                  {active.text}
                </Typography>

                <Stack component="ul" spacing={0.5} sx={{ pl: 2, mt: 1 }}>
                  {active.bullets.map((b) => (
                    <Typography
                      key={b}
                      component="li"
                      variant="body2"
                      sx={{ opacity: 0.9 }}
                    >
                      {b}
                    </Typography>
                  ))}
                </Stack>

                <Chip
                  label={active.tag}
                  size="small"
                  variant="outlined"
                  sx={{ alignSelf: "flex-start", mt: 1 }}
                />
              </Stack>
            </MotionPaper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default OnlineSurveysAutomationSection;
