// src/components/pages/reporting/ReportingDashboardsSection.jsx
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

import GroupsIcon from "@mui/icons-material/Groups";
import LeaderboardIcon from "@mui/icons-material/Leaderboard";
import ManageSearchIcon from "@mui/icons-material/ManageSearch";

const MotionPaper = motion.create ? motion.create(Paper) : motion(Paper);
const MotionBox = motion.create ? motion.create(Box) : motion(Box);

const ReportingDashboardsSection = ({ refProp }) => {
  const { t } = useTranslation("reporting");
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  const modeIds = ["overview", "detail", "local"];
  const modes = t("dashboards_section.modes", { returnObjects: true }).map(
    (m, idx) => ({ ...m, id: modeIds[idx] })
  );

  const [mode, setMode] = useState("overview");
  const active = modes.find((m) => m.id === mode) ?? modes[0];

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
        <Stack
          spacing={1.5}
          mb={4}
          alignItems="center"
          textAlign="center"
        >
          <Typography variant="overline" sx={{ letterSpacing: 3 }}>
            {t("dashboards_section.header")}
          </Typography>
          <Typography variant="h5" fontWeight={700}>
            {t("dashboards_section.title")}
          </Typography>
          <Typography
            variant="body2"
            sx={{ maxWidth: 760, mx: "auto", opacity: 0.9 }}
          >
            {t("dashboards_section.subtitle")}
          </Typography>
        </Stack>

        <Grid container spacing={4} alignItems="flex-start">
          {/* Left: Mode selector + explanation */}
          <Grid item xs={12} md={5}>
            <Stack spacing={2}>
              <Typography variant="subtitle2" sx={{ opacity: 0.85 }}>
                {t("dashboards_section.choose_view")}
              </Typography>

              <Stack direction="row" spacing={1} flexWrap="wrap">
                {modes.map((m) => {
                  const activeChip = m.id === mode;
                  return (
                    <motion.div
                      key={m.id}
                      whileHover={{ y: -2, scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                    >
                      <Chip
                        label={m.label}
                        size="small"
                        clickable
                        onClick={() => setMode(m.id)}
                        color={activeChip ? "primary" : "default"}
                        variant={activeChip ? "filled" : "outlined"}
                        sx={{ borderRadius: 999, mr: 0.5, mb: 0.5 }}
                      />
                    </motion.div>
                  );
                })}
              </Stack>

              <Typography variant="body2" sx={{ opacity: 0.9 }}>
                {t("dashboards_section.toggle_hint")}
              </Typography>

              <Chip
                label={active.chip}
                size="small"
                sx={{ alignSelf: "flex-start", mt: 1, borderRadius: 999 }}
              />
            </Stack>
          </Grid>

          {/* Right: Cards visualising the active mode */}
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

              <Stack spacing={2} position="relative" zIndex={1}>
                <Stack direction="row" spacing={1.5} alignItems="center">
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
                    {mode === "overview" && <LeaderboardIcon />}
                    {mode === "detail" && <ManageSearchIcon />}
                    {mode === "local" && <GroupsIcon />}
                  </Box>
                  <Typography variant="subtitle1" fontWeight={700}>
                    {active.label}
                  </Typography>
                </Stack>

                <Typography variant="body2" sx={{ opacity: 0.95 }}>
                  {active.intro}
                </Typography>

                <Grid container spacing={2} sx={{ mt: 0.5 }}>
                  {active.cards.map((text, idx) => (
                    <Grid item xs={12} sm={6} key={idx}>
                      <MotionBox
                        whileHover={{
                          y: -3,
                          boxShadow: isDark
                            ? "0 14px 32px rgba(0,0,0,0.85)"
                            : "0 12px 28px rgba(80,100,160,0.4)",
                        }}
                        transition={{ type: "spring", stiffness: 220, damping: 18 }}
                        sx={{
                          borderRadius: 3,
                          p: 2,
                          height: "100%",
                          background: isDark
                            ? "linear-gradient(135deg, #181a24, #252a3b)"
                            : "linear-gradient(135deg, #ffffff, #f3f5ff)",
                          border: `1px solid ${
                            isDark
                              ? "rgba(140,160,240,0.3)"
                              : "rgba(90,110,190,0.25)"
                          }`,
                        }}
                      >
                        <Typography
                          variant="body2"
                          sx={{ opacity: 0.95, fontSize: "0.9rem" }}
                        >
                          {text}
                        </Typography>
                      </MotionBox>
                    </Grid>
                  ))}
                </Grid>
              </Stack>
            </MotionPaper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ReportingDashboardsSection;
