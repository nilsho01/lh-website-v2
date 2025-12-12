// src/components/pages/financial/FMCustInsightsSection.jsx
import React from "react";
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

import DatasetIcon from "@mui/icons-material/Dataset";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";

const MotionPaper = motion.create ? motion.create(Paper) : motion(Paper);

const FMCustInsightsSection = ({ refProp }) => {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  const steps = [
    {
      id: "foundations",
      label: "01",
      icon: <DatasetIcon />,
      title: "Data foundations",
      desc: "Clean survey data, harmonised time series and robust weighting so trends are real and comparable between segments.",
      extra:
        "We define which KPIs are central, which are supporting, and how they are documented across studies.",
      chip: "Methodology",
    },
    {
      id: "dashboards",
      label: "02",
      icon: <DashboardIcon />,
      title: "Dashboards & alerts",
      desc: "Role-based dashboards for management, branches and call centres, plus alerts when critical indicators drop.",
      extra:
        "Standard figures are scheduled, while flexible filters allow exploration of sub-groups on demand.",
      chip: "Reporting",
    },
    {
      id: "story",
      label: "03",
      icon: <PlayCircleOutlineIcon />,
      title: "Storytelling & action",
      desc: "Management summaries, workshops and playbooks that translate findings into concrete actions for teams.",
      extra:
        "We write and visualise results so that your teams can work with them without needing a statistician at their side.",
      chip: "Activation",
    },
  ];

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
            From data to insight
          </Typography>
          <Typography variant="h5" fontWeight={700}>
            Reporting that supports decisions, not just slides.
          </Typography>
          <Typography
            variant="body2"
            sx={{ maxWidth: 760, mx: "auto", opacity: 0.9 }}
          >
            We design reporting environments where satisfaction scores live
            alongside your financial KPIs. The result: management views for
            steering, and operational views for teams.
          </Typography>
        </Stack>

        <Grid container spacing={3}>
          {steps.map((step, idx) => (
            <Grid item xs={12} md={4} key={step.id}>
              <MotionPaper
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                whileHover={{ y: -4, scale: 1.01 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                sx={{
                  borderRadius: 3,
                  p: 3,
                  height: "100%",
                  position: "relative",
                  overflow: "hidden",
                  border: `1px solid ${
                    isDark
                      ? "rgba(255,255,255,0.06)"
                      : "rgba(0,0,0,0.06)"
                  }`,
                }}
              >
                <Box
                  sx={{
                    position: "absolute",
                    inset: 0,
                    opacity: 0.05,
                    background:
                      "radial-gradient(circle at bottom right, #5564b5, transparent 55%)",
                    pointerEvents: "none",
                  }}
                />
                <Stack spacing={1.5} position="relative" zIndex={1}>
                  <Typography
                    variant="overline"
                    sx={{ letterSpacing: 2, opacity: 0.8 }}
                  >
                    {step.label}
                  </Typography>
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
                    {step.icon}
                  </Box>
                  <Typography variant="subtitle1" fontWeight={700}>
                    {step.title}
                  </Typography>
                  <Typography variant="body2" sx={{ opacity: 0.9 }}>
                    {step.desc}
                  </Typography>
                  <Chip
                    label={step.chip}
                    size="small"
                    variant="outlined"
                    sx={{ alignSelf: "flex-start", mt: 1 }}
                  />
                  <Typography
                    variant="body2"
                    sx={{ opacity: 0.85, mt: 0.5, fontSize: "0.85rem" }}
                  >
                    {step.extra}
                  </Typography>
                </Stack>
              </MotionPaper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default FMCustInsightsSection;
