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

import GroupsIcon from "@mui/icons-material/Groups";
import LeaderboardIcon from "@mui/icons-material/Leaderboard";
import ManageSearchIcon from "@mui/icons-material/ManageSearch";

const MotionPaper = motion.create ? motion.create(Paper) : motion(Paper);
const MotionBox = motion.create ? motion.create(Box) : motion(Box);

const ReportingDashboardsSection = ({ refProp }) => {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  const modes = [
    {
      id: "overview",
      label: "Management overview",
      chip: "High-level view",
      intro:
        "At overview level, standard KPIs and trends are shown in a compact way, so management can see status and direction at a glance.",
      cards: [
        "Executive dashboards with a small set of core KPIs.",
        "Time series views for tracking movements over multiple waves.",
        "Traffic-light indicators for targets and thresholds.",
      ],
    },
    {
      id: "detail",
      label: "Expert detail view",
      chip: "Drill-down",
      intro:
        "Detail views allow experts to filter by segment, time, product and channel, while keeping definitions and filters transparent.",
      cards: [
        "Flexible filters for markets, products, segments and time.",
        "Drill-down from total to specific sub-groups or questions.",
        "Download options for detailed tables and microdata extracts.",
      ],
    },
    {
      id: "local",
      label: "Local & branch view",
      chip: "Operational view",
      intro:
        "Branch and local views highlight what is relevant locally, comparing each unit to benchmarks so teams can steer concretely.",
      cards: [
        "Simple dashboards for non-analysts with only a few KPIs.",
        "Comparison to network average and predefined peer-groups.",
        "Optional comment and action fields for local follow-up.",
      ],
    },
  ];

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
            Dashboard views
          </Typography>
          <Typography variant="h5" fontWeight={700}>
            Tailored reporting for different user groups.
          </Typography>
          <Typography
            variant="body2"
            sx={{ maxWidth: 760, mx: "auto", opacity: 0.9 }}
          >
            The same underlying data can be presented very differently,
            depending on whether you are steering at board level, analysing
            details or running a local team.
          </Typography>
        </Stack>

        <Grid container spacing={4} alignItems="flex-start">
          {/* Left: Mode selector + explanation */}
          <Grid item xs={12} md={5}>
            <Stack spacing={2}>
              <Typography variant="subtitle2" sx={{ opacity: 0.85 }}>
                Choose your view
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
                Toggle between different dashboard types to see how the same
                underlying data can support board-level steering, expert
                analysis and local management.
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
